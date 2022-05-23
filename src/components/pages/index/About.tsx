import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import { FullVhContainer } from "../../shared/FullVhContainer";
interface Props {}

const About: FunctionComponent<Props> = ({}) => {
  return (
    <FullVhContainer>
      <Container sx={{ paddingBlock: "40px" }}>
        <Wrapper>
          <Stack justifyContent="center">
            <Typography variant="caption" marginBottom="1rem">
              ABOUT
            </Typography>
            <Typography variant="h4" marginBottom="1.5rem">
              Welcome to the minting website for SadGorilla.
            </Typography>
            <Typography marginBottom="1.5rem">
              SadGorilla is a NFT project with an humanitarian focus and 30% of
              the sales volume will be distributed between various foundations
              like LoveUganda, MFT and others focus on indentured animals and
              improving clean water access to rural communities in Uganda.
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
    </FullVhContainer>
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
