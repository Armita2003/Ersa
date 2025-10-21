import useResponsive from "@/hooks/useResponsive";
import { WorkDetailLandingBox, WorkDetailLandingHeaderSubText, WorkDetailLandingHeaderText } from "@/Styles";
import { Stack } from "@mui/material";

export default function LandingMainText({ title, infoText, logo }) {
    const SmallScreen = useResponsive("down", "md");
    const MediumScreen = useResponsive("down", "lg");
    // function LogoComponent() {
    //     if (logo == "ShopeyeQ") {
    //         return <ShopeyeQLogo />;
    //     }
    // }
    return (
        <WorkDetailLandingBox>
            <Stack direction="row">
                <Stack>{logo}</Stack>
            </Stack>
            <Stack gap={3} pb={10}>
                <Stack height={SmallScreen ? "100%" : MediumScreen ? "100%" : 130}>
                    <WorkDetailLandingHeaderText>{title}</WorkDetailLandingHeaderText>
                </Stack>
                <Stack width={SmallScreen ? "100%" : MediumScreen ? "100%" : 699} height={SmallScreen ? "100%" : 135}>
                    <WorkDetailLandingHeaderSubText>{infoText}</WorkDetailLandingHeaderSubText>
                </Stack>
            </Stack>
        </WorkDetailLandingBox>
    );
}
