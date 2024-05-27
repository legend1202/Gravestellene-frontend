import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { fmDate } from "src/utils/format-time";

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

  graveyardName: string;
  startDOB: string;
  endDOB: string;
  startDeceasedDate: string;
  endDeceasedDate: string;
  graveSite: string;
  setGraveyardName: any;
  setStartDOB: any;
  setEndDOB: any;
  setStartDeceasedDate: any;
  setEndDeceasedDate: any;
  setGraveSite: any;
  handleShowSearchResult: VoidFunction;
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
  graveyardName,
  startDOB,
  endDOB,
  startDeceasedDate,
  endDeceasedDate,
  graveSite,
  setGraveyardName,
  setStartDOB,
  setEndDOB,
  setStartDeceasedDate,
  setEndDeceasedDate,
  setGraveSite,
  handleShowSearchResult,
}: Props) {
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
        label="Name"
        defaultValue=""
        sx={{ my: 1 }}
        value={graveyardName}
        onChange={(e) => setGraveyardName(e.target.value)}
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
        // value={startDOB}
        onChange={(newValue) => {
          setStartDOB(fmDate(newValue));
        }}
        sx={{ my: 1 }}
      />
      <DatePicker
        label="To"
        // value={endDOB}
        onChange={(newValue) => setEndDOB(fmDate(newValue))}
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
        // value={startDeceasedDate}
        onChange={(newValue) => setStartDeceasedDate(fmDate(newValue))}
        sx={{ my: 1 }}
      />
      <DatePicker
        label="To"
        // value={endDeceasedDate}
        onChange={(newValue) => setEndDeceasedDate(fmDate(newValue))}
        sx={{ my: 1 }}
      />
    </Stack>
  );

  const renderLocation = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Grave Site
      </Typography>
      <TextField
        variant="outlined"
        required
        fullWidth
        label="Locatin"
        defaultValue=""
        sx={{ my: 1 }}
        value={graveSite}
        onChange={(e) => setGraveSite(e.target.value)}
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

            {/* <Button variant="contained" color="success" onClick={handleShowSearchResult}>
              Search
            </Button> */}
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}
