import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <Stack alignItems="center" py="5rem">
      <Box
        sx={{
          height: "15px",
          width: "173px",
          position: "relative",
          marginBottom: "0.5rem",
        }}
      >
        <Image
          src="/images/logo_letters.png"
          alt=""
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </Box>
      <Typography variant="body2">© Sad Gorilla 2022</Typography>
    </Stack>
  );
};

export default Footer;
