# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :signup do
    run
    bucket_key nil
    updated_by nil
  end
end
