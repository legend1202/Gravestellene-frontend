import * as Yup from 'yup';
// import { sub } from "date-fns";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo, useState, useEffect, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import Switch from "@mui/material/Switch";
// import FormControlLabel from "@mui/material/FormControlLabel";
import LoadingButton from '@mui/lab/LoadingButton';

import { useSearchParams } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';
// import { LoadingScreen } from "src/components/loading-screen";

import { useGetGraveyards } from 'src/api/graveyard';
import { createGravestone } from 'src/api/gravestone';

import { useSnackbar } from 'src/components/snackbar';

// import { useTranslate } from "src/locales";

import { fmDate } from 'src/utils/format-time';

import FormProvider, { RHFSelect, RHFTextField, RHFDatePicker } from 'src/components/hook-form';

import { IGravestoneItem } from 'src/types/gravestone';

import MailList from '../mail-list';
// ----------------------------------------------------------------------

const LABEL_INDEX = 'inbox';

type Props = {
  currentProduct?: IGravestoneItem;
};

export default function GravestoneCreateView({ currentProduct }: Props) {
  // const { t } = useTranslate();

  const { enqueueSnackbar } = useSnackbar();

  const { graveyards, graveyardsLoading } = useGetGraveyards();

  const searchParams = useSearchParams();

  const selectedLabelId = searchParams.get('label') || LABEL_INDEX;

  const [selectedGraveyardId, setSelectedGraveyardId] = useState('');

  const mdUp = useResponsive('up', 'md');
  const settings = useSettingsContext();

  const openMail = useBoolean();

  const newGravestoneSchema = Yup.object().shape({
    // graveyardId: Yup.string().required("graveyardId is required"),
    name: Yup.string().required('name is required'),
    gender: Yup.string().required('gender is required'),
    birthday: Yup.string().required('birthday is required'),
    deceasedDate: Yup.string().required('deceasedDate is required'),
    buriedDate: Yup.string().required('buriedDate is required'),
    quarter: Yup.string().required('quarter is required'),
    graveSite: Yup.string().required('graveSite is required'),
    homeTown: Yup.string().required('homeTown is required'),
    graveSiteNumber: Yup.string().required('graveSiteNumber is required'),
  });

  const defaultValues = useMemo(
    () => ({
      // graveyardId: currentProduct ? currentProduct.graveyardId : selectedMailId,
      name: currentProduct ? currentProduct.name : '',
      gender: currentProduct ? currentProduct.gender : '',
      birthday: currentProduct ? currentProduct.birthday : '',
      deceasedDate: currentProduct ? currentProduct.deceasedDate : '',
      buriedDate: currentProduct ? currentProduct.buriedDate : '',
      quarter: currentProduct ? currentProduct.quarter : '',
      graveSite: currentProduct ? currentProduct.graveSite : '',
      homeTown: currentProduct ? currentProduct.homeTown : '',
      graveSiteNumber: currentProduct ? currentProduct.graveSiteNumber : '',
    }),
    [currentProduct]
  );

  const methods = useForm({
    resolver: yupResolver(newGravestoneSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const handleClickMail = useCallback((graveyardId: string) => {
    console.log(graveyardId);
    setSelectedGraveyardId(graveyardId);

    // router.push(href);
  }, []);
  useEffect(() => {
    if (graveyards && graveyards.length > 0 && graveyards[0].id) {
      setSelectedGraveyardId(graveyards[0].id);
    }
  }, [graveyards]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (selectedGraveyardId) {
        const birthday = fmDate(values.birthday);
        const buriedDate = fmDate(values.buriedDate);
        const deceasedDate = fmDate(values.deceasedDate);
        const saveData = {
          ...values,
          birthday,
          buriedDate,
          deceasedDate,
          graveyardId: selectedGraveyardId,
        };
        const result = createGravestone(saveData);
        reset();
        enqueueSnackbar(currentProduct ? 'Update success!' : 'Create success!');
      } else {
        enqueueSnackbar('Select the Graveyard!');
      }
      // router.push(paths.dashboard.product.root);
    } catch (error) {
      console.error(error);
    }
  });

  // const renderLoading = (
  //   <LoadingScreen
  //     sx={{
  //       borderRadius: 1.5,
  //       bgcolor: "background.default",
  //     }}
  //   />
  // );

  // const renderEmpty = (
  //   <EmptyContent
  //     title={`Nothing in ${selectedLabelId}`}
  //     description="This folder is empty"
  //     imgUrl="/assets/icons/empty/ic_folder_empty.svg"
  //     sx={{
  //       borderRadius: 1.5,
  //       maxWidth: { md: 320 },
  //       bgcolor: "background.default",
  //     }}
  //   />
  // );

  const renderMailList = (
    <MailList
      mails={graveyards}
      loading={graveyardsLoading}
      //
      openMail={openMail.value}
      onCloseMail={openMail.onFalse}
      onClickMail={handleClickMail}
      //
      selectedLabelId={selectedLabelId}
      selectedMailId={selectedGraveyardId}
    />
  );

  const renderMailDetails = (
    <>
      {!graveyards ? (
        <EmptyContent
          imgUrl="/assets/icons/empty/ic_email_disabled.svg"
          sx={{
            borderRadius: 1.5,
            bgcolor: 'background.default',
            ...(!mdUp && {
              display: 'none',
            }),
          }}
        />
      ) : (
        <Stack spacing={3} sx={{ p: 1, flex: 1, justifyContent: 'space-between' }}>
          <RHFTextField name="name" label="Last Name and First Name" />
          <RHFSelect
            fullWidth
            name="gender"
            label="Gender"
            InputLabelProps={{ shrink: true }}
            PaperPropsSx={{ textTransform: 'capitalize' }}
          >
            {['MAN', 'WOMAN'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </RHFSelect>

          <RHFDatePicker name="birthday" label="Birthday" />

          <RHFDatePicker name="deceasedDate" label="Deceased Date" />

          <RHFDatePicker name="buriedDate" label="Buried Date" />

          <RHFTextField name="quarter" label="Quarter" />

          <RHFTextField name="graveSite" label="Grave Site" />

          <RHFTextField name="homeTown" label="Hometown" />

          <RHFTextField name="graveSiteNumber" label="Gravesite Number" />
        </Stack>
      )}
    </>
  );

  const renderActions = (
    <Grid
      xs={12}
      md={12}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        p: 1,
      }}
    >
      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
        {!currentProduct ? 'Create Product' : 'Save Changes'}
      </LoadingButton>
    </Grid>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Container maxWidth={settings.themeStretch ? false : 'xl'}>
        <Typography
          variant="h4"
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        >
          Gravestone
        </Typography>

        <Stack
          spacing={1}
          sx={{
            p: 1,
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
            bgcolor: 'background.neutral',
          }}
        >
          <Stack
            spacing={1}
            direction="row"
            sx={{
              minHeight: { md: 720 },
            }}
          >
            {renderMailList}

            {renderMailDetails}
          </Stack>
          {renderActions}
        </Stack>
      </Container>
    </FormProvider>
  );
}
