import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
// import Avatar from "@mui/material/Avatar";
import { GridCellParams } from "@mui/x-data-grid";
import ListItemText from "@mui/material/ListItemText";
// import LinearProgress from "@mui/material/LinearProgress";

import { fCurrency } from "src/utils/format-number";
// import { fTime, fDate } from "src/utils/format-time";

import Label from "src/components/label";

// ----------------------------------------------------------------------

type ParamsProps = {
  params: GridCellParams;
};

export function RenderCellPrice({ params }: ParamsProps) {
  return (
    <>
      {params.row.serviceDetails.map((service: any) => (
        <ListItemText
          key={service.id}
          disableTypography
          primary={
            <Box
              component="div"
              sx={{ typography: "body2", color: "text.disabled" }}
            >
              {fCurrency(service.price)}
            </Box>
          }
          sx={{ display: "flex", flexDirection: "column" }}
        />
      ))}
    </>
  );
}

export function RenderCellApprove({ params }: ParamsProps) {
  return (
    <Label variant="soft" color={(params.row.approved && "info") || "default"}>
      {params.row.approved ? "Approved" : "Draft"}
    </Label>
  );
}

export function RenderCellGraveyard({ params }: ParamsProps) {
  return (
    <ListItemText
      primary={params.row.gravestoneDetails.graveSite}
      // secondary={params.row.graveyardId}
      primaryTypographyProps={{ typography: "body2", noWrap: true }}
      // secondaryTypographyProps={{
      //   mt: 0.5,
      //   component: "span",
      //   typography: "caption",
      // }}
    />
  );
}

export function RenderCellServices({ params }: ParamsProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
      {params.row.serviceDetails.map((service: any) => (
        <ListItemText
          key={service.id}
          disableTypography
          primary={
            <Box
              component="div"
              sx={{ typography: "body2", color: "text.disabled" }}
            >
              {service.name}
            </Box>
          }
          sx={{ display: "flex", flexDirection: "column" }}
        />
      ))}
    </Stack>
  );
}

export function RenderCellUser({ params }: ParamsProps) {
  // console.log(params.row);
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
      {/* <Avatar
        alt={params.row.name}
        src={params.row.coverUrl}
        variant="rounded"
        sx={{ width: 64, height: 64, mr: 2 }}
      /> */}

      <ListItemText
        disableTypography
        primary={
          <Box
            component="div"
            sx={{ typography: "body2", color: "text.disabled" }}
          >
            {params.row.userDetails.name}
          </Box>
        }
      />
    </Stack>
  );
}
