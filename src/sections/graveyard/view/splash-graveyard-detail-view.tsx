import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useGetGraveyard } from 'src/api/graveyard';

import Iconify from 'src/components/iconify';
import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';

import { GraveyardDetailsSkeleton } from '../graveyard-skeleton';
import GraveyardDetailsSummary from '../graveyard-details-summary';
import GraveyardDetailsCarousel from '../graveyard-details-carousel';
import GraveyardDetailsDescription from '../graveyard-details-description';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function SplashGraveyardDetailsView({ id }: Props) {
  const { graveyard, graveyardLoading, graveyardError } = useGetGraveyard(id);

  const settings = useSettingsContext();

  // const [publish, setPublish] = useState<boolean | any>(false);

  // useEffect(() => {
  //   if (graveyard) {
  //     setPublish(graveyard?.approved);
  //   }
  // }, [graveyard]);

  // const handleChangePublish = useCallback((newValue: boolean) => {
  //   setPublish(newValue);
  // }, []);

  const renderSkeleton = <GraveyardDetailsSkeleton />;

  const renderError = (
    <EmptyContent
      filled
      title={`${graveyardError?.message}`}
      action={
        <Button
          component={RouterLink}
          href={paths.dashboard.product.root}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
          sx={{ mt: 3 }}
        >
          Back to List
        </Button>
      }
      sx={{ py: 10 }}
    />
  );

  const renderProduct = graveyard && (
    <>
      <Stack
        spacing={1.5}
        direction="row"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        <Button
          component={RouterLink}
          href={paths.graveyard.root}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
        >
          Back
        </Button>
      </Stack>

      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid xs={12} md={6} lg={7}>
          {graveyard.picture && <GraveyardDetailsCarousel graveyard={graveyard} />}
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <GraveyardDetailsSummary disabledActions graveyard={graveyard} />
        </Grid>
      </Grid>

      <Card sx={{ my: 10 }}>
        <GraveyardDetailsDescription content={graveyard?.content} />
      </Card>
    </>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      {graveyardLoading && renderSkeleton}

      {graveyardError && renderError}

      {graveyard && renderProduct}
    </Container>
  );
}
