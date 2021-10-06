# frozen_string_literal: true
class Mutations::UpdateCmsNavigationItem < Mutations::BaseMutation
  field :cms_navigation_item, Types::CmsNavigationItemType, null: false

  argument :id,
           Integer,
           deprecation_reason:
             "IDs are transitioning to the ID type.  For the moment, please use the transitionalId field until \
all id fields are replaced with ones of type ID.",
           required: false
  argument :transitional_id, ID, required: false, camelize: true
  argument :cms_navigation_item, Types::CmsNavigationItemInputType, required: false, camelize: false

  load_and_authorize_cms_model :cms_navigation_items, :id, :update

  def resolve(**args)
    cms_navigation_item.update!(args[:cms_navigation_item].to_h)
    { cms_navigation_item: cms_navigation_item }
  end
end
