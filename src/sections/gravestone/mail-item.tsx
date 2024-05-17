import { formatDistanceToNowStrict } from "date-fns";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";

import { IMail } from "src/types/mail";
import { IGraveyardItem } from "src/types/graveyard";

// ----------------------------------------------------------------------

type Props = ListItemButtonProps & {
  mail: IGraveyardItem;
  selected: boolean;
};

export default function MailItem({ mail, selected, sx, ...other }: Props) {
  return (
    <ListItemButton
      sx={{
        p: 1,
        mb: 0.5,
        borderRadius: 1,
        ...(selected && {
          bgcolor: "action.selected",
        }),
        ...sx,
      }}
      {...other}
    >
      <ListItemText
        primary={mail.name}
        primaryTypographyProps={{
          noWrap: true,
          variant: "subtitle2",
        }}
        secondary="Graveyard Location"
        secondaryTypographyProps={{
          noWrap: true,
          component: "span",
          variant: "body2",
          color: "text.secondary",
        }}
      />

      <Stack alignItems="flex-end" sx={{ ml: 2, height: 44 }}>
        <Typography
          noWrap
          variant="body2"
          component="span"
          sx={{
            mb: 1.5,
            fontSize: 12,
            color: "text.disabled",
          }}
        >
          {mail.cratedAt &&
            formatDistanceToNowStrict(new Date(mail.cratedAt), {
              addSuffix: false,
            })}
        </Typography>
      </Stack>
    </ListItemButton>
  );
}
