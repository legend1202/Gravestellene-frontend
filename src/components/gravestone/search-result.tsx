import { m } from 'framer-motion';

import Box from '@mui/material/Box';
// import Card from "@mui/material/Card";
// import Link from "@mui/material/Link";
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
// import { alpha } from "@mui/material/styles";
// import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { PATH_SEARCH_GRAVESTONE } from 'src/config-global';

import { varFade } from 'src/components/animate';

import { IGravestoneItem } from 'src/types/gravestone';

// ----------------------------------------------------------------------

type ParamsProps = {
  gravestones: IGravestoneItem[];
};

export default function GraveStoneSearchResult({ gravestones }: ParamsProps) {
  return (
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
          overflowY: 'scroll',
          maxHeight: '600px',
        }}
      >
        {gravestones?.map((element, index) => (
          <Box
            sx={{
              backgroundColor: 'white',
              p: { xs: 0.5, md: 1 },
            }}
            key={index}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{
                  display: 'block',
                  p: { xs: 0.5, md: 0.5 },
                  fontSize: '18px',
                }}
                color="primary"
              >
                <Button
                  component={RouterLink}
                  href={`${PATH_SEARCH_GRAVESTONE}/${element.id}/${element.graveyardId}`}
                  variant="text"
                >
                  {element?.name}
                </Button>
              </Typography>
            </Box>
            <Box
              gap={{ xs: 3, lg: 10 }}
              display="grid"
              alignItems="center"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: '14px',
                  }}
                  color="common.black"
                >
                  Born: {element?.birthday}
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 0.5, md: 0.5 },
                    fontSize: '14px',
                  }}
                  color="common.black"
                >
                  Deceased: {element?.deceasedDate}
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 0.5, md: 0.5 },
                    fontSize: '14px',
                  }}
                  color="common.black"
                >
                  Buried With: {element?.burriedWith}
                </Typography>
              </m.div>
            </Box>
            <Box
              gap={{ xs: 3, lg: 10 }}
              display="grid"
              alignItems="center"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: '14px',
                  }}
                  color="common.black"
                >
                  Graveyard: {element?.graveyardDetails[0].name}
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 0.5, md: 0.5 },
                    fontSize: '14px',
                  }}
                  color="common.black"
                >
                  Church Number: {element?.churchNumber}
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 0.5, md: 0.5 },
                    fontSize: '14px',
                  }}
                  color="common.black"
                >
                  Field: {element?.field}
                </Typography>
              </m.div>
            </Box>
            <Box
              gap={{ xs: 3, lg: 10 }}
              display="grid"
              alignItems="center"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 1.5, md: 1.5 },
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: '14px',
                  }}
                  color="common.black"
                >
                  Row: {element?.row}
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 0.5, md: 0.5 },
                    fontSize: '14px',
                  }}
                  color="common.black"
                >
                  Place: {element?.place}
                </Typography>
              </m.div>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}