import { Helmet } from "react-helmet-async";

import { ServiceListApprove } from "src/sections/service/view";

// ----------------------------------------------------------------------

export default function ProductCreatePage() {
  return (
    <>
      <Helmet>
        <title> Service: List of the Services</title>
      </Helmet>

      <ServiceListApprove />
    </>
  );
}
