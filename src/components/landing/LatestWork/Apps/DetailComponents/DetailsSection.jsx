import useResponsive from "@/hooks/useResponsive";
import {
    BoldSubDetailsTypography,
    DetailsTypography,
    GridDescription,
    GridTitle,
    ListTypography,
    SubDetailsTypography,
    WorkDetailPercentages,
    WorkDetailSubTextPercentages,
} from "@/Styles";
import { Box, Grid, Stack } from "@mui/material";

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
    numberList,
    textAfterList,
    textAfterImage,
    secondImage,
    secondTextBeforeList,
    secondBoldSubText,
    secondList,
    thirdList,
    thirdBoldSubText,
    thirdSubtexts,
    thirdtextAfterList,
    NoStyleList,
    NoStyleList2,
    textAfterBoldText,
    percentagesColor,
    grids,
}) => {
    const SmallScreen = useResponsive("down", "md");
    const MediumScreen = useResponsive("down", "lg");

    const getItemBody = (item) => item?.body ?? item?.desc;
    const getNestedItems = (item) => item?.unorderedItems ?? item?.subItems ?? item?.children ?? [];
    const hasNestedItems = (item) => Array.isArray(getNestedItems(item)) && getNestedItems(item).length > 0;

    const isContentObject = (value) => {
        if (!value || typeof value !== "object" || Array.isArray(value)) return false;
        return !("$$typeof" in value);
    };

    const renderItemHeader = (item) => {
        const hasBoldTitle = Boolean(item?.boldTitle);
        const hasTitle = Boolean(item?.title);

        if (!hasBoldTitle && !hasTitle) return null;

        if (hasBoldTitle) {
            return (
                <Box component="span" sx={{ display: "flex", alignItems: "baseline" }}>
                    <ListTypography title={true}>{item.boldTitle}{hasTitle && <ListTypography title={false}> – {item.title} </ListTypography>}</ListTypography>
                    {/* {hasTitle && <ListTypography title={false}>{item.title}</ListTypography>} */}
                </Box>
            );
        }

        return <ListTypography title={true}>{item.title}</ListTypography>;
    };

    const renderNestedUnorderedList = (nestedItems) => (
        <Box component="ul" sx={{ pl: 3, mt: 1, mb: 0 }}>
            {nestedItems.map((nestedItem, index) => {
                if (isContentObject(nestedItem)) {
                    return (
                        <li key={index} style={{ marginBottom: 8 }}>
                            {renderItemHeader(nestedItem)}
                            {getItemBody(nestedItem) && <ListTypography title={false}>{getItemBody(nestedItem)}</ListTypography>}
                        </li>
                    );
                }

                return (
                    <li key={index} style={{ marginBottom: 8 }}>
                        <ListTypography title={false}>{nestedItem}</ListTypography>
                    </li>
                );
            })}
        </Box>
    );

    const renderListItemContent = (item, { allowNested = false } = {}) => {
        const body = getItemBody(item);
        const nestedItems = getNestedItems(item);

        return (
            <>
                {renderItemHeader(item)}
                {body && <ListTypography title={false}>{body}</ListTypography>}
                {allowNested && hasNestedItems(item) && renderNestedUnorderedList(nestedItems)}
            </>
        );
    };

    const getItemMargin = (item) => {
        const headerExists = Boolean(item?.boldTitle || item?.title);
        return headerExists ? 24 : 12;
    };

    return (
        <Stack py={SmallScreen ? paddingSize / 2 : paddingSize}>
            <Stack gap={SmallScreen ? gapSize / 2 : gapSize}>
                <Stack gap={SmallScreen ? 1.5 : 3}>
                    <DetailsTypography>{title}</DetailsTypography>
                    {subtexts && subtexts.map((text, index) => <SubDetailsTypography key={index}>{text}</SubDetailsTypography>)}
                    {boldSubText && <BoldSubDetailsTypography>{boldSubText}</BoldSubDetailsTypography>}
                    {textAfterBoldText && <SubDetailsTypography>{textAfterBoldText}</SubDetailsTypography>}
                    {numberList && (
                        <span>
                        {numberList.boldTitle && <BoldSubDetailsTypography>{numberList.boldTitle}</BoldSubDetailsTypography>}
                        <Box
                            component="ol"
                            sx={{
                                pl: 3,
                                py: 0,
                                my: 0,
                                '& li::marker': {
                                fontSize: SmallScreen ? 13 : MediumScreen ? 15 : 20,
                                },
                            }}
                            >
                            {numberList.items.map((items, index) => (
                            <li
                                key={index}
                                style={{ marginBottom: getItemMargin(items),paddingBottom:0 }}
                                
                            >
                                {renderListItemContent(items, { allowNested: true })}
                            </li>
                            ))}
                        </Box>
                        </span>
                        )}
                    {list && (
                        <ul>
                            {list.map((items, index) => (
                                <li key={index} style={{ marginBottom: getItemMargin(items) }}>
                                    {renderListItemContent(items)}
                                </li>
                            ))}
                        </ul>
                    )}
                    {secondTextBeforeList && secondTextBeforeList.map((text, index) => <SubDetailsTypography key={index}>{text}</SubDetailsTypography>)}
                    
                    {secondBoldSubText && <BoldSubDetailsTypography>{secondBoldSubText}</BoldSubDetailsTypography>}
                    {secondList && (
                        <ul>
                            {secondList.map((items, index) => (
                               <li key={index} style={{ marginBottom: getItemMargin(items) }}>
                                    {renderListItemContent(items, { withIcon: true })}
                                </li>
                            ))}
                        </ul>
                    )}
                    {NoStyleList && (
                        <Box
                            component="ul"
                            sx={{
                                listStyle: "none",
                                textDecoration: "none",
                                pl: 0,
                                my: 0,
                                "& li": {
                                    listStyle: "none",
                                    textDecoration: "none",
                                },
                                "& a": {
                                    textDecoration: "none",
                                    color: "inherit",
                                },
                            }}>
                            {NoStyleList.map((items, index) => (
                               <li key={index} style={{ marginBottom: getItemMargin(items) }}>
                                    {renderListItemContent(items, { withIcon: true })}
                                </li>
                            ))}
                        </Box>
                    )}
                    {NoStyleList2 && (
                        <Box
                            component="ul"
                            sx={{
                                listStyle: "none",
                                textDecoration: "none",
                                pl: 0,
                                my: 0,
                                "& li": {
                                    listStyle: "none",
                                    textDecoration: "none",
                                },
                                "& a": {
                                    textDecoration: "none",
                                    color: "inherit",
                                },
                            }}>
                            {NoStyleList2.map((items, index) => (
                               <li key={index} style={{ marginBottom: getItemMargin(items) }}>
                                    {renderListItemContent(items, { withIcon: true })}
                                </li>
                            ))}
                        </Box>
                    )}
                    {textAfterList && textAfterList.map((text, index) => <SubDetailsTypography key={index}>{text}</SubDetailsTypography>)}
                 {thirdBoldSubText && <BoldSubDetailsTypography>{thirdBoldSubText}</BoldSubDetailsTypography>}
                 {thirdSubtexts && thirdSubtexts.map((text, index) => <SubDetailsTypography key={index}>{text}</SubDetailsTypography>)}
                    {thirdList && (
                        <ul>
                            {thirdList.map((items, index) => (
                               <li key={index} style={{ marginBottom: getItemMargin(items) }}>
                                    {renderListItemContent(items, { withIcon: true })}
                                </li>
                            ))}
                        </ul>
                    )}
                    {thirdtextAfterList && thirdtextAfterList.map((text, index) => <SubDetailsTypography key={index}>{text}</SubDetailsTypography>)}
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
                {grids && (
                    <Grid container justifyContent="space-around" gap={'16px'} rowGap={"16px"}>
                        {grids.map((item, index) => (
                            <Grid
                                key={index}
                                item
                                xs={12}
                                sm={5.8}
                                md={5.8}
                                display="grid"
                                p={'16px'}
                                border={item.border}
                                borderRadius='12px'
                                bgcolor={'#FFFFFF'}
                            >
                                <GridTitle >{item.title}</GridTitle>
                                <GridDescription>{item.description}</GridDescription>
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
