import { TableColumnText, TableHeaderText, TableRowText } from "@/Styles";
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from "@mui/material";
import { CrossCheckIcon } from "../../../../../../../public/Icons/CrossCheckIcon";
import { TickedCheckIcon } from "../../../../../../../public/Icons/TickedCheckIcon";

const rows = [
    { name: "Navigation", first: <CrossCheckIcon />, second: <TickedCheckIcon />, third: <TickedCheckIcon />, forth: <TickedCheckIcon /> },
    { name: "PoS Prioritization", first: <CrossCheckIcon />, second: <TickedCheckIcon />, third: <TickedCheckIcon />, forth: <CrossCheckIcon /> },
    { name: "Task Breakdown", first: <TickedCheckIcon />, second: <TickedCheckIcon />, third: <TickedCheckIcon />, forth: <TickedCheckIcon /> },
    { name: "Product Scan", first: <CrossCheckIcon />, second: <CrossCheckIcon />, third: <CrossCheckIcon />, forth: <CrossCheckIcon /> },
    { name: "PoS History", first: <CrossCheckIcon />, second: <CrossCheckIcon />, third: <TickedCheckIcon />, forth: <TickedCheckIcon /> },
    { name: "Break Time", first: <CrossCheckIcon />, second: <CrossCheckIcon />, third: <CrossCheckIcon />, forth: <CrossCheckIcon /> },
    { name: "AI Tasks Suggestions", first: <CrossCheckIcon />, second: <TickedCheckIcon />, third: <CrossCheckIcon />, forth: <CrossCheckIcon /> },
    { name: "Offline Functionality", first: <TickedCheckIcon />, second: <TickedCheckIcon />, third: "Limited", forth: "Limited" },
];

export default function FeatureTable() {
    const isSmallScreen = useMediaQuery("(max-width: 1200px)");
    const isExtraSmallScreen = useMediaQuery("(max-width: 600px)");
    return (
        <TableContainer sx={{ backgroundColor: isSmallScreen ? "white" : "rgba(57, 80, 255, 0.2)", border: 0, borderRadius: 1 }}>
            {isSmallScreen ? (
                <Box>
                    <Grid padding={2} justifyContent="space-between" container>
                        {rows.map((row, index) => (
                            <Grid key={index} item xs={isExtraSmallScreen ? 12 : 5.8} sm={5.8}>
                                <Box
                                    key={index}
                                    sx={{
                                        backgroundColor: "rgba(57, 80, 255, 0.2)",
                                        color: "white",
                                        padding: 2,
                                        borderRadius: 1,
                                        marginBottom: 2,
                                        height: "80%",
                                    }}
                                >
                                    <Typography variant="h6" fontWeight={isExtraSmallScreen ? 600 : 700} mb={1} color="rgba(23, 41, 177, 1)">
                                        {row.name}
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", paddingTop: 1 }}>
                                        <Typography color="rgba(23, 41, 177, 1)" variant="body1">
                                            Zoho CRM:
                                        </Typography>{" "}
                                        {row.first}
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", paddingTop: 1 }}>
                                        <Typography color="rgba(23, 41, 177, 1)" variant="body1">
                                            Salesforce:
                                        </Typography>{" "}
                                        {row.second}
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", paddingTop: 1 }}>
                                        <Typography color="rgba(23, 41, 177, 1)" variant="body1">
                                            Repsly:
                                        </Typography>{" "}
                                        {row.third}
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", paddingTop: 1 }}>
                                        <Typography color="rgba(23, 41, 177, 1)" variant="body1">
                                            Pepperi:
                                        </Typography>{" "}
                                        {row.forth}
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ) : (
                <Table sx={{ minWidth: 870, borderCollapse: "collapse", border: 0 }} aria-label="feature table">
                    <TableHead>
                        <TableRow
                            sx={{
                                borderBottom: "1px solid black",
                            }}
                        >
                            <TableCell
                                sx={{
                                    backgroundColor: "rgba(23, 41, 177, 1)",
                                    border: "2px solid rgba(23, 41, 177, 1)",
                                    borderBottom: "2px solid black",
                                }}
                            >
                                <TableHeaderText prop="white">Feature</TableHeaderText>
                            </TableCell>
                            <TableCell align="right" sx={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}>
                                <TableHeaderText> Zoho CRM</TableHeaderText>
                            </TableCell>
                            <TableCell align="right" sx={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}>
                                <TableHeaderText> Salesforce</TableHeaderText>
                            </TableCell>
                            <TableCell align="right" sx={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}>
                                <TableHeaderText> Repsly</TableHeaderText>
                            </TableCell>
                            <TableCell align="right" sx={{ borderBottom: "1px solid black" }}>
                                <TableHeaderText> Pepperi</TableHeaderText>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell
                                    sx={{
                                        backgroundColor: "rgba(23, 41, 177, 1)",
                                        border: "2px solid rgba(23, 41, 177, 1)",
                                        padding: 1.5,
                                        width: 260,
                                    }}
                                >
                                    <TableColumnText>{row.name}</TableColumnText>
                                </TableCell>
                                <TableCell align="right" sx={{ borderRight: "1px solid black", width: "233px" }}>
                                    <TableRowText>{row.first}</TableRowText>
                                </TableCell>
                                <TableCell align="right" sx={{ borderRight: "1px solid black", width: "233px" }}>
                                    <TableRowText>{row.second}</TableRowText>
                                </TableCell>
                                <TableCell align="right" sx={{ borderRight: "1px solid black", width: "233px" }}>
                                    <TableRowText>{row.third}</TableRowText>
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        width: "233px",
                                    }}
                                >
                                    <TableRowText>{row.forth}</TableRowText>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
}
