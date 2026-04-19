"use client";

import useResponsive from "@/hooks/useResponsive";
import {
  COMPARISON_BORDER,
  COMPARISON_BORDER_FAINT,
  COMPARISON_FEATURE_SURFACE_SX,
  COMPARISON_MOBILE_CARD_SX,
  COMPARISON_MOBILE_CHIP_BASE_SX,
  COMPARISON_MOBILE_FEATURE_BOX_SX,
  COMPARISON_SATOSHI_FONT,
  COMPARISON_TABLE_BODY_CELL_BASE_SX,
  COMPARISON_TABLE_CONTAINER_SX,
  COMPARISON_TABLE_HEADER_CELL_BASE_SX,
  COMPARISON_TEXT_DARK,
} from "@/Styles";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Stack,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

const columnHeaders = ["Strengths", "Weaknesses"];

const getDesktopHeadingSx = (isMediumScreen) => ({
  fontSize: isMediumScreen ? "1.5rem" : "2rem",
});

const getDesktopHeaderCellSx = (isMediumScreen) => ({
  ...COMPARISON_TABLE_HEADER_CELL_BASE_SX,
  fontSize: isMediumScreen ? "20px" : "24px",
});

const getDesktopFeatureHeaderCellSx = (isMediumScreen) => ({
  ...COMPARISON_FEATURE_SURFACE_SX,
  ...getDesktopHeaderCellSx(isMediumScreen),
  width: "20%",
});

const getDesktopFeatureRowCellSx = (isMediumScreen) => ({
  ...COMPARISON_FEATURE_SURFACE_SX,
  fontWeight: 500,
  fontSize: isMediumScreen ? "16px" : "20px",
  borderBottom: COMPARISON_BORDER,
  py: 2,
});

const getDesktopBodyCellSx = (isMediumScreen) => ({
  ...COMPARISON_TABLE_BODY_CELL_BASE_SX,
  fontSize: isMediumScreen ? "14px" : "18px",
});

const getMobileTitleSx = (isMediumScreen) => ({
  fontSize: isMediumScreen ? "26px" : "30px",
  fontWeight: 700,
  lineHeight: "130%",
  color: "#1F1F1F",
});

const getMobileSubtitleSx = (isMediumScreen) => ({
  fontSize: isMediumScreen ? "16px" : "20px",
  fontWeight: 500,
  lineHeight: "130%",
  color: "#111111",
});

export const ComparisonTable = ({ title, subtitle, data = [] }) => {
  const isSmallScreen = useResponsive("down", "sm");
  const isMediumScreen = useResponsive("down", "md");

  if (!isSmallScreen) {
    return (
      <Stack gap={3} py={isSmallScreen ? 2 : 4}>
        {title && (
          <Typography
            variant="h4"
            fontWeight={700}
            color="text.primary"
            sx={getDesktopHeadingSx(isMediumScreen)}
          >
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
        )}

        <TableContainer
          component={Paper}
          elevation={0}
          sx={COMPARISON_TABLE_CONTAINER_SX}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={getDesktopFeatureHeaderCellSx(isMediumScreen)}
                >
                  Feature
                </TableCell>
                {columnHeaders.map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      ...getDesktopHeaderCellSx(isMediumScreen),
                      borderRight: COMPARISON_BORDER,
                      color: "#000000",
                      textAlign: "center",
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  // sx={{
                  //   "&:last-child td, &:last-child th": { border: 0 },
                  // }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={getDesktopFeatureRowCellSx(isMediumScreen)}
                  >
                    {row.feature}
                  </TableCell>
                  <TableCell
                    sx={{
                      ...getDesktopBodyCellSx(isMediumScreen),
                      borderRight: COMPARISON_BORDER_FAINT,
                    }}
                  >
                    {row.strength}
                  </TableCell>
                  <TableCell
                    sx={getDesktopBodyCellSx(isMediumScreen)}
                  >
                    {row.weakness}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    );
  }

  return (
    <Stack gap={isSmallScreen ? 1.5 : 3} py={isSmallScreen ? 2 : 4}>
      {title && (
        <Typography sx={getMobileTitleSx(isMediumScreen)}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography sx={getMobileSubtitleSx(isMediumScreen)}>
          {subtitle}
        </Typography>
      )}

      <Stack gap={2}>
        {data.map((row, index) => (
          <Card
            key={index}
            elevation={0}
            sx={COMPARISON_MOBILE_CARD_SX}
          >
            <CardContent sx={{ p: 2 }}>
              <Box sx={COMPARISON_MOBILE_FEATURE_BOX_SX}>
                <Typography fontWeight={600} fontSize="0.875rem">
                  {row.feature}
                </Typography>
              </Box>

              <Stack gap={1.5}>
                <Box>
                  <Chip
                    label="Strengths"
                    size="small"
                    sx={{
                      bgcolor: "rgba(37, 92, 254, 0.1)",
                      color: "primary.main",
                      ...COMPARISON_MOBILE_CHIP_BASE_SX,
                    }}
                  />
                  <Typography variant="body2" color={COMPARISON_TEXT_DARK}>
                    {row.strength}
                  </Typography>
                </Box>
                <Box>
                  <Chip
                    label="Weaknesses"
                    size="small"
                    sx={{
                      bgcolor: "rgba(244, 67, 54, 0.1)",
                      color: "error.main",
                      ...COMPARISON_MOBILE_CHIP_BASE_SX,
                    }}
                  />
                  <Typography variant="body2" color={COMPARISON_TEXT_DARK}>
                    {row.weakness}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};