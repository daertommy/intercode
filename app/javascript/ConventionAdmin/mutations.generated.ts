/* eslint-disable */
import * as Types from '../graphqlTypes.generated';

import { gql } from '@apollo/client';
import { ConventionAdminConventionFieldsFragmentDoc } from './queries.generated';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type UpdateConventionMutationVariables = Types.Exact<{
  input: Types.UpdateConventionInput;
}>;


export type UpdateConventionMutationData = { __typename: 'Mutation', updateConvention: { __typename: 'UpdateConventionPayload', convention: { __typename: 'Convention', id: number, accepting_proposals?: boolean | null | undefined, starts_at?: any | null | undefined, ends_at?: any | null | undefined, canceled: boolean, name: string, domain?: string | null | undefined, email_from: string, email_mode: Types.EmailMode, event_mailing_list_domain?: string | null | undefined, location?: any | null | undefined, language: string, timezone_name?: string | null | undefined, timezone_mode: Types.TimezoneMode, show_schedule?: Types.ShowSchedule | null | undefined, show_event_list?: Types.ShowSchedule | null | undefined, hidden: boolean, maximum_tickets?: number | null | undefined, ticket_name: string, clickwrap_agreement?: string | null | undefined, ticket_mode: Types.TicketMode, site_mode: Types.SiteMode, signup_mode: Types.SignupMode, signup_requests_open: boolean, stripe_account_ready_to_charge: boolean, stripe_account?: { __typename: 'StripeAccount', id: string, email?: string | null | undefined, charges_enabled: boolean, display_name?: string | null | undefined } | null | undefined, maximum_event_signups?: { __typename: 'ScheduledValue', timespans: Array<{ __typename: 'TimespanWithValue', start?: any | null | undefined, finish?: any | null | undefined, value: string }> } | null | undefined, defaultLayout: { __typename: 'CmsLayout', id: number, name?: string | null | undefined }, cmsLayouts: Array<{ __typename: 'CmsLayout', id: number, name?: string | null | undefined }>, rootPage: { __typename: 'Page', id: number, name?: string | null | undefined }, cmsPages: Array<{ __typename: 'Page', id: number, name?: string | null | undefined }>, staff_positions: Array<{ __typename: 'StaffPosition', id: number, name: string }>, catch_all_staff_position?: { __typename: 'StaffPosition', id: number, name: string } | null | undefined } } };

export type CreateConventionStripeAccountMutationVariables = Types.Exact<{
  baseUrl: Types.Scalars['String'];
}>;


export type CreateConventionStripeAccountMutationData = { __typename: 'Mutation', createConventionStripeAccount: { __typename: 'CreateConventionStripeAccountPayload', stripe_account: { __typename: 'StripeAccount', id: string, account_onboarding_link: string } } };


export const UpdateConventionDocument = gql`
    mutation UpdateConvention($input: UpdateConventionInput!) {
  updateConvention(input: $input) {
    convention {
      id
      ...ConventionAdminConventionFields
    }
  }
}
    ${ConventionAdminConventionFieldsFragmentDoc}`;
export type UpdateConventionMutationFn = Apollo.MutationFunction<UpdateConventionMutationData, UpdateConventionMutationVariables>;

/**
 * __useUpdateConventionMutation__
 *
 * To run a mutation, you first call `useUpdateConventionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConventionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConventionMutation, { data, loading, error }] = useUpdateConventionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateConventionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConventionMutationData, UpdateConventionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConventionMutationData, UpdateConventionMutationVariables>(UpdateConventionDocument, options);
      }
export type UpdateConventionMutationHookResult = ReturnType<typeof useUpdateConventionMutation>;
export type UpdateConventionMutationResult = Apollo.MutationResult<UpdateConventionMutationData>;
export type UpdateConventionMutationOptions = Apollo.BaseMutationOptions<UpdateConventionMutationData, UpdateConventionMutationVariables>;
export const CreateConventionStripeAccountDocument = gql`
    mutation CreateConventionStripeAccount($baseUrl: String!) {
  createConventionStripeAccount(input: {}) {
    stripe_account {
      id
      account_onboarding_link(base_url: $baseUrl)
    }
  }
}
    `;
export type CreateConventionStripeAccountMutationFn = Apollo.MutationFunction<CreateConventionStripeAccountMutationData, CreateConventionStripeAccountMutationVariables>;

/**
 * __useCreateConventionStripeAccountMutation__
 *
 * To run a mutation, you first call `useCreateConventionStripeAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConventionStripeAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConventionStripeAccountMutation, { data, loading, error }] = useCreateConventionStripeAccountMutation({
 *   variables: {
 *      baseUrl: // value for 'baseUrl'
 *   },
 * });
 */
export function useCreateConventionStripeAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateConventionStripeAccountMutationData, CreateConventionStripeAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConventionStripeAccountMutationData, CreateConventionStripeAccountMutationVariables>(CreateConventionStripeAccountDocument, options);
      }
export type CreateConventionStripeAccountMutationHookResult = ReturnType<typeof useCreateConventionStripeAccountMutation>;
export type CreateConventionStripeAccountMutationResult = Apollo.MutationResult<CreateConventionStripeAccountMutationData>;
export type CreateConventionStripeAccountMutationOptions = Apollo.BaseMutationOptions<CreateConventionStripeAccountMutationData, CreateConventionStripeAccountMutationVariables>;