import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import { useResponsive } from "src/hooks/use-responsive";

import Iconify from "src/components/iconify";
import Scrollbar from "src/components/scrollbar";

// import { IMails } from "src/types/mail";

import MailItem from "./mail-item";
import { MailItemSkeleton } from "./mail-skeleton";
// import { Key } from "react";

// ----------------------------------------------------------------------

type Props = {
  loading: boolean;
  mails: any;
  //
  openMail: boolean;
  onCloseMail: VoidFunction;
  onClickMail: (id: string) => void;
  //
  selectedLabelId: string;
  selectedMailId: string;
};

export default function MailList({
  loading,
  mails,
  //
  openMail,
  onCloseMail,
  onClickMail,
  //
  selectedLabelId,
  selectedMailId,
}: Props) {
  const mdUp = useResponsive("up", "md");

  const renderSkeleton = (
    <>
      {[...Array(8)].map((_, index) => (
        <MailItemSkeleton key={index} />
      ))}
    </>
  );

  const renderList = (
    <>
      {mails &&
        mails.map((item: any, index: number) => (
          <MailItem
            key={index}
            mail={item}
            selected={selectedMailId === item.id}
            onClick={() => {
              onClickMail(item.id);
            }}
          />
        ))}
    </>
  );

  const renderContent = (
    <>
      <Stack sx={{ p: 2 }}>
        <TextField
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: "text.disabled" }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Scrollbar sx={{ px: 2 }}>
        {loading && renderSkeleton}

        {mails && !!mails.length && renderList}
      </Scrollbar>
    </>
  );

  return mdUp ? (
    <Stack
      sx={{
        width: 320,
        flexShrink: 0,
        borderRadius: 1.5,
        bgcolor: "background.default",
      }}
    >
      {renderContent}
    </Stack>
  ) : (
    <Drawer
      open={openMail}
      onClose={onCloseMail}
      slotProps={{
        backdrop: { invisible: true },
      }}
      PaperProps={{
        sx: {
          width: 320,
        },
      }}
    >
      {renderContent}
    </Drawer>
  );
}
