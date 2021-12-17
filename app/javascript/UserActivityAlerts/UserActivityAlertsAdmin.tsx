import { Routes, Route } from 'react-router-dom';

import EditUserActivityAlert from './EditUserActivityAlert';
import NewUserActivityAlert from './NewUserActivityAlert';
import UserActivityAlertsList from './UserActivityAlertsList';
import BreadcrumbItem from '../Breadcrumbs/BreadcrumbItem';
import RouteActivatedBreadcrumbItem from '../Breadcrumbs/RouteActivatedBreadcrumbItem';
import useAuthorizationRequired from '../Authentication/useAuthorizationRequired';

function UserActivityAlertsAdmin(): JSX.Element {
  const authorizationWarning = useAuthorizationRequired('can_read_user_activity_alerts');
  if (authorizationWarning) return authorizationWarning;

  return (
    <>
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <RouteActivatedBreadcrumbItem
            pattern={{ path: '/user_activity_alerts', end: true }}
            to="/user_activity_alerts"
          >
            User activity alerts
          </RouteActivatedBreadcrumbItem>

          <Route path="/user_activity_alerts/new">
            <BreadcrumbItem active>Create</BreadcrumbItem>
          </Route>

          <Route path="/user_activity_alerts/:id/edit">
            <BreadcrumbItem active>Edit</BreadcrumbItem>
          </Route>
        </ol>
      </nav>

      <Routes>
        <Route path="/user_activity_alerts/new" element={<NewUserActivityAlert />} />
        <Route path="/user_activity_alerts/:id/edit" element={<EditUserActivityAlert />} />
        <Route path="/user_activity_alerts" element={<UserActivityAlertsList />} />
      </Routes>
    </>
  );
}

export default UserActivityAlertsAdmin;
