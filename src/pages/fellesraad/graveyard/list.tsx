import { Helmet } from "react-helmet-async";

import { GraveyardList } from "src/sections/graveyard/view";

// ----------------------------------------------------------------------

export default function ProductCreatePage() {
  return (
    <>
      <Helmet>
        <title> Graveyard: List of the Graveyard</title>
      </Helmet>

      <GraveyardList />
    </>
  );
}
