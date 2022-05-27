import { Box, Grow, Skeleton, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React, { FunctionComponent, useEffect, useState } from "react";
import ReactSign from "react-sign";
import Actions from "../src/components/pages/mint/Actions";
interface Props {
  children: React.ReactNode;
}

const Mint: FunctionComponent<Props> = ({ children }) => {
  const [isIn, setIsIn] = useState(false);
  const [mintValue, setMinValue] = useState(undefined);

  const getMintValue = async () => {
    const res = await fetch("/api/mintValue");
    const data = await res.json();
    setMinValue(data.value);
  };
  const decMintValue = async () => {
    const res = await fetch("/api/decMintValue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ secret: "11_!Gorilla_sec" }),
    });
    const data = await res.json();
    if (data.success) {
      setMinValue(mintValue - 1);
      await getMintValue();
    }
  };

  useEffect(() => {
    getMintValue();
  }, []);

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
            <Actions BusdAmount="0.0999" onPurchase={() => decMintValue()} />
            <Typography
              sx={{ display: "flex", flexDirection: "row" }}
              variant="h6"
              marginBottom="1rem"
              marginTop="1rem"
            >
              REMAINING:{" "}
              <Box component="span" marginLeft="5px">
                {mintValue ?? <Skeleton width="50px" variant="text" />}
              </Box>
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
