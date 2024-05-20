import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { GridCellParams } from "@mui/x-data-grid";
import ListItemText from "@mui/material/ListItemText";

// ----------------------------------------------------------------------

type ParamsProps = {
  params: GridCellParams;
};

export function RenderCellGravestone({ params }: ParamsProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
      <Avatar
        alt={params.row.name}
        src={params.row.coverUrl}
        variant="rounded"
        sx={{ width: 64, height: 64, mr: 2 }}
      />

      <ListItemText
        primary={params.row.name}
        primaryTypographyProps={{ typography: "body2", noWrap: true }}
        secondaryTypographyProps={{
          mt: 0.5,
          component: "span",
          typography: "caption",
        }}
      />
    </Stack>
  );
}
export function RenderCellBirthday({ params }: ParamsProps) {
  return (
    <ListItemText
      primary={params.row.birthday}
      primaryTypographyProps={{ typography: "body2", noWrap: true }}
      secondaryTypographyProps={{
        mt: 0.5,
        component: "span",
        typography: "caption",
      }}
    />
  );
}
export function RenderCellDeceaseDate({ params }: ParamsProps) {
  return (
    <ListItemText
      primary={params.row.deceasedDate}
      primaryTypographyProps={{ typography: "body2", noWrap: true }}
      secondaryTypographyProps={{
        mt: 0.5,
        component: "span",
        typography: "caption",
      }}
    />
  );
}

export function RenderCellBuriedDate({ params }: ParamsProps) {
  return (
    <ListItemText
      primary={params.row.buriedDate}
      primaryTypographyProps={{ typography: "body2", noWrap: true }}
      secondaryTypographyProps={{
        mt: 0.5,
        component: "span",
        typography: "caption",
      }}
    />
  );
}

export function RenderCellHomeTown({ params }: ParamsProps) {
  return (
    <ListItemText
      primary={params.row.homeTown}
      primaryTypographyProps={{ typography: "body2", noWrap: true }}
      secondaryTypographyProps={{
        mt: 0.5,
        component: "span",
        typography: "caption",
      }}
    />
  );
}

export function RenderCellSite({ params }: ParamsProps) {
  return (
    <ListItemText
      primary={params.row.graveSiteNumber}
      primaryTypographyProps={{ typography: "body2", noWrap: true }}
      secondaryTypographyProps={{
        mt: 0.5,
        component: "span",
        typography: "caption",
      }}
    />
  );
}
export function RenderCellQuarter({ params }: ParamsProps) {
  return (
    <ListItemText
      primary={params.row.quarter}
      primaryTypographyProps={{ typography: "body2", noWrap: true }}
      secondaryTypographyProps={{
        mt: 0.5,
        component: "span",
        typography: "caption",
      }}
    />
  );
}
