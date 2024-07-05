import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

// import { ProductDetailsView } from "src/sections/product/view";
import SplashGraveyardDetailsView from 'src/sections/graveyard/view/splash-graveyard-detail-view';
// ----------------------------------------------------------------------

export default function GraveyardDetailsPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Fellesraad: Graveyard Details</title>
      </Helmet>

      <SplashGraveyardDetailsView id={`${id}`} />
    </>
  );
}
