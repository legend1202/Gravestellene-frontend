import useSWR from "swr";
import { useMemo } from "react";

import axiosInstance, { fetcher, endpoints } from "src/utils/axios";

import { HOST_API } from "src/config-global";

import { IProductItem } from "src/types/product";
import { IImageType, IGraveyardItem } from "src/types/graveyard";

export const createGraveyard = async (query: IGraveyardItem) => {
  const res = await axiosInstance.post(endpoints.graveyard.create, {
    graveyard: query,
  });

  const memoizedValue = {
    searchResults: res?.data || [],
  };

  return memoizedValue;
};

export const updateGraveyard = async (query: IGraveyardItem) => {
  const res = await axiosInstance.put(endpoints.graveyard.update, {
    graveyard: query,
  });

  const memoizedValue = {
    searchResults: res?.data || [],
  };

  return memoizedValue;
};

export const upload = async (query: IImageType) => {
  const formData = new FormData();

  query.forEach((image) => {
    formData.append("images", image);
  });

  const res = await axiosInstance.post(endpoints.graveyard.upload, formData);

  return `${HOST_API}/${res.data?.result?.image_urls[0]}`;
};

export function useGetGraveyard(graveyardId: string) {
  const URL = graveyardId
    ? [`${endpoints.graveyard.getById}/${graveyardId}`]
    : "";

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      graveyard: data?.result as IGraveyardItem,
      graveyardLoading: isLoading,
      graveyardError: error,
      graveyardValidating: isValidating,
    }),
    [data?.result, error, isLoading, isValidating]
  );
  return memoizedValue;
}

export function useGetGraveyards() {
  const URL = endpoints.graveyard.list;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      graveyards: data?.result as IGraveyardItem[],
      graveyardsLoading: isLoading,
      graveyardsError: error,
      graveyardsValidating: isValidating,
    }),
    [data?.result, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export async function deleteGraveyard(graveyardId: string) {
  const data = { graveyardId };
  const res = await axiosInstance.delete(endpoints.graveyard.delete, { data });

  return res.data;
}

export function useGetProduct(productId: string) {
  const URL = productId
    ? [endpoints.product.details, { params: { productId } }]
    : "";

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      product: data?.product as IProductItem,
      productLoading: isLoading,
      productError: error,
      productValidating: isValidating,
    }),
    [data?.product, error, isLoading, isValidating]
  );

  return memoizedValue;
}
