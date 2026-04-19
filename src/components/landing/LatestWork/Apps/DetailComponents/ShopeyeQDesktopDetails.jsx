import useResponsive from "@/hooks/useResponsive";
import { InformationListShopeyeQ, KeyDesignListShopeyeQ, KeyFindingsListShopeyeQ, Percentages, PrototypeButtonText, ShopeyeQFinalThoughtsList, ShopeyeQReflectionsList, SurveyPercentages, tableDataShopeyeQ, UsabilityTestingShopeyeQ } from "@/Styles";
import { Button, Container, Stack } from "@mui/material";
import Link from "next/link";
import { DetailsSection } from "./DetailsSection";
import FeatureTable from "./ShopeyeQDetails/FeatureTable";
import { ComparisonTable } from "./comparison-table";
import { TickedCheckIcon } from "../../../../../../public/Icons/TickedCheckIcon";
import { CrossCheckIcon } from "../../../../../../public/Icons/CrossCheckIcon";
import { ListTick } from "../../../../../../public/Icons/ListTick";
// import { ComparisonTable } from "./comparison-table";

export default function ShopeyeQDesktopDetails() {
    const SmallScreen = useResponsive("down", "md");

    const testingProcessMethodology = [
        {
            boldTitle: "Introduction & Scenario Setup",
            title: "Participants were given a real-world scenario:",
            body:"\"You are a regional manager overseeing multiple store locations. Your goal is to assign a visit task to a representative, review sales performance, and check a competitor's latest campaign.\"",
        },
        {
            boldTitle: "Task-Based Testing",
            title: "Managers performed the following key actions:",
            unorderedItems: [
                "Navigating the dashboard overview",
                "Assigning a field task to a representative",
                "Filtering and analyzing business intelligence insights",
                "Reviewing a competitor brand report",
                "Adjusting a promotion campaign",
            ],
        },
        {
            boldTitle: "Think-Aloud Protocol",
            title: "Participants shared their thought process while interacting with the prototype:",
        },
        {
            boldTitle: "Feedback & Discussion",
            title: "After completing the tasks, we conducted a structured interview to gather insights on usability, frustrations, and suggestions:",
        },
    ];

    
const whatWorkedWell = [
  { desc: "✔ Task Assignment Flow Was Intuitive – Managers found it easy to assign tasks using filters and quick actions." },
  { desc: "✔ Dashboard Widgets Were Effective – KPIs and reports were structured well for quick insights." },
  { desc: "✔ Competitor Tracking Was Valuable – Managers liked having a dedicated section for monitoring competitor promotions." },
];

const areasForImprovement = [
  { desc: "⚠ Task Status Updates Weren’t Clear → We introduced color-coded status indicators for better visibility." },
  { desc: "⚠ Too Much Data on Business Intelligence Page → We refined progressive disclosure, showing essential insights first with drill-down options." },
  { desc: "⚠ Navigation Felt Overwhelming Initially → We optimized the sidebar structure, grouping related actions more logically." },
];
    return (
        <Container maxWidth="xl" sx={{ padding: SmallScreen ? "30px !important" : "80px !important" }}>
            <DetailsSection
                grids={[
                    {
                        title: "Data Overload",    
                        description: "Managers need real-time, digestible insights instead of overwhelming reports.",
                        border: "1px solid #AABFFF",
                    },
                    {
                        title: "Task & Visit Planning Complexity",    
                        description: "Assigning and tracking field teams requires a clear workflow.",
                        border: "1px solid #AABFFF",
                    },
                    {
                        title: "Performance Tracking Gaps",    
                        description: "Understanding sales trends, team efficiency, and campaign results should be intuitive.",
                        border: "1px solid #AABFFF",
                    },
                    {
                        title: "Scalability",    
                        description: "The dashboard must be adaptable for different roles, from regional managers to store supervisors.",
                        border: "1px solid #AABFFF",
                    },
                ]}
            />
            <DetailsSection
                            title="User Research: Understanding Manager Pain Points"
                            subtexts={["I interviewed retail managers, field supervisors, and sales executives to gather insights on their workflows and challenges.","Key findings included:"]}
                            list={KeyFindingsListShopeyeQ}
                            textAfterList={[
                    "These insights helped shape the core user requirements, ensuring the dashboard addressed real pain points instead of just looking visually appealing.",
                ]}
                            gapSize={8}
                            paddingSize={12}
                        />
                        <ComparisonTable 
        title="Competitive Analysis: Learning from Industry Leaders"
        subtitle="I analyzed leading dashboards in retail, FMCG, and SaaS, focusing on usability, layout, and features. Some key takeaways:"
        data={tableDataShopeyeQ}
        />
           <DetailsSection
                            title="Key Design Considerations Based on Research"
                            list={KeyDesignListShopeyeQ}
                          
                            gapSize={8}
                            paddingSize={8}
                        />
                         <DetailsSection
                            title="Information Architecture, User Flow & High-Fidelity Design"
                            subtexts={["Through stakeholder discussions and user research, we identified key sections essential for a manager’s daily operations. These sections ensure a streamlined workflow, covering everything from task management to business intelligence."]}
                            
                            numberList={{ boldTitle: 'Core Sections of the ShopeyeQ Manager Dashboard:', items: InformationListShopeyeQ }}
                            gapSize={3}
                            paddingSize={12}
                        />
                         <DetailsSection
                           image={'/AppImages/InformationArchitecture.svg'}
                           gapSize={3}
                            paddingSize={12}
                        />
                        <DetailsSection
                            title="Usability Testing with Mesmer Tea Managers"
                            subtexts={["To validate the ShopeyeQ Manager Dashboard, we conducted a usability testing session with managers from Mesmer Tea, a well-established FMCG brand. Their feedback was crucial in refining the dashboard's structure, interactions, and overall usability."]}
                            numberList={{ boldTitle: 'Testing Objectives:', items: UsabilityTestingShopeyeQ }}
                            gapSize={3}
                            paddingSize={12}
                        />
                        <DetailsSection
                            title="Testing Process & Methodology:"
                            subtexts={["We conducted a 1-hour remote session with five Mesmer Tea managers, using a prototype in Figma. The session followed these key steps:"]}
                            numberList={{ items: testingProcessMethodology }}
                             NoStyleList={whatWorkedWell}
                        NoStyleList2={areasForImprovement}
                            gapSize={3}
                            paddingSize={12}
                        />
                         <DetailsSection
                            title="UI Guidelines & Design System"
                            subtexts={["To ensure consistency, scalability, and usability across the ShopeyeQ Manager Dashboard, I developed a comprehensive design system. This system provides a structured visual language, aligning UI components, typography, and color palettes with the platform's functionality and brand identity."]}
                            boldSubText={["Branding & Color Palette"]}
                            textAfterBoldText={"The ShopeyeQ brand identity conveys trust, clarity, and data-driven decision-making. The primary palette includes Deep Navy and Royal Blue, establishing a professional and recognizable look, balanced with soft neutrals and grays for readability. Accent colors-green, yellow, and red-are strategically used for status indicators and alerts, ensuring an intuitive experience. Additionally, chart colors maintain a uniform, easy-to-interpret visual structure for data-heavy screens."}
                            secondBoldSubText={"Typography & Iconography"}
                            textAfterSecondBoldText={"Typography plays a crucial role in enhancing legibility and hierarchy within the dashboard. A bold, modern sans-serif font is used, with:"}
                            secondList={[ 
                                { desc: "Large headlines for easy scanning." },
                                {
                                    desc: "Mid-weight body text for improved readability.",
                                },
                                {
                                    desc: "Light UI labels to keep the interface clutter-free.",
                                },
                            ]}
                            textAfterList={["Icons follow a rounded, minimalist aesthetic, reinforcing a clean and professional visual language while improving recognition and ease of use."]}
                            thirdBoldSubText={"UI Components & Systemization"}
                            thirdSubtexts={["A component-based approach was applied to streamline design and development while ensuring consistency. Key UI elements include:"]}   
                            thirdList={[
                                { desc: "Buttons & CTAs – Clearly distinguishable with strong visual hierarchy." },
                                { desc: "Cards & Widgets – Designed for at-a-glance insights and data display." },
                                { desc: "Sidebar Navigation – Optimized for seamless movement across dashboard sections." },
                                { desc: "Interactive Charts – Color-coded for quick data analysis and decision-making." },
                            ]}
                            thirdtextAfterList={["This design system creates a high-performing, scalable UI that balances aesthetics with functionality. By standardizing components, the dashboard remains flexible for future iterations while maintaining a polished and user-friendly experience."]}
                            image={'/AppImages/UiGuidelines.svg'}
                            gapSize={3}
                            paddingSize={12}
                        />
                        <DetailsSection 
                        title={'UI & Design'}
                        subtexts={['The ShopeyeQ Manager Dashboard was designed to handle complex data interactions while maintaining a clean, intuitive experience. Using a modular, card-based layout, the UI ensures managers can navigate effortlessly, monitor KPIs, and manage assignments with ease.']}
                        secondTextBeforeList={['Key design principles include:']}
                        secondList={[
                            {desc:'Clear visual hierarchy for quick decision-making.'},
                            {desc:'Interactive charts and tables for in-depth data analysis.'},
                            {desc:'Smart filters and search to streamline workflow.'},
                            {desc:'Subtle animations and micro interactions for seamless navigation.'},
                        ]}
                        image={'/AppImages/Ui&Design.svg'}
                        gapSize={3}
                            paddingSize={12}
                        />
                        <DetailsSection 
                        title={'Collaboration & Post-Launch Monitoring'}
                        subtexts={['Following the UI & design phase, the next step focused on close collaboration with engineers to ensure accurate and high-quality implementation. I worked alongside the development team to clarify interaction details, define component behaviors, and address edge cases that emerged during the build process. Regular design reviews and QA checks were conducted to maintain consistency between the final product and the original design intent.']}
                        secondTextBeforeList={['After launch, I shifted focus to monitoring quantitative data to evaluate the effectiveness of the solution. Key metrics such as feature adoption, task completion rates, and time to insight were tracked to understand how managers were interacting with the dashboard. This data helped identify usability gaps, measure impact, and prioritize future iterations.']}
                        thirdSubtexts={['By combining hands-on collaboration during development with data-driven evaluation post-launch, the design process extended beyond delivery into continuous improvement.']}
                       gapSize={3}
                        paddingSize={12}
                        />
        </Container>
    );
}
