class Mutations::UpdateSignupBucket < Mutations::BaseMutation
  field :signup, Types::SignupType, null: false

  argument :id, Integer, required: true
  argument :bucket_key, String, required: true, camelize: false

  load_and_authorize_convention_associated_model :signups, :id, :update_bucket

  def resolve(**args)
    if signup.run.bucket_full?(args[:bucket_key]) && signup.counted?
      raise 'The selected bucket is full.'
    end

    original_bucket_key = signup.bucket_key
    signup.update!(bucket_key: args[:bucket_key])

    if signup.bucket_key_previously_changed? && signup.counted? && original_bucket_key
      EventVacancyFillService.new(signup.run, original_bucket_key).call!
    end

    { signup: signup.reload }
  end
end
