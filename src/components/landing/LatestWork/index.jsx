import useResponsive from "@/hooks/useResponsive";
import { Tags, TagTypography } from "@/Styles";
import { Stack } from "@mui/material";
import RecentAdventures from "../RecentAdventures";
import LatestWorkGrid from "./LatestWorkGrid";

export default function LatestWork() {
  const isSmallScreen = useResponsive("down", "md");
  return (
    <Stack mt={0} gap={3}>
      <Tags width={92} height={15}>
        <TagTypography width={92} height={15} color="black">
          Latest
          <span style={{ color: "#8C404E" }}> Works</span>
        </TagTypography>
      </Tags>
      <LatestWorkGrid />
      <RecentAdventures />
    </Stack>
  );
}
