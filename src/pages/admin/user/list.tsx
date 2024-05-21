import { Helmet } from "react-helmet-async";

import { AdminUserList } from "src/sections/admin/view";

// ----------------------------------------------------------------------

export default function ProductCreatePage() {
  return (
    <>
      <Helmet>
        <title> Admin: List of Users</title>
      </Helmet>

      <AdminUserList />
    </>
  );
}
