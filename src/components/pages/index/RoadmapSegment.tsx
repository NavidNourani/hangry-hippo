import { Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import { FullVhContainer } from "../../shared/FullVhContainer";
import Step from "./roadmap-segment/Step";
interface Props {}

const RoadmapSegment: FunctionComponent<Props> = ({}) => {
  return (
    <FullVhContainer sx={{ paddingBlock: "80px", position: "relative" }}>
      <StyledImage
        src="/images/monkey_2.png"
        alt=""
        layout="fill"
        objectFit="cover"
        sx={{ filter: "opacity(0.2)" }}
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography variant="caption" marginBottom="0.75rem">
          FORWARD VISION
        </Typography>
        <Typography variant="h4" marginBottom="1rem">
          Roadmap
        </Typography>
        <Stack
          sx={{
            "&>:nth-of-type(2n)": {
              direction: "rtl",
            },
          }}
        >
          <Step
            completed
            title="50% MINT SELLOUT COMPLETE"
            description={
              <Stack>
                <Typography marginBottom="1rem">
                  At 50% of mint sellout, we purchased land in the Sandbox
                  Metaverse. You – the hippo holders – chose where our community
                  bought land. Join us during mint phase 3 and be a co-owner of
                  parcels:
                </Typography>
                <Typography>
                  -77,-72
                  <br />
                  -77,-71
                  <br />
                  -77,-70
                  <br />
                  -76,-72
                  <br />
                  -76,-71
                  <br />
                  -76,-70
                </Typography>
              </Stack>
            }
          />
          <Step
            title="100% MINT SELLOUT"
            description="At 100% of mint sellout, we’ll purchase more land in the Metaverse – OR – We’ll take the land we already own and turn it into an income generating asset through renting or building within our land. Our team has extensive experience with real estate development and would apply this expertise to our Metaverse community assets."
          />
          <Step
            title="GIVING BACK TO CLEAN WATER"
            description="At 100% of mint sellout, we’ll also be giving $30,000 to the organization Charity Water. Being a bunch of hippos, water is everything to us. Turns out we are not the only ones. 1 out of 3 people have no access to clean drinking water. As a community, we want to be part of the solution. 10% of the hippo royalties will continue to be donated to Charity Water."
          />
          <Step
            title="LAUNCH HANGRY.TOOLS"
            description="We're proud to bring the Hangry Hippo community an exclusive utility to add to your toolbelts. Know what's rare, track the latest trends and more. HANGRY.TOOLS will be rolled out in three phases by our in-house developers, so beginners can learn at a pace."
          />
          <Step
            title="AS THE COMMUNITY GROWS,"
            description="40% of the hippo royalties will go toward our ongoing community fund."
          />
        </Stack>
      </Container>
    </FullVhContainer>
  );
};

const StyledImage = styled(Image)``;

export default RoadmapSegment;
