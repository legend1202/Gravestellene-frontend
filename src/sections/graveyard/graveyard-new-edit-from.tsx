import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo, useState, useEffect, useCallback } from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import { createGraveyard } from 'src/api/graveyard';

// import { paths } from "src/routes/paths";
// import { useRouter } from "src/routes/hooks";

// import { useSnackbar } from "src/components/snackbar";
import FormProvider, { RHFEditor, RHFUpload, RHFTextField } from 'src/components/hook-form';

import { IGraveyardItem, IImageType } from "src/types/graveyard";
// import { useAuthContext } from "src/auth/hooks";

// ----------------------------------------------------------------------

type Props = {
  currentProduct?: IGraveyardItem;
};

export default function GraveyardNewEditForm({ currentProduct }: Props) {
  // const router = useRouter();

  // const { user } = useAuthContext();

  // const { enqueueSnackbar } = useSnackbar();

  const [images, setImages] = useState([] as IImageType);

  const NewProductSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    location: Yup.string().required('Location is required'),
    picture: Yup.array().min(1, 'Images is required'),
    content: Yup.string().required('Content is required'),
    newsLink: Yup.string().required('News is required'),
    forecastLink: Yup.string().required('Forecast is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentProduct?.name || '',
      location: currentProduct?.location || '',
      picture: currentProduct?.picture || [],
      content: currentProduct?.content || '',
      newsLink: currentProduct?.newsLink || '',
      forecastLink: currentProduct?.forecastLink || '',
    }),
    [currentProduct]
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (currentProduct) {
      reset(defaultValues);
    }
  }, [currentProduct, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.info('DATA', data);
      const searchResults = createGraveyard(data);
      console.log(searchResults);
      // reset();
      // enqueueSnackbar(currentProduct ? "Update success!" : "Create success!");
      // router.push(paths.dashboard.product.root);
    } catch (error) {
      console.error(error);
    }
  });

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const files = values.picture || [];
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setImages([...images, ...acceptedFiles]);
      setValue("picture", [...files, ...newFiles], { shouldValidate: true });
    },
    [setValue, values.picture, images]
  );

  const handleRemoveFile = useCallback(
    (inputFile: File | string) => {
      const filtered = values.picture && values.picture?.filter((file) => file !== inputFile);
      setValue('picture', filtered);
    },
    [setValue, values.picture]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValue('picture', []);
  }, [setValue]);

  const handleUploadImage = () => {
    console.log("====", images);
  };
  const renderDetails = (
    <Grid xs={12} md={12}>
      <Card>
        <CardHeader title="Details" />

        <Stack spacing={3} sx={{ p: 3 }}>
          <RHFTextField name="name" label="Graveyard Name" />

          <RHFTextField name="location" label="Graveyard location" />

          <Stack spacing={1.5}>
            <Typography variant="subtitle2">Content</Typography>
            <RHFEditor simple name="content" />
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="subtitle2">Pictures</Typography>
            <RHFUpload
              multiple
              thumbnail
              name="picture"
              maxSize={3145728}
              onDrop={handleDrop}
              onRemove={handleRemoveFile}
              onRemoveAll={handleRemoveAllFiles}
              onUpload={handleUploadImage}
            />
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );

  const renderProperties = (
    <Grid xs={12} md={12}>
      <Card>
        <CardHeader title="Properties" />

        <Stack spacing={3} sx={{ p: 3 }}>
          <Box
            columnGap={2}
            rowGap={3}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              md: 'repeat(1, 1fr)',
            }}
          >
            <RHFTextField name="newsLink" label="News" />

            <RHFTextField name="forecastLink" label="Forecast" />
          </Box>
        </Stack>
      </Card>
    </Grid>
  );

  const renderActions = (
    <Grid xs={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
      <FormControlLabel control={<Switch defaultChecked />} label="" sx={{ flexGrow: 1, pl: 3 }} />

      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
        {!currentProduct ? 'Create Product' : 'Save Changes'}
      </LoadingButton>
    </Grid>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}

        {renderProperties}

        {renderActions}
      </Grid>
    </FormProvider>
  );
}
