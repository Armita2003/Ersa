import useResponsive from "@/hooks/useResponsive";
import { LatestWorkContainers, LatestWorkHoverText, LatestWorkRoleTypography, LatestWorkTitleTypography, Works } from "@/Styles";
import { Box, Grid, Stack } from "@mui/material";

export default function LatestWorkGrid() {
    const ExtraSmallScreen = useResponsive("down", "sm");
    const SmallScreen = useResponsive("down", "md");

    const handleCardClick = (name, e) => {
        e.preventDefault();
        window.open(`/${encodeURIComponent(name)}`, "_blank");
    };

    return (
        <Stack mb={SmallScreen ? 8 : 22.3}>
            <Grid container sx={{ rowGap: 2.5, columnGap: 2.5, display: "flex", justifyContent: "space-evenly" }}>
                {Works.map((items, index) => {
                    return (
                        <Grid key={index} item xs={12} md={5.8} lg={3.8}>
                            <LatestWorkContainers
                                href={`/${encodeURIComponent(items.name)}`}
                                target="_blank"
                                onClick={(e) => handleCardClick(items.name, e)}
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    flexDirection: "column",
                                    cursor: "pointer",
                                    "@media (min-width: 1024px)": {
                                        ":hover": {
                                            background: "linear-gradient(to right, white 60%, black 40%)",
                                        },

                                        "&:hover .circle": {
                                            opacity: 0,
                                        },
                                        ":hover::before": {
                                            content: '""',
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: "rgba(140, 64, 78, 0.8)",
                                            zIndex: 1,
                                            backdropFilter: "blur(5px)",
                                        },
                                        "&:hover .viewText": {
                                            opacity: 1,
                                            visibility: "visible",
                                        },
                                        "&:hover .texts": {
                                            opacity: 0.5,
                                            filter: "blur(2px)",
                                        },
                                    },
                                }}
                            >
                                <LatestWorkHoverText className="viewText" sx={{}}>
                                    View Case Study
                                </LatestWorkHoverText>
                                <Stack
                                    position="relative"
                                    height="257px"
                                    direction={ExtraSmallScreen ? "column" : "row"}
                                    justifyContent="space-between"
                                >
                                    <Stack gap={1} mt="3px">
                                        <LatestWorkTitleTypography className="texts"> {items.title}</LatestWorkTitleTypography>
                                        <LatestWorkRoleTypography className="texts"> {items.role}</LatestWorkRoleTypography>
                                    </Stack>
                                    <Box>
                                        <img
                                            style={{
                                                position: "absolute",
                                                right: 0,
                                                bottom: 0,
                                                maxHeight: 212,
                                                maxWidth: 212,
                                                width: "80%",
                                                height: "80%",
                                            }}
                                            src={items.circle}
                                            alt={`${items.title} Background`}
                                            className="circle"
                                        />

                                        <img
                                            style={{
                                                position: "absolute",
                                                bottom: 20,
                                                right: 0,
                                                width: "100%",
                                                height: "auto",
                                                maxWidth: index >= 3 ? "294px" : "246px",
                                            }}
                                            src={items.image}
                                            alt={`${items.title} Background`}
                                        />
                                    </Box>
                                </Stack>
                            </LatestWorkContainers>
                        </Grid>
                    );
                })}
            </Grid>
        </Stack>
    );
}
