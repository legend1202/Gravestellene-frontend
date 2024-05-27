import useSWR from "swr";
import { useMemo } from "react";

import axiosInstance, { fetcher, endpoints } from "src/utils/axios";

import { IMail } from "src/types/mail";
import { IGravestoneItem } from "src/types/gravestone";

// ----------------------------------------------------------------------

export const createGravestone = async (query: any) => {
  const res = await axiosInstance.post(endpoints.gravestone.create, {
    gravestone: query,
  });

  const memoizedValue = {
    searchResults: res?.data || [],
  };

  return memoizedValue;
};

export const GetGravestones = async (graveyardId: string) => {
  const res = await axiosInstance.get(
    `${endpoints.gravestone.getByGraveyardId}/${graveyardId}`
  );

  const memoizedValue = {
    gravestones: res?.data.result as IGravestoneItem[],
    graveyardLoading: false,
    graveyardError: false,
    graveyardValidating: false,
  };
  return memoizedValue;
};

export const useGetFilteredGravestones = (query: any) => {
  // console.log(query);
  const { data } = useSWR(
    [endpoints.gravestone.getGravestones, query],
    fetcher
  );
  // console.log(data);
  const memoizedValue = {
    gravestones: data?.result as IGravestoneItem[],
    gravestonesLoading: false,
    gravestonesError: false,
    gravestonesValidating: false,
  };
  return memoizedValue;
};
// ----------------------------------------------------------------------

export function useGetMail(mailId: string) {
  const URL = mailId ? [endpoints.mail.details, { params: { mailId } }] : "";

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      mail: data?.mail as IMail,
      mailLoading: isLoading,
      mailError: error,
      mailValidating: isValidating,
    }),
    [data?.mail, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export const GetGravestone = async (gravestoneId: string) => {
  const res = await axiosInstance.get(
    `${endpoints.gravestone.getById}/${gravestoneId}`
  );
  const memoizedValue = {
    gravestone: res?.data.result as IGravestoneItem[],
    graveyardLoading: !res?.data.success,
    graveyardError: false,
    graveyardValidating: false,
  };

  return memoizedValue;
};

export function useGetServiceLists() {
  // const URL = endpoints.product.list;
  const tempProducts = [
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
      fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
      name: "Service 1",
      location: "Graveyard 1",
      content: "string",
      newsLink: "string",
      forecastLink: "string",
      approved: true,
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      name: "Service 1",
      location: "Graveyard 2",
      content: "string",
      newsLink: "string",
      forecastLink: "string",
      approved: true,
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
      fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
      name: "Service 2",
      location: "Graveyard 2",
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

export function useSearchGravestoneLists(params: IGravestoneItem | any) {
  // const URL = endpoints.product.list;
  const tempGravestones = [
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
      fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
      name: "Amrén, Hi Maria Ingeborg",
      fellesraadName: "Västerås pastorate",
      born: "$1965-03-04",
      deceased: "2015-12-07",
      buried: "2015-12-18",
      graveyardName: "BARKARÖ CEMETERY",
      quater: "quarter 09",
      graveSite: "210-1",
      hometown: "Västerås-Barkarö parish",
      siteNumber: "2109 210-1",
      approved: true,
    },
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      fellesraadId: "fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      name: "Amrén, Hi Maria Ingeborg",
      fellesraadName: "Västerås pastorate",
      born: "1965-03-04",
      deceased: "2015-12-07",
      buried: "2015-12-18",
      graveyardName: "BARKARÖ CEMETERY",
      quater: "quarter 09",
      graveSite: "210-1",
      hometown: "Västerås-Barkarö parish",
      siteNumber: "2109 210-1",
      approved: true,
    },
  ];
  // const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const tempData = {
    products: tempGravestones,
    productsLoading: false,
    productsValidating: false,
    productsEmpty: false,
  };
  // const memoizedValue = useMemo(() => tempData, [tempData]);

  return tempData;
}
