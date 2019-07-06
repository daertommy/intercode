module Ability::OrganizationPermissions
  def add_organization_permission_abilities
    readable_convention_users = User.where(
      id: UserConProfile.where(
        convention_id: conventions_with_organization_permission('read_convention_users').select(:id)
      )
    )

    scope_authorization :read, User, readable_convention_users do |user|
      user.user_con_profiles.where(
        convention_id: conventions_with_organization_permission('read_convention_users').select(:id)
      ).any?
    end
  end

  private

  def organizations_with_permission(permission)
    Organization.where(
      id: user_organization_roles_with_permission(permission).select(:organization_id)
    )
  end

  def user_organization_roles_with_permission(permission)
    OrganizationRole.where(
      id: user_permission_scope.where(permission: permission)
        .where.not(organization_role_id: nil)
        .select(:organization_role_id)
    )
  end

  def conventions_with_organization_permission(permission)
    Convention.where(
      organization_id: user_organization_roles_with_permission(permission).select(:organization_id)
    )
  end
end
