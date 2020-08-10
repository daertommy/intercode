import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link, Route, useHistory } from 'react-router-dom';
import { humanize } from 'inflected';
import moment from 'moment-timezone';
import ReactTable, { Column, RowInfo, Filter } from 'react-table';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

import AddAttendeeModal from './AddAttendeeModal';
import BooleanCell from '../Tables/BooleanCell';
import BooleanChoiceSetFilter from '../Tables/BooleanChoiceSetFilter';
import { buildFieldFilterCodecs, FilterCodecs } from '../Tables/FilterUtils';
import ChoiceSetFilter from '../Tables/ChoiceSetFilter';
import EmailCell from '../Tables/EmailCell';
import formatMoney from '../formatMoney';
import FormItemDisplay from '../FormPresenter/ItemDisplays/FormItemDisplay';
import FreeTextFilter from '../Tables/FreeTextFilter';
import useReactTableWithTheWorks, {
  createQueryDataContext,
} from '../Tables/useReactTableWithTheWorks';
import TableHeader from '../Tables/TableHeader';
import { UserConProfilesTableUserConProfilesQuery } from './queries';
import UserConProfileWithGravatarCell from '../Tables/UserConProfileWithGravatarCell';
import {
  UserConProfilesTableUserConProfilesQueryQuery,
  UserConProfilesTableUserConProfilesQueryQueryVariables,
} from './queries.generated';
import { TypedFormItem } from '../FormAdmin/FormItemUtils';
import { getSortedParsedFormItems } from '../Models/Form';

type UserConProfilesTableRow = NonNullable<
  UserConProfilesTableUserConProfilesQueryQuery['convention']
>['user_con_profiles_paginated']['entries'][0];

type UserConProfilesTableFormItem = NonNullable<
  UserConProfilesTableUserConProfilesQueryQuery['convention']
>['user_con_profile_form']['form_sections'][0]['form_items'][0];

const UserConProfilesTableQueryDataContext = createQueryDataContext<
  UserConProfilesTableUserConProfilesQueryQuery
>();

const { encodeFilterValue, decodeFilterValue } = buildFieldFilterCodecs({
  ticket: FilterCodecs.stringArray,
  ticket_type: FilterCodecs.stringArray,
  privileges: FilterCodecs.stringArray,
  attending: FilterCodecs.boolean,
  is_team_member: FilterCodecs.boolean,
  payment_amount: FilterCodecs.float,
});

type TicketStatusCellProps = {
  value: UserConProfilesTableRow['ticket'];
};

function TicketStatusCell({ value }: TicketStatusCellProps) {
  const { t } = useTranslation();

  if (!value) {
    return <>{t('tables.ticketStatus.unpaid', 'Unpaid')}</>;
  }

  return <>{humanize(value.ticket_type.name)}</>;
}

type TicketPaymentAmountCellProps = {
  value: UserConProfilesTableRow['ticket'];
};

function TicketPaymentAmountCell({ value }: TicketPaymentAmountCellProps) {
  return <>{formatMoney(value?.order_entry?.price_per_item)}</>;
}

type TicketStatusWithPaymentAmountCellProps = {
  value: UserConProfilesTableRow['ticket'];
};

function TicketStatusWithPaymentAmountCell({ value }: TicketStatusWithPaymentAmountCellProps) {
  return (
    <>
      <TicketStatusCell value={value} /> <TicketPaymentAmountCell value={value} />
    </>
  );
}

const TicketTypeFilter = ({ filter, onChange }) => {
  const { t } = useTranslation();
  const data = useContext(UserConProfilesTableQueryDataContext);
  const choices = useMemo(
    () =>
      data
        ? [
            { label: t('tables.ticketStatus.unpaid', 'Unpaid'), value: 'none' },
            ...data.convention!.ticket_types.map((ticketType) => ({
              label: humanize(ticketType.name),
              value: ticketType.id.toString(),
            })),
          ]
        : [],
    [data, t],
  );

  return <ChoiceSetFilter choices={choices} onChange={onChange} filter={filter} multiple />;
};

TicketTypeFilter.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};

TicketTypeFilter.defaultProps = {
  filter: null,
};

