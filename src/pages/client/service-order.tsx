import { Helmet } from "react-helmet-async";

import { ServiceOrderView } from "src/sections/client/view";

// ----------------------------------------------------------------------

export default function ServiceOrderPage() {
  return (
    <>
      <Helmet>
        <title> Checkout</title>
      </Helmet>

      <ServiceOrderView />
    </>
  );
}
