import { Helmet } from "react-helmet-async";

import { GraveyardCreateView } from "src/sections/graveyard/view";

// ----------------------------------------------------------------------

export default function ProductCreatePage() {
  return (
    <>
      <Helmet>
        <title> Graveyard: Create a new Graveyard</title>
      </Helmet>

      <GraveyardCreateView />
    </>
  );
}
