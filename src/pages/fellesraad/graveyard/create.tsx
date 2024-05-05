import { Helmet } from "react-helmet-async";

import { GraveyardCreateView } from "src/sections/graveyard/view";

// ----------------------------------------------------------------------

export default function GraveyardCreatePage() {
  return (
    <>
      <Helmet>
        <title> Graveyard: Create a new Graveyard</title>
      </Helmet>

      <GraveyardCreateView />
    </>
  );
}
