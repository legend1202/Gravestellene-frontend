import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useTranslate } from 'src/locales';
import { useGetServicesListsByGraveyardId } from 'src/api/service';

import Iconify from 'src/components/iconify';
import FormProvider from 'src/components/hook-form';

import { ICheckoutItem } from 'src/types/checkout';
import { IGraveyardItem } from 'src/types/graveyard';
import { IServiceRequestedItem } from 'src/types/service';

import GraveyardDetailsSevices from './graveyard-details-services';
// ----------------------------------------------------------------------

type Props = {
  graveyard: IGraveyardItem;
  items?: ICheckoutItem[];
  disabledActions?: boolean;
  onGotoStep?: (step: number) => void;
  onAddCart?: (cartItem: ICheckoutItem) => void;
};

export default function GraveyardDetailsSummary({
  items,
  graveyard,
  onAddCart,
  onGotoStep,
  disabledActions,
  ...other
}: Props) {
  const { t } = useTranslate();
  const { id, fellesraadId, name, location, picture, content, newsLink, forecastLink } = graveyard;

  const [serviceLists, setServiceLists] = useState<IServiceRequestedItem[]>();

  const { services, servicesLoading } = useGetServicesListsByGraveyardId(id || '');

  const defaultValues = {
    id,
    fellesraadId,
    name,
    location,
    picture,
    content,
    newsLink,
    forecastLink,
  };

  const methods = useForm({
    defaultValues,
  });

  const { reset } = methods;

  useEffect(() => {
    if (graveyard) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graveyard]);

  useEffect(() => {
    if (!servicesLoading) {
      setServiceLists(services);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [servicesLoading]);

  const renderContactinfoTitle = <Box sx={{ typography: 'h5' }}>{t('contact_me')}</Box>;

  const renderShare = (
    <Stack direction="row" spacing={3} justifyContent="center">
      <Link
        variant="subtitle2"
        sx={{
          color: 'text.secondary',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <Iconify icon="mingcute:add-line" width={16} sx={{ mr: 1 }} />
        Facebook
      </Link>

      <Link
        variant="subtitle2"
        sx={{
          color: 'text.secondary',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <Iconify icon="solar:heart-bold" width={16} sx={{ mr: 1 }} />
        Twitter
      </Link>

      <Link
        variant="subtitle2"
        sx={{
          color: 'text.secondary',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <Iconify icon="solar:share-bold" width={16} sx={{ mr: 1 }} />
        Instagram
      </Link>
    </Stack>
  );

  const renderFindmore = (
    <>
      <Box sx={{ typography: 'h5' }}>{t('find_more')}</Box>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <Link
          variant="subtitle2"
          sx={{
            color: 'text.secondary',
            display: 'inline-flex',
            alignItems: 'center',
          }}
          href={newsLink}
          target="_blank"
          rel="noopener"
        >
          <Iconify icon="mingcute:add-line" width={16} sx={{ mr: 1 }} />
          {t('news')} - {newsLink}
        </Link>
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <Link
          variant="subtitle2"
          sx={{
            color: 'text.secondary',
            display: 'inline-flex',
            alignItems: 'center',
          }}
          href={forecastLink}
          target="_blank"
          rel="noopener"
        >
          <Iconify icon="mingcute:add-line" width={16} sx={{ mr: 1 }} />
          {t('forecast')}
        </Link>
      </Typography>
    </>
  );

  const renderContactinfo = (
    <>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {t('contact_me')}:
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {t('email')}:
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {t('address')}: {location}
      </Typography>
    </>
  );
  const renderSevicesTitle = (
    <Box sx={{ typography: 'h5' }}>
      {t('services')} <small>( {t('company')})</small>
    </Box>
  );

  const renderLocation = (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        color: 'text.disabled',
        typography: 'body2',
      }}
    >
      <Rating size="small" value={5} precision={0.1} readOnly sx={{ mr: 1 }} />
      {location}
    </Stack>
  );

  return (
    <FormProvider methods={methods}>
      <Stack spacing={3} sx={{ pt: 3 }} {...other}>
        <Stack spacing={2} alignItems="flex-start">
          <Typography variant="h5">{name}</Typography>

          {renderLocation}

          {renderContactinfoTitle}

          {renderContactinfo}

          {renderSevicesTitle}

          {serviceLists &&
            serviceLists.map(
              (servicelist) =>
                servicelist?.approved && (
                  <GraveyardDetailsSevices key={servicelist?.id} service={servicelist} />
                )
            )}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {renderFindmore}

        <Divider sx={{ borderStyle: 'dashed' }} />

        {renderShare}
      </Stack>
    </FormProvider>
  );
}
