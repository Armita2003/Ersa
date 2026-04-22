import useResponsive from "@/hooks/useResponsive";
import { Container } from "@mui/material";
import AppDetails from ".";
import { ShopeyeQLogo } from "../../../../../public/Icons/WorkLogos/ShopeyeQLogo";
import ShopeyeQDesktopDetails from "./DetailComponents/ShopeyeQDesktopDetails";
import { YouDooLogo } from "../../../../../public/Icons/WorkLogos/YouDooLogo";
import YouDooDetails from "./DetailComponents/YouDooDetails";

export function YouDoo() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
            <AppDetails
                appImage="WorkDetail8.svg"
                title="Designing a Connected Health Companion: YouDoo"
                infoText="In a fragmented health and wellness space, users need a simple, unified way to manage their well-being. YouDoo was designed as a smart health assistant that connects mood, movement, and nutrition into one seamless experience. With social challenges, personalized activity plans, recipe discovery, and real-time dietary feedback, YouDoo integrates with Apple Health to deliver tailored insights and help users build healthier habits through consistency and accountability."
                backgroundImageUrl="WorkDetail/Background7.jpg"
                textColor="#1F1F1F"
                subTextColor="#1F1F1F"
                logoComponent={<YouDooLogo width={SmallScreen ? 116 : 231.29} height={49} />}
            />
            <YouDooDetails />
        </Container>
    );
}
