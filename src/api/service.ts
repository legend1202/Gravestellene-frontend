import useSWR from 'swr';
import { useMemo } from 'react';

import axiosInstance, { fetcher, endpoints } from 'src/utils/axios';

import {
  IServiceItem,
  IServiceListItem,
  IServiceRequestItem,
  IServiceRequestedItem,
} from 'src/types/service';

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

export const getAllServices = async () => {
  const res = await axiosInstance.get(endpoints.services.getAll);

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

export function useGetServicesByGraveyardId(graveyardId: string) {
  const URL = graveyardId ? [`${endpoints.services.getListsByGraveyardId}/${graveyardId}`] : '';

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      services: data?.result as IServiceListItem[],
      servicesLoading: isLoading,
      servicesError: error,
      servicesValidating: isValidating,
    }),
    [data?.result, error, isLoading, isValidating]
  );
  // console.log(memoizedValue);
  return memoizedValue;
}

export function useGetServicesListsByGraveyardId(graveyardId: string) {
  const URL = graveyardId ? [`${endpoints.services.getByGraveyardId}/${graveyardId}`] : '';

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      services: data?.result as IServiceRequestedItem[],
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
  const URL = serviceId ? [`${endpoints.services.getById}/${serviceId}`] : '';

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

export const ApproveService = async (query: string) => {
  const res = await axiosInstance.put(endpoints.services.approveByAdmin, {
    services: {
      id: query,
    },
  });

  const memoizedValue = {
    searchResults: res?.data || [],
  };

  return memoizedValue;
};

export const ApproveServiceByFellesraad = async (query: string) => {
  const res = await axiosInstance.put(endpoints.services.approveByFellesraad, {
    requestId: query,
  });

  const memoizedValue = {
    searchResults: res?.data || [],
  };

  return memoizedValue;
};

export const RequestService = async (query: IServiceRequestItem) => {
  const res = await axiosInstance.post(endpoints.services.request, {
    request: query,
  });

  const memoizedValue = {
    searchResults: res?.data || [],
  };

  return memoizedValue;
};

export function useGetRequestedServices(companyId: string) {
  const URL = `${endpoints.services.requestedService}`;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      rservices: data?.result as IServiceRequestedItem[],
      rservicesLoading: isLoading,
      rservicesError: error,
      rserviceValidating: isValidating,
    }),
    [data?.result, error, isLoading, isValidating]
  );

  return memoizedValue;
}
