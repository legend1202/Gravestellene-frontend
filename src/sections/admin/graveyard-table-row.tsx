import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { GridCellParams } from "@mui/x-data-grid";
import ListItemText from "@mui/material/ListItemText";
import LinearProgress from "@mui/material/LinearProgress";

import { fCurrency } from "src/utils/format-number";
// import { fTime, fDate } from "src/utils/format-time";

import Label from "src/components/label";

// ----------------------------------------------------------------------

type ParamsProps = {
  params: GridCellParams;
};

export function RenderCellPrice({ params }: ParamsProps) {
  return <>{fCurrency(params.row.price)}</>;
}

export function RenderCellApprove({ params }: ParamsProps) {
  return (
    <Label variant="soft" color={(params.row.approved && "info") || "default"}>
      {params.row.approved ? "Approved" : ""}
    </Label>
  );
}

export function RenderCellLocation({ params }: ParamsProps) {
  return (
    <ListItemText
      primary={params.row.location}
      secondary={params.row.location}
      primaryTypographyProps={{ typography: "body2", noWrap: true }}
      secondaryTypographyProps={{
        mt: 0.5,
        component: "span",
        typography: "caption",
      }}
    />
  );
}

export function RenderCellStock({ params }: ParamsProps) {
  return (
    <Stack sx={{ typography: "caption", color: "text.secondary" }}>
      <LinearProgress
        value={(params.row.available * 100) / params.row.quantity}
        variant="determinate"
        color={
          (params.row.inventoryType === "out of stock" && "error") ||
          (params.row.inventoryType === "low stock" && "warning") ||
          "success"
        }
        sx={{ mb: 1, height: 6, maxWidth: 80 }}
      />
      {!!params.row.available && params.row.available}{" "}
      {params.row.inventoryType}
    </Stack>
  );
}

export function RenderCellGraveyard({ params }: ParamsProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
      <Avatar
        alt={params.row.name}
        src={params.row.coverUrl}
        variant="rounded"
        sx={{ width: 64, height: 64, mr: 2 }}
      />

      <ListItemText
        disableTypography
        primary={
          <Link
            noWrap
            color="inherit"
            variant="subtitle2"
            onClick={params.row.onViewRow}
            href="/graveyard/i"
            sx={{ cursor: "pointer" }}
          >
            {params.row.name}
          </Link>
        }
        secondary={
          <Box
            component="div"
            sx={{ typography: "body2", color: "text.disabled" }}
          >
            {params.row.category}
          </Box>
        }
        sx={{ display: "flex", flexDirection: "column" }}
      />
    </Stack>
  );
}
