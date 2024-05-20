import { Helmet } from "react-helmet-async";

import { useParams } from "src/routes/hooks";

import { GravestoneEditView } from "src/sections/gravestone/view";

// ----------------------------------------------------------------------

export default function ProductEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Fellesraad: Gravestone Edit</title>
      </Helmet>

      <GravestoneEditView id={`${id}`} />
    </>
  );
}
