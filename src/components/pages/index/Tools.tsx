import { Container, Grow, Stack, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import ReactSign from "react-sign";
interface Props {}

const Tools: FunctionComponent<Props> = ({}) => {
  const [isIn, setIsIn] = useState(false);
  return (
    <Box
      bgcolor="#1f262e"
      minHeight="100vh"
      width="100%"
      display="flex"
      sx={{ placeItems: "center" }}
    >
      <Container>
        <Wrapper>
          <Grow in={isIn}>
            <Stack>
              <Typography marginBottom="0.5rem" variant="caption">
                Unvieling
              </Typography>
              <Typography variant="h3" marginBottom="0.4rem">
                Sad Gorilla Tools
              </Typography>
              <Typography marginBottom="1.5rem" variant="caption">
                A PRIVATE TOOL FOR Sad Gorilla HOLDERS
              </Typography>
              <Typography marginBottom="0.5rem" variant="h6">
                RARITY VISUALIZER
              </Typography>
              <Typography marginBottom="1.5rem" color="#919eab">
                999 unique NFTs Collection developed together with the female
                Ukrainian designer Yuiila Tsurkan.
              </Typography>
              <ReactSign id="react-sign" onEnter={() => setIsIn(true)} />
            </Stack>
          </Grow>

          <Box
            width="100%"
            height="590px"
            display="flex"
            position="relative"
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <ImageContainer order={isIn ? 1 : 0}>
              <Image
                src="/images/tools/c3-3.png"
                alt=""
                objectFit="cover"
                layout="fill"
              />
            </ImageContainer>
            <ImageContainer order={0}>
              <Image
                src="/images/tools/c2-2.png"
                alt=""
                objectFit="cover"
                layout="fill"
              />
            </ImageContainer>

            <ImageContainer order={isIn ? -1 : 0}>
              <Image
                src="/images/tools/c1-1.png"
                alt=""
                objectFit="cover"
                layout="fill"
              />
            </ImageContainer>
          </Box>
        </Wrapper>
      </Container>
    </Box>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: "0.5rem",
  "&>*": {
    paddingBlock: "40px",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    "&>*": {
      alignItems: "center",
      textAlign: "center",
    },
  },
}));

const ImageContainer = styled(Box)(({ order }: { order: number }) => ({
  width: "248px",
  height: "395px",
  position: "absolute",
  border: "5px solid white",
  borderRadius: "20px",
  borderBottom: "0px solid white",
  borderLeft: "1px solid white",
  animation: `slide-tr 5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  transform: `translateX(${order * 60}%) translateY(${
    -1 * order * 50
  }px) scaleX(0.86) scaleY(1) skewX(0deg) skewY(8deg) translateZ(0px)`,
  boxShadow: "rgb(99 115 129 / 48%) 80px -40px 80px",
  transition: "1s ease-in-out",
}));

export default Tools;
