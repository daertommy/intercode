class Mutations::CreateUserSignup < Mutations::BaseMutation
  field :signup, Types::SignupType, null: false

  argument :run_id, Int, required: true, camelize: false
  argument :user_con_profile_id, Int, required: true, camelize: false
  argument :requested_bucket_key, String, required: false, camelize: false
  argument :no_requested_bucket, Boolean, required: false, camelize: false
  argument :suppress_notifications, Boolean, required: false, camelize: false

  attr_reader :run, :signup_user_con_profile

  def authorized?(args)
    @run = convention.runs.find(args[:run_id])
    @signup_user_con_profile = convention.user_con_profiles.find(args[:user_con_profile_id])
    policy(Signup.new(run: run, user_con_profile: signup_user_con_profile)).create?
  end

  def resolve(**args)
    should_have_requested_bucket_key = args[:no_requested_bucket].blank?
    if should_have_requested_bucket_key && !args[:requested_bucket_key]
      raise GraphQL::ExecutionError,
        'Bad request: signups must either request a bucket or specify that no bucket is requested.'
    end

    result = EventSignupService.new(
      signup_user_con_profile,
      run,
      should_have_requested_bucket_key ? args[:requested_bucket_key] : nil,
      context[:current_user],
      suppress_notifications: args[:suppress_notifications],
      allow_non_self_service_signups: true
    ).call

    if result.failure?
      raise GraphQL::ExecutionError, result.errors.full_messages.join(', ')
    end

    { signup: result.signup }
  end
end
