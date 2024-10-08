import { Helmet } from 'react-helmet-async';

import { useTranslate } from 'src/locales';

import { ServiceRequest } from 'src/sections/service/view';

// ----------------------------------------------------------------------

export default function ServiceRequestPage() {
  const { t } = useTranslate();
  return (
    <>
      <Helmet>
        <title> {`${t('services')}: ${t('list_of_services')}`}</title>
      </Helmet>

      <ServiceRequest />
    </>
  );
}
