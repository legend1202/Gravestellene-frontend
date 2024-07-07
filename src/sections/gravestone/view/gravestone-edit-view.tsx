import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { GetGravestone } from 'src/api/gravestone';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { IGravestoneItem } from 'src/types/gravestone';

import GravestoneCreateView from './gravestone-create-view';
import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function GravestoneEditView({ id }: Props) {
  const settings = useSettingsContext();

  const { t } = useTranslate();

  const [currentGravestone, setCurrentGravestone] = useState<IGravestoneItem>();

  useEffect(() => {
    handleGetGravestone(id);
  }, [id]);

  const handleGetGravestone = async (graveId: string) => {
    const { gravestone } = await GetGravestone(graveId);
    if (gravestone?.length > 0) {
      setCurrentGravestone(gravestone[0]);
    }
  };

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={t('Edit')}
        links={[
          { name: t('Fellesraad'), href: paths.dashboard.root },
          {
            name: t('Graveyard'),
            href: paths.dashboard.product.root,
          },
          // { name: currentGravestone?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      {currentGravestone && <GravestoneCreateView currentGravestone={currentGravestone} />}
    </Container>
  );
}
