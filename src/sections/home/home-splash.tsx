import { m } from 'framer-motion';
import isEqual from 'lodash/isEqual';
import { useRef, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { useBoolean } from 'src/hooks/use-boolean';
import { useDebounce } from 'src/hooks/use-debounce';

import { useTranslate } from 'src/locales';
import { bgGradient } from 'src/theme/css';
import { useGetFilteredGravestones } from 'src/api/gravestone';

import Label from 'src/components/label';
import { varFade, MotionContainer } from 'src/components/animate';
import GraveStoneSearchResult from 'src/components/gravestone/search-result';

import { IProductFilters, IProductFilterValue } from 'src/types/product';

import GravestoneSearch from './gravestone-search';

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_3.jpg',
  }),
  width: '100%',
  height: '100%',
  position: 'relative',
}));

const defaultFilters: IProductFilters = {
  gender: [],
  colors: [],
  rating: '',
  category: 'all',
  priceRange: [0, 200],
};
// ----------------------------------------------------------------------

export default function HomeSplash() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const [searchKeyState, setSearchKeyState] = useState(false);

  const { t } = useTranslate();
  const [graveyardName, setGraveyardName] = useState('');
  const [startDOB, setStartDOB] = useState<any>('');
  const [endDOB, setEndDOB] = useState<any>('');
  const [startDeceasedDate, setStartDeceasedDate] = useState<any>('');
  const [endDeceasedDate, setEndDeceasedDate] = useState<any>('');
  const [graveSite, setGraveSite] = useState<any>('');

  const debouncedName = useDebounce(graveyardName);
  const debouncedStartDOB = useDebounce(startDOB);
  const debouncedEndDOB = useDebounce(endDOB);
  const debouncedStartDeceasedDate = useDebounce(startDeceasedDate);
  const debouncedEndDeceasedDate = useDebounce(endDeceasedDate);
  const debouncedGraveSite = useDebounce(graveSite);

  const { gravestones } = useGetFilteredGravestones({
    name: debouncedName,
    birthday: {
      start: debouncedStartDOB,
      end: debouncedEndDOB,
    },
    deceasedDate: {
      start: debouncedStartDeceasedDate,
      end: debouncedEndDeceasedDate,
    },
    graveSite: debouncedGraveSite,
  });

  const openFilters = useBoolean();

  const [filters, setFilters] = useState(defaultFilters);

  const handleFilters = useCallback((name: string, value: IProductFilterValue) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setGraveyardName('');
    setStartDOB('');
    setEndDOB('');
    setStartDeceasedDate('');
    setEndDeceasedDate('');
    setGraveSite('');
  }, []);

  const canReset = !isEqual(defaultFilters, filters);

  const handleShowSearchResult = () => {
    // setSearchKey('');
    setSearchKeyState(true);
  };

  console.log(gravestones);

  const renderFilters = (
    <Stack
      spacing={3}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-end', sm: 'center' }}
      direction={{ xs: 'row-reverse', sm: 'row-reverse' }}
    >
      <Stack direction="row" spacing={1} flexShrink={0}>
        <GravestoneSearch
          open={openFilters.value}
          onOpen={openFilters.onTrue}
          onClose={openFilters.onFalse}
          //
          filters={filters}
          onFilters={handleFilters}
          //
          canReset={canReset}
          onResetFilters={handleResetFilters}
          //
          graveyardName={graveyardName}
          startDOB={startDOB}
          endDOB={endDOB}
          startDeceasedDate={startDeceasedDate}
          endDeceasedDate={endDeceasedDate}
          graveSite={graveSite}
          setGraveyardName={setGraveyardName}
          setStartDOB={setStartDOB}
          setEndDOB={setEndDOB}
          setStartDeceasedDate={setStartDeceasedDate}
          setEndDeceasedDate={setEndDeceasedDate}
          setGraveSite={setGraveSite}
          handleShowSearchResult={handleShowSearchResult}
        />
      </Stack>
    </Stack>
  );

  return (
    <StyledRoot ref={heroRef}>
      <Box
        sx={{
          height: '100%',
          py: { xs: 15, md: 20 },
          overflow: 'hidden',
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url(/assets/background/splash.jpg)',
        }}
      >
        <Container component={MotionContainer}>
          {!searchKeyState && (
            <Stack
              spacing={3}
              sx={{
                textAlign: 'center',
                mb: { xs: 5, md: 10 },
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography component="div" variant="h2" sx={{ color: '#d69c00' }}>
                  {t('Welcome to GraveSteller!')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography variant="overline">
                  <b>{t('Here you can search for people buried')}</b>,{' '}
                  <small>{t('in currently 109 cemetery administrations')}</small>,{' '}
                  <b>{t('842 cemeteries and 0 people buried.')}</b>
                  <br />
                  <b>{t('At')}</b> <small>{t('administrations')}</small>{' '}
                  <b>{t('with the symbol *, you can also order grave care.')}</b>
                </Typography>
              </m.div>
            </Stack>
          )}
          <Stack
            spacing={3}
            sx={{
              mb: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                backgroundColor: 'hsla(0,0%,0%,.2)',
                pb: { xs: 3.75, md: 3.75 },
                px: { xs: 1, md: 1.5 },
              }}
            >
              <Label
                sx={{
                  display: 'block',
                  pt: { xs: 1.5, md: 1.5 },
                  color: 'white',
                  position: 'relative',
                  fontSize: '18px',
                  top: '-14px',
                }}
                variant="soft"
                color="default"
              >
                {t('Search Buried')}
              </Label>
              <Label
                sx={{
                  display: 'block',
                  color: 'white',
                  fontWeight: '400',
                  textShadow: '0 0 10px rgba(0,0,0,.2)',
                  margin: '0',
                  padding: '5px',
                  paddingLeft: '10px',
                  borderRadius: '2px 2px 0px 0px',
                  fontSize: { xs: '8px', md: '13px' },
                }}
                variant="soft"
                color="default"
              >
                {t('You can search by name:')}
              </Label>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label=""
                  defaultValue=""
                  onChange={(e) => setGraveyardName(e.target.value)}
                />
              </Box>
            </Box>
            <Stack spacing={0}>{renderFilters}</Stack>
          </Stack>
          {gravestones && gravestones.length > 0 && (
            <GraveStoneSearchResult gravestones={gravestones} />
          )}
        </Container>
      </Box>
    </StyledRoot>
  );
}
