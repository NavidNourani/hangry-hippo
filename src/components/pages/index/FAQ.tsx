import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { FullVhContainer } from "../../shared/FullVhContainer";
import { SvgContainer } from "../../shared/SvgContainer";
import Discord from "/public/images/discord.svg";
interface Props {}

const FAQ: FunctionComponent<Props> = ({}) => {
  return (
    <FullVhContainer minHeight="100% !important" py="80px">
      <Container>
        <Stack alignItems="center">
          <TopSegment>
            <Box display="flex" alignItems="center">
              <Stack>
                <Typography marginBottom="1rem" variant="caption">
                  FAQS
                </Typography>
                <Typography variant="h4">Ask Mr.Gorilla</Typography>
              </Stack>
            </Box>
            <Stack
              display="flex"
              sx={{
                "&>.Mui-expanded": {
                  boxShadow: "#9f9f9f61 0px 5px 19px 4px",
                  borderRadius: "8px",
                },
              }}
            >
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>
                    Why should I buy a Hangry Sad Gorilla NFT?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Owning a Hangry Sad Gorilla of your own gives you exclusive
                    lifetime access to HANGRY.TOOLS, so you can up your
                    investing game. As a holder, you’ll have a voice in the
                    Community Fund and how we spend it. Holders have already
                    purchased land in the Metaverse. As a Sad Gorilla, we also
                    care a lot about water. A portion of your Hangry Sad Gorilla
                    purchase goes directly to bringing locally-sourced clean
                    water to developing countries through the non-profit
                    organization Charity Water.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>What blockchain are you operating on?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Ethereum.</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>What blockchain are you operating on?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>5,555</Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </TopSegment>
          <Typography marginBottom="1.5rem" variant="h5">
            Join The Discord Family
          </Typography>
          <Link href="https://discord.gg/SadGorillanft">
            <a>
              <Button
                variant="outlined"
                endIcon={
                  <SvgContainer>
                    <Discord />
                  </SvgContainer>
                }
              >
                Discord
              </Button>
            </a>
          </Link>
        </Stack>
      </Container>
    </FullVhContainer>
  );
};

const TopSegment = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 5rem;
`;

export default FAQ;
