import styled from "@emotion/styled";
import { Instagram, Twitter } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  useScrollTrigger,
} from "@mui/material";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import Discord from "/public/images/discord.svg";

interface Props {
  children: React.ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  const scrolled = useScrollTrigger({
    threshold: 100,
    disableHysteresis: true,
  });
  console.log("scrolled", scrolled);
  return (
    <>
      <AppBar
        sx={{ backgroundColor: scrolled ? undefined : "transparent" }}
        elevation={scrolled ? 4 : 0}
      >
        <Toolbar>
          <Box
            sx={{
              flex: 1,
              height: "15px",
              width: "173px",
              position: "relative",
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
          <Tooltip title="Discord">
            <IconButton>
              <LogoContainer color="white" size={1.5}>
                <Discord />
              </LogoContainer>
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram">
            <IconButton>
              <Instagram sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Twitter">
            <IconButton>
              <Twitter sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Stack height="5000px">{children}</Stack>
    </>
  );
};

const LogoContainer = styled(Box)((props: any) => ({
  color: props.color ?? "white",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& > *": {
    padding: `${((props.size * 16) / 10).toFixed(0)}px`,
    height: `${props.size}rem`,
    width: `${props.size}rem`,
    color: props.color,
  },
}));

export default Layout;
