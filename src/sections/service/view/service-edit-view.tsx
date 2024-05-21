import Container from "@mui/material/Container";

import { paths } from "src/routes/paths";

import { useGetService } from "src/api/service";

import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";

import GraveyardNewEditForm from "../service-new-edit-form";

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function ServiceEditView({ id }: Props) {
  const settings = useSettingsContext();

  const { service: currentService } = useGetService(id);

  return (
    <Container maxWidth={settings.themeStretch ? false : "lg"}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          { name: "Dashboard", href: paths.dashboard.root },
          {
            name: "Service",
            href: paths.fellesraad.service.root,
          },
          { name: currentService?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <GraveyardNewEditForm currentService={currentService} />
    </Container>
  );
}
