import useResponsive from "@/hooks/useResponsive";
import { Container } from "@mui/material";
import AppDetails from ".";
import { AppbakerLogo } from "../../../../../public/Icons/WorkLogos/AppbakerLogo";
import AppbakerDetails from "./DetailComponents/AppbakerDetails";

export function Appbaker() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
            <AppDetails
                appImage="WorkDetail5.png"
                title="Bake Your Digital Dreams"
                infoText="Appbaker Technologies Inc. specializes in creating transformative solutions that combine technology and well-being. Focused on the health and wellness sectors, their expert team develops innovative technologies that empower individuals and communities to live healthier, more fulfilling lives. Appbaker is dedicated to shaping the future of well-being through innovation, collaboration, and excellence."
                backgroundImageUrl="WorkDetail/Background5.png"
                textColor="#FFFFFF"
                subTextColor="#EEF2FF"
                logoComponent={<AppbakerLogo width={SmallScreen ? 118.62 : 237.24} height={45} />}
            />
            <AppbakerDetails />
        </Container>
    );
}
