import { Helmet } from "react-helmet-async";

import { useParams } from "src/routes/hooks";

import { GraveyardEditView } from "src/sections/graveyard/view";

// ----------------------------------------------------------------------

export default function ProductCreatePage() {
  const params = useParams();

  const { id } = params;
  return (
    <>
      <Helmet>
        <title> Graveyard: Create a new Graveyard</title>
      </Helmet>

      <GraveyardEditView id={`${id}`} />
    </>
  );
}
