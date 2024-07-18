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

// import { map } from "lodash";
// import { elementMatches } from "@fullcalendar/core/internal";

// ----------------------------------------------------------------------

// const CARDS = [
//   {
//     icon: " /assets/icons/home/ic_make_brand.svg",
//     title: "Branding",
//     description: "Consistent design makes it easy to brand your own.",
//   },
//   {
//     icon: " /assets/icons/home/ic_design.svg",
//     title: "UI & UX Design",
//     description:
//       "The kit is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.",
//   },
//   {
//     icon: " /assets/icons/home/ic_development.svg",
//     title: "Development",
//     description: "Easy to customize and extend, saving you time and money.",
//   },
// ];

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
        }}
      >
        {gravestones?.map((element, index) => (
          <Box
            sx={{
              backgroundColor: 'white',
              p: { xs: 1, md: 1.5 },
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
                  p: { xs: 1.5, md: 1.5 },
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
                {/* <Link href="/customer/serviceorder">{element?.name}</Link> */}
              </Typography>
              {/* <Button
                variant="contained"
                color="success"
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                {element?.name}
              </Button> */}
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
                    px: { xs: 1.5, md: 1.5 },
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
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: '14px',
                  }}
                  color="common.black"
                >
                  Buried: {element?.buriedDate}
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
                    fontStyle: 'bold',
                  }}
                  color="common.black"
                >
                  {/* {element?.graveyardName} */}
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: '14px',
                  }}
                  color="common.black"
                >
                  Quarter: {element?.quarter}
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: '14px',
                  }}
                  color="common.black"
                >
                  Grave site: {element?.graveSite}
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
                    fontStyle: 'bold',
                  }}
                  color="common.black"
                >
                  Hometown: {element?.homeTown}
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
                    fontStyle: 'bold',
                  }}
                  color="common.black"
                >
                  Grave site number: {element?.graveSiteNumber}
                </Typography>
              </m.div>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