const privilegeNames = {
  site_admin: (t: TFunction) => t('tables.privileges.siteAdmin', 'Global admin'),
};

type PrivilegesCellProps = {
  value: (keyof typeof privilegeNames)[];
};

const PrivilegesCell = ({ value }: PrivilegesCellProps) => {
  const { t } = useTranslation();
  const privsString = [...value]
    .map((priv) => privilegeNames[priv](t))
    .sort()
    .join(', ');

  return <>{privsString}</>;
};

type PrivilegesFilterProps = {
  filter: Filter;
  onChange: (value: string[]) => void;
};

const PrivilegesFilter = ({ filter, onChange }: PrivilegesFilterProps) => (
  <ChoiceSetFilter
    choices={[{ label: 'Global admin', value: 'site_admin' }]}
    onChange={onChange}
    filter={filter}
    multiple
  />
);

const getPossibleColumns = (
  data: UserConProfilesTableUserConProfilesQueryQuery,
  t: TFunction,
  formItems: TypedFormItem[],
) => {
  const columns: Column[] = [
    {
      Header: t('admin.userConProfiles.id', 'ID'),
      id: 'id',
      accessor: 'id',
      filterable: false,
      sortable: false,
      width: 70,
    },
    {
      Header: t('admin.userConProfiles.userId', 'User ID'),
      id: 'user_id',
      accessor: (userConProfile) => userConProfile.user_id,
      filterable: false,
      sortable: false,
      width: 70,
    },
    {
      Header: t('admin.userConProfiles.name', 'Name'),
      id: 'name',
      accessor: (userConProfile) => userConProfile,
      Filter: FreeTextFilter,
      Cell: UserConProfileWithGravatarCell,
    },
    {
      Header: t('admin.userConProfiles.firstName', 'First name'),
      id: 'first_name',
      accessor: 'first_name',
      Filter: FreeTextFilter,
    },
    {
      Header: t('admin.userConProfiles.lastName', 'Last name'),
      id: 'last_name',
      accessor: 'last_name',
      Filter: FreeTextFilter,
    },
    {
      Header: t('admin.userConProfiles.email', 'Email'),
      id: 'email',
      accessor: 'email',
      Cell: EmailCell,
      Filter: FreeTextFilter,
    },
    ...(data.convention!.ticket_mode === 'disabled'
      ? []
      : [
          {
            Header: humanize(data.convention!.ticket_name || 'ticket'),
            id: 'ticket',
            accessor: 'ticket',
            width: 150,
            Cell: TicketStatusWithPaymentAmountCell,
            Filter: TicketTypeFilter,
          },
          {
            Header: t('admin.userConProfiles.ticketType', '{{ ticketName }} type', {
              ticketName: humanize(data.convention!.ticket_name || 'ticket'),
            }),
            id: 'ticket_type',
            accessor: 'ticket',
            width: 150,
            Cell: TicketStatusCell,
            Filter: TicketTypeFilter,
          },
          {
            Header: t('admin.userConProfiles.paymentAmount', 'Payment amount'),
            id: 'payment_amount',
            accessor: 'ticket',
            width: 150,
            Cell: TicketPaymentAmountCell,
            Filter: FreeTextFilter,
          },
        ]),
    {
      Header: t('admin.userConProfiles.isTeamMember', 'Event team member?'),
      id: 'is_team_member',
      accessor: (userConProfile: UserConProfilesTableRow) => userConProfile.team_members.length > 0,
      width: 150,
      sortable: false,
      Cell: BooleanCell,
      Filter: BooleanChoiceSetFilter,
    },
    {
      Header: t('admin.userConProfiles.isAttending', 'Attending?'),
      id: 'attending',
      accessor: 'ticket',
      width: 150,
      sortable: false,
      Cell: BooleanCell,
      Filter: BooleanChoiceSetFilter,
    },
    ...(data.convention!.ticket_mode === 'disabled'
      ? []
      : [
          {
            Header: t(
              'admin.userConProfiles.ticketStatusChangedAt',
              '{{ ticketName }} status changed',
              { ticketName: humanize(data.convention!.ticket_name || 'ticket') },
            ),
            id: 'ticket_updated_at',
            accessor: (userConProfile) =>
              userConProfile.ticket ? moment(userConProfile.ticket.updated_at) : null,
            filterable: false,
            Cell: ({ value }) => (value ? value.format('MMM D, YYYY H:mma') : null),
          },
        ]),
    {
      Header: t('admin.userConProfiles.privileges', 'Privileges'),
      id: 'privileges',
      accessor: 'privileges',
      // eslint-disable-next-line react/prop-types
      Cell: ({ value }) => <PrivilegesCell value={value} />,
      Filter: PrivilegesFilter,
    },
    {
      Header: t('admin.userConProfiles.orderSummary', 'Order summary'),
      id: 'order_summary',
      accessor: 'order_summary',
      filterable: false,
      sortable: false,
    },
  ];

  formItems.forEach((formItem) => {
    const { identifier } = formItem;
    if (
      !identifier ||
      identifier === 'first_name' ||
      identifier === 'last_name' ||
      columns.some((column) => column.id === identifier)
    ) {
      return;
    }

    const FormItemCell = ({ value }) => (
      <FormItemDisplay
        formItem={formItem}
        value={value}
        convention={data.convention!}
        displayMode="admin"
      />
    );

    FormItemCell.propTypes = {
      value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    };

    FormItemCell.defaultProps = {
      value: null,
    };

    columns.push({
      Header: formItem.admin_description || humanize(identifier),
      id: identifier,
      accessor: (userConProfile) => JSON.parse(userConProfile.form_response_attrs_json)[identifier],
      Cell: FormItemCell,
      sortable: false,
      filterable: false,
    });
  });

  return columns;
};

