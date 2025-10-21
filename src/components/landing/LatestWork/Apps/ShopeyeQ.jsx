import useResponsive from "@/hooks/useResponsive";
import { Container } from "@mui/material";
import AppDetails from ".";
import { ShopeyeQLogo } from "../../../../../public/Icons/WorkLogos/ShopeyeQLogo";
import ShopeyeQDetails from "./DetailComponents/ShopeyeQDetails";

export function ShopeyeQ() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
            <AppDetails
                appImage="WorkDetail1.png"
                title="Empowering Sales Representatives for Peak Performance"
                infoText="By 2024, FMCG sales representatives grappled with operational inefficiencies and limited access to actionable insights. From navigating territories to ensuring accurate shelf stock data, these challenges often led to missed opportunities and suboptimal performance. ShopeyeQ transformed the sales process, enabling representatives to work smarter and drive better results."
                backgroundImageUrl="WorkDetail/Background1.jpg"
                textColor="white"
                subTextColor="#EEF2FF"
                logoComponent={<ShopeyeQLogo width={SmallScreen ? 116 : 232} height={49} />}
            />
            <ShopeyeQDetails />
        </Container>
    );
}
