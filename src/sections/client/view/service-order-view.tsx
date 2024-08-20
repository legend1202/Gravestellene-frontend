import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useRouter } from 'src/routes/hooks';

import { createOrder } from 'src/api/order';
import { PATH_AFTER_LOGIN } from 'src/config-global';
import { SERVICE_ORDER_STEPS } from 'src/_mock/_product';
import { useGetServicesListsByGraveyardId } from 'src/api/service';

import { useSnackbar } from 'src/components/snackbar';
import { useSettingsContext } from 'src/components/settings';

import { IServiceRequestedItem } from 'src/types/service';

import CheckoutCart from '../checkout-cart';
import CheckoutSteps from '../checkout-steps';
import CheckoutPayment from '../checkout-payment';
import CheckoutOrderComplete from '../checkout-order-complete';
import CheckoutBillingAddress from '../checkout-billing-address';

// ----------------------------------------------------------------------

type Props = {
  id: string;
  graveyardId: string;
};

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

const initialState: ICheckout = {
  completed: false,
  activeStep: 0,
  items: [],
  subTotal: 0,
  total: 0,
  discount: 0,
  shipping: 0,
  billing: null,
  totalItems: 0,
  contactInfo: null,
};

export default function ServiceOrderView({ id, graveyardId }: Props) {
  const settings = useSettingsContext();

  const [checkout, setCheckout] = useState<ICheckout>(initialState);

  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();

  const { services, servicesLoading } = useGetServicesListsByGraveyardId(graveyardId);

  useEffect(() => {
    if (services && services.length) {
      let tempTotal = 0;
      services.forEach((element) => {
        tempTotal += Number(element.serviceDetails.price);
      });

      setCheckout({ ...checkout, total: tempTotal, items: services });
    } else {
      setCheckout({ ...checkout, total: 0, items: [] });
    }
  }, [services, checkout]);

  const handleOrderListDelete = (orderId: string) => {
    const updatedOrderList = checkout.items.filter((orderService) => orderService.id !== orderId);
    setCheckout({ ...checkout, items: updatedOrderList });
  };

  const handleSetContactInfo = (query: any) => {
    setCheckout({ ...checkout, contactInfo: query });
  };
  const handleSubmitData = async () => {
    const idList: string[] = checkout.items
      .map((item) => item.serviceId)
      .filter((itemId) => itemId !== undefined) as string[];

    const submitData = {
      ...checkout.contactInfo,
      graveyardId,
      gravestoneId: id,
      servicesList: idList,
    };

    const createResult = await createOrder(submitData);
    if (createResult.results.success) {
      setCheckout(initialState);
      enqueueSnackbar('Order success!');
      router.push(PATH_AFTER_LOGIN);
    } else {
      console.error('Order did not success!');
      setCheckout(initialState);
    }
  };

  const handleSetCheckout = (query: ITCheckout) => {
    setCheckout({ ...checkout, ...query });
  };

  const checkoutReset = () => {
    setCheckout(initialState);
  };

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'} sx={{ mb: 10 }}>
      <Typography variant="h4" sx={{ my: { xs: 3, md: 5 } }}>
        Order Grave Care
      </Typography>
      {!servicesLoading && (
        <>
          <Grid container justifyContent={checkout.completed ? 'center' : 'flex-start'}>
            <Grid xs={12} md={8}>
              <CheckoutSteps activeStep={checkout.activeStep} steps={SERVICE_ORDER_STEPS} />
            </Grid>
          </Grid>

          {checkout.completed ? (
            <CheckoutOrderComplete
              open={checkout.completed}
              onReset={checkoutReset}
              onDownloadPDF={() => {}}
            />
          ) : (
            <>
              {checkout.activeStep === 0 && (
                <CheckoutCart
                  checkout={checkout}
                  handleSetCheckout={handleSetCheckout}
                  handleOrderListDelete={handleOrderListDelete}
                />
              )}

              {checkout.activeStep === 1 && (
                <CheckoutBillingAddress
                  checkout={checkout}
                  handleSetCheckout={handleSetCheckout}
                  handleSetContactInfo={handleSetContactInfo}
                />
              )}

              {checkout.activeStep === 2 && (
                <CheckoutPayment
                  checkout1={checkout}
                  handleSetCheckout={handleSetCheckout}
                  handleSubmitData={handleSubmitData}
                />
              )}
            </>
          )}
        </>
      )}
    </Container>
  );
}
