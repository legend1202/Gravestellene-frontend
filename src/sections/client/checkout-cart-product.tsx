// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Avatar from "@mui/material/Avatar";
// import Divider from "@mui/material/Divider";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
// import { ColorPreview } from "src/components/color-utils";

// import { ICheckoutItem } from "src/types/checkout";

// import IncrementerButton from "../product/common/incrementer-button";
import { IServiceRequestedItem } from 'src/types/service';

// ----------------------------------------------------------------------

type Props = {
  row: IServiceRequestedItem;
  onDelete: VoidFunction;
  onDecrease: VoidFunction;
  onIncrease: VoidFunction;
};

export default function CheckoutCartProduct({ row, onDelete, onDecrease, onIncrease }: Props) {
  // const { serviceDetails:name, description, price, unit, companyId } = row;
  const {
    serviceDetails: { name, description, price },
    graveyardDetails: { name: graveyardName },
  } = row;

  return (
    <TableRow>
      <TableCell>
        {/* <Avatar
          variant="rounded"
          alt={name}
          src={coverUrl}
          sx={{ width: 64, height: 64, mr: 2 }}
        /> */}

        <Typography noWrap variant="subtitle2" sx={{ maxWidth: 240 }}>
          {name}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography noWrap variant="subtitle2" sx={{ maxWidth: 240 }}>
          <Label> {description} </Label>
        </Typography>
      </TableCell>

      <TableCell>{fCurrency(price)}</TableCell>

      <TableCell align="center" sx={{ px: 1 }}>
        <Typography noWrap variant="subtitle2" sx={{ maxWidth: 240 }}>
          <Label> {graveyardName} </Label>
        </Typography>
      </TableCell>

      {/* <TableCell>
        <Box sx={{ width: 88, textAlign: "right" }}>
          <IncrementerButton
            quantity={quantity}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
            disabledDecrease={quantity <= 1}
            disabledIncrease={quantity >= available}
          />

          <Typography
            variant="caption"
            component="div"
            sx={{ color: "text.secondary", mt: 1 }}
          >
            available: {available}
          </Typography>
        </Box>
      </TableCell> */}

      {/* <TableCell align="right">{fCurrency(price * quantity)}</TableCell> */}

      <TableCell align="right" sx={{ px: 1 }}>
        <IconButton onClick={onDelete}>
          <Iconify icon="solar:trash-bin-trash-bold" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
