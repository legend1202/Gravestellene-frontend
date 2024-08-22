import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import { useTranslate } from 'src/locales';

import EmptyContent from 'src/components/empty-content';

import { IServiceRequestedItem } from 'src/types/service';

import CheckoutSummary from './checkout-summary';
import CheckoutCartProductList from './checkout-cart-product-list';

// ----------------------------------------------------------------------

type ICheckout = {
  completed: boolean;
  activeStep: number;
  items: IServiceRequestedItem[];
  subTotal: number;
  total: number;
  discount: number;
  shipping: number;
  billing: null;
  totalItems: number;
  contactInfo: any;
};

type ITCheckout = {
  completed?: boolean;
  activeStep?: number;
  items?: IServiceRequestedItem[];
  subTotal?: number;
  total?: number;
  discount?: number;
  shipping?: number;
  billing?: null;
  totalItems?: number;
  contactInfo?: any;
};

type Props = {
  checkout: ICheckout;
  handleSetCheckout: (query: ITCheckout) => void;
  handleOrderListDelete: (id: string) => void;
};
export default function CheckoutCart({
  checkout,
  handleSetCheckout,
  handleOrderListDelete,
}: Props) {
  const { t } = useTranslate();
  const empty = checkout.items && !checkout.items.length;

  const handleClickNext = () => {
    handleSetCheckout({ ...checkout, activeStep: 1 });
  };
  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={8}>
        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                {t('Cart')}
                <Typography component="span" sx={{ color: 'text.secondary' }}>
                  &nbsp;({checkout.totalItems} item)
                </Typography>
              </Typography>
            }
            sx={{ mb: 3 }}
          />

          {empty ? (
            <EmptyContent
              title={t('Cart is Empty!')}
              description={t('Look like you have no items in your shopping cart.')}
              imgUrl="/assets/icons/empty/ic_cart.svg"
              sx={{ pt: 5, pb: 10 }}
            />
          ) : (
            <CheckoutCartProductList
              products={checkout.items}
              onDelete={handleOrderListDelete}
              onIncreaseQuantity={() => {}}
              onDecreaseQuantity={() => {}}
            />
          )}
        </Card>
      </Grid>

      <Grid xs={12} md={4}>
        <CheckoutSummary total={checkout.total} />

        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          disabled={empty}
          onClick={handleClickNext}
        >
          {t('Check Out')}
        </Button>
      </Grid>
    </Grid>
  );
}
