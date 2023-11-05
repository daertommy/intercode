# rubocop:disable Layout/LineLength, Lint/RedundantCopDisableDirective
# == Schema Information
#
# Table name: runs
#
#  id               :bigint           not null, primary key
#  schedule_note    :text
#  starts_at        :datetime         not null
#  timespan_tsrange :tsrange          not null
#  title_suffix     :string
#  created_at       :datetime
#  updated_at       :datetime
#  event_id         :bigint           not null
#  updated_by_id    :bigint
#
# Indexes
#
#  index_runs_on_event_id          (event_id)
#  index_runs_on_timespan_tsrange  (timespan_tsrange) USING gist
#  index_runs_on_updated_by_id     (updated_by_id)
#
# Foreign Keys
#
#  fk_rails_...  (event_id => events.id)
#  fk_rails_...  (updated_by_id => users.id)
#
# rubocop:enable Layout/LineLength, Lint/RedundantCopDisableDirective
require 'test_helper'

class RunTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
