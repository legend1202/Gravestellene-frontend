import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import { useRouter } from "src/routes/hooks";

import { createOrder } from "src/api/order";
import { PATH_AFTER_LOGIN } from "src/config-global";
import { SERVICE_ORDER_STEPS } from "src/_mock/_product";
import { useGetServicesListsByGraveyardId } from "src/api/service";

import { useSnackbar } from "src/components/snackbar";
import { useSettingsContext } from "src/components/settings";

import { useCheckoutContext } from "src/sections/checkout/context";

import { IServiceRequestedItem } from "src/types/service";

import CheckoutCart from "../checkout-cart";
import CheckoutSteps from "../checkout-steps";
import CheckoutPayment from "../checkout-payment";
import CheckoutOrderComplete from "../checkout-order-complete";
import CheckoutBillingAddress from "../checkout-billing-address";

// ----------------------------------------------------------------------

type Props = {
  id: string;
  graveyardId: string;
};

export default function ServiceOrderView({ id, graveyardId }: Props) {
  const settings = useSettingsContext();

  const checkout = useCheckoutContext();
  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();

  const [contactInfo, setContactInfo] = useState({});

  const { services, servicesLoading } = useGetServicesListsByGraveyardId(
    graveyardId
  );
  const [total, setTotal] = useState(0);
  const [orderedServices, setOrderedServices] = useState<
    IServiceRequestedItem[]
  >([]);

  useEffect(() => {
    if (services && services.length) {
      setOrderedServices(services);
    } else {
      setOrderedServices([]);
      setTotal(0);
    }
  }, [services]);

  useEffect(() => {
    if (orderedServices && orderedServices.length) {
      let tempTotal = 0;
      orderedServices.forEach((element) => {
        tempTotal += Number(element.serviceDetails.price);
      });
      setTotal(tempTotal);
    } else {
      setOrderedServices([]);
      setTotal(0);
    }
  }, [orderedServices]);

  const handleOrderListDelete = (orderId: string) => {
    const updatedOrderList = orderedServices.filter(
      (orderService) => orderService.id !== orderId
    );
    setOrderedServices(updatedOrderList);
  };

  const handleSetContactInfo = (query: any) => {
    setContactInfo(query);
  };
  const handleSubmitData = async () => {
    const idList: string[] = orderedServices
      .map((item) => item.id)
      .filter((itemId) => itemId !== undefined) as string[];

    const submitData = {
      ...contactInfo,
      graveyardId,
      gravestoneId: id,
      servicesList: idList,
    };

    const createResult = await createOrder(submitData);
    if (createResult.results.success) {
      enqueueSnackbar("Order success!");
      router.push(PATH_AFTER_LOGIN);
    } else {
      console.error("Order did not success!");
    }
  };
  return (
    <Container maxWidth={settings.themeStretch ? false : "lg"} sx={{ mb: 10 }}>
      <Typography variant="h4" sx={{ my: { xs: 3, md: 5 } }}>
        Order Grave Care
      </Typography>
      {!servicesLoading && (
        <>
          <Grid
            container
            justifyContent={checkout.completed ? "center" : "flex-start"}
          >
            <Grid xs={12} md={8}>
              <CheckoutSteps
                activeStep={checkout.activeStep}
                steps={SERVICE_ORDER_STEPS}
              />
            </Grid>
          </Grid>

          {checkout.completed ? (
            <CheckoutOrderComplete
              open={checkout.completed}
              onReset={checkout.onReset}
              onDownloadPDF={() => {}}
            />
          ) : (
            <>
              {checkout.activeStep === 0 && (
                <CheckoutCart
                  services={orderedServices}
                  total={total}
                  handleOrderListDelete={handleOrderListDelete}
                />
              )}

              {checkout.activeStep === 1 && (
                <CheckoutBillingAddress
                  handleSetContactInfo={handleSetContactInfo}
                />
              )}

              {checkout.activeStep === 2 && checkout.billing && (
                <CheckoutPayment
                  total={total}
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
