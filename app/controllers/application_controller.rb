class ApplicationController < ActionController::Base
  include Cadmus::Renderable
  helper_method :cadmus_renderer

  # Turn on Rails' built-in CSRF protection (see
  # http://guides.rubyonrails.org/security.html#cross-site-request-forgery-csrf)
  skip_forgery_protection if: :doorkeeper_token unless Rails.env.test?

  # CanCan's built-in nag filter that will throw an error if no authorization check was performed.
  # Only enabled for non-production environments.  To disable, do this in a controller:
  # skip_authorization_check
  check_authorization unless: :devise_or_doorkeeper_controller?

  # Make Devise work with Rails 4 strong parameters.  See the method below for details.
  before_action :configure_permitted_parameters, if: :devise_controller?

  # If we're in a convention, use the convention's timezone.
  around_action :use_convention_timezone

  # Make sure assumed identities stay on the domain they're supposed to be on
  before_action :ensure_assumed_identity_matches_convention

  # Make the user create their profile for this con if they haven't got one
  before_action :ensure_user_con_profile_exists, unless: :devise_controller?

  before_action :preload_cms_layout_content

  # Working around an issue where if the CSRF token expires and the user hits the back button,
  # they could have the wrong token in their browser cache
  before_action :no_cache

  # Defines what to do if the current user doesn't have access to the page they're
  # trying to view.  In this case we'll either redirect to a login screen if they're not
  # logged in, or throw them back to the root URL with an error if they are.
  rescue_from CanCan::AccessDenied do |error|
    Rails.logger.warn(error.message)

    if user_signed_in?
      redirect_to root_url, alert: error.message
    else
      session[:user_return_to] = request.url
      redirect_to new_user_session_url, alert: 'Please log in to view this page.'
    end
  end

  protected

  def current_ability
    @current_ability ||= Ability.new(current_user, doorkeeper_token)
  end

  # Returns the appropriate Convention object for the domain name of the request.  This relies on
  # the Intercode::FindVirtualHost Rack middleware having already run, since it sets the key
  # "intercode.convention" inside the Rack environment.
  def convention
    @convention ||= request.env['intercode.convention']
  end
  helper_method :convention

  def user_con_profile
    return unless convention && user_signed_in?
    @user_con_profile ||= convention.user_con_profiles.find_by(user_id: current_user.id)
  end
  helper_method :user_con_profile

  def assumed_identity_from_profile
    return unless session[:assumed_identity_from_profile_id]
    @assumed_identity_from_profile ||= UserConProfile.find(
      session[:assumed_identity_from_profile_id]
    )
  end
  helper_method :assumed_identity_from_profile

  def current_pending_order
    return unless user_con_profile

    @current_pending_order ||= begin
      pending_orders = user_con_profile.orders.pending.to_a
      return unless pending_orders.any?

      if pending_orders.size > 1
        # combine orders into one cart
        first_order = pending_orders.pop
        OrderEntry.where(order_id: pending_orders.map(&:id)).update_all(order_id: first_order.id)
        pending_orders.destroy_all
        first_order.reload
      else
        pending_orders.first
      end
    end
  end
  helper_method :current_pending_order

  def use_convention_timezone(&block)
    timezone = convention&.timezone

    if timezone
      Time.use_zone(timezone, &block)
    else
      yield
    end
  end

  # These variables will automatically be made available to Cadmus CMS content.  For
  # example, you'll be able to do {{ user.name }} in a page template.
  def liquid_assigns
    cms_variables.merge(
      'user' => current_user,
      'convention' => convention,
      'user_con_profile' => user_con_profile
    )
  end

  # These variables aren't available from Cadmus CMS templates, but are available to
  # custom Liquid filters and tags via the Liquid::Context object.  Exposing the
  # controller is useful for generating URLs in templates.
  def liquid_registers
    liquid_assigns.merge(
      'controller' => self,
      :cached_partials => @cached_partials,
      :cached_files => @cached_files,
      :file_system => Cadmus::PartialFileSystem.new(convention)
    )
  end

  def cms_variables
    return {} unless convention
    convention.cms_variables.each_with_object({}) do |cms_variable, hash|
      hash[cms_variable.key.to_s] = cms_variable
    end
  end

  # Devise is going to do some operations in its controllers that require writing to a
  # User object in the database.  For example, it handles the signup and forgot password
  # forms itself.  So, it needs to know about any special parameters we added onto those
  # forms so that Rails' strong parameters feature won't prevent those from going through.
  #
  # This is where we list all those parameters.  Right now, I've only added ones for
  # the sign_up action, because that's the only place we customized the form, but we might
  # need to add more later if we customize the other Devise forms too.
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) do |user|
      user.permit(:email, :password, :password_confirmation, :remember_me, :first_name, :last_name)
    end
    devise_parameter_sanitizer.permit(:account_update) do |user|
      user.permit(:email, :password, :password_confirmation, :current_password, :first_name, :last_name)
    end
  end

  def after_sign_in_path_for(resource)
    if convention && convention.user_con_profiles.where(user_id: resource.id).none?
      return new_my_profile_path
    end

    if session[:user_return_to]
      session[:user_return_to]
    else
      root_path
    end
  end

  def ensure_user_con_profile_exists
    return unless convention && user_signed_in?
    return if user_con_profile

    redirect_to new_my_profile_path, notice: "Welcome to #{convention.name}!  You haven't signed \
into this convention before, so please take a moment to update your profile."
  end

  def ensure_assumed_identity_matches_convention
    return unless assumed_identity_from_profile
    return if assumed_identity_from_profile.convention == convention

    domain = assumed_identity_from_profile.convention.domain
    domain << ":#{request.port}"

    redirect_to "#{request.protocol}#{domain}#{request.path}", alert: "You used \"become user\" \
on the #{assumed_identity_from_profile.convention.name} site to assume the identity of \
#{current_user.name} for this session.  In order to visit other conventions' \
sites, please use the \"Revert to #{assumed_identity_from_profile.name}\" option above."
  end

  def no_cache
    response.headers['Cache-Control'] = 'no-cache, no-store, max-age=0, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = 'Fri, 01 Jan 1990 00:00:00 GMT'
  end

  def devise_or_doorkeeper_controller?
    return true if devise_controller?
    return true if self.class.name =~ /\ADoorkeeper::/
    false
  end

  def preload_cms_layout_content(cms_layout = nil)
    cms_layout ||= convention&.default_layout
    return unless convention&.default_layout

    @cached_partials ||= {}
    @cached_partials.update(
      cms_layout.cms_partials.index_by(&:name).transform_values(&:liquid_template)
    )

    @cached_files ||= {}
    @cached_files.update(cms_layout.cms_files.index_by(&:filename))
  end
end
