import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import { useDebounce } from 'src/hooks/use-debounce';

import { useTranslate } from 'src/locales';
import { useGetFilteredGravestones } from 'src/api/gravestone';

import Label from 'src/components/label';
import GraveStoneSearchResult from 'src/components/gravestone/search-result';

// ----------------------------------------------------------------------
type Props = {
  graveyardId: string;
};

export default function GraveyardStoneSearch({ graveyardId }: Props) {
  const { t } = useTranslate();
  const [graveyardName, setGraveyardName] = useState('');

  const debouncedName = useDebounce(graveyardName);

  const { gravestones } = useGetFilteredGravestones({
    name: debouncedName,
    birthday: {
      start: '',
      end: '',
    },
    deceasedDate: {
      start: '',
      end: '',
    },
    graveSite: '',
  });

  return (
    <Box>
      <Container>
        <Stack
          spacing={3}
          sx={{
            mb: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              pb: { xs: 3.75, md: 3.75 },
              px: { xs: 1, md: 1.5 },
            }}
          >
            <Label
              sx={{
                display: 'block',
                color: 'white',
                fontWeight: '400',
                marginTop: '16px',
                padding: '5px',
                paddingLeft: '10px',
                borderRadius: '2px 2px 0px 0px',
                fontSize: { xs: '8px', md: '13px' },
              }}
              variant="soft"
              color="default"
            >
              {t('search_by_name')}
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
        </Stack>
        {gravestones && gravestones.length > 0 && (
          <GraveStoneSearchResult gravestones={gravestones} />
        )}
      </Container>
    </Box>
  );
}
