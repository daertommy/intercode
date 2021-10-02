/* eslint-disable */
import * as Types from '../../graphqlTypes.generated';

import { gql } from '@apollo/client';
import { CommonFormFieldsFragmentDoc, CommonFormSectionFieldsFragmentDoc, CommonFormItemFieldsFragmentDoc } from '../../Models/commonFormFragments.generated';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type EventHistoryQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type EventHistoryQueryData = { __typename: 'Query', convention: { __typename: 'Convention', id: number, starts_at?: any | null | undefined, ends_at?: any | null | undefined, timezone_name?: string | null | undefined, timezone_mode: Types.TimezoneMode, event: { __typename: 'Event', id: number, title?: string | null | undefined, event_category: { __typename: 'EventCategory', id: number, event_form: { __typename: 'Form', id: number, title: string, form_type: Types.FormType, form_sections: Array<{ __typename: 'FormSection', id: number, title?: string | null | undefined, position: number, form_items: Array<{ __typename: 'FormItem', id: number, admin_description?: string | null | undefined, position: number, identifier?: string | null | undefined, item_type: string, rendered_properties?: any | null | undefined, default_value?: any | null | undefined, visibility: Types.FormItemRole, writeability: Types.FormItemRole }> }> } }, form_response_changes: Array<{ __typename: 'FormResponseChange', field_identifier: string, previous_value?: any | null | undefined, new_value?: any | null | undefined, created_at: any, updated_at: any, user_con_profile: { __typename: 'UserConProfile', id: number, name_without_nickname: string } }> } } };


export const EventHistoryQueryDocument = gql`
    query EventHistoryQuery($id: Int!) {
  convention: conventionByRequestHost {
    id
    starts_at
    ends_at
    timezone_name
    timezone_mode
    event(id: $id) {
      id
      title
      event_category {
        id
        event_form {
          id
          ...CommonFormFields
          form_sections {
            id
            form_items {
              id
              admin_description
            }
          }
        }
      }
      form_response_changes {
        user_con_profile {
          id
          name_without_nickname
        }
        field_identifier
        previous_value
        new_value
        created_at
        updated_at
      }
    }
  }
}
    ${CommonFormFieldsFragmentDoc}`;

/**
 * __useEventHistoryQuery__
 *
 * To run a query within a React component, call `useEventHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventHistoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEventHistoryQuery(baseOptions: Apollo.QueryHookOptions<EventHistoryQueryData, EventHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventHistoryQueryData, EventHistoryQueryVariables>(EventHistoryQueryDocument, options);
      }
export function useEventHistoryQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventHistoryQueryData, EventHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventHistoryQueryData, EventHistoryQueryVariables>(EventHistoryQueryDocument, options);
        }
export type EventHistoryQueryHookResult = ReturnType<typeof useEventHistoryQuery>;
export type EventHistoryQueryLazyQueryHookResult = ReturnType<typeof useEventHistoryQueryLazyQuery>;
export type EventHistoryQueryQueryResult = Apollo.QueryResult<EventHistoryQueryData, EventHistoryQueryVariables>;