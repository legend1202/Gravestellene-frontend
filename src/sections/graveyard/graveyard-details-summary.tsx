import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
// import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
// import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
// import { formHelperTextClasses } from "@mui/material/FormHelperText";

import { paths } from "src/routes/paths";
import { useRouter } from "src/routes/hooks";

// import { fCurrency, fShortenNumber } from "src/utils/format-number";

import Label from "src/components/label";
import Iconify from "src/components/iconify";
// import { ColorPicker } from "src/components/color-utils";
import FormProvider from "src/components/hook-form";

import { IProductItem } from "src/types/product";
import { ICheckoutItem } from "src/types/checkout";
import { IGraveyardItem } from "src/types/graveyard";

// import IncrementerButton from "./common/incrementer-button";

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
  const router = useRouter();

  const {
    id,
    fellesraadId,
    name,
    location,
    picture,
    content,
    newsLink,
    forecastLink,
  } = graveyard;

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

  const renderContactinfoTitle = (
    <Box sx={{ typography: "h5" }}>
      Contact me!
    </Box>
  );

  const renderShare = (
    <Stack direction="row" spacing={3} justifyContent="center">
      <Link
        variant="subtitle2"
        sx={{
          color: "text.secondary",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <Iconify icon="mingcute:add-line" width={16} sx={{ mr: 1 }} />
        Facebook
      </Link>

      <Link
        variant="subtitle2"
        sx={{
          color: "text.secondary",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <Iconify icon="solar:heart-bold" width={16} sx={{ mr: 1 }} />
        Twitter
      </Link>

      <Link
        variant="subtitle2"
        sx={{
          color: "text.secondary",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <Iconify icon="solar:share-bold" width={16} sx={{ mr: 1 }} />
        Instagram
      </Link>
    </Stack>
  );

  const renderFindmore = (
    <>
      <Box sx={{ typography: "h5" }}>Find More!</Box>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        <Link
          variant="subtitle2"
          sx={{
            color: "text.secondary",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <Iconify icon="mingcute:add-line" width={16} sx={{ mr: 1 }} />
          Map - You can see Google Map!
        </Link>
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        <Link
          variant="subtitle2"
          sx={{
            color: "text.secondary",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <Iconify icon="mingcute:add-line" width={16} sx={{ mr: 1 }} />
          News - {newsLink}
        </Link>
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        <Link
          variant="subtitle2"
          sx={{
            color: "text.secondary",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <Iconify icon="mingcute:add-line" width={16} sx={{ mr: 1 }} />
          Forecast - {forecastLink}
        </Link>
      </Typography>
    </>
  );

  const renderContactinfo = (
    <>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Phone number: +1 234 5678 9012
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        E-mail: sorokin@mail.co
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Address: Artists&apos; tombs in an 1808 burial ground
      </Typography>
    </>
  );

  const renderLocation = (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        color: "text.disabled",
        typography: "body2",
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
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        {renderFindmore}

        <Divider sx={{ borderStyle: "dashed" }} />

        {renderShare}
      </Stack>
    </FormProvider>
  );
}
