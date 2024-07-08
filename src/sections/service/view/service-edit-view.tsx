import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';
import { useGetService } from 'src/api/service';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import GraveyardNewEditForm from '../service-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function ServiceEditView({ id }: Props) {
  const settings = useSettingsContext();

  const { t } = useTranslate();

  const { service: currentService } = useGetService(id);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={t('Edit')}
        links={[
          { name: t('Dashboard'), href: paths.dashboard.root },
          {
            name: t('Service'),
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
