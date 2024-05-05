import useSWR from "swr";
import { useMemo } from "react";

import axiosInstance, { fetcher, endpoints } from "src/utils/axios";

import { IProductItem, IGraveyardItem } from "src/types/product";

// ----------------------------------------------------------------------

export function useGetGraveyard() {
  const URL = endpoints.product.list;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      products: (data?.products as IProductItem[]) || [],
      productsLoading: isLoading,
      productsError: error,
      productsValidating: isValidating,
      productsEmpty: !isLoading && !data?.products.length,
    }),
    [data?.products, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

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

// ----------------------------------------------------------------------

// export function useSearchProducts(query: string) {
//   const URL = query ? [endpoints.graveyard.create, { body: { query } }] : "";

//   const { data, isLoading, error, isValidating } = useSWR(URL, poster, {
//     keepPreviousData: true,
//   });

//   const memoizedValue = useMemo(
//     () => ({
//       searchResults: (data?.results as IProductItem[]) || [],
//       searchLoading: isLoading,
//       searchError: error,
//       searchValidating: isValidating,
//       searchEmpty: !isLoading && !data?.results.length,
//     }),
//     [data?.results, error, isLoading, isValidating]
//   );

//   return memoizedValue;
// }

export const createGraveyard = async (query: IGraveyardItem) => {
  const res = await axiosInstance.post(endpoints.graveyard.create, {
    graveyard: query,
  });

  const memoizedValue = {
    searchResults: res?.data || [],
  };

  return memoizedValue;
};
