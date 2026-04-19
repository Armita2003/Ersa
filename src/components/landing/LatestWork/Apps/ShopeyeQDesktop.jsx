import useResponsive from "@/hooks/useResponsive";
import { Container } from "@mui/material";
import AppDetails from ".";
import { ShopeyeQLogo } from "../../../../../public/Icons/WorkLogos/ShopeyeQLogo";
import ShopeyeQDesktopDetails from "./DetailComponents/ShopeyeQDesktopDetails";

export function ShopeyeQDesktop() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
            <AppDetails
                appImage="WorkDetail7.svg"
                title="Optimizing Sales Operations: The ShopeyeQ Manager Dashboard"
                infoText="In a fast-paced retail and FMCG environment, managers need a centralized, data-driven dashboard to oversee sales operations, field team activities, and campaign performance. As a UI/UX designer at ShopeyeQ, my role was to design an intuitive and efficient Manager Dashboard that allows decision-makers to monitor key metrics, assign tasks, plan store visits, and optimize sales performance—all in a seamless and actionable interface."
                backgroundImageUrl="WorkDetail/Background1.jpg"
                textColor="white"
                subTextColor="#EEF2FF"
                logoComponent={<ShopeyeQLogo width={SmallScreen ? 116 : 231.29} height={49} />}
            />
            <ShopeyeQDesktopDetails />
        </Container>
    );
}
