import { useEffect, useCallback } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { paths } from "src/routes/paths";
import { useSearchParams } from "src/routes/hooks";

import { useBoolean } from "src/hooks/use-boolean";
import { useResponsive } from "src/hooks/use-responsive";

// import { useGetMail, useGetMails, useGetLabels } from "src/api/mail";
// import { useGetGraveyards } from "src/api/gravestone";
// import { useGetGraveyards } from "src/api/graveyard";

import EmptyContent from "src/components/empty-content";
import { useSettingsContext } from "src/components/settings";
import { LoadingScreen } from "src/components/loading-screen";

// import MailNav from "../mail-nav";
import MailList from "../mail-list";
// import SearcGraveyardhHeader from "../search-graveyard-header";
// import MailCompose from "../mail-compose";
import MailDetails from "../mail-details";

// ----------------------------------------------------------------------

const LABEL_INDEX = "inbox";

const tempMails = {
  mails: {
    byId: {
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
        createdAt: "2024-05-05T18:52:20.619Z",
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
            createdAt: "2024-05-01T13:50:03.401Z",
            modifiedAt: "2024-05-01T13:50:03.401Z",
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
            createdAt: "2024-04-30T12:50:03.401Z",
            modifiedAt: "2024-04-30T12:50:03.401Z",
            type: "jpg",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
            name: "large-news.txt",
            path: "https://www.cloud.com/s/c218bo6kjuqyv66/large_news.txt",
            preview: "https://www.cloud.com/s/c218bo6kjuqyv66/large_news.txt",
            size: 6857142.857142857,
            createdAt: "2024-04-29T11:50:03.401Z",
            modifiedAt: "2024-04-29T11:50:03.401Z",
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
            createdAt: "2024-04-28T10:50:03.401Z",
            modifiedAt: "2024-04-28T10:50:03.401Z",
            type: "psd",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
            name: "tv-xs.doc",
            path: "https://www.cloud.com/s/c218bo6kjuqyv66/tv-xs.doc",
            preview: "https://www.cloud.com/s/c218bo6kjuqyv66/tv-xs.doc",
            size: 5333333.333333333,
            createdAt: "2024-04-27T09:50:03.401Z",
            modifiedAt: "2024-04-27T09:50:03.401Z",
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
            createdAt: "2024-04-26T08:50:03.401Z",
            modifiedAt: "2024-04-26T08:50:03.401Z",
            type: "docx",
          },
        ],
        createdAt: "2024-04-30T13:52:20.619Z",
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
        createdAt: "2024-04-29T12:52:20.619Z",
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
        createdAt: "2024-04-28T11:52:20.619Z",
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
        createdAt: "2024-04-27T10:52:20.619Z",
        subject: "10 Must-Visit Destinations for Adventure Travelers",
        isUnread: false,
        isImportant: false,
        message:
          "Eaque natus adipisci soluta nostrum dolorem. Nesciunt ipsum molestias ut aliquid natus ut omnis qui fugiat. Dolor et rem. Ut neque voluptatem blanditiis quasi ullam deleniti.",
        isStarred: true,
      },
    },
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

const tempMail = {
  mail: {
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
  mailLoading: false,
  mailValidating: false,
};

export default function GravestoneCreateView() {
  // const router = useRouter();

  const searchParams = useSearchParams();

  const selectedLabelId = searchParams.get("label") || LABEL_INDEX;

  const selectedMailId = searchParams.get("id") || "";

  const mdUp = useResponsive("up", "md");

  const settings = useSettingsContext();

  // const openNav = useBoolean();

  const openMail = useBoolean();

  // const openCompose = useBoolean();

  // const { labels, labelsLoading } = useGetLabels();

  const { mails, mailsLoading, mailsEmpty } = tempMails;

  const { mailLoading } = tempMail;

  // const { products, productsLoading } = useGetGraveyards();

  const firstMailId = mails.allIds[0] || "";

  const handleClickMail = useCallback(
    (mailId: string) => {
      if (!mdUp) {
        openMail.onFalse();
      }

      const href =
        selectedLabelId !== LABEL_INDEX
          ? `${paths.dashboard.mail}?id=${mailId}&label=${selectedLabelId}`
          : `${paths.dashboard.mail}?id=${mailId}`;

      return href;

      // router.push(href);
    },
    [openMail, selectedLabelId, mdUp]
  );

  // useEffect(() => {
  //   if (mailsError || mailError) {
  //     router.push(paths.dashboard.mail);
  //   }
  // }, [mailError, mailsError, router]);

  useEffect(() => {
    if (!selectedMailId && firstMailId) {
      handleClickMail(firstMailId);
    }
  }, [firstMailId, handleClickMail, selectedMailId]);

  // useEffect(() => {
  //   if (openCompose.value) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  // }, [openCompose.value]);

  const renderLoading = (
    <LoadingScreen
      sx={{
        borderRadius: 1.5,
        bgcolor: "background.default",
      }}
    />
  );

  // const renderMailNav = (
  //   <MailNav
  //     loading={labelsLoading}
  //     openNav={openNav.value}
  //     onCloseNav={openNav.onFalse}
  //     //
  //     labels={labels}
  //     selectedLabelId={selectedLabelId}
  //     handleClickLabel={handleClickLabel}
  //     //
  //     onToggleCompose={handleToggleCompose}
  //   />
  // );

  const renderEmpty = (
    <EmptyContent
      title={`Nothing in ${selectedLabelId}`}
      description="This folder is empty"
      imgUrl="/assets/icons/empty/ic_folder_empty.svg"
      sx={{
        borderRadius: 1.5,
        maxWidth: { md: 320 },
        bgcolor: "background.default",
      }}
    />
  );

  const renderMailList = (
    <MailList
      mails={mails}
      loading={mailsLoading}
      //
      openMail={openMail.value}
      onCloseMail={openMail.onFalse}
      onClickMail={handleClickMail}
      //
      selectedLabelId={selectedLabelId}
      selectedMailId={selectedMailId}
    />
  );

  const renderMailDetails = (
    <>
      {mailsEmpty ? (
        <EmptyContent
          imgUrl="/assets/icons/empty/ic_email_disabled.svg"
          sx={{
            borderRadius: 1.5,
            bgcolor: "background.default",
            ...(!mdUp && {
              display: "none",
            }),
          }}
        />
      ) : (
        <MailDetails />
      )}
    </>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : "xl"}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        Gravestone
      </Typography>

      <Stack
        spacing={1}
        sx={{
          p: 1,
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
          bgcolor: "background.neutral",
        }}
      >
        <Stack
          spacing={1}
          direction="row"
          sx={{
            minHeight: { md: 720 },
            height: { xs: 800, md: "72vh" },
          }}
        >
          {mailsEmpty ? renderEmpty : renderMailList}

          {mailLoading ? renderLoading : renderMailDetails}
        </Stack>
      </Stack>
    </Container>
  );
}
