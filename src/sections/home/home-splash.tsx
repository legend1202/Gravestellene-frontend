import isEqual from "lodash/isEqual";
import { m, useScroll } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

import Box from "@mui/material/Box";
// import Link from '@mui/material/Link';
import Stack from "@mui/material/Stack";
// import Rating from '@mui/material/Rating';
import { IconButton } from "@mui/material";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, styled } from "@mui/material/styles";

import { useBoolean } from "src/hooks/use-boolean";
// import { useResponsive } from "src/hooks/use-responsive";

import { bgGradient } from "src/theme/css";
// import { PATH_SEARCH_GRAVESTONE } from "src/config-global";
import {
  PRODUCT_COLOR_OPTIONS,
  PRODUCT_GENDER_OPTIONS,
  PRODUCT_RATING_OPTIONS,
  PRODUCT_CATEGORY_OPTIONS,
} from "src/_mock";

import Label from "src/components/label";

import { varFade, MotionContainer } from "src/components/animate";

import { IProductFilters, IProductFilterValue } from "src/types/product";

import GravestoneSearch from "./gravestone-search";
import HomeSearchResult from "./home-search-result";
// import { bool, boolean } from "yup";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    color: alpha(
      theme.palette.background.default,
      theme.palette.mode === "light" ? 0.9 : 0.94
    ),
    imgUrl: "/assets/background/overlay_3.jpg",
  }),
  width: "100%",
  height: "100vh",
  position: "relative",
  // [theme.breakpoints.up("md")]: {
  //   top: 0,
  //   left: 0,
  //   position: "fixed",
  // },
}));

// type StyledPolygonProps = {
//   opacity?: number;
//   anchor?: "left" | "right";
// };

// const StyledPolygon = styled("div")<StyledPolygonProps>(
//   ({ opacity = 1, anchor = "left", theme }) => ({
//     ...bgBlur({
//       opacity,
//       color: theme.palette.background.default,
//     }),
//     zIndex: 9,
//     bottom: 0,
//     height: 80,
//     width: "50%",
//     position: "absolute",
//     clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
//     ...(anchor === "left" && {
//       left: 0,
//       ...(theme.direction === "rtl" && {
//         transform: "scale(-1, 1)",
//       }),
//     }),
//     ...(anchor === "right" && {
//       right: 0,
//       transform: "scaleX(-1)",
//       ...(theme.direction === "rtl" && {
//         transform: "scaleX(1)",
//       }),
//     }),
//   })
// );

const defaultFilters: IProductFilters = {
  gender: [],
  colors: [],
  rating: "",
  category: "all",
  priceRange: [0, 200],
};
// ----------------------------------------------------------------------

export default function HomeSplash() {
  // const mdUp = useResponsive("up", "md");

  // const theme = useTheme();

  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  const [searchKeyState, setSearchKeyState] = useState(false);

  // const lightMode = theme.palette.mode === 'light';

  const openFilters = useBoolean();

  const [filters, setFilters] = useState(defaultFilters);

  const handleFilters = useCallback(
    (name: string, value: IProductFilterValue) => {
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const canReset = !isEqual(defaultFilters, filters);

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on("change", (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  const handleShowSearchResult = () => {
    setSearchKeyState(true);
  };

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const hide = percent > 120;

  // const renderPolygons = (
  //   <>
  //     <StyledPolygon />
  //     <StyledPolygon anchor="right" opacity={0.48} />
  //     <StyledPolygon
  //       anchor="right"
  //       opacity={0.48}
  //       sx={{ height: 48, zIndex: 10 }}
  //     />
  //     <StyledPolygon anchor="right" sx={{ zIndex: 11, height: 24 }} />
  //   </>
  // );

  const renderFilters = (
    <Stack
      spacing={3}
      justifyContent="space-between"
      alignItems={{ xs: "flex-end", sm: "center" }}
      direction={{ xs: "row-reverse", sm: "row-reverse" }}
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
          colorOptions={PRODUCT_COLOR_OPTIONS}
          ratingOptions={PRODUCT_RATING_OPTIONS}
          genderOptions={PRODUCT_GENDER_OPTIONS}
          categoryOptions={["all", ...PRODUCT_CATEGORY_OPTIONS]}
        />
      </Stack>
    </Stack>
  );

  return (
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <Box
          sx={{
            height: "100vh",
            py: { xs: 15, md: 20 },
            overflow: "hidden",
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: "url(/assets/background/splash.jpg)",
          }}
        >
          <Container component={MotionContainer}>
            {!searchKeyState && (
              <Stack
                spacing={3}
                sx={{
                  textAlign: "center",
                  mb: { xs: 5, md: 10 },
                }}
              >
                <m.div variants={varFade().inUp}>
                  <Typography
                    component="div"
                    variant="h2"
                    sx={{ color: "#d69c00" }}
                  >
                    Welcome to GraveSteller!
                  </Typography>
                </m.div>

                <m.div variants={varFade().inDown}>
                  <Typography variant="overline">
                    <b>Here you can search for people buried</b>,{" "}
                    <small>in currently 109 cemetery administrations</small>,{" "}
                    <b>842 cemeteries and 0 people buried.</b>
                    <br />
                    <b>At</b> <small>administrations</small>{" "}
                    <b>with the symbol *, you can also order grave care.</b>
                  </Typography>
                </m.div>

                {/* <Button variant='base' color="primary">Link</Button> */}
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
                  backgroundColor: "hsla(0,0%,0%,.2)",
                  pb: { xs: 3.75, md: 3.75 },
                  px: { xs: 1, md: 1.5 },
                }}
              >
                <Label
                  sx={{
                    display: "block",
                    pt: { xs: 1.5, md: 1.5 },
                    color: "white",
                    position: "relative",
                    fontSize: "18px",
                    top: "-14px",
                  }}
                  variant="soft"
                  color="default"
                >
                  Search Buried
                </Label>
                <Label
                  sx={{
                    display: "block",
                    color: "white",
                    fontWeight: "400",
                    textShadow: "0 0 10px rgba(0,0,0,.2)",
                    margin: "0",
                    padding: "5px",
                    paddingLeft: "10px",
                    borderRadius: "2px 2px 0px 0px",
                    fontSize: { xs: "8px", md: "13px" },
                  }}
                  variant="soft"
                  color="default"
                >
                  You can search by name, cemetery, place, administration and/or
                  date:
                </Label>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label=""
                    defaultValue="Ex: Anna Gunnarsson 1983 Oslo"
                  />
                  <IconButton
                    aria-label="search"
                    color="success"
                    onClick={handleShowSearchResult}
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
              </Box>
              <Stack spacing={0}>{renderFilters}</Stack>
            </Stack>
            {/* <Stack
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
                <Box
                  sx={{
                    backgroundColor: "white",
                    p: { xs: 1, md: 1.5 },
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
                    Amrén, Hi Maria Ingeborg
                  </Typography>
                </Box>
              </Box>
            </Stack> */}
          </Container>
        </Box>
      </StyledRoot>

      {/* {searchKeyState && <HomeSearchResult />} */}
    </>
  );
}
