import Container from "@mui/material/Container";

import { paths } from "src/routes/paths";

import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";

import ServiceNewEditForm from "../service-new-edit-form";

// ----------------------------------------------------------------------

export default function ServiceCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : "lg"}>
      <CustomBreadcrumbs
        heading="Create My Service"
        links={[
          {
            name: "Service",
            href: paths.fellesraad.root,
          },
          {
            name: "New Service",
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ServiceNewEditForm />
    </Container>
  );
}
