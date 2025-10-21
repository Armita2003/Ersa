import useResponsive from "@/hooks/useResponsive";
import { FooterButton, FooterButtonText, FooterSubText, FooterText } from "@/Styles";
import { Box, Grid, Stack } from "@mui/material";

export default function Footer() {
  const isSmall = useResponsive("down", "sm");
  const handleButtonClick = () => {
        window.open("/Resume.pdf", "_blank");
    };
  return (
    <Stack mt={isSmall ? 5 : 10}>
      <Grid container>
        <Grid item order={isSmall ? 2 : 1} xs={12} sm={4} md={4}>
          <Box
            component="img"
            src="/FooterGif.gif"
            sx={{
              display: "block",
              margin: isSmall ? "auto" : "",
              width: "100%",
              height: "auto",
              maxWidth: { xs: "230px", md: "290px" },
            }}
          />
        </Grid>
        <Grid item order={isSmall ? 1 : 2} xs={12} sm={8} md={8} width={712} alignContent="center">
          <>
            <FooterText>No Mice Were Harmed in the making of this Portfolio </FooterText>
            <FooterSubText> (Except the Clickable Ones).</FooterSubText>
          </>
          <Stack mt={4} gap={2} direction={isSmall ? "column" : "row"}>
            <FooterButton
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mir.ersa@gmail.com&su=Hello&body=I'd%20like%20to%20connect%20with%20you."
              target="_blank"
              sx={{ backgroundColor: "#8C404E" }}
            >
              <FooterButtonText sx={{ color: "white" }}>Drop a message</FooterButtonText>
            </FooterButton>
            <FooterButton onClick={() => handleButtonClick()} sx={{ backgroundColor: "white", border: "1px solid #F0F0F0" }}>
                            <FooterButtonText sx={{ color: "#8C404E" }}>View resume</FooterButtonText>
            </FooterButton>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
