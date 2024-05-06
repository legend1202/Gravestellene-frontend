import { m } from "framer-motion";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button, IconButton } from "@mui/material";

import { varFade, MotionViewport } from "src/components/animate";

import { useSearchGravestoneLists } from "src/api/gravestone";

import { IGravestoneItem } from "src/types/gravestone";
import { map } from "lodash";
import { elementMatches } from "@fullcalendar/core/internal";

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: " /assets/icons/home/ic_make_brand.svg",
    title: "Branding",
    description: "Consistent design makes it easy to brand your own.",
  },
  {
    icon: " /assets/icons/home/ic_design.svg",
    title: "UI & UX Design",
    description:
      "The kit is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.",
  },
  {
    icon: " /assets/icons/home/ic_development.svg",
    title: "Development",
    description: "Easy to customize and extend, saving you time and money.",
  },
];

// ----------------------------------------------------------------------

type ParamsProps = {
  params: IGravestoneItem;
};

export default function HomeSearchResult({ params }: ParamsProps) {
  const { products: searchResult } = useSearchGravestoneLists(params);
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
        {searchResult?.map((element) => (
          <Box
            sx={{
              backgroundColor: "white",
              p: { xs: 1, md: 1.5 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  display: "block",
                  p: { xs: 1.5, md: 1.5 },
                  fontSize: "18px",
                }}
                color="primary"
              >
                <Link href="/customer/service-order">{element?.name}</Link>
              </Typography>
              <Button
                variant="contained"
                color="success"
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                {element?.fellesraadName}
              </Button>
            </Box>
            <Box
              gap={{ xs: 3, lg: 10 }}
              display="grid"
              alignItems="center"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: "14px",
                  }}
                  color="common.black"
                >
                  Born: {element?.born}
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: "14px",
                  }}
                  color="common.black"
                >
                  Deceased: {element?.deceased}
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: "14px",
                  }}
                  color="common.black"
                >
                  Buried: {element?.buried}
                </Typography>
              </m.div>
            </Box>
            <Box
              gap={{ xs: 3, lg: 10 }}
              display="grid"
              alignItems="center"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: "14px",
                    fontStyle: "bold",
                  }}
                  color="common.black"
                >
                  {element?.graveyardName}
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: "14px",
                  }}
                  color="common.black"
                >
                  Quarter: {element?.quater}
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: "14px",
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
                xs: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: "14px",
                    fontStyle: "bold",
                  }}
                  color="common.black"
                >
                  Hometown: {element?.hometown}
                </Typography>
              </m.div>
            </Box>
            <Box
              gap={{ xs: 3, lg: 10 }}
              display="grid"
              alignItems="center"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    py: { xs: 0.5, md: 0.5 },
                    px: { xs: 1.5, md: 1.5 },
                    fontSize: "14px",
                    fontStyle: "bold",
                  }}
                  color="common.black"
                >
                  Grave site number: {element?.siteNumber}
                </Typography>
              </m.div>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
