import { Helmet } from "react-helmet-async";

import ServiceCreateView from "src/sections/service/view/service-create-view";

// ----------------------------------------------------------------------

export default function ServiceCreatePage() {
  return (
    <>
      <Helmet>
        <title> Service: Create a new Service</title>
      </Helmet>

      <ServiceCreateView />
    </>
  );
}
