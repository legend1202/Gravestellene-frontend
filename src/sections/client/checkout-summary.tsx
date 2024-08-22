import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import Button from "@mui/material/Button";
// import Divider from "@mui/material/Divider";
// import TextField from "@mui/material/TextField";
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
// import InputAdornment from "@mui/material/InputAdornment";

import { fCurrency } from 'src/utils/format-number';

import { useTranslate } from 'src/locales';

// import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

type Props = {
  total: number;
};

export default function CheckoutSummary({ total }: Props) {
  const { t } = useTranslate();
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title={t('Order Summary')} />

      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1">{t('Total')}</Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="subtitle1" sx={{ color: 'error.main' }}>
              {fCurrency(total)}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
