import { Helmet } from "react-helmet-async";

import { useParams } from "src/routes/hooks";

import ServiceEditView from "src/sections/service/view/service-edit-view";

// ----------------------------------------------------------------------

export default function ServiceEditPage() {
  const params = useParams();

  const { id } = params;
  return (
    <>
      <Helmet>
        <title> Service: Update Service</title>
      </Helmet>

      <ServiceEditView id={`${id}`} />
    </>
  );
}
