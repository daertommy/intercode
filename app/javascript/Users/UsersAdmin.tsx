import { Switch, Route, useParams } from 'react-router-dom';
import { LoadingIndicator } from '@neinteractiveliterature/litform';

import UsersTable from './UsersTable';
import UserAdminDisplay from './UserAdminDisplay';
import BreadcrumbItem from '../Breadcrumbs/BreadcrumbItem';
import RouteActivatedBreadcrumbItem from '../Breadcrumbs/RouteActivatedBreadcrumbItem';
import useAuthorizationRequired from '../Authentication/useAuthorizationRequired';
import { useUserAdminQuery } from './queries.generated';

function UserBreadcrumbItem() {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useUserAdminQuery({ variables: { id } });

  if (loading) {
    return (
      <BreadcrumbItem active to={`/users/${id}`}>
        <LoadingIndicator iconSet="bootstrap-icons" />
      </BreadcrumbItem>
    );
  }

  if (error || !data) {
    return null;
  }

  return (
    <BreadcrumbItem active to={`/users/${id}`}>
      {data.user.name}
    </BreadcrumbItem>
  );
}

function UsersAdmin(): JSX.Element {
  const authorizationWarning = useAuthorizationRequired('can_read_users');
  if (authorizationWarning) return authorizationWarning;

  return (
    <>
      <ol className="breadcrumb">
        <RouteActivatedBreadcrumbItem matchProps={{ path: '/users', exact: true }} to="/users">
          Users
        </RouteActivatedBreadcrumbItem>

        <Route path="/users/:id">
          <UserBreadcrumbItem />
        </Route>
      </ol>

      <Switch>
        <Route path="/users/:id">
          <UserAdminDisplay />
        </Route>
        <Route path="/users">
          <UsersTable />
        </Route>
      </Switch>
    </>
  );
}

export default UsersAdmin;