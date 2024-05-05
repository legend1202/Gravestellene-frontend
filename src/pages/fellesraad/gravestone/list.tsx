import { Helmet } from 'react-helmet-async';

import { GravestoneListView } from 'src/sections/gravestone/view';

// ----------------------------------------------------------------------

export default function GravestoneListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Gravestone List</title>
      </Helmet>

      <GravestoneListView />
    </>
  );
}
