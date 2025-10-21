import useResponsive from "@/hooks/useResponsive";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function LandingFirstSlide() {
  const isMediumScreen = useResponsive("down", "lg");
  const isSmallScreen = useResponsive("down", "md");
  const isExtraSmallScreen = useResponsive("down", "sm");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isVisible) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [isVisible]);

  const handleMouseMove = () => {
    setIsVisible(true);
  };

  return (
    <Container onMouseMove={handleMouseMove} maxWidth="xl" sx={{ padding: "0px !important" }}>
      <Grid container justifyContent="space-evenly" direction="row" pt={"32px"}>
        <Grid sm={6} item py={isExtraSmallScreen ? 5 : isSmallScreen ? "10px" : "119.5px"} alignSelf="center">
          <Stack
            alignContent="center"
            alignSelf="center"
            p={isExtraSmallScreen ? 0 : 1}
            pr={isExtraSmallScreen ? 0 : isSmallScreen ? 8 : 10}
          >
            <Stack maxWidth={isExtraSmallScreen ? "100%" : isSmallScreen ? "330px" : "100%"} gap={2}>
              <Typography
                mb={0}
                sx={{
                  fontSize: isExtraSmallScreen ? 20 : isSmallScreen ? 16 : isMediumScreen ? 28 : 32,
                  fontWeight: 700,
                }}
                className="landing"
              >
                UX So Intuitive, Even Your Cat Could Use It.
              </Typography>
              <Typography
                sx={{ fontSize: isExtraSmallScreen ? 12 : isSmallScreen ? 10 : 16 }}
                fontWeight={500}
                className="landingTypography"
                lineHeight={"26px"}
              >
                I design digital experiences that are purrfectly intuitive—so easy to use, even your cat could navigate them. Every
                                interaction is crafted with simplicity in mind, ensuring your users have a smooth, paws-itively delightful experience.
                                Whether it’s sleek web designs or user-friendly apps, I make sure my creations are as natural as a cat’s curiosity.
                                Because in my world, great design is all about creating seamless, claw-some experiences that users can’t resist
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid sm={6} margin="auto" item width="100%" height="100%">
          <Stack position="relative">
            <img
              style={{
                width: isExtraSmallScreen ? "80%" : isSmallScreen ? "100%" : "100%",
                height: isExtraSmallScreen ? "80%" : isSmallScreen ? "100%" : "100%",
                maxWidth: "527px",
                margin: "auto",
              }}
              src="/ProfilePic.png"
              alt="Profile Picture"
            />
          </Stack>
        </Grid>
      </Grid>
      <Box
        component="img"
        src="/HeroCatAnimation.gif"
        sx={{
          display: "block",
          position: "relative",
          bottom: 0,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          pointerEvents: "none",
        }}
      />
    </Container>
  );
}
