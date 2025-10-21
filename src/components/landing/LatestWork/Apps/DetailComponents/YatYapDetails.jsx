import useResponsive from "@/hooks/useResponsive";
import { CrewMembersPercentages, ImprovingUsabilityList, YachtOwnersPercentages } from "@/Styles";
import { Container } from "@mui/material";
import { DetailsSection } from "./DetailsSection";

export default function YatYapDetails() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: SmallScreen ? "30px !important" : "80px !important" }}>
            <DetailsSection
                title="Yacht Owners: Streamlining Crew and Operations Management"
                subtexts={[
                    "Managing a yacht comes with significant challenges, particularly when it comes to maintaining an efficient crew and organizing bookings. Many yacht owners face issues with outdated recruitment methods, leading to prolonged hiring processes and high crew turnover rates. Additionally, disruptions during crew transitions and onboarding exacerbate inefficiencies, with 72% of owners reporting such difficulties. The lack of a centralized communication and booking system further adds to the complexity, making it hard to optimize yacht operations. YATYAP provides a solution by centralizing these processes, reducing time spent on manual management by 25%, improving communication, and enabling better crew retention. This modern approach helps yacht owners achieve smoother and more cost-effective operations.",
                ]}
                percentages={YachtOwnersPercentages}
                percentagesColor="#047882"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Crew Members: Enhancing Visibility and Career Opportunities"
                subtexts={[
                    "Crew members in the yachting industry often struggle with limited visibility and networking opportunities, leaving many dissatisfied with traditional job management systems. A significant 40% of crew members find these systems ineffective in providing timely and relevant job information, while 33% feel isolated from the yachting community, hindering career advancement. Moreover, 25% of crew members report lost job opportunities due to scheduling conflicts and poor communication, further compounding their career challenges. These inefficiencies highlight the need for better connectivity and transparency within the industry.",
                ]}
                percentages={CrewMembersPercentages}
                percentagesColor="#047882"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Competitive Analysis for YATYAP"
                subtexts={[
                    "The yachting industry has several platforms catering to crew recruitment and management, but most fail to address the comprehensive needs of both yacht owners and crew members. Here’s how YATYAP differentiates itself from existing competitors:",
                ]}
                image="/AppImages/CompetitiveAnalysis.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Research Methodology: Leveraging Social Listening to Understand User Needs"
                subtexts={[
                    "Due to limited access to a broad range of yacht owners and crew members, we turned to social listening as a key research method. By monitoring online communities, industry forums, social media platforms, and discussion threads relevant to yachting professionals, we were able to gather valuable insights into the pain points, needs, and concerns of yacht owners and crew members. Social listening allowed us to track real-time conversations, uncover emerging trends, and identify common challenges, all without needing direct one-on-one interviews.",
                    "This approach provided us with a rich dataset, revealing critical insights into issues like inefficient crew management, scheduling conflicts, and the lack of centralized platforms for communication and bookings. Through social listening, we gained an understanding of the specific frustrations and aspirations within the yachting community, helping to inform the development of YATYAP and ensure it addresses the real-world needs of its users.",
                ]}
                image="/AppImages/ResearchMethodology.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="YATYAP Persona Creation: Addressing the Needs of Yacht Owners and Crew Members"
                subtexts={[
                    "In the research phase, we analyzed existing challenges in the yacht industry using insights gathered from social listening, competitor analysis, and reviews across several platforms like Yotspot, Yachting Pages, Quay Crew, and OnboardOnline. These insights provided a deeper understanding of the pain points faced by yacht owners and crew members, allowing us to create two key personas that represent typical users of YATYAP.",
                ]}
                image="/AppImages/YatYapPersona.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="YATYAP Persona Creation: Addressing the Needs of Yacht Owners and Crew Members"
                subtexts={[
                    "In the research phase, we analyzed existing challenges in the yacht industry using insights gathered from social listening, competitor analysis, and reviews across several platforms like Yotspot, Yachting Pages, Quay Crew, and OnboardOnline. These insights provided a deeper understanding of the pain points faced by yacht owners and crew members, allowing us to create two key personas that represent typical users of YATYAP.",
                ]}
                image="/AppImages/UnderstandingUserNeeds1.png"
                secondImage="/AppImages/UnderstandingUserNeeds2.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Understanding User Needs Through Journey Maps"
                subtexts={[
                    "By exploring the journey maps of David Hawkins, a yacht owner, and Lisa Nesbittson, a deckhand, I identified critical emotional and procedural pain points YATYAP needed to address. For David, the frustration of high crew turnover, the inefficiencies of fragmented communication, and the slow recruitment process create anxiety over disrupted yacht operations and guest dissatisfaction. For Lisa, the exhaustion of navigating impersonal job searches, delayed responses, and the lack of career alignment leads to feelings of frustration and missed opportunities.",

                    "To ensure YATYAP’s success and foster community trust, the app needed to tackle these challenges head-on, offering streamlined recruitment for David and personalized job-matching for Lisa. Above all, the platform had to eliminate unnecessary friction while empowering users on both sides of the yachting community.",
                ]}
                image="/AppImages/UnderstandingUserNeeds3.png"
                secondImage="/AppImages/UnderstandingUserNeeds4.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Optimizing User Experiences Through Tailored User Flows"
                subtexts={[
                    "By mapping the user flows for crew members and yacht owners, YATYAP addresses key challenges on both sides.",

                    "For crew members, the platform simplifies job searches, improves communication, and streamlines scheduling to reduce frustration and missed opportunities. For yacht owners, it enhances recruitment efficiency, centralizes communication, and ensures seamless crew management to minimize operational stress. YATYAP eliminates friction, fosters trust, and empowers both groups, creating a more connected and efficient yachting community.",
                ]}
                image="/AppImages/OptimizingExperiences.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Visualizing a User-Centric Experience for YATYAP"
                subtexts={[
                    "Rapid sketching enabled me to explore design patterns prevalent in competitor apps, ensuring YATYAP strikes a balance between familiarity and innovation. This process highlighted opportunities for multi-functional screens and intuitive swiping/touch gestures, essential for a seamless user experience.",

                    "By focusing on the needs of crew members and yacht owners, the design prioritizes clarity, efficiency, and user flow simplicity—empowering both sides of the yachting community to connect effortlessly.",
                ]}
                image="/AppImages/VisualizingUserCentricExperience.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Uncovering Key Insights"
                subtexts={[
                    "The high-fidelity prototype for YATYAP brought test users closer to the app's real experience, revealing new challenges and user concerns. While users successfully navigated the job search and onboarding flows, realistic interactions surfaced apprehensions. Questions about the security of personal data, payment safety, and uncertainty about what happens if contracts are breached or payments are delayed were frequently raised.",

                    "Additionally, users voiced a previously unspoken need: Could YATYAP provide greater transparency by visualizing their overall job application success rates or tracking the quality of connections they’re building on the platform? Such insights would empower both crew and yacht owners to better understand the value YATYAP delivers, while boosting trust and confidence in the app's ability to facilitate successful hires and career opportunities.",
                ]}
                image="/AppImages/KeyInsights.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="How Usability Might Be Improved "
                subtexts={[" Issues to Address for Longer-Term:"]}
                list={ImprovingUsabilityList}
                textAfterList={[
                    "These improvements will not only refine the overall YATYAP experience but also foster greater confidence and efficiency across the platform.",
                ]}
                gapSize={8}
                paddingSize={5}
            />
        </Container>
    );
}
