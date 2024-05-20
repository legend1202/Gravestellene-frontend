import { Helmet } from "react-helmet-async";

import { GravestoneCreateView } from "src/sections/gravestone/view";

// ----------------------------------------------------------------------

export default function GravestoneCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new gravestone</title>
      </Helmet>

      <GravestoneCreateView />
    </>
  );
}
