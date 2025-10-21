import useResponsive from "@/hooks/useResponsive";
import { Container } from "@mui/material";
import AppDetails from ".";
import { WelfLogo } from "../../../../../public/Icons/WorkLogos/WelfLogo";
import WelfDetails from "./DetailComponents/WelfDetails";

export function Welf() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
            <AppDetails
                appImage="WorkDetail4.png"
                title="Elevate your digital game"
                infoText="Finding talented digital product teams and managing complex development projects can be challenging. Welf Lab simplifies this process, offering businesses a trusted partner to build, scale, and launch digital products efficiently. With expertise in design, development, and deployment, Welf Lab connects innovation with execution, ensuring reliable results for global brands and startups alike."
                backgroundImageUrl="WorkDetail/Background4.jpg"
                textColor="#1F1F1F"
                subTextColor="#1F1F1F"
                logoComponent={<WelfLogo width={SmallScreen ? 101.88 : 203.76} height={45} />}
            />
            <WelfDetails />
        </Container>
    );
}
