require 'intercode/virtual_host_constraint'

Intercode::Application.routes.draw do
  use_doorkeeper_openid_connect
  use_doorkeeper
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql' if Rails.env.development?

  post '/graphql', to: 'graphql#execute'
  devise_for :users, controllers: {
    passwords: 'passwords',
    registrations: 'registrations',
    sessions: 'sessions'
  }

  # CMS stuff
  get 'pages/*page_glob' => 'pages#show', as: :page
  get 'cms_pages/(*extra)' => 'cms_admin#index', as: :cms_pages
  get 'cms_partials/(*extra)' => 'cms_admin#index', as: :cms_partials
  get 'cms_files/(*extra)' => 'cms_admin#index', as: :cms_files
  get 'cms_layouts/(*extra)' => 'cms_admin#index', as: :cms_layouts
  get 'cms_graphql_queries/(*extra)' => 'cms_admin#index', as: :cms_graphql_queries
  get 'cms_navigation_items/(*extra)' => 'cms_admin#index', as: :cms_navigation_items
  get 'cms_variables/(*extra)' => 'cms_admin#index', as: :cms_variables
  get 'liquid_docs/(*extra)' => 'liquid_docs#show', as: :liquid_docs

  # All of these pages must be within the virtual host
  constraints(Intercode::VirtualHostConstraint.new) do
    resource :convention, only: [:edit]

    get 'ticket/(*extra)' => 'tickets#show', as: :ticket
    get 'ticket_types/(*extra)' => 'ticket_types#index', as: :ticket_types

    resources :events, only: [] do
      resources :runs, only: [] do
        get 'admin_signups/export' => 'admin_signups#export', as: :export_admin_signups
      end
    end
    get 'events/:id/(*extra)' => 'events#show', as: :event, constraints: { id: /\d+(-[a-z0-9\-]*)?/ }
    get 'events/(*extra)' => 'events#index', as: :events

    get 'event_categories/(*extra)' => 'event_categories#index', as: :event_categories
    get 'admin_events/(*extra)' => 'admin_events#index', as: :admin_events

    resources :event_proposals, except: [:update]
    get(
      'admin_event_proposals/export' => 'admin_event_proposals#export',
      as: :export_admin_event_proposals
    )
    get(
      'admin_event_proposals/(*extra)' => 'admin_event_proposals#index',
      as: :admin_event_proposals
    )

    resources :products, only: [:show]
    resource :cart, only: [:show]
    resource :order_history, only: [:show]
    get 'admin_store/orders/export' => 'admin_orders#export', as: :export_admin_orders
    get 'admin_store/(*extra)' => 'admin_store#index', as: :admin_store

    resources :user_con_profiles, only: [:index] do
      collection do
        get :export
        post :revert_become
      end

      member do
        post :become
      end
    end
    get 'user_con_profiles/(*extra)' => 'user_con_profiles#index'
    get 'my_profile/new' => 'my_profiles#new', as: :new_my_profile
    get 'my_profile/edit' => 'my_profiles#show', as: :edit_my_profile # yes, really, show
    get 'my_profile/(*extra)' => 'my_profiles#show', as: :my_profile

    get 'reports' => 'reports#index'
    namespace :reports do
      get :attendance_by_payment_amount
      get :event_provided_tickets
      get :events_by_choice
      get :events_by_time
      get :per_event
      get :per_user
      get :per_room
      get :signup_spy
      get 'user_con_profiles/:user_con_profile_id' => :single_user_printable
      get :volunteer_events
    end

    get 'mailing_lists/(*extra)' => 'mailing_lists#index', as: :mailing_lists

    resources :rooms, only: [:index]
    resource :clickwrap_agreement, only: [:show] do
      post :accept
    end

    get 'user_activity_alerts/(*extra)' => 'user_activity_alerts#index', as: :user_activity_alerts

    get 'staff_positions/(*extra)' => 'staff_positions#index', as: :staff_positions
    get 'admin_forms/(*extra)' => 'admin_forms#index', as: :admin_forms

    get 'calendars/user_schedule/:id' => 'calendars#user_schedule', as: :user_schedule
  end

  # the following routes apply only when we're not in a virtual host
  resource :root_site, only: [:show]
  get 'organizations/(*extra)' => 'organizations#index', as: :organizations
  get 'users/export' => 'users#export', as: :export_users
  get 'users/(*extra)' => 'users#index', as: :users
  root to: 'pages#root'
end
