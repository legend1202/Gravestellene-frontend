import useSWR from 'swr';
import { useMemo } from 'react';

import axiosInstance, { fetcher, endpoints } from 'src/utils/axios';

import { IServiceItem } from 'src/types/service';

// ----------------------------------------------------------------------

export const createService = async (query: IServiceItem) => {
  const res = await axiosInstance.post(endpoints.services.create, {
    services: query,
  });

  const memoizedValue = {
    searchResults: res?.data || [],
  };

  return memoizedValue;
};

export const updateService = async (query: IServiceItem) => {
  const res = await axiosInstance.put(endpoints.services.update, {
    services: query,
  });

  const memoizedValue = {
    searchResults: res?.data || [],
  };

  return memoizedValue;
};

export function useGetServicesListsByCompanyId(companyId: string) {
  const URL = companyId ? [`${endpoints.services.getByCompanyId}/${companyId}`] : '';

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      services: data?.result as IServiceItem[],
      servicesLoading: isLoading,
      servicesError: error,
      servicesValidating: isValidating,
    }),
    [data?.result, error, isLoading, isValidating]
  );
  // console.log(memoizedValue);
  return memoizedValue;
}
