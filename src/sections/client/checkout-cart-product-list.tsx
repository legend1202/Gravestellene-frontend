import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import Scrollbar from "src/components/scrollbar";
import { TableHeadCustom } from "src/components/table";

// import { ICheckoutItem } from "src/types/checkout";
import { IServiceRequestedItem } from "src/types/service";

import CheckoutCartProduct from "./checkout-cart-product";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name" },
  { id: "description", label: "Description" },
  { id: "price", label: "Price" },
  { id: "graveyard", label: "Graveyard", align: "center" },
  { id: "" },
];

// ----------------------------------------------------------------------

type Props = {
  products: IServiceRequestedItem[];
  onDelete: (id: string) => void;
  onDecreaseQuantity: (id: string) => void;
  onIncreaseQuantity: (id: string) => void;
};

export default function CheckoutCartProductList({
  products,
  onDelete,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: Props) {
  return (
    <TableContainer sx={{ overflow: "unset" }}>
      <Scrollbar>
        <Table sx={{ minWidth: 720 }}>
          <TableHeadCustom headLabel={TABLE_HEAD} />

          <TableBody>
            {products &&
              products.map((row) => (
                <CheckoutCartProduct
                  key={row.id}
                  row={row}
                  onDelete={() => onDelete(row.id || "")}
                  onDecrease={() => onDecreaseQuantity(row.id || "")}
                  onIncrease={() => onIncreaseQuantity(row.id || "")}
                />
              ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </TableContainer>
  );
}
