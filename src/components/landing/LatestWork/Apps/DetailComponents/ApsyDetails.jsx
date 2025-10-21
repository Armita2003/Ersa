import useResponsive from "@/hooks/useResponsive";
import {
    FuturePlansList,
    KeyBehavioralPatternsList,
    KeyInsightsList,
    ProblemStatementPercentages,
    PrototypeButtonText,
    SurveyFeedbackAnalysisList,
    UserQuotesList,
} from "@/Styles";
import { Button, Container, Stack } from "@mui/material";
import Link from "next/link";
import { LandingPageRedesign } from "../../../../../../public/Icons/LandingPageRedesign";
import { StreamliningEmailCommunication } from "../../../../../../public/Icons/StreamliningEmailCommunication";
import { DetailsSection } from "./DetailsSection";

export default function ApsyDetails() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: SmallScreen ? "30px !important" : "80px !important" }}>
            <DetailsSection
                title="Problem Statement: Engagement Drop-off Analysis"
                subtexts={[
                    "In analyzing user engagement from November 2024 to the present, we uncovered significant drop-offs at key stages of the app creation process on Apsy.io. Despite 1,476 users logging into the platform, only 44.9% attempted to build an app, and fewer than 5% of built apps were published in Gamma. Alarmingly, just 0.6% of users who attempted to build apps successfully published them to the store.",
                    'Additionally, 49% of users abandoned the process before reaching the "app name" stage, indicating challenges with onboarding and early-stage clarity. These findings, sourced from user data and behavioral insights, revealed critical bottlenecks in the user journey that directly impacted conversion rates and user success.',
                    "This analysis highlighted the need for a comprehensive UX redesign to improve clarity, guide users through the app-building process, and reduce friction at every stage.",
                ]}
                percentages={ProblemStatementPercentages}
                percentagesColor="#00B9FF"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Insights from Clarity (Behavioral Data)"
                subtexts={["Using Clarity, we tracked user behavior across the platform to identify points of confusion and friction. "]}
                boldSubText="Key behavioral patterns included:"
                list={KeyBehavioralPatternsList}
                secondBoldSubText="Key Insights:"
                secondList={KeyInsightsList}
                image="/AppImages/BehavioralData.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Survey Feedback Analysis"
                subtexts={[
                    "A targeted survey was sent to inactive users who had signed up but not fully completed the app-building process. The survey gathered 100+ responses, providing insights into their pain points and suggestions for improvement.",
                ]}
                boldSubText="Top challenges reported:"
                list={SurveyFeedbackAnalysisList}
                secondBoldSubText="User quotes:"
                secondList={UserQuotesList}
                image="/AppImages/SurveyFeedbackAnalysis.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Brainstorming Stage"
                subtexts={[
                    "After analyzing the insights from Clarity recordings and survey feedback, our team initiated a brainstorming session to address the most pressing user needs. The session aimed to reimagine the user experience and create solutions that would directly tackle the identified pain points while enhancing the platform's overall usability and trustworthiness.",
                ]}
                image="/AppImages/BrainstormingStage.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Building User Trust Through Landing Page Redesign"
                subtexts={[
                    "User feedback from surveys and Clarity recordings revealed that a significant portion of users were hesitant to trust Apsy due to the outdated and unprofessional appearance of the landing page. This directly impacted user engagement, with many abandoning the platform before exploring its features.",
                ]}
                boldSubText="Goal:"
                textAfterBoldText={[
                    "To redesign the landing page with a focus on creating a modern, credible, and user-centric experience that communicates Apsy's value proposition effectively and builds trust at first sight.",
                ]}
                image="/AppImages/BuildingUserTrust.png"
                gapSize={8}
                paddingSize={5}
            />
            <Stack
                py={SmallScreen ? 2.5 : 5}
                sx={{
                    alignItems: "center",
                    maxWidth: "100%",
                }}
            >
                <LandingPageRedesign />
            </Stack>
            <DetailsSection
                title="Improving Onboarding: Implementing Tutorials"
                subtexts={[
                    "Survey responses revealed that many users found it difficult to navigate the app-building process, especially during the initial stages. The absence of clear guidance led to frustration, incomplete projects, and abandonment of the platform. Users specifically requested tutorials to simplify their journey.",
                ]}
                boldSubText="Goal:"
                textAfterBoldText={[
                    "The goal was to simplify the onboarding experience and empower users to navigate the app-building process with confidence. By introducing interactive tutorials, the aim was to reduce drop-offs during the initial stages, address common user frustrations, and provide clear, actionable guidance tailored to non-technical users. This redesign sought to improve user confidence, streamline the app creation journey, and ultimately increase the number of users successfully completing and publishing their apps.",
                ]}
                gapSize={8}
                paddingSize={5}
            />
            <Stack pt={SmallScreen ? 2.5 : 5} pb={SmallScreen ? 5 : 10}>
                <Stack position="relative" display="inline-block" direction="column">
                    <img src="/AppImages/ApsyPrototype.png" alt="Improving Onboarding: Implementing Tutorials" style={{ width: "100%" }} />
                    <Link href="/Apsy/Prototype" target="_blank" passHref>
                        <Button
                            variant="text"
                            sx={{
                                position: "absolute",
                                top: "50%",
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
                title="Enhancing Support Accessibility"
                subtexts={[
                    "User feedback from surveys and Clarity recordings revealed that many users who struggled to complete their app setup faced challenges in reaching out for support. The lack of easily accessible support options led to frustration, causing users to abandon the platform without completing their app configuration or publication.",
                ]}
                boldSubText="Goal:"
                textAfterBoldText={[
                    "To enhance support accessibility by integrating a prominent and easily reachable support button at the bottom of the screen, allowing users to directly contact Apsy’s support team and resolve issues quickly.",
                ]}
                image="/AppImages/EnhancingSupportAccessibility.png"
                secondImage="/AppImages/EnhancingSupportAccessibility2.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Customization Simplification"
                subtexts={[
                    "User feedback from surveys and Clarity recordings revealed that the customization process was overly complex and time-consuming. Many users felt overwhelmed by the need to manually configure every aspect of their app, leading to confusion and drop-offs during the setup process.",
                ]}
                boldSubText="Goal:"
                textAfterBoldText={[
                    "To simplify the customization process by providing users with the flexibility to either type in specific requirements or choose from a variety of pre-designed model types, streamlining the path to app configuration.",
                ]}
                image="/AppImages/CustomizationSimplification.png"
                secondImage="/AppImages/CustomizationSimplification2.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Streamlining Email Communication"
                subtexts={[
                    "User feedback from surveys and Clarity recordings highlighted inefficiencies in the platform’s email communication. Users reported missing critical updates or being overwhelmed by irrelevant emails, which negatively impacted their engagement and trust in Apsy's processes.",
                ]}
                boldSubText="Goal:"
                textAfterBoldText={[
                    "To improve email communication by ensuring users receive timely, relevant, and actionable updates that align with their progress and needs on the platform.",
                ]}
                image="/AppImages/StreamliningEmailCommunication.png"
                gapSize={8}
                paddingSize={5}
            />
            <Stack
                py={SmallScreen ? 2.5 : 5}
                sx={{
                    alignItems: "center",
                    maxWidth: "100%",
                }}
            >
                <StreamliningEmailCommunication />
            </Stack>
            <DetailsSection
                title="Future Plans"
                list={FuturePlansList}
                textAfterList={[
                    "By maintaining a user-centric approach and iterating on these improvements, Apsy.io aims to become the go-to platform for effortless and efficient app creation.",
                ]}
                gapSize={8}
                paddingSize={5}
            />
        </Container>
    );
}
