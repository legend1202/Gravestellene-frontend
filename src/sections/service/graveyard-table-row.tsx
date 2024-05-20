import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
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

export function RenderCellDescription({ params }: ParamsProps) {
  return (
    <ListItemText
      primary={params.row.description}
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
      <ListItemText
        disableTypography
        primary={
          <Box component="div" sx={{ typography: "subtitle2" }}>
            {params.row.name}
          </Box>
        }
        sx={{ display: "flex", flexDirection: "column" }}
      />
    </Stack>
  );
}
