# Adapted from https://stackoverflow.com/questions/4060333/what-does-rails-3-session-store-domain-all-really-do
module Intercode
  class DynamicCookieDomain
    def initialize(app)
      @app = app
    end

    def call(env)
      env['rack.session.options'][:domain] = cookie_domain(env)
      @app.call(env)
    end

    def app_level_domain(host)
      levels = if host =~ /herokuapp\.com\z/
        3
      else
        2
      end

      host.split('.').reverse.take(levels).reverse.join('.')
    end

    def cookie_domain(env)
      host = env['HTTP_HOST']&.split(':')&.first
      return :all unless host

      # Safari blocks cross-domain cookies on .test domains :(
      if host =~ /\.test$/
        user_agent = env['HTTP_USER_AGENT']
        if user_agent.present?
          client = DeviceDetector.new(user_agent)
          return host if client.name == 'Safari'
        end
      end

      app_level_host = app_level_domain(host)
      if app_level_host.include?('.')
        app_level_host
      else
        :all
      end
    end
  end
end
