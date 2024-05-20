import useSWR from "swr";
import { useMemo } from "react";

import axiosInstance, { fetcher, endpoints } from "src/utils/axios";

import { IServiceItem } from "src/types/service";

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
  const URL = endpoints.services.getByCompanyId;

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

export function useGetService(serviceId: string) {
  const URL = serviceId ? [`${endpoints.services.getById}/${serviceId}`] : "";

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      service: data?.result as IServiceItem,
      serviceLoading: isLoading,
      serviceError: error,
      serviceValidating: isValidating,
    }),
    [data?.result, error, isLoading, isValidating]
  );
  return memoizedValue;
}

export async function deleteService(serviceId: string) {
  const data = { serviceId };
  const res = await axiosInstance.delete(endpoints.services.delete, { data });

  return res.data;
}
