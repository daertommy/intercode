# frozen_string_literal: true
class MySignupsLoader < GraphQL::Batch::Loader
  attr_reader :user_con_profile

  def initialize(user_con_profile)
    @user_con_profile = user_con_profile
  end

  def perform(keys)
    signup_scope = user_con_profile.signups.where(run_id: keys.map(&:id))
    signups_by_run_id = signup_scope.to_a.group_by(&:run_id)
    keys.each { |run| fulfill(run, signups_by_run_id[run.id] || []) }
  end
end
