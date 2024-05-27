import useSWR from "swr";
import { useMemo } from "react";

import axiosInstance, { fetcher, endpoints } from "src/utils/axios";

import { IOrderedList } from "src/types/order";

// ----------------------------------------------------------------------

export function useGetOrderedServiceLists() {
  // const URL = endpoints.product.list;
  const tempProducts = [
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
      fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
      name: "User 1",
      location: "Service 1",
      graveyard: "Graveyard 1",
      content: "string",
      newsLink: "string",
      forecastLink: "string",
      approved: true,
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      name: "User 1",
      location: "Service 2",
      graveyard: "Graveyard 2",
      content: "string",
      newsLink: "string",
      forecastLink: "string",
      approved: false,
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
      fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
      name: "User 2",
      location: "Service 2",
      graveyard: "Graveyard 2",
      content: "string",
      newsLink: "string",
      forecastLink: "string",
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

export const createOrder = async (query: any) => {
  const res = await axiosInstance.post(endpoints.order.create, {
    order: query,
  });

  const memoizedValue = {
    results: res?.data || [],
  };

  return memoizedValue;
};

export function GetOrderedServices() {
  const URL = `${endpoints.order.get}`;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      orders: data?.result as IOrderedList[],
      ordersLoading: isLoading,
      ordersError: error,
      ordersValidating: isValidating,
    }),
    [data?.result, error, isLoading, isValidating]
  );
  return memoizedValue;
}

export const ApproveOrderedList = async (query: string) => {
  const res = await axiosInstance.put(endpoints.order.approve, {
    order: {
      id: query,
      approved: true,
    },
  });

  const memoizedValue = {
    results: res?.data || [],
  };

  return memoizedValue;
};
