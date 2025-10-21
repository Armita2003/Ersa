import useResponsive from "@/hooks/useResponsive";
import {
    BoldSubDetailsTypography,
    DetailsTypography,
    ListTypography,
    SubDetailsTypography,
    WorkDetailPercentages,
    WorkDetailSubTextPercentages,
} from "@/Styles";
import { Grid, Stack } from "@mui/material";

export const DetailsSection = ({
    title,
    boldSubText,
    subtexts,
    secondSubtexts,
    percentages,
    image,
    gapSize,
    paddingSize,
    list,
    textAfterList,
    textAfterImage,
    secondImage,
    secondBoldSubText,
    secondList,
    textAfterBoldText,
    percentagesColor,
}) => {
    const SmallScreen = useResponsive("down", "md");
    const MediumScreen = useResponsive("down", "lg");

    return (
        <Stack py={SmallScreen ? paddingSize / 2 : paddingSize}>
            <Stack gap={SmallScreen ? gapSize / 2 : gapSize}>
                <Stack gap={SmallScreen ? 1.5 : 3}>
                    <DetailsTypography>{title}</DetailsTypography>
                    {subtexts && subtexts.map((text, index) => <SubDetailsTypography key={index}>{text}</SubDetailsTypography>)}
                    {boldSubText && <BoldSubDetailsTypography>{boldSubText}</BoldSubDetailsTypography>}
                    {textAfterBoldText && <SubDetailsTypography>{textAfterBoldText}</SubDetailsTypography>}
                    {list && (
                        <ul>
                            {list.map((items) => (
                                <li style={{ marginBottom: items.title ? 24 : 12 }}>
                                    {items.title && <ListTypography title={true}>{items.title}</ListTypography>}
                                    <ListTypography title={false}>{items.desc}</ListTypography>
                                </li>
                            ))}
                        </ul>
                    )}
                    {secondBoldSubText && <BoldSubDetailsTypography>{secondBoldSubText}</BoldSubDetailsTypography>}
                    {secondList && (
                        <ul>
                            {secondList.map((items) => (
                                <li style={{ marginBottom: items.title ? 24 : 12 }}>
                                    {items.title && <ListTypography title={true}>{items.title}</ListTypography>}

                                    <ListTypography title={false}>{items.desc}</ListTypography>
                                </li>
                            ))}
                        </ul>
                    )}
                    {textAfterList && textAfterList.map((text, index) => <SubDetailsTypography key={index}>{text}</SubDetailsTypography>)}
                </Stack>
                {percentages && (
                    <Grid container justifyContent="space-around" rowGap={3}>
                        {percentages.map((item, index) => (
                            <Grid
                                key={index}
                                item
                                xs={6}
                                sm={3}
                                md={3}
                                display="grid"
                                gap={MediumScreen ? 1 : SmallScreen ? 4 : 2}
                                pb={2}
                                borderBottom="3px"
                            >
                                <WorkDetailPercentages color={percentagesColor}>{item.number}</WorkDetailPercentages>
                                <WorkDetailSubTextPercentages>{item.text}</WorkDetailSubTextPercentages>
                            </Grid>
                        ))}
                    </Grid>
                )}
                {secondSubtexts && (
                    <Stack gap={2}>
                        {secondSubtexts.map((text, index) => (
                            <SubDetailsTypography key={index}>{text}</SubDetailsTypography>
                        ))}
                    </Stack>
                )}
                {image && <img src={image} alt={title} />}
                {textAfterImage && textAfterImage.map((text, index) => <SubDetailsTypography key={index}>{text}</SubDetailsTypography>)}

                {secondImage && <img src={secondImage} alt={title} />}
            </Stack>
        </Stack>
    );
};
