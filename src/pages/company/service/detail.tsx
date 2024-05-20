import { Helmet } from "react-helmet-async";

import { useParams } from "src/routes/hooks";

// import { ProductDetailsView } from "src/sections/product/view";
import GraveyardDetailsView from "src/sections/graveyard/view/graveyard-detail-view";
// ----------------------------------------------------------------------

export default function ServiceDetailsPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Fellesraad: Graveyard Details</title>
      </Helmet>

      <GraveyardDetailsView id={`${id}`} />
    </>
  );
}
