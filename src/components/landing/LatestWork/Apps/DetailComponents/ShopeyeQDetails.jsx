import useResponsive from "@/hooks/useResponsive";
import { Percentages, PrototypeButtonText, ShopeyeQFinalThoughtsList, ShopeyeQReflectionsList, SurveyPercentages } from "@/Styles";
import { Button, Container, Stack } from "@mui/material";
import Link from "next/link";
import { DetailsSection } from "./DetailsSection";
import FeatureTable from "./ShopeyeQDetails/FeatureTable";

export default function ShopeyeQDetails() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: SmallScreen ? "30px !important" : "80px !important" }}>
            <DetailsSection
                title="Operations burdened with high complexity and costs are still managed through manual processes."
                subtexts={[
                    "Field sales representatives in FMCG face challenges such as manual, inefficient task management, and complex navigation between multiple PoS locations. Fragmented data collection leads to inaccuracies, while limited visibility into store performance hinders quick identification of stock issues. Additionally, the lack of real-time insights and upselling recommendations results in missed opportunities, slowing response times and reducing overall efficiency.",
                ]}
                percentages={Percentages}
                percentagesColor="#3950FF"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Competitive Analysis: Discovering ShopeyeQ’s Market Advantage"
                subtexts={[
                    "We analyzed competitors to identify gaps in FMCG field sales tools, focusing on task management, navigation, and product scanning. While platforms like Salesforce excel in navigation and task breakdown, none offer robust product scanning or break time management.",
                    "These insights guided us to design a solution that integrates PoS history, efficient scanning, and unique features to streamline workflows and boost productivity.",
                ]}
                gapSize={8}
                paddingSize={5}
            />
            <FeatureTable />
            <DetailsSection
                title="Survey: Understanding Pain Points of Field Sales Representatives"
                subtexts={[
                    "Before beginning the design phase for a mobile sales representative app, we conducted a survey to gather insights from field sales representatives. The goal was to understand their daily challenges, current pain points with mobile tools, and desired features that could streamline their workflow. This data helped us validate the need for a redesign and informed the app's foundational features to meet user needs effectively.",
                    "The survey was distributed to 50 field sales representatives across various industries, gathering quantitative data about their app usage and daily tasks. We asked both closed-ended and open-ended questions to capture a broad spectrum of feedback.",
                ]}
                boldSubText="Below are some key findings from the surveys:"
                percentages={SurveyPercentages}
                percentagesColor="#3950FF"
                secondSubtexts={[
                    "This survey clearly indicated that field sales representatives face significant challenges with their current tools, particularly in managing reporting and inventory. The majority of respondents expressed a strong preference for an app that integrates these tasks into one platform with real-time data access.",
                    "These insights have guided the direction for the redesign of the sales representative app, ensuring that it addresses the key pain points and needs identified by the users. The findings will directly inform the wireframes and the user flow, focusing on streamlining tasks and improving the overall usability of the app.",
                ]}
                gapSize={8}
                paddingSize={10}
            />
            <DetailsSection
                title="Kickoff Stage: Defining User Needs"
                subtexts={[
                    "In the kickoff stage, we identified the key tasks and challenges faced by field sales representatives, particularly around inefficiencies in task management, manual data entry, and sharing results with stakeholders. Using insights from these tasks, we created Jason, a persona representing the typical user.",
                    "Jason’s role involves navigating multiple PoS locations, scanning products, tracking stock discrepancies, and sharing results. His challenges include time-consuming manual processes and lack of integration with tools like CRM systems.",
                    "Our goal was to design a solution that simplifies Jason’s workflow, automates data entry, and enables seamless integration with third-party tools. By focusing on Jason’s needs, we ensured our design would address real-world pain points, improving efficiency and productivity for field sales representatives.",
                ]}
                image="/AppImages/Container.png"
                gapSize={8}
            />
            <DetailsSection
                title="User Story"
                subtexts={[
                    "To support the sales representatives' goals and improve their efficiency, we created user flows for the Store check app that streamline the entire sales process. The app allows representatives to easily receive task lists from supervisors and access optimized routes to different points of sale (PoS), helping them navigate efficiently.",
                    "We also designed flows for starting product scanning sessions at PoS locations. Representatives can generate a positive list of available products and a negative list highlighting missing or out-of-stock items by comparing scanned products with the PoS portfolio. Additionally, we incorporated the ability to calculate the delta number, showing discrepancies between the expected and actual product availability.",

                    "To ensure flexibility, the app allows representatives to revisit and rescan products in multiple sessions, providing accuracy in data collection. The app also enables sharing session results with CRM software for seamless data integration and analysis, and it suggests up-selling opportunities based on AI-powered product recognition, helping sales reps engage customers and increase sales.",
                ]}
                image="/AppImages/Diagram.png"
                gapSize={8}
                paddingSize={10}
            />
            <DetailsSection
                title="Wireframes: Visualizing the User Journey"
                subtexts={[
                    "To create a seamless and intuitive experience for the Sales Representative app, we designed wireframes that mapped out key user flows. These wireframes capture essential functionalities such as task management, navigation to Points of Sale (PoS), product scanning, and data sharing. Each screen is crafted to prioritize usability, ensuring quick access to information, efficient workflows, and smooth integration with external systems like CRM and calendar tools. The wireframes served as the foundation for validating design decisions and aligning user needs with business goals before moving to high-fidelity designs.",
                ]}
                image="/AppImages/WireFrame.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Low-Fidelity Wireframes: Laying the Foundation"
                subtexts={[
                    "The low-fidelity wireframes provided an initial blueprint for the app’s design, focusing on core layout, structure, and navigation without visual distractions. These wireframes emphasized functionality, allowing us to map out essential user interactions such as task lists, PoS navigation, product scanning, and CRM integration. By maintaining simplicity, we were able to iterate quickly, test usability concepts, and gather feedback to ensure the design met the needs of sales representatives efficiently. This stage was critical in refining the app’s workflow before progressing to high-fidelity prototypes.",
                ]}
                image="/AppImages/LowFidelityWireFrames.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="High-Fidelity Wireframes: Refining the Vision"
                subtexts={[
                    "Building upon the insights gained from the low-fidelity wireframes, the high-fidelity wireframes incorporate visual design elements, branding, and interactive components to provide a realistic representation of the final product. This stage focuses on fine-tuning details such as typography, color schemes, iconography, and user interface consistency. Additionally, clickable prototypes are created to simulate user interactions, enabling us to validate workflows and gather more targeted feedback from stakeholders and potential users.",
                ]}
                gapSize={8}
                paddingSize={5}
            />
            <Stack pt={SmallScreen ? 2.5 : 5} pb={SmallScreen ? 5 : 10}>
                <Stack position="relative" display="inline-block" direction="column">
                    <img src="/AppImages/HighFidelityWireFrames.png" alt="High-Fidelity Wireframes: Refining the Vision" style={{ width: "100%" }} />
                    <Link href="/ShopeyeQ/Prototype" target="_blank" passHref>
                        <Button
                            variant="text"
                            sx={{
                                position: "absolute",
                                top: "35%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <PrototypeButtonText>Try the prototype</PrototypeButtonText>
                        </Button>
                    </Link>
                </Stack>
            </Stack>
            <DetailsSection
                title="Reflections"
                subtexts={[
                    "Designing the ShopeyeQ Sales Representative App was a complex yet rewarding challenge, offering valuable insights into the intersection of user needs, business goals, and technology-driven solutions. The project emphasized the importance of user-centered design, data-driven decision-making, and seamless integrations to enhance the efficiency of field sales representatives.",
                ]}
                list={ShopeyeQReflectionsList}
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Final Thoughts & Future Improvements"
                subtexts={[
                    "While the redesigned ShopeyeQ Sales Representative App successfully addressed many pain points, there is always room for iteration and growth. User feedback and continuous usability testing will play a crucial role in refining the product post-launch.",
                    "Looking forward, potential improvements could include:",
                ]}
                list={ShopeyeQFinalThoughtsList}
                textAfterList={[
                    "This project reinforced the importance of data-driven, user-centered design, proving that seamless automation and intuitive UX can dramatically improve field sales efficiency. The insights gained here will continue to inform future innovations in B2B sales tech solutions.",
                ]}
                gapSize={8}
                paddingSize={5}
            />
        </Container>
    );
}
