import { Helmet } from "react-helmet-async";

import { ProductCreateView } from "src/sections/graveyard/view";

// ----------------------------------------------------------------------

export default function ProductCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new graveyard</title>
      </Helmet>

      <ProductCreateView />
    </>
  );
}
