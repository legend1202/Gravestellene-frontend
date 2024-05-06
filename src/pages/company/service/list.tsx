import { Helmet } from "react-helmet-async";

import { ServiceListViewPage } from "src/sections/service/view";

// ----------------------------------------------------------------------

export default function ServiceListPage() {
  return (
    <>
      <Helmet>
        <title> Graveyard: List of the Graveyard</title>
      </Helmet>

      <ServiceListViewPage />
    </>
  );
}
