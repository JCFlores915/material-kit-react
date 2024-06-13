import { Helmet } from 'react-helmet-async';

import { CompanyView } from '../sections/company/view';

// ----------------------------------------------------------------------

export default function CompanyPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <CompanyView />
    </>
  );
}
