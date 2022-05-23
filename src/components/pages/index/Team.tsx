import { Box, Container, Grow, Stack, styled, Typography } from "@mui/material";
import React, { FunctionComponent, useRef, useState } from "react";
import { FullVhContainer } from "../../shared/FullVhContainer";
interface Props {}

const Team: FunctionComponent<Props> = ({}) => {
  const [isInView, setIsInView] = useState(true);
  const scrollViewRef = useRef<HTMLDivElement>();

  const scrollRight = () => {
    if (!scrollViewRef.current) {
      return;
    }
    const correntScrollLeft = scrollViewRef.current.scrollLeft;
    const scrollWidth = scrollViewRef.current.scrollWidth;
    const clientWidth = scrollViewRef.current.clientWidth;
    const scrollTo = correntScrollLeft + clientWidth / 2;

    if (correntScrollLeft + clientWidth >= scrollWidth) {
      scrollViewRef.current.scrollLeft = 0;
    } else {
      scrollViewRef.current.scrollLeft = scrollTo;
    }
  };

  const scrollLeft = () => {
    if (!scrollViewRef.current) {
      return;
    }
    const correntScrollLeft = scrollViewRef.current.scrollLeft;
    const scrollWidth = scrollViewRef.current.scrollWidth;
    const clientWidth = scrollViewRef.current.clientWidth;
    const scrollTo = correntScrollLeft - clientWidth / 2;
    if (correntScrollLeft === 0) {
      scrollViewRef.current.scrollLeft = scrollWidth;
    } else {
      scrollViewRef.current.scrollLeft = scrollTo;
    }
  };

  return (
    <FullVhContainer sx={{ paddingBlock: "80px" }}>
      <Container>
        <Stack alignItems="center">
          <Typography variant="caption">TEAM</Typography>
          <Typography variant="h4">Hangry Hippo Team</Typography>
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            ref={scrollViewRef}
            sx={{ overflowX: "scroll", scrollSnapType: "x mandatory" }}
          >
            {new Array(50).fill(1).map((_, index) => (
              <Grow
                key={`member-${index}`}
                in={isInView}
                style={{ transformOrigin: "0 0 0" }}
                {...(isInView ? { timeout: index * 1000 } : {})}
              >
                <Box bgcolor="red" width="295px" height="385px"></Box>
              </Grow>
            ))}
          </Box>
        </Stack>
      </Container>
    </FullVhContainer>
  );
};

const AdvisorsContainer = styled(Stack)`
  flex-direction: row;
  width: fit-content;
  & > *:not(:first-of-type) {
    margin-left: 22px;
  }
`;

export default Team;
