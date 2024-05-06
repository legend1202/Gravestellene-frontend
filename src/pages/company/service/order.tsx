import { Helmet } from "react-helmet-async";

import { OrderListApprove } from "src/sections/order/view";
// ----------------------------------------------------------------------

export default function ServiceRequestPage() {
  return (
    <>
      <Helmet>
        <title> Graveyard: List of the Orders</title>
      </Helmet>

      <OrderListApprove />
    </>
  );
}
