import { useMemo, useState } from "react";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";

// ----------------------------------------------------------------------

import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import CardHeader from "@mui/material/CardHeader";
import LoadingButton from "@mui/lab/LoadingButton";

import { useAuthContext } from "src/auth/hooks";

import FormProvider, { RHFTextField } from "src/components/hook-form";

import { useCheckoutContext } from "../checkout/context";

type Props = {
  handleSetContactInfo: (query: any) => void;
};

export default function CheckoutBillingAddress({
  handleSetContactInfo,
}: Props) {
  const { user } = useAuthContext();

  const [errorMsg] = useState("");

  const checkout = useCheckoutContext();

  const NewProductSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    ssn: Yup.string().required("SSN is required"),
    email: Yup.string().required("Mail is required"),
    phone: Yup.string().required("Phone is required"),
  });

  const defaultValues = useMemo(
    () => ({
      name: user?.name || "",
      ssn: user?.ssn || "",
      email: user?.email || "",
      phone: user?.phone || "",
    }),
    [user]
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const address = {
    name: values.name,
    fullAddress: values.email,
  };
  const onSubmit = handleSubmit(() => {
    handleSetContactInfo(values);
    checkout.onCreateBilling(address);
  });
  const renderDetails = (
    <Grid xs={12} md={12}>
      <Card>
        <CardHeader title="Details" />

        <Stack spacing={3} sx={{ p: 3 }}>
          <RHFTextField name="ssn" label="Social Security Number" />
          <RHFTextField name="name" label="Your Name" />
          <RHFTextField name="email" label="Your E-mail" />
          <RHFTextField name="phone" label="Your Phone" />
        </Stack>
      </Card>
    </Grid>
  );

  const renderActions = (
    <Grid
      xs={12}
      md={12}
      sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
    >
      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        loading={isSubmitting}
      >
        Save Contact
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
