import useResponsive from "@/hooks/useResponsive";
import { Container } from "@mui/material";

export default function MainLayout({ children }) {
    const mediumScreen = useResponsive("down", "lg");
    return (
        <Container
            maxWidth="xl"
            sx={{
                paddingRight: mediumScreen ? "30px !important" : "80px !important",
                paddingLeft: mediumScreen ? "30px !important" : "80px !important",
                paddingTop: "32px",
                paddingBottom: "32px",
            }}
        >
            {children}
        </Container>
    );
}
