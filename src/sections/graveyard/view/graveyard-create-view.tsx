import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import GraveyardNewEditForm from '../graveyard-new-edit-from';
import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

export default function GraveyardCreateView() {
  const settings = useSettingsContext();

  const { t } = useTranslate();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={t('create_a_new_graveyard')}
        links={[
          {
            name: t('Graveyard'),
            href: paths.fellesraad.root,
          },
          {
            name: t('new_graveyard'),
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
