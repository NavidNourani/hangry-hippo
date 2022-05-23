import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { FunctionComponent } from "react";
interface Props {}

const BigBanner: FunctionComponent<Props> = ({}) => {
  return (
    <Box
      width="100%"
      height="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src="/images/monkey_2.png"
        alt=""
        layout="fill"
        quality={100}
        objectFit="cover"
      />
      <Stack position="relative" alignItems={"center"}>
        <Typography variant="h3" marginBottom="1rem">
          Sad Guerilla
        </Typography>
        <Typography marginBottom="2rem">A GANG OF HANGRY HIPPO NFTs</Typography>
        <Button variant="contained">MiNT NOW</Button>
      </Stack>
    </Box>
  );
};

export default BigBanner;
