import { Helmet } from "react-helmet-async";

// import { useParams } from "src/routes/hooks";

// import { ProductDetailsView } from "src/sections/product/view";
import GraveyardDetailsView from "src/sections/graveyard/view/graveyard-detail-view";
// ----------------------------------------------------------------------

export default function GraveyardDetailsPage() {
  // const params = useParams();

  // const { id } = params;

  return (
    <>
      <Helmet>
        <title> Fellesraad: Graveyard Details</title>
      </Helmet>

      <GraveyardDetailsView id="e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2" />
    </>
  );
}
