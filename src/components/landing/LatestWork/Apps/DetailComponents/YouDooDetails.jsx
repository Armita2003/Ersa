import useResponsive from "@/hooks/useResponsive";
import { DesignSystemList, InformationListShopeyeQ, KeyDesignListShopeyeQ, KeyFindingsListShopeyeQ,LowFidelityWireframesList,PostLaunchMonitoringList,PrototypeButtonText,SecondSocialListeningList,SocialListeningList,tableDataShopeyeQ, UsabilityTestingShopeyeQ, YouDooPrototypeButtonText } from "@/Styles";
import {  Button, Container, Stack } from "@mui/material";
import { DetailsSection } from "./DetailsSection";
import { ComparisonTable } from "./comparison-table";
import Link from "next/link";

export default function YouDooDetails() {
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
                            title="Health management is fragmented across multiple apps, leading to low engagement and lack of actionable insights."
                            subtexts={["In today’s digital health ecosystem, users rely on multiple disconnected apps to track fitness, nutrition, and mental well-being—leading to fragmented data, low engagement, and difficulty in building consistent habits. While tools like Apple Health aggregate data, they lack personalized, actionable guidance and meaningful social interaction. Users also struggle to align their dietary needs, allergies, and lifestyle goals with daily decisions such as what to eat or how to stay active. There is a need for a unified, intelligent solution that not only tracks health metrics but also translates them into personalized insights, social motivation, and simple, actionable steps to support long-term well-being."]}
                             grids={[
                    {
                        title: "6 apps per user",    
                        description: "Average person uses six different health apps regularly, showing fragmentation.",
                        border: "1px solid #D6D6D6",
                    },
                    {
                        title: "58% daily logging ",    
                        description: "Users spend over an hour per week across apps, contributing to burnout.",
                        border: "1px solid #D6D6D6",
                    },
                    {
                        title: "53% uninstalled in 30 days",    
                        description: "Most health apps fail to maintain user engagement.",
                        border: "1px solid #D6D6D6",
                    },
                    {
                        title: "Only ~3% still active after 30 days ",    
                        description: "Most health & fitness apps fail to retain users long‑term",
                        border: "1px solid #D6D6D6",
                    },
                ]}
                            gapSize={8}
                            paddingSize={12}
                        />
           <DetailsSection
                            title="Competitive Analysis: Identifying Gaps in Health & Wellness Apps"
        subtexts={["I analyzed leading health and wellness apps to uncover gaps in fitness tracking, nutrition management, and mood monitoring. While platforms like MyFitnessPal excel in food tracking and Strava in social activity engagement, none offer a fully integrated solution that combines mood, movement, nutrition, dietary restrictions, and social challenges","These insights guided the design of YouDoo, creating a unified health companion that delivers personalized insights, actionable recommendations, and social motivation—all in a single, seamless experience."]}
          
                            gapSize={8}
                            paddingSize={8}
                        />
                         <DetailsSection
                            title="Social Listening: Understanding Users Through Conversations"
                            textAfterBoldText={["To design a truly engaging health companion, we conducted social listening across forums, reviews, and social media to uncover how users talk about fitness, nutrition, and mental well-being. We discovered that users often feel frustrated by fragmented apps, inconsistent guidance, and lack of social support. Common pain points included:"]}
                            
                            list={SocialListeningList}
                            thirdList={SecondSocialListeningList}
                            thirdSubtexts={["These insights informed YouDoo’s design by emphasizing:"]}
                            thirdtextAfterList={["By listening to real user conversations, we ensured that YouDoo addresses both practical needs and emotional motivations, creating a health experience that feels supportive, intuitive, and engaging."]}
                            gapSize={3}
                            paddingSize={12}
                        />
                         <DetailsSection
                         title="Mapping the User Journey: Designing a Seamless Health Experience"
                         subtexts={["To understand how users interact with multiple aspects of their well-being, we mapped the complete YouDoo user journey—from onboarding and mood logging to joining challenges, discovering recipes, and tracking progress. This process revealed key touchpoints, pain points, and opportunities for personalization. By visualizing the journey, we ensured that each step is intuitive, motivating, and connected, allowing users to effortlessly manage mood, movement, and nutrition in a single platform."]}  
                         image={'/AppImages/SocialListening.svg'}
                         gapSize={3}
                            paddingSize={12}
                        />
                        <DetailsSection
                            title="Persona Creation: Designing for Real Users"
                            subtexts={["To ensure YouDoo meets the needs of its target audience, we developed detailed user personas based on research, social listening, and behavior patterns. These personas capture motivations, goals, challenges, and lifestyle habits, allowing us to design features that resonate with real users."]}
                         image={'/AppImages/PersonaCreation.svg'}
                            gapSize={3}
                            paddingSize={12}
                        />
                        <DetailsSection
                            title="Low-Fidelity Wireframes: Structuring the YouDoo Experience"
                            subtexts={["To translate research insights into tangible design solutions, we created low-fidelity wireframes that map out YouDoo’s core features, navigation, and user flows. These wireframes allowed us to focus on information hierarchy, content placement, and task flow without getting distracted by visual styling."]}
                            textAfterBoldText={["Key flows included:"]}
                            list={LowFidelityWireframesList}
                            textAfterList={["By testing these wireframes early, we identified pain points in navigation and task completion, which informed refinements for the high-fidelity designs."]}
                            image={'/AppImages/LowFidelityWireframes.svg'}
                            gapSize={3}
                            paddingSize={12}
                        />
                        <DetailsSection
                            title="Design System: Creating a Consistent YouDoo Experience"
                            subtexts={["To ensure consistency, scalability, and efficiency across the product, we developed a cohesive design system for YouDoo. This system establishes a unified visual language and interaction patterns that support clarity, accessibility, and ease of use across all features."]}
                            textAfterBoldText={["The design system includes:"]}
                            list={DesignSystemList}
                            textAfterList={["To support scalability and maintain consistency, all design elements were tokenized and converted into variables, including both primitive tokens (e.g., base colors, spacing, typography values) and semantic tokens (e.g., primary actions, success states, mood indicators). This approach allowed for flexible theming, easier updates, and seamless collaboration between design and development."]}
                            secondTextBeforeList={['By implementing this system, YouDoo delivers a cohesive, adaptable, and future-ready experience while enabling faster iteration and product growth.']}
                            image={'/AppImages/DesignSystem.svg'}
                            gapSize={3}
                            paddingSize={12}
                        />
                         <Stack pt={SmallScreen ? 2.5 : 5} pb={SmallScreen ? 5 : 10}>
                <Stack position="relative" display="inline-block" direction="column">
                    <img src="/AppImages/YouDooPrototype.svg" alt="High-Fidelity Designs: Crafting the YouDoo Experience" style={{ width: "100%" }} />
                    <Link href="/YouDoo/Prototype" target="_blank" passHref>
                        <Button
                            variant="text"
                            sx={{
                                position: "absolute",
                                bottom: SmallScreen ? "-15%" : "0%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <YouDooPrototypeButtonText>Try the prototype</YouDooPrototypeButtonText>
                        </Button>
                    </Link>
                </Stack>
            </Stack>
            <DetailsSection 
            title="Handoff: Bridging Design and Development"
            subtexts={["To ensure a smooth transition from design to development, we prepared detailed handoff documentation and assets for the engineering team. All screens, components, and interactions were organized and shared with clear specifications, including spacing, typography, color tokens, and behavior states.","Using a fully tokenized design system with primitive and semantic variables, we enabled developers to implement designs consistently and efficiently. Interactive prototypes and annotations were provided to clarify user flows, edge cases, and micro-interactions, reducing ambiguity and speeding up development.","Regular syncs with developers ensured alignment, quick feedback loops, and accurate implementation of the intended user experience."]}
             gapSize={3}
                paddingSize={12}
                />
            <DetailsSection 
            title="Post-Launch Monitoring: Measuring Success and Iterating"
            subtexts={["After launch, we focused on monitoring user behavior and performance to evaluate the effectiveness of the design. Key metrics included user engagement, retention, feature usage, and task completion rates across mood tracking, challenges, and nutrition features."]}
            textAfterBoldText={["We gathered insights through:"]} 
            list={PostLaunchMonitoringList}
            textAfterList={["These insights helped identify areas for improvement, such as reducing friction in logging and optimizing notifications. Continuous iteration based on real user data ensures that YouDoo evolves to better support users in building consistent and sustainable health habits."]}
            gapSize={3}
                paddingSize={12}
                />
                    </Container>
    );
}
