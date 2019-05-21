import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DeletePage } from '../CmsAdmin/CmsPagesAdmin/mutations.gql';
import ErrorDisplay from '../ErrorDisplay';
import PopperDropdown from '../UIComponents/PopperDropdown';
import { useConfirm } from '../ModalDialogs/Confirm';
import useMutationCallback from '../useMutationCallback';

function PageAdminDropdown({ showDelete, pageId, history }) {
  const confirm = useConfirm();
  const deletePage = useMutationCallback(DeletePage);

  const deleteConfirmed = useCallback(
    async () => {
      await deletePage({ variables: { id: pageId } });
      history.replace('/cms_pages');
    },
    [deletePage, pageId, history],
  );

  return (
    <div>
      <PopperDropdown
        renderReference={({ ref, toggle }) => (
          <button type="button" className="btn btn-dark dropdown-toggle" ref={ref} onClick={toggle}>
            <i className="fa fa-pencil-square-o">
              <span className="sr-only">
                Admin options
              </span>
            </i>
          </button>
        )}
        placement="bottom-end"
      >
        <Link to={`/cms_pages/${pageId}/edit`} className="dropdown-item">Edit page</Link>
        <Link to="/cms_pages" className="dropdown-item">View all pages</Link>
        {
          showDelete ? (
            <button
              className="dropdown-item text-danger"
              onClick={() => confirm({
                action: deleteConfirmed,
                prompt: 'Are you sure you want to delete this page?',
                renderError: error => <ErrorDisplay graphQLError={error} />,
              })}
              type="button"
            >
              Delete page
            </button>
          ) : null
        }
      </PopperDropdown>
    </div>
  );
}

PageAdminDropdown.propTypes = {
  showDelete: PropTypes.bool.isRequired,
  pageId: PropTypes.number.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default PageAdminDropdown;
