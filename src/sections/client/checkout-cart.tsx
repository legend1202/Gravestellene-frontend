import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import EmptyContent from "src/components/empty-content";

import { IServiceRequestedItem } from "src/types/service";

import CheckoutSummary from "./checkout-summary";
import { useCheckoutContext } from "../checkout/context";
import CheckoutCartProductList from "./checkout-cart-product-list";

// ----------------------------------------------------------------------
type Props = {
  total: number;
  services: IServiceRequestedItem[];
  handleOrderListDelete: (id: string) => void;
};
export default function CheckoutCart({
  total,
  services,
  handleOrderListDelete,
}: Props) {
  const checkout = useCheckoutContext();

  const empty = services && !services.length;

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={8}>
        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Cart
                <Typography component="span" sx={{ color: "text.secondary" }}>
                  &nbsp;({checkout.totalItems} item)
                </Typography>
              </Typography>
            }
            sx={{ mb: 3 }}
          />

          {empty ? (
            <EmptyContent
              title="Cart is Empty!"
              description="Look like you have no items in your shopping cart."
              imgUrl="/assets/icons/empty/ic_cart.svg"
              sx={{ pt: 5, pb: 10 }}
            />
          ) : (
            <CheckoutCartProductList
              products={services}
              onDelete={handleOrderListDelete}
              onIncreaseQuantity={checkout.onIncreaseQuantity}
              onDecreaseQuantity={checkout.onDecreaseQuantity}
            />
          )}
        </Card>
      </Grid>

      <Grid xs={12} md={4}>
        <CheckoutSummary total={total} />

        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          disabled={empty}
          onClick={checkout.onNextStep}
        >
          Check Out
        </Button>
      </Grid>
    </Grid>
  );
}
