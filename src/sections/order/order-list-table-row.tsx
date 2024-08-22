import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { GridCellParams } from '@mui/x-data-grid';
import ListItemText from '@mui/material/ListItemText';

import { fCurrency } from 'src/utils/format-number';

import { useTranslate } from 'src/locales';

import Label from 'src/components/label';

// ----------------------------------------------------------------------

type ParamsProps = {
  params: GridCellParams;
};

export function RenderCellPrice({ params }: ParamsProps) {
  return (
    <>
      {params.row.serviceDetails.map((service: any) => (
        <ListItemText
          key={service.id}
          disableTypography
          primary={
            <Box component="div" sx={{ typography: 'body2', color: 'text.disabled' }}>
              {fCurrency(service.price)}
            </Box>
          }
          sx={{ display: 'flex', flexDirection: 'column' }}
        />
      ))}
    </>
  );
}

export function RenderCellApprove({ params }: ParamsProps) {
  const { t } = useTranslate();
  return (
    <Label variant="soft" color={(params.row.approved && 'info') || 'default'}>
      {params.row.approved ? t('Approved') : t('Draft')}
    </Label>
  );
}

export function RenderCellGraveyard({ params }: ParamsProps) {
  return (
    <ListItemText
      primary={`${params.row.gravestoneDetails.firstName} ${params.row.gravestoneDetails.lastName}`}
      primaryTypographyProps={{ typography: 'body2', noWrap: true }}
    />
  );
}

export function RenderCellServices({ params }: ParamsProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
      {params.row.serviceDetails.map((service: any) => (
        <ListItemText
          key={service.id}
          disableTypography
          primary={
            <Box component="div" sx={{ typography: 'body2', color: 'text.disabled' }}>
              {service.name}
            </Box>
          }
          sx={{ display: 'flex', flexDirection: 'column' }}
        />
      ))}
    </Stack>
  );
}

export function RenderCellUser({ params }: ParamsProps) {
  // console.log(params.row);
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
      {/* <Avatar
        alt={params.row.name}
        src={params.row.coverUrl}
        variant="rounded"
        sx={{ width: 64, height: 64, mr: 2 }}
      /> */}

      <ListItemText
        disableTypography
        primary={
          <Box component="div" sx={{ typography: 'body2', color: 'text.disabled' }}>
            {params.row.userDetails.name}
          </Box>
        }
      />
    </Stack>
  );
}
