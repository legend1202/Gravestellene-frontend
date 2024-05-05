import { Helmet } from "react-helmet-async";

import { GraveyardCreateView } from "src/sections/graveyard/view";

// ----------------------------------------------------------------------

export default function ProductCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new product</title>
      </Helmet>

      <GraveyardCreateView />
    </>
  );
}
