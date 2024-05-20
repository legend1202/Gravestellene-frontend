import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useMemo, useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
// import Switch from "@mui/material/Switch";
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import LoadingButton from '@mui/lab/LoadingButton';
// import FormControlLabel from "@mui/material/FormControlLabel";

import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useTranslate } from 'src/locales';
import { createService, updateService } from 'src/api/service';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

import { IServiceItem } from 'src/types/service';

// ----------------------------------------------------------------------

type Props = {
  currentService?: IServiceItem;
};

export default function GraveyardNewEditForm({ currentService }: Props) {
  const { t } = useTranslate();
  const { enqueueSnackbar } = useSnackbar();
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const NewProductSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.string().required('Price is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentService?.name || '',
      description: currentService?.description || '',
      price: currentService?.price || '',
    }),
    [currentService]
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (currentService) {
      reset(defaultValues);
    }
  }, [currentService, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (currentService) {
        const saveData = { ...currentService, ...values };
        const updateResults: any = await updateService(saveData);
        if (updateResults.searchResults?.success) {
          reset();
          enqueueSnackbar(t('update_success'));
        } else {
          setErrorMsg(updateResults?.message);
        }
      } else {
        console.log(values);
        const saveData = { ...values, unit: '$' };
        const saveResults: any = await createService(saveData);
        if (saveResults.searchResults?.success) {
          reset();
          enqueueSnackbar(t('create_success'));
        } else {
          setErrorMsg(saveResults?.message);
        }
      }
      router.push(paths.fellesraad.service.list);
    } catch (error) {
      setErrorMsg(error?.message);
      console.error(error);
    }
  });

  const renderDetails = (
    <Grid xs={12} md={12}>
      <Card>
        <CardHeader title={t('details')} />

        <Stack spacing={3} sx={{ p: 3 }}>
          <RHFTextField name="name" label={t('service_name')} />

          <RHFTextField name="description" label={t('service_description')} />

          <RHFTextField
            name="price"
            label={t('service_price')}
            placeholder="0.00"
            type="number"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box component="span" sx={{ color: 'text.disabled' }}>
                    $
                  </Box>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Card>
    </Grid>
  );

  const renderActions = (
    <Grid
      xs={12}
      md={12}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
    >
      {/* <FormControlLabel
        control={<Switch defaultChecked />}
        label=""
        sx={{ flexGrow: 1, pl: 3 }}
      /> */}

      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
        {!currentService ? t('create_service') : t('save_changes')}
      </LoadingButton>
    </Grid>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {!!errorMsg && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errorMsg}
          </Alert>
        )}

        {renderDetails}

        {renderActions}
      </Grid>
    </FormProvider>
  );
}
