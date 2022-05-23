import { Stack } from "@mui/material";
import About from "../src/components/pages/index/About";
import RoadmapSegment from "../src/components/pages/index/RoadmapSegment";
import Tools from "../src/components/pages/index/Tools";
import BigBanner from "../src/components/shared/BigBanner";

export default function Home() {
  return (
    <Stack>
      <BigBanner />
      <Tools />
      <About />
      <RoadmapSegment />
    </Stack>
  );
}
