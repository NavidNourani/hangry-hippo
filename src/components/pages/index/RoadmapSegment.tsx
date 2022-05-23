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
              "*>p": { textAlign: "end", direction: "ltr" },
            },
          }}
        >
          <Step title="- NFT development " description=" " />
          <Step title="- release of 900 NFTs for minting " description=" " />
          <Step
            title="- release of remaining 99 NFTs on OpenSea"
            description=" "
          />
          <Step
            title="- $distribution to selected foundations and organizations"
            description=" "
          />
          <Step
            title="- Showcase of randomly selected NFTs of the collection at physical art showings. "
            description=" "
          />
        </Stack>
      </Container>
    </FullVhContainer>
  );
};

const StyledImage = styled(Image)``;

export default RoadmapSegment;
