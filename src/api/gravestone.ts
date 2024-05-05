import useSWR from "swr";
import { useMemo } from "react";
import keyBy from "lodash/keyBy";

import { fetcher, endpoints } from "src/utils/axios";

import { IMail, IMails, IMailLabel } from "src/types/mail";

// ----------------------------------------------------------------------

export function useGetLabels() {
  const URL = endpoints.mail.labels;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      labels: (data?.labels as IMailLabel[]) || [],
      labelsLoading: isLoading,
      labelsError: error,
      labelsValidating: isValidating,
      labelsEmpty: !isLoading && !data?.labels.length,
    }),
    [data?.labels, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetGraveyards(labelId: string) {
  const URL = labelId ? [endpoints.mail.list, { params: { labelId } }] : "";

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const tempById = {
    "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1": {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
      to: [
        {
          name: "Jaydon Frankie",
          email: "demo@minimals.cc",
          avatarUrl: null,
        },
        {
          name: "Brycen Jimenez",
          email: "tyrel_greenholt@gmail.com",
          avatarUrl:
            "https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_13.jpg",
        },
      ],
      from: {
        name: "Jayvion Simon",
        email: "nannie_abernathy70@yahoo.com",
        avatarUrl:
          "https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",
      },
      folder: "inbox",
      labelIds: [],
      attachments: [],
      createdAt: "2024-05-05T18:49:07.095Z",
      subject: "10 Essential Tips for Healthy Living",
      isUnread: false,
      isImportant: true,
      message:
        "Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.",
      isStarred: true,
    },
    "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6": {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
      to: [
        {
          name: "Jaydon Frankie",
          email: "demo@minimals.cc",
          avatarUrl: null,
        },
        {
          name: "Brycen Jimenez",
          email: "tyrel_greenholt@gmail.com",
          avatarUrl:
            "https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_13.jpg",
        },
      ],
      from: {
        name: "Lainey Davidson",
        email: "aditya_greenfelder31@gmail.com",
        avatarUrl:
          "https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_6.jpg",
      },
      folder: "inbox",
      labelIds: ["social"],
      attachments: [
        {
          id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
          name: "cover-4.jpg",
          path:
            "https://api-dev-minimal-v510.vercel.app/assets/images/cover/cover_4.jpg",
          preview:
            "https://api-dev-minimal-v510.vercel.app/assets/images/cover/cover_4.jpg",
          size: 9600000,
          createdAt: "2024-05-01T14:33:52.832Z",
          modifiedAt: "2024-05-01T14:33:52.832Z",
          type: "jpg",
        },
        {
          id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
          name: "cover-6.jpg",
          path:
            "https://api-dev-minimal-v510.vercel.app/assets/images/cover/cover_6.jpg",
          preview:
            "https://api-dev-minimal-v510.vercel.app/assets/images/cover/cover_6.jpg",
          size: 8000000,
          createdAt: "2024-04-30T13:33:52.832Z",
          modifiedAt: "2024-04-30T13:33:52.832Z",
          type: "jpg",
        },
        {
          id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
          name: "large-news.txt",
          path: "https://www.cloud.com/s/c218bo6kjuqyv66/large_news.txt",
          preview: "https://www.cloud.com/s/c218bo6kjuqyv66/large_news.txt",
          size: 6857142.857142857,
          createdAt: "2024-04-29T12:33:52.832Z",
          modifiedAt: "2024-04-29T12:33:52.832Z",
          type: "txt",
        },
        {
          id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
          name: "nauru-6015-small-fighter-left-gender.psd",
          path:
            "https://www.cloud.com/s/c218bo6kjuqyv66/nauru-6015-small-fighter-left-gender.psd",
          preview:
            "https://www.cloud.com/s/c218bo6kjuqyv66/nauru-6015-small-fighter-left-gender.psd",
          size: 6000000,
          createdAt: "2024-04-28T11:33:52.832Z",
          modifiedAt: "2024-04-28T11:33:52.832Z",
          type: "psd",
        },
        {
          id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
          name: "tv-xs.doc",
          path: "https://www.cloud.com/s/c218bo6kjuqyv66/tv-xs.doc",
          preview: "https://www.cloud.com/s/c218bo6kjuqyv66/tv-xs.doc",
          size: 5333333.333333333,
          createdAt: "2024-04-27T10:33:52.832Z",
          modifiedAt: "2024-04-27T10:33:52.832Z",
          type: "doc",
        },
        {
          id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10",
          name: "gustavia-entertainment-productivity.docx",
          path:
            "https://www.cloud.com/s/c218bo6kjuqyv66/gustavia-entertainment-productivity.docx",
          preview:
            "https://www.cloud.com/s/c218bo6kjuqyv66/gustavia-entertainment-productivity.docx",
          size: 4800000,
          createdAt: "2024-04-26T09:33:52.832Z",
          modifiedAt: "2024-04-26T09:33:52.832Z",
          type: "docx",
        },
      ],
      createdAt: "2024-04-30T13:49:07.095Z",
      subject: "Delicious Recipes for a Vegan Diet",
      isUnread: false,
      isImportant: true,
      message:
        "Non rerum modi. Accusamus voluptatem odit nihil in. Quidem et iusto numquam veniam culpa aperiam odio aut enim. Quae vel dolores. Pariatur est culpa veritatis aut dolorem.",
      isStarred: false,
    },
    "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7": {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
      to: [
        {
          name: "Jaydon Frankie",
          email: "demo@minimals.cc",
          avatarUrl: null,
        },
        {
          name: "Brycen Jimenez",
          email: "tyrel_greenholt@gmail.com",
          avatarUrl:
            "https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_13.jpg",
        },
      ],
      from: {
        name: "Cristopher Cardenas",
        email: "lenna_bergnaum27@hotmail.com",
        avatarUrl: null,
      },
      folder: "inbox",
      labelIds: [],
      attachments: [],
      createdAt: "2024-04-29T12:49:07.095Z",
      subject: "A Beginner's Guide to Investing in Stocks",
      isUnread: false,
      isImportant: false,
      message:
        "Est enim et sit non impedit aperiam cumque animi. Aut eius impedit saepe blanditiis. Totam molestias magnam minima fugiat.",
      isStarred: false,
    },
    "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8": {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
      to: [
        {
          name: "Jaydon Frankie",
          email: "demo@minimals.cc",
          avatarUrl: null,
        },
        {
          name: "Brycen Jimenez",
          email: "tyrel_greenholt@gmail.com",
          avatarUrl:
            "https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_13.jpg",
        },
      ],
      from: {
        name: "Melanie Noble",
        email: "luella.ryan33@gmail.com",
        avatarUrl:
          "https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_8.jpg",
      },
      folder: "inbox",
      labelIds: [],
      attachments: [],
      createdAt: "2024-04-28T11:49:07.095Z",
      subject: "The Impact of Social Media on Society",
      isUnread: false,
      isImportant: false,
      message:
        "Unde a inventore et. Sed esse ut. Atque ducimus quibusdam fuga quas id qui fuga.",
      isStarred: false,
    },
    "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9": {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
      to: [
        {
          name: "Jaydon Frankie",
          email: "demo@minimals.cc",
          avatarUrl: null,
        },
        {
          name: "Brycen Jimenez",
          email: "tyrel_greenholt@gmail.com",
          avatarUrl:
            "https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_13.jpg",
        },
      ],
      from: {
        name: "Chase Day",
        email: "joana.simonis84@gmail.com",
        avatarUrl:
          "https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_9.jpg",
      },
      folder: "inbox",
      labelIds: [],
      attachments: [],
      createdAt: "2024-04-27T10:49:07.095Z",
      subject: "10 Must-Visit Destinations for Adventure Travelers",
      isUnread: false,
      isImportant: false,
      message:
        "Eaque natus adipisci soluta nostrum dolorem. Nesciunt ipsum molestias ut aliquid natus ut omnis qui fugiat. Dolor et rem. Ut neque voluptatem blanditiis quasi ullam deleniti.",
      isStarred: true,
    },
  };
  const tempData = {
    mails: {
      byId: tempById,
      allIds: [
        "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
        "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
        "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
        "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
        "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
      ],
    },
    mailsLoading: false,
    mailsValidating: false,
    mailsEmpty: false,
  };

  const byId = keyBy(tempData?.mails, "id") || {};
  const allIds = Object.keys(byId) || [];

  console.log(byId, allIds);

  //
  //   return memoizedValue;

  return {
    mails: {
      byId,
      allIds,
    },
    mailsLoading: isLoading,
    mailsError: error,
    mailsValidating: isValidating,
    mailsEmpty: !isLoading && !allIds.length,
  };
}

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
