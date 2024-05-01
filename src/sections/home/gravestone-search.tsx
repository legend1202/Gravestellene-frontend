// import { useCallback } from "react";

import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
// import { alpha } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import InputBase, { inputBaseClasses } from "@mui/material/InputBase";

import { PATH_SEARCH_GRAVESTONE } from "src/config-global";

import Iconify from "src/components/iconify";
import Scrollbar from "src/components/scrollbar";

import { IProductFilters, IProductFilterValue } from "src/types/product";

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
  //
  filters: IProductFilters;
  onFilters: (name: string, value: IProductFilterValue) => void;
  //
  canReset: boolean;
  onResetFilters: VoidFunction;
  //
  genderOptions: {
    value: string;
    label: string;
  }[];
  categoryOptions: string[];
  ratingOptions: string[];
  colorOptions: string[];
};

export default function GravestoneSearch({
  open,
  onOpen,
  onClose,
  //
  filters,
  onFilters,
  //
  canReset,
  onResetFilters,
  //
  colorOptions,
  genderOptions,
  ratingOptions,
  categoryOptions,
}: Props) {
  // const marksLabel = [...Array(21)].map((_, index) => {
  //   const value = index * 10;

  //   const firstValue = index === 0 ? `$${value}` : `${value}`;

  //   return {
  //     value,
  //     label: index % 4 ? "" : firstValue,
  //   };
  // });

  // const handleFilterGender = useCallback(
  //   (newValue: string) => {
  //     const checked = filters.gender.includes(newValue)
  //       ? filters.gender.filter((value) => value !== newValue)
  //       : [...filters.gender, newValue];
  //     onFilters('gender', checked);
  //   },
  //   [filters.gender, onFilters]
  // );

  // const handleFilterCategory = useCallback(
  //   (newValue: string) => {
  //     onFilters('category', newValue);
  //   },
  //   [onFilters]
  // );

  // const handleFilterColors = useCallback(
  //   (newValue: string | string[]) => {
  //     onFilters("colors", newValue);
  //   },
  //   [onFilters]
  // );

  // const handleFilterPriceRange = useCallback(
  //   (event: Event, newValue: number | number[]) => {
  //     onFilters("priceRange", newValue as number[]);
  //   },
  //   [onFilters]
  // );

  // const handleFilterRating = useCallback(
  //   (newValue: string) => {
  //     onFilters("rating", newValue);
  //   },
  //   [onFilters]
  // );

  const renderHead = (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2, pr: 1, pl: 2.5 }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Advanced Search
      </Typography>

      <Tooltip title="Reset">
        <IconButton onClick={onResetFilters}>
          <Badge color="error" variant="dot" invisible={!canReset}>
            <Iconify icon="solar:restart-bold" />
          </Badge>
        </IconButton>
      </Tooltip>

      <IconButton onClick={onClose}>
        <Iconify icon="mingcute:close-line" />
      </IconButton>
    </Stack>
  );

  const renderName = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Name
      </Typography>
      <TextField
        variant="outlined"
        required
        fullWidth
        label="First Name"
        defaultValue=""
        sx={{ my: 1 }}
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        label="Maiden Name"
        defaultValue=""
        sx={{ my: 1 }}
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        label="Last Name"
        defaultValue=""
        sx={{ my: 1 }}
      />
    </Stack>
  );

  const renderBornDate = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Birthday
      </Typography>
      <DatePicker
        label="From"
        // value={value}
        // onChange={(newValue) => setValue(newValue)}
        sx={{ my: 1 }}
      />
      <DatePicker
        label="To"
        // value={value}
        // onChange={(newValue) => setValue(newValue)}
        sx={{ my: 1 }}
      />
    </Stack>
  );

  const renderDeathDate = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Date of death
      </Typography>
      <DatePicker
        label="From"
        // value={value}
        // onChange={(newValue) => setValue(newValue)}
        sx={{ my: 1 }}
      />
      <DatePicker
        label="To"
        // value={value}
        // onChange={(newValue) => setValue(newValue)}
        sx={{ my: 1 }}
      />
    </Stack>
  );

  const renderLocation = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Location
      </Typography>
      <TextField
        variant="outlined"
        required
        fullWidth
        label="Locatin"
        defaultValue=""
        sx={{ my: 1 }}
      />
    </Stack>
  );

  return (
    <>
      <Button
        disableRipple
        color="success"
        variant="contained"
        endIcon={
          <Badge color="error" variant="dot" invisible={!canReset}>
            <Iconify icon="ic:round-filter-list" />
          </Badge>
        }
        onClick={onOpen}
      >
        Advanced Search
      </Button>

      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        slotProps={{
          backdrop: { invisible: true },
        }}
        PaperProps={{
          sx: { width: 320 },
        }}
      >
        {renderHead}

        <Divider />

        <Scrollbar sx={{ px: 2.5, py: 3 }}>
          <Stack spacing={3}>
            {renderName}

            {renderBornDate}

            {renderDeathDate}

            {renderLocation}

            <Button
              variant="contained"
              color="success"
              href={PATH_SEARCH_GRAVESTONE}
            >
              Search
            </Button>
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}
