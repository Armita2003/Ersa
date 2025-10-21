import useResponsive from "@/hooks/useResponsive";
import { Container } from "@mui/material";
import AppDetails from ".";
import { YatYapLogo } from "../../../../../public/Icons/WorkLogos/YatYapLogo";
import YatYapDetails from "./DetailComponents/YatYapDetails";

export function YatYap() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
            <AppDetails
                appImage="WorkDetail3.png"
                title="Friends Onboard"
                infoText="Finding reliable crew members and managing bookings in the yachting industry can be inefficient. YATYAP streamlines this process, offering yacht owners and crew a seamless platform to connect, post jobs, and handle payments securely. With personalized profiles and advanced search features, YATYAP simplifies crew management, making it the go-to solution for the global yachting community."
                backgroundImageUrl="WorkDetail/Background3.png"
                textColor="#FFFFFF"
                subTextColor="#EEF2FF"
                logoComponent={<YatYapLogo width={SmallScreen ? 129.5 : 219} height={45} />}
            />
            <YatYapDetails />
        </Container>
    );
}
