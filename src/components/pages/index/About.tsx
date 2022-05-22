import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import React, { FunctionComponent } from "react";
interface Props {}

const About: FunctionComponent<Props> = ({}) => {
  return (
    <Box
      minHeight="100vh"
      width="100%"
      sx={{ placeItems: "center", display: "flex" }}
    >
      <Container sx={{ paddingBlock: "40px" }}>
        <Wrapper>
          <Stack justifyContent="center">
            <Typography color="#637381" marginBottom="1rem">
              ABOUT
            </Typography>
            <Typography variant="h4" marginBottom="0.5rem">
              5,555
            </Typography>
            <Typography variant="h4" marginBottom="1.5rem">
              Hangry Hippo NFTs
            </Typography>
            <Typography marginBottom="1.5rem">
              Hangry Hippo is a collection of 5,555 3D NFTs unlocking access to
              HANGRY.TOOLS. An exclusive utility coming soon to holders.
            </Typography>
            <Typography>
              $30,000 + 10% of royalties forever benefit Charity Water – an
              organization bringing clean, locally-sourced drinking water to
              developing countries around the globe.
            </Typography>
          </Stack>
          <Box
            position="relative"
            width="100%"
            height="100%"
            margin="-30px"
            sx={{ aspectRatio: "1" }}
          >
            <Image
              src="/images/about.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Wrapper>
      </Container>
    </Box>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    "&>*": {
      alignItems: "center",
      textAlign: "center",
    },
  },
}));

export default About;
