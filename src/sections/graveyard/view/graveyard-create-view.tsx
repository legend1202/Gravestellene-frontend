import Container from "@mui/material/Container";

import { paths } from "src/routes/paths";

import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";

import GraveyardNewEditForm from "../graveyard-new-edit-from";

// ----------------------------------------------------------------------

export default function GraveyardCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : "lg"}>
      <CustomBreadcrumbs
        heading="Create a new Graveyard"
        links={[
          {
            name: "Fellesraad",
            href: paths.fellesraad.root,
          },
          {
            name: "New Graveyard",
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <GraveyardNewEditForm />
    </Container>
  );
}
