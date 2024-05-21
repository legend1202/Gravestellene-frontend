import useSWR from "swr";
import { useMemo } from "react";

import { fetcher, endpoints } from "src/utils/axios";

// import { HOST_API } from "src/config-global";

// import { IProductItem } from "src/types/product";
// import { IImageType, IGraveyardItem } from "src/types/graveyard";
import { ITUserItem } from "src/types/user";

export function useGetUserLists() {
  // const URL = endpoints.product.list;
  const URL = endpoints.admin.userList;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      users: data?.result.users as ITUserItem[],
      usersLoading: isLoading,
      usersError: error,
      usersValidating: isValidating,
    }),
    [data?.result, error, isLoading, isValidating]
  );

  // const tempProducts = [
  //   {
  //     id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
  //     fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
  //     name: "User 1",
  //     location: "COMPANY",
  //     content: "string",
  //     newsLink: "string",
  //     forecastLink: "string",
  //     approved: true,
  //   },
  //   {
  //     id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
  //     fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
  //     name: "User 2",
  //     location: "CLIENT",
  //     content: "string",
  //     newsLink: "string",
  //     forecastLink: "string",
  //     approved: true,
  //   },
  //   {
  //     id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
  //     fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
  //     name: "User 3",
  //     location: "FELLESRAAD",
  //     content: "string",
  //     newsLink: "string",
  //     forecastLink: "string",
  //     approved: false,
  //   },
  // ];
  // // const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  // const tempData = {
  //   products: tempProducts,
  //   productsLoading: false,
  //   productsValidating: false,
  //   productsEmpty: false,
  // };
  // // const memoizedValue = useMemo(() => tempData, [tempData]);

  return memoizedValue;
}
