import { Typography } from '@mui/material';

import { IServiceRequestedItem } from 'src/types/service';

// ----------------------------------------------------------------------

type Props = {
  service: IServiceRequestedItem;
};

export default function GraveyardDetailsSevices({ service }: Props) {
  return (
    <Typography key={service?.id} variant="body2" sx={{ color: 'text.secondary' }}>
      {service?.serviceDetails?.name} - {service?.companyDetails?.name}
    </Typography>
  );
}