export type UserConProfilesTableProps = {
  defaultVisibleColumns?: string[];
};

function UserConProfilesTable({ defaultVisibleColumns }) {
  const { t } = useTranslation();
  const history = useHistory();
  const getPossibleColumnsWithTranslation = useMemo(
    () => (data: UserConProfilesTableUserConProfilesQueryQuery) =>
      getPossibleColumns(data, t, getSortedParsedFormItems(data.convention!.user_con_profile_form)),
    [t],
  );
  const [reactTableProps, { tableHeaderProps, queryData }] = useReactTableWithTheWorks<
    UserConProfilesTableUserConProfilesQueryQuery,
    UserConProfilesTableRow,
    UserConProfilesTableUserConProfilesQueryQueryVariables
  >({
    decodeFilterValue,
    defaultVisibleColumns,
    encodeFilterValue,
    getData: ({ data }) => data!.convention!.user_con_profiles_paginated.entries,
    getPages: ({ data }) => data!.convention!.user_con_profiles_paginated.total_pages,
    getPossibleColumns: getPossibleColumnsWithTranslation,
    query: UserConProfilesTableUserConProfilesQuery,
    storageKeyPrefix: 'userConProfiles',
  });

  return (
    <UserConProfilesTableQueryDataContext.Provider value={queryData}>
      <div className="mb-4">
        <TableHeader
          {...tableHeaderProps}
          exportUrl="/csv_exports/user_con_profiles"
          renderLeftContent={() =>
            queryData && (queryData.currentAbility || {}).can_create_user_con_profiles ? (
              <Link to="/user_con_profiles/new" className="btn btn-primary ml-2 mb-2">
                <i className="fa fa-plus" />{' '}
                {t('admin.userConProfiles.addAttendee.buttonText', 'Add attendee')}
              </Link>
            ) : null
          }
        />

        <ReactTable
          {...reactTableProps}
          className="-striped -highlight"
          getTrProps={(state: any, rowInfo: RowInfo) => ({
            style: { cursor: 'pointer' },
            onClick: () => {
              history.push(`/user_con_profiles/${rowInfo.original.id}`);
            },
          })}
          getTheadFilterThProps={() => ({ className: 'text-left', style: { overflow: 'visible' } })}
        />

        <Route path="/user_con_profiles/new">
          {({ match }) => (
            <AddAttendeeModal
              conventionName={(queryData && (queryData.convention || {}).name) || ''}
              visible={match != null}
            />
          )}
        </Route>
      </div>
    </UserConProfilesTableQueryDataContext.Provider>
  );
}

export default UserConProfilesTable;
