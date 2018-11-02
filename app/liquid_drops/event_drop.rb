# An event in a convention.  Events can have one or more runs, depending on their category.
class EventDrop < Liquid::Drop
  include Rails.application.routes.url_helpers

  # @api
  attr_reader :event

  # @!method id
  #   @return [Integer] The numeric database id of the event
  # @!method title
  #   @return [String] The title of the event
  # @!method team_member_name
  #   @return [String] The name to use for "team members" in this event (e.g. "GM", "panelist")
  # @!method event_proposal
  #   @return [EventProposalDrop] The proposal associated with this event, if this event went
  #                               through the proposal process
  # @!method author
  #   @return [String] The author of this event
  # @!method organization
  #   @return [String] The organization running this event
  # @!method email
  #   @return [String] The contact email address for this event
  # @!method category
  #   @return [String] The category key of the event (e.g. "larp", "party", "tabletop_rpg")
  delegate :id, :title, :team_member_name, :event_proposal, :author, :organization,
    :email, :category, to: :event

  # @api
  def initialize(event)
    @event = event
  end

  # @return [Array<UserConProfileDrop>] The UserConProfiles of this event's team members
  def team_member_user_con_profiles
    event.team_members.map(&:user_con_profile)
  end

  # @return [String] The relative URL to use for linking to this event on this site
  def url
    event_path(event)
  end

  # @return [String] The external URL for this event, if its team provided one
  def homepage_url
    event.url
  end

  # @!method description
  #   @return [String] The description of this event, rendered to HTML
  # @!method content_warnings
  #   @return [String] The content warnings for this event, rendered to HTML
  # @!method age_restrictions
  #   @return [String] The age restrictions for this event, rendered to HTML
  # @!method participant_communications
  #   @return [String] The participant communication info for this event, rendered to HTML
  # @!method short_blurb
  #   @return [String] The short blurb for this event, rendered to HTML
  %w[
    description
    content_warnings
    age_restrictions
    participant_communications
    short_blurb
  ].each do |field|
    define_method field do
      markdown = event.public_send(field)
      return nil unless markdown
      MarkdownPresenter.new('').render(markdown)
    end
  end
end
