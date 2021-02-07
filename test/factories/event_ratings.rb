# == Schema Information
#
# Table name: event_ratings
#
#  id                  :bigint           not null, primary key
#  rating              :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  event_id            :bigint           not null
#  user_con_profile_id :bigint           not null
#
# Indexes
#
#  index_event_ratings_on_event_id                          (event_id)
#  index_event_ratings_on_user_con_profile_id               (user_con_profile_id)
#  index_event_ratings_on_user_con_profile_id_and_event_id  (user_con_profile_id,event_id) UNIQUE
#
FactoryBot.define do
  factory :event_rating do
    event

    after(:build) do |event_rating|
      event_rating.user_con_profile ||= create(:user_con_profile, convention: event_rating.event.convention)
    end
  end
end
