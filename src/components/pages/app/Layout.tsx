import { Twitter } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
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
          <Typography variant="h4" fontWeight="900" sx={{ flex: "1" }}>
            Sad Gorilla
          </Typography>
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
