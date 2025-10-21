import useResponsive from "@/hooks/useResponsive";
import { CompetitiveAnalysisList, HybridCardSortingList } from "@/Styles";
import { Container } from "@mui/material";
import { DetailsSection } from "./DetailsSection";

export default function WelfDetails() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: SmallScreen ? "30px !important" : "80px !important" }}>
            <DetailsSection
                title="The Challenge"
                subtexts={[
                    "Welf Lab's goal is to simplify the process of creating and launching digital products. Many businesses face challenges in aligning design, development, and project management, often leading to inefficiencies and missed opportunities for growth.",
                ]}
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="The Solution"
                subtexts={[
                    "To address these challenges, I designed a platform that optimizes collaboration between businesses and product teams. With a user-centered design approach, Welf Lab delivers scalable and innovative solutions that meet the unique needs of each business, driving successful digital transformations.",
                ]}
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Competitive Analysis for Welflab"
                subtexts={[
                    "To develop an effective digital solution for Welf Lab, I conducted thorough market research and competitive analysis to understand the needs of businesses seeking to create digital products.",
                ]}
                boldSubText={["Research Goals"]}
                list={CompetitiveAnalysisList}
                image="/AppImages/CompetitiveAnalysisWelf.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Competitive Analysis: Insights from Leading Design Agencies"
                subtexts={[
                    "A deep dive into the strengths and weaknesses of top competitors in the digital design industry, including IDEO, Frog Design, and Accenture. This analysis identifies key differentiators, market positioning, and areas where WelfLab can excel, helping the platform carve out its niche by addressing gaps in affordability, accessibility, and rapid prototyping for small to mid-sized businesses.",
                ]}
                image="/AppImages/CompetitiveAnalysisWelf2.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="User Persona: Understanding Our Target Audience"
                subtexts={[
                    "To understand WelfLab's target audience, we conducted detailed user research combining insights from industry reports, competitor reviews, and customer feedback. This process revealed common challenges faced by small business owners and startup founders looking to create cost-effective, high-quality digital products. Based on these findings, we crafted a primary persona that represents the typical WelfLab user, highlighting their goals, pain points, and how WelfLab meets their needs. This persona ensures a user-centered approach in the platform's design and development.",
                ]}
                image="/AppImages/UserPersona.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Hybrid Card Sorting: Designing an Intuitive Navigation Structure"
                subtexts={[
                    "To create an intuitive and user-friendly navigation structure for Welf Lab, I conducted a card sorting exercise with 6 participants from the platform's target audience, including small business owners, project managers, and IT decision-makers. The goal was to organize complex content into logical groupings that reflect user expectations and support efficient navigation.",
                    "Using an hybrid card sorting method, participants categorized labeled cards such as “Retail,” “Banking,” “Data Science,” and “Project Audit.” The results revealed clear user mental models, leading to a streamlined navigation structure:",
                ]}
                list={HybridCardSortingList}
                textAfterList={[
                    "This outcome created a clean and efficient navigation experience, enabling users to seamlessly discover industry-specific solutions, expertise, and services while ensuring clear pathways to conversion.",
                ]}
                image="/AppImages/HybridCardSorting.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Designing User-Centric Wireframes for Seamless Interaction"
                subtexts={[
                    "This section focuses on the creation of wireframes that define the layout and structure of the page. By prioritizing clarity and usability, the wireframes outline key elements such as navigation, content placement, and user pathways. The goal is to ensure an intuitive experience where users can seamlessly access information, interact with key sections, and achieve their goals efficiently. These wireframes serve as the foundation for the visual design and development phases, aligning the structure with user needs and business objectives.",
                ]}
                image="/AppImages/UserCentricWireframes.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="New Branding"
                subtexts={[
                    "Before diving into the UI design phase, the focus shifted to rebranding Welflab to better align with its identity and goals. Using Welflab’s core brand attributes—modern, neutral, fresh, simple, and minimal—I began the process by creating a mood board. This helped establish a clear visual direction for the new brand identity.",
                    "Drawing inspiration from the mood board and staying true to Welflab’s attributes, I explored multiple concepts for the new logo. Through brainstorming and several iterations, I refined the best ideas, ultimately landing on a final logo that encapsulates Welflab’s vision and values, setting a solid foundation for its updated branding.",
                ]}
                image="/AppImages/NewBranding.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="High-Fidelity UI Design: Bringing the Vision to Life"
                subtexts={[
                    "With Welflab’s new branding established, I began developing the visual design for the website’s key pages, building upon the wireframes created earlier. The focus was on seamlessly integrating the updated brand identity—ensuring consistency across layout, typography, color, and imagery. These polished designs served as the foundation for the next step: building an interactive prototype to validate the user experience through testing.",
                ]}
                image="/AppImages/HighFidelityUIDesign.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Key Patterns and Insights from User Testing"
                subtexts={[
                    "To refine Welflab’s user experience, usability testing was conducted to evaluate the platform's functionality and identify areas for improvement. Key patterns emerged, offering valuable insights to guide design iterations while ensuring progress aligns with tight project timelines.",
                ]}
                image="/AppImages/KeyPatterns.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Next Steps"
                subtexts={[
                    "Given the tight timeline and the usability test results, these design iterations are being implemented step by step. Initial improvements will focus on navigation and the contact flow, as these areas showed the highest impact on user satisfaction during testing. Further refinements to content clarity and layout will follow in subsequent updates.",
                    "These insights are guiding the enhancement of Welflab's website to align with user needs while maintaining the brand's modern and professional identity.",
                ]}
                gapSize={8}
                paddingSize={5}
            />
        </Container>
    );
}
