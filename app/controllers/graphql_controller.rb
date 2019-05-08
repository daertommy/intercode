class GraphqlController < ApplicationController
  class Context
    METHODS = {
      current_user: :current_user,
      current_ability: :current_ability,
      user_con_profile: :user_con_profile,
      convention: :convention,
      cms_rendering_context: :cms_rendering_context,
      cadmus_renderer: :cadmus_renderer,
      current_pending_order: :current_pending_order,
      assumed_identity_from_profile: :assumed_identity_from_profile,
      verified_request: :verified_request?
    }.transform_values { |method_name| GraphqlController.instance_method(method_name) }

    def initialize(controller, **values)
      @controller = controller
      @values = values
    end

    def [](key)
      key = key.to_sym
      if METHODS.key?(key)
        @values[key] ||= METHODS[key].bind(@controller).call
        @values[key]
      else
        @values[key]
      end
    end

    def fetch(key, default = nil)
      raise KeyError unless default || @values.key?(key) || METHODS.key?(key)
      self[key] || default
    end

    def []=(key, value)
      @values[key] = value
    end
  end

  skip_authorization_check
  skip_before_action :verify_authenticity_token # We're doing this in MutationType's guard instead
  skip_before_action :preload_cms_layout_content
  skip_before_action :ensure_user_con_profile_exists
  skip_before_action :ensure_clickwrap_agreement_accepted

  def execute
    ActiveRecord::Base.transaction do
      result = execute_from_params(params)
      render json: result

      raise ActiveRecord::Rollback if result['errors'].present?
    end
  end

  private

  def execute_from_params(params)
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]

    IntercodeSchema.execute(
      query,
      variables: variables,
      context: Context.new(self),
      operation_name: operation_name
    )
  end

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end
end
