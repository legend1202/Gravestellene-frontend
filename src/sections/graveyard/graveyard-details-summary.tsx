import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useGetServicesByGraveyardId } from 'src/api/service';

import Iconify from 'src/components/iconify';
import FormProvider from 'src/components/hook-form';

import { ICheckoutItem } from 'src/types/checkout';
import { IGraveyardItem } from 'src/types/graveyard';
import { IServiceListItem } from 'src/types/service';

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
  const { id, fellesraadId, name, location, picture, content, newsLink, forecastLink } = graveyard;

  const [serviceLists, setServiceLists] = useState<IServiceListItem[]>();

  const { services, servicesLoading } = useGetServicesByGraveyardId(id || '');

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

  const renderContactinfoTitle = <Box sx={{ typography: 'h5' }}>Contact me!</Box>;

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
      <Box sx={{ typography: 'h5' }}>Find More!</Box>
      {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <Link
          variant="subtitle2"
          sx={{
            color: 'text.secondary',
            display: 'inline-flex',
            alignItems: 'center',
          }}
          href="https://www.google.com/maps/place/%D0%9D%D0%BE%D1%80%D0%B2%D0%B5%D0%B3%D0%B8%D1%8F/@64.55875,17.7099499,5z/data=!3m1!4b1!4m6!3m5!1s0x461268458f4de5bf:0xa1b03b9db864d02b!8m2!3d60.472024!4d8.468946!16zL20vMDViNHc?entry=ttu"
          target="_blank"
          rel="noopener"
        >
          <Iconify icon="mingcute:add-line" width={16} sx={{ mr: 1 }} />
          Map - You can see Google Map!
        </Link>
      </Typography> */}
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
          News - {newsLink}
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
          Forecast
        </Link>
      </Typography>
    </>
  );

  const renderContactinfo = (
    <>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Phone number:
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        E-mail:
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Address: {location}
      </Typography>
    </>
  );
  const renderSevicesTitle = <Box sx={{ typography: 'h5' }}>Services</Box>;

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
                  <Typography
                    key={servicelist?.id}
                    variant="body2"
                    sx={{ color: 'text.secondary' }}
                  >
                    {servicelist?.name}
                  </Typography>
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
