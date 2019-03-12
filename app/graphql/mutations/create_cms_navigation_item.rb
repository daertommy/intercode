class Mutations::CreateCmsNavigationItem < Mutations::BaseMutation
  field :cms_navigation_item, Types::CmsNavigationItemType, null: false

  argument :cms_navigation_item, Types::CmsNavigationItemInputType, required: true, camelize: false

  def resolve(**args)
    cms_navigation_item = CmsNavigationItem
      .create!(args[:cms_navigation_item].to_h.merge(parent: convention))
    { cms_navigation_item: cms_navigation_item }
  end
end
