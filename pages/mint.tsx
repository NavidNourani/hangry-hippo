import { Box, Grow, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import ReactSign from "react-sign";
import Actions from "../src/components/pages/mint/Actions";
interface Props {
  children: React.ReactNode;
}

const Mint: FunctionComponent<Props> = ({ children }) => {
  const [isIn, setIsIn] = useState(false);
  return (
    <Box
      width="100%"
      minHeight="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        position="relative"
        alignItems={"center"}
        width="100%"
        minHeight="100vh"
      >
        <Toolbar />
        <Box
          marginBottom="2rem"
          borderRadius="20px"
          boxShadow="#e2e7eb91 0px 0px 10px"
          overflow="hidden"
          width="300px"
          height="300px"
          position="relative"
        >
          <Image
            src="/images/Untitled-1.gif"
            alt=""
            objectFit="cover"
            layout="fill"
          />
        </Box>
        <ReactSign id="react-sign-big-banner" onEnter={() => setIsIn(true)} />
        <Grow in={isIn} timeout={isIn ? 1000 : undefined}>
          <Stack flex={1} alignItems="center" justifyContent="center">
            <Typography variant="h5" marginBottom="1rem">
              A GANG OF Sad Gorilla NFTs collection
            </Typography>
            <Actions BusdAmount="0.8" />
            <Typography variant="h6" marginBottom="1rem" marginTop="1rem">
              REMAINING: 598
            </Typography>
          </Stack>
        </Grow>
        <Box position="relative" minHeight="300px" width="100%">
          <Image
            src="/images/gorilla_bord_.png"
            alt=""
            objectFit="cover"
            layout="fill"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Mint;
