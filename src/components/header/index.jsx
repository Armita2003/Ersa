import useResponsive from "@/hooks/useResponsive";
import { Stack, Typography } from "@mui/material";
import Logo from "../../../public/Icons/Logo";

export function Header() {
  const isSmallScreen = useResponsive("down", "md");
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" gap={isSmallScreen ? 1 : 2}>
        <Stack width={isSmallScreen ? 20 : 24} height={isSmallScreen ? 20 : 24}>
          <Logo />
        </Stack>
        <Typography sx={{ mt: 0.2, fontSize: isSmallScreen ? 13 : 16 }} className="heading">
          Ersa Khorsandi
        </Typography>
      </Stack>
    </Stack>
  );
}
