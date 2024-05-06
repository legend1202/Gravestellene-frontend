import { Helmet } from "react-helmet-async";

import { ServiceListApprove } from "src/sections/service/view";

// ----------------------------------------------------------------------

export default function ProductCreatePage() {
  return (
    <>
      <Helmet>
        <title> Graveyard: List of the Graveyard</title>
      </Helmet>

      <ServiceListApprove />
    </>
  );
}
