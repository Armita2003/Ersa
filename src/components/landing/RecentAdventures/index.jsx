import useResponsive from "@/hooks/useResponsive";
import { Tags, TagTypography } from "@/Styles";
import { Stack } from "@mui/material";
import Adventures from "./Adventures";

export default function RecentAdventures() {
    const isMedium = useResponsive("down", "md");
    return (
        <Stack gap={5}>
            <Tags width={138} height={15}>
                <TagTypography color="black">
                    Recent
                    <span style={{ color: "#8C404E" }}> Adventures</span>
                </TagTypography>
            </Tags>
            <Adventures />
        </Stack>
    );
}
