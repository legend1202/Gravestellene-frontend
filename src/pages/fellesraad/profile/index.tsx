import { Helmet } from "react-helmet-async";

import { ProfileCreateView } from "src/sections/fellesraad/view";
// ----------------------------------------------------------------------

export default function ProfileCreatePage() {
  const id = "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2/edit";
  return (
    <>
      <Helmet>
        <title> Fellesraad: Create a new profile</title>
      </Helmet>

      <ProfileCreateView id={`${id}`} />
    </>
  );
}
