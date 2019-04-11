import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { CreateStaffPosition } from './mutations.gql';
import ErrorDisplay from '../ErrorDisplay';
import StaffPositionForm from './StaffPositionForm';
import { StaffPositionsQuery } from './queries.gql';
import useMutationCallback from '../useMutationCallback';
import useAsyncFunction from '../useAsyncFunction';

function NewStaffPosition({ history }) {
  const [mutate, error, inProgress] = useAsyncFunction(useMutationCallback(CreateStaffPosition, {
    update: (proxy, { data: { createStaffPosition: { staff_position: newStaffPosition } } }) => {
      const data = proxy.readQuery({ query: StaffPositionsQuery });
      data.convention.staff_positions.push(newStaffPosition);
      proxy.writeQuery({ query: StaffPositionsQuery, data });
    },
  }));

  const [staffPosition, setStaffPosition] = useState({
    name: '',
    email: '',
    user_con_profiles: [],
  });

  const saveClicked = useCallback(
    async () => {
      const response = await mutate({
        variables: {
          input: {
            staff_position: {
              name: staffPosition.name,
              email: staffPosition.email,
              visible: staffPosition.visible,
              user_con_profile_ids: staffPosition.user_con_profiles.map((
                userConProfile => userConProfile.id
              )),
            },
          },
        },
      });
      history.replace(`/${response.data.createStaffPosition.staff_position.id}/edit_permissions`);
    },
    [history, mutate, staffPosition],
  );

  return (
    <div>
      <h1 className="mb-4">New staff position</h1>
      <StaffPositionForm
        staffPosition={staffPosition}
        onChange={setStaffPosition}
      />
      <ErrorDisplay graphQLError={error} />
      <button type="button" className="btn btn-primary" onClick={saveClicked} disabled={inProgress}>
        Save
      </button>
    </div>
  );
}

NewStaffPosition.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(NewStaffPosition);
