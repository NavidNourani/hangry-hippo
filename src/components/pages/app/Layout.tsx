import { Twitter } from "@mui/icons-material";
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
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { SvgContainer } from "../../shared/SvgContainer";
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
            <Link href="https://discord.gg/SadGorillanft">
              <a>
                <IconButton>
                  <SvgContainer color="white" size={1.5}>
                    <Discord />
                  </SvgContainer>
                </IconButton>
              </a>
            </Link>
          </Tooltip>
          <Tooltip title="Twitter">
            <Link href="https://twitter.com/SadGorillanft">
              <a>
                <IconButton>
                  <Twitter sx={{ color: "white" }} />
                </IconButton>
              </a>
            </Link>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Stack>{children}</Stack>
    </>
  );
};

export default Layout;
