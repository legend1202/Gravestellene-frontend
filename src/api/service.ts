import useSWR from "swr";
// import { useMemo } from "react";

import axiosInstance, { endpoints } from 'src/utils/axios';

// import { IProductItem } from "src/types/product";
import { IServiceItem } from 'src/types/service';
// import { IImageType, IGraveyardItem } from "src/types/graveyard";

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

export function useGetServiceLists() {
  // const URL = endpoints.product.list;
  const tempProducts = [
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
      fellesraadId: 'fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
      name: 'Service 1',
      location: 'Graveyard 1',
      content: 'string',
      newsLink: 'string',
      forecastLink: 'string',
      approved: true,
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
      fellesraadId: 'fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
      name: 'Service 1',
      location: 'Graveyard 2',
      content: 'string',
      newsLink: 'string',
      forecastLink: 'string',
      approved: true,
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
      fellesraadId: 'fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
      name: 'Service 2',
      location: 'Graveyard 2',
      content: 'string',
      newsLink: 'string',
      forecastLink: 'string',
      approved: false,
    },
  ];
  // const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const tempData = {
    products: tempProducts,
    productsLoading: false,
    productsValidating: false,
    productsEmpty: false,
  };
  // const memoizedValue = useMemo(() => tempData, [tempData]);

  return tempData;
}

export function useGetServicesLists() {
  // const URL = endpoints.product.list;
  const tempProducts = [
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
      fellesraadId: 'fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
      name: 'Service 1',
      price: '$350',
      graveyardName: 'string',
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
      fellesraadId: 'fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
      name: 'Service 1',
      price: '$499',
      graveyardName: 'string',
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
      fellesraadId: 'fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
      name: 'Service 2',
      price: '$612',
      graveyardName: 'string',
    },
  ];
  // const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const tempData = {
    products: tempProducts,
    productsLoading: false,
    productsValidating: false,
    productsEmpty: false,
  };
  // const memoizedValue = useMemo(() => tempData, [tempData]);

  return tempData;
}
