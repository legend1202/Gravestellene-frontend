import { Helmet } from "react-helmet-async";

import { useParams } from "src/routes/hooks";

import { ServiceOrderView } from "src/sections/client/view";

// ----------------------------------------------------------------------

export default function ServiceOrderPage() {
  const params = useParams();

  const { id, graveyardId } = params;

  return (
    <>
      <Helmet>
        <title> Checkout</title>
      </Helmet>

      <ServiceOrderView id={`${id}`} graveyardId={`${graveyardId}`} />
    </>
  );
}
