import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  LoadQueryWrapper,
  ErrorDisplay,
  useConfirm,
  useDeleteMutationWithReferenceArrayUpdater,
} from '@neinteractiveliterature/litform';
import capitalize from 'lodash/capitalize';

import sortTicketTypes from './sortTicketTypes';
import usePageTitle from '../usePageTitle';
import { describeAdminPricingStructure } from '../Store/describePricingStructure';
import { AdminTicketTypesQueryData, useAdminTicketTypesQuery } from './queries.generated';
import { useDeleteTicketTypeMutation } from './mutations.generated';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

type TicketTypeType = AdminTicketTypesQueryData['convention']['ticket_types'][0];

function cardClassForTicketType(ticketType: TicketTypeType) {
  if (ticketType.providing_products.filter((product) => product.available).length > 0) {
    return '';
  }

  if (ticketType.maximum_event_provided_tickets > 0) {
    return 'bg-success text-white';
  }

  return 'bg-dark text-white';
}

function describeTicketTypeOptions(
  ticketType: TicketTypeType,
  ticketName: string,
  ticketNamePlural: string,
  t: TFunction,
) {
  let eventProvidedDescription;
  if (ticketType.maximum_event_provided_tickets > 0) {
    eventProvidedDescription = t(
      'admin.ticketTypes.eventProvidedDescription',
      'events can provide up to {{ count }} {{ ticketName }}',
      {
        count: ticketType.maximum_event_provided_tickets,
        ticketName: ticketType.maximum_event_provided_tickets === 1 ? ticketName : ticketNamePlural,
      },
    );
  }

  if (eventProvidedDescription != null) {
    return capitalize(eventProvidedDescription);
  }

  return null;
}

export default LoadQueryWrapper(useAdminTicketTypesQuery, function TicketTypesList({ data }) {
  usePageTitle(`${capitalize(data.convention.ticket_name)} types`);

  const { t } = useTranslation();
  const confirm = useConfirm();
  const [deleteTicketType] = useDeleteMutationWithReferenceArrayUpdater(
    useDeleteTicketTypeMutation,
    data.convention,
    'ticket_types',
    (ticketType) => ({ input: { id: ticketType.id } }),
  );

  const renderTicketTypeDisplay = (ticketType: TicketTypeType) => (
    <div className={`card my-4 overflow-hidden ${cardClassForTicketType(ticketType)}`} key={ticketType.id}>
      <div className="card-header">
        <div className="row">
          <div className="col-md-8">
            <strong>{ticketType.description}</strong>
            <code> ({ticketType.name})</code>
          </div>
          <div className="col-md-4 text-end">
            <button
              type="button"
              className="btn btn-danger btn-sm mx-1"
              onClick={() =>
                confirm({
                  prompt: `Are you sure you want to delete the ticket type “${ticketType.description}”?`,
                  action: () => deleteTicketType(ticketType),
                  renderError: (error) => <ErrorDisplay graphQLError={error} />,
                })
              }
            >
              <i className="bi-trash me-1" />
              Delete
            </button>
            <Link to={`/ticket_types/${ticketType.id}/edit`} className="btn btn-secondary btn-sm mx-1">
              <i className="bi-pencil-square me-1" />
              Edit
            </Link>
          </div>
        </div>

        <div className="small font-italic">
          {describeTicketTypeOptions(ticketType, data.convention.ticket_name, data.convention.ticketNamePlural, t)}
          {!ticketType.counts_towards_convention_maximum && <div>Does not count towards convention maximum</div>}
          {!ticketType.allows_event_signups && <div>Does not allow event signups</div>}
        </div>
      </div>

      <div className="card-body bg-white text-body">
        <p>
          <strong>Providing products:</strong>
        </p>
        {ticketType.providing_products.length > 0 ? (
          <ul className="list-unstyled mb-0">
            {ticketType.providing_products.map((product) => (
              <li key={product.id}>
                <Link to={`/admin_store/products#product-${product.id}`}>{product.name}</Link>{' '}
                {product.available ? '(available for purchase)' : '(not available for purchase)'} &mdash;{' '}
                {describeAdminPricingStructure(product.pricing_structure, t)}
              </li>
            ))}
          </ul>
        ) : (
          `No products provide this ${data.convention.ticket_name} type`
        )}
      </div>
    </div>
  );

  const sortedTicketTypes = useMemo(
    () => sortTicketTypes(data.convention.ticket_types),
    [data.convention.ticket_types],
  );

  return (
    <div>
      <h1 className="mb-4">{capitalize(data.convention.ticket_name)} types</h1>

      {sortedTicketTypes.map(renderTicketTypeDisplay)}

      <Link to="/ticket_types/new" className="btn btn-primary">
        New {data.convention.ticket_name} type
      </Link>
    </div>
  );
});