import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';
import { useGetGraveyard } from 'src/api/graveyard';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import GraveyardNewEditForm from '../graveyard-new-edit-from';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function GraveyardEditView({ id }: Props) {
  const settings = useSettingsContext();

  const { t } = useTranslate();

  const { graveyard: currentProduct } = useGetGraveyard(id);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={t('Edit')}
        links={[
          { name: t('Dashboard'), href: paths.dashboard.root },
          {
            name: t('Product'),
            href: paths.dashboard.product.root,
          },
          // { name: currentProduct?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <GraveyardNewEditForm currentProduct={currentProduct} />
    </Container>
  );
}
