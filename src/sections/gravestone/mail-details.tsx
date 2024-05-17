import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useMemo, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Unstable_Grid2";
import CardHeader from "@mui/material/CardHeader";
// import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import FormControlLabel from "@mui/material/FormControlLabel";

import { createGraveyard } from "src/api/graveyard";

// import { paths } from "src/routes/paths";
// import { useRouter } from "src/routes/hooks";

// import { useSnackbar } from "src/components/snackbar";
import FormProvider, {
  // RHFEditor,
  // RHFUpload,
  RHFTextField,
} from "src/components/hook-form";

import { IGraveyardItem } from "src/types/graveyard";
import { useTranslate } from "src/locales";
// import { useAuthContext } from "src/auth/hooks";

// ----------------------------------------------------------------------

type Props = {
  currentProduct?: IGraveyardItem;
};

const tempDesc = `
  <h6>The Cemetery of Our Saviour</h6>
  
  
  <br/>
  <br/>
  
  <h6>About US</h6>
  <br/>
  <ul>
    <li><p>The Cemetery of Our Saviour is a cemetery in Oslo, Norway, located north of Hammersborg in Gamle Aker district.</p></li>
    <li><p>It is located adjacent to the older Old Aker Cemetery and was created in 1808 as a result of the great famine and cholera epidemic of the Napoleonic Wars.</p></li>
    <li><p>Its grounds were extended in 1911</p></li>
  </ul>
  
  <br/>
  <br/>
  
  <h6>Benefits</h6>
  <br/>
  <ul>
    <li>
      <p>Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort</p>
      and durability.
    </li>
    <li>
      <p>Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushio</p>
      ning underfoot.
    </li>
    <li><p>The foam midsole feels springy and soft.</p></li>
    <li><p>The rubber outsole adds traction and durability.</p></li>
  </ul>
  
  <br/>
  <br/>
  
  <h6>Delivery and Returns</h6>
  <br/>
  <p>Your order of $200 or more gets free standard delivery.</p>
  <br/>
`;

export default function MailDetails({ currentProduct }: Props) {
  // const router = useRouter();
  const { t } = useTranslate();
  // const { user } = useAuthContext();

  // const { enqueueSnackbar } = useSnackbar();

  // const [images, setImages] = useState([] as IImageType);

  const NewProductSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    location: Yup.string().required("Location is required"),
    picture: Yup.array().min(1, "Images is required"),
    content: Yup.string().required("Content is required"),
    newsLink: Yup.string().required("News is required"),
    forecastLink: Yup.string().required("Forecast is required"),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentProduct ? "The Cemetery of Our Saviour" : "",
      location: currentProduct ? "Hammersborg in Gamle Aker district" : "",
      picture: currentProduct?.picture || [],
      content: currentProduct ? tempDesc : "",
      newsLink: currentProduct?.newsLink || "",
      forecastLink: currentProduct?.forecastLink || "",
    }),
    [currentProduct]
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const {
    reset,
    // watch,
    // setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // const values = watch();

  useEffect(() => {
    if (currentProduct) {
      reset(defaultValues);
    }
  }, [currentProduct, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const searchResults = createGraveyard(data);
      console.log(searchResults);
      // reset();
      // enqueueSnackbar(currentProduct ? "Update success!" : "Create success!");
      // router.push(paths.dashboard.product.root);
    } catch (error) {
      console.error(error);
    }
  });

  const renderDetails = (
    <Grid xs={12} md={12}>
      <Card>
        <CardHeader title={t("gravestone")} />

        <Stack spacing={3} sx={{ p: 3 }}>
          <RHFTextField name="name" label="Last Name and First Name" />

          <RHFTextField name="birthday" label="Birthday" />

          <RHFTextField name="deceasedDate" label="Deceased Date" />

          <RHFTextField name="buriedDate" label="Buried Date" />

          <RHFTextField name="quarter" label="Quarter" />

          <RHFTextField name="graveSite" label="Grave Site" />
          <RHFTextField name="hometown" label="Hometown" />
          <RHFTextField name="graveSiteNumber" label="Gravesite Number" />
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
              xs: "repeat(1, 1fr)",
              md: "repeat(1, 1fr)",
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
    <Grid xs={12} md={12} sx={{ display: "flex", alignItems: "center" }}>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label=""
        sx={{ flexGrow: 1, pl: 3 }}
      />

      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        loading={isSubmitting}
      >
        {!currentProduct ? "Create Product" : "Save Changes"}
      </LoadingButton>
    </Grid>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}

        {/* {renderProperties} */}

        {renderActions}
      </Grid>
    </FormProvider>
  );
}
