import useResponsive from "@/hooks/useResponsive";
import { Container } from "@mui/material";
import AppDetails from ".";
import { HuduLogo } from "../../../../../public/Icons/WorkLogos/HuduLogo";
import HuduDetails from "./DetailComponents/HuduDetails";
export function Hudu() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
            <AppDetails
                appImage="WorkDetail2.png"
                title="The Odd Job Marketplace"
                infoText="By 2023, managing tasks in busy lives often meant dealing with inefficiencies and limited options. HUDU transformed this by connecting Des Moines residents with skilled local DO-ers for any project, from home repairs to unique tasks. By streamlining listings, bids, and secure in-app processes, HUDU empowered communities to get more done effortlessly. Now expanding beyond Iowa, HUDU continues to redefine task outsourcing with its hyper-local, user-focused platform."
                backgroundImageUrl="WorkDetail/Background2.png"
                textColor="#1F1F1F"
                subTextColor="#111111"
                IconButtonsLogo={[
                    { logo: "/WorkDetail/appleLogo.png", link: "https://apps.apple.com/us/app/hudu/id1659522492" },
                    { logo: "/WorkDetail/googlePlayLogo.png", link: "https://play.google.com/store/apps/details?id=com.heyhudu.HUDU&hl=en_GB" },
                ]}
                logoComponent={<HuduLogo width={SmallScreen ? 80.21 : 160.42} height={35} />}
            />
            <HuduDetails />
        </Container>
    );
}
