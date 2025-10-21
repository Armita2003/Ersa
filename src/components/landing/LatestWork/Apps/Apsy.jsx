import useResponsive from "@/hooks/useResponsive";
import { Container } from "@mui/material";
import AppDetails from ".";
import { ApsyLogo } from "../../../../../public/Icons/WorkLogos/ApsyLogo";
import ApsyDetails from "./DetailComponents/ApsyDetails";

export function Apsy() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
            <AppDetails
                appImage="WorkDetail6.png"
                title="You dream it, speak it, AI builds it."
                infoText="Apsy specializes in revolutionizing the way individuals and businesses create digital experiences. Focused on empowering non-technical users, the platform offers innovative tools that make app development accessible, seamless, and efficient. With a commitment to simplifying complex processes, Apsy.io enables creators to bring their ideas to life effortlessly, fostering innovation and creativity. By prioritizing user-centric design and functionality, Apsy is redefining the future of app creation, empowering a global community to build, grow, and succeed."
                backgroundImageUrl="WorkDetail/Background6.png"
                textColor="#FFFFFF"
                subTextColor="#EEF2FF"
                logoComponent={<ApsyLogo width={SmallScreen ? 85.61 : 171.22} height={45} />}
            />
            <ApsyDetails />
        </Container>
    );
}
