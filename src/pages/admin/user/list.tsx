import { Helmet } from "react-helmet-async";

import { AdminUserList } from "src/sections/admin/view";

// ----------------------------------------------------------------------

export default function ProductCreatePage() {
  return (
    <>
      <Helmet>
        <title> Graveyard: List of the Graveyard</title>
      </Helmet>

      <AdminUserList />
    </>
  );
}
