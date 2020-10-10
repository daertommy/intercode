/* eslint-disable import/prefer-default-export */
import { QueryResult } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorDisplay from './ErrorDisplay';
import FourOhFourPage from './FourOhFourPage';
import PageLoadingIndicator from './PageLoadingIndicator';

export function LoadSingleValueFromCollectionWrapper<TData, TValue>(
  useLoadData: () => QueryResult<TData>,
  getValue: (data: TData, id: string) => TValue | undefined,
  WrappedComponent: React.ComponentType<{ value: TValue; data: TData }>,
): React.FunctionComponent<{}> {
  const Wrapper = () => {
    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = useLoadData();
    const value = error || loading || !data ? undefined : getValue(data, id);

    if (loading) {
      return <PageLoadingIndicator visible />;
    }

    if (error) {
      return <ErrorDisplay graphQLError={error} />;
    }

    if (!value) {
      return <FourOhFourPage />;
    }

    return <WrappedComponent value={value} data={data!} />;
  };

  const wrappedComponentDisplayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  Wrapper.displayName = `LoadSingleValueFromCollectionWrapper(${wrappedComponentDisplayName})`;

  return Wrapper;
}
