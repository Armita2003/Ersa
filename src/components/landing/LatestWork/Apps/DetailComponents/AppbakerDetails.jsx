import useResponsive from "@/hooks/useResponsive";
import { MeetingInsightsList, SeamlessInformationArchitectureList } from "@/Styles";
import { Container } from "@mui/material";
import { DetailsSection } from "./DetailsSection";

export default function AppbakerDetails() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: SmallScreen ? "30px !important" : "80px !important" }}>
            <DetailsSection title="Discovery Meeting Insights" list={MeetingInsightsList} gapSize={8} paddingSize={5} />
            <DetailsSection
                title="Competitive Analysis for Appbaker"
                subtexts={[
                    "In analyzing competitors in the digital app development space, several key trends emerged. Competitors often highlight their expertise through client success stories and showcase their technical proficiency with interactive elements. Many prioritize a clean, modern aesthetic with a focus on user trust, security, and scalability. Opportunities include differentiating by emphasizing AppBaker’s ability to provide custom solutions across diverse sectors and offering a more personalized, client-driven approach in app development. Additionally, competitors tend to emphasize ease of use and fast delivery, areas where AppBaker could further stand out.",
                ]}
                image="/AppImages/CompetitiveAnalysisAppbaker.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="User Persona: Understanding Our Target Audience"
                subtexts={[
                    "To understand WelfLab's target audience, we conducted detailed user research combining insights from industry reports, competitor reviews, and customer feedback. This process revealed common challenges faced by small business owners and startup founders looking to create cost-effective, high-quality digital products. Based on these findings, we crafted a primary persona that represents the typical WelfLab user, highlighting their goals, pain points, and how WelfLab meets their needs. This persona ensures a user-centered approach in the platform's design and development.",
                ]}
                image="/AppImages/UserPersonaAppbaker.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Crafting Seamless Information Architecture for AppBaker"
                subtexts={[
                    "The information architecture for AppBaker was crafted to address the diverse needs of users, ensuring a clear and logical flow of information while supporting the company’s core values of innovation and adaptability. By analyzing the objectives of AppBaker’s primary users—startups, enterprises, and industry innovators—we identified key opportunities to streamline navigation and highlight value-driven solutions.",
                    "The structure is designed to showcase three pillars: Technologies, Services, and Insights, each representing a critical component of AppBaker’s offerings.",
                ]}
                list={SeamlessInformationArchitectureList}
                textAfterList={[
                    "This architecture creates an intuitive journey for users, reducing friction and enabling quick access to relevant information. Each section reflects AppBaker’s commitment to driving innovation and fostering collaboration while allowing scalability to adapt to future growth and evolving user needs.",
                ]}
                image="/AppImages/SeamlessInformationArchitecture.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Designing Wireframes for AppBaker: A Foundation for Innovation"
                subtexts={[
                    "This section highlights the process of crafting wireframes that form the backbone of AppBaker’s platform. The wireframes were meticulously designed to emphasize clarity, functionality, and seamless interaction. By defining the layout, navigation, and content hierarchy, these wireframes ensure an intuitive user experience, guiding visitors effortlessly through key sections like Technologies, Services, and Insights.",
                ]}
                image="/AppImages/DesigningWireframes.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Branding & Colors: Defining AppBaker's Identity"
                subtexts={[
                    "The branding and color palette were designed to convey AppBaker’s forward-thinking approach while maintaining a sense of trust and reliability. The primary colors reflect modernity and innovation, with bold and vibrant tones adding energy, while neutral shades provide balance and sophistication.",
                ]}
                image="/AppImages/BrandingAndColors.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Hero Animation: Creating a Memorable First Impression"
                subtexts={[
                    "When users land on the page, a spinning phone animation takes center stage. As the phone rotates, the text seamlessly changes, showcasing key messages about AppBaker’s capabilities. Once the phone settles in a steady position, the familiar iPhone background inside the phone animates to greet users with a warm “Hello” or “Bonjour.” This playful yet professional introduction sets the stage for exploring the rest of the platform while reflecting AppBaker's commitment to blending creativity and technology.",
                ]}
                image="/AppImages/HeroAnimation.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="UI Design: Shaping AppBaker's Visual Identity"
                subtexts={[
                    "The design process focused on establishing a cohesive visual language that aligns with AppBaker’s mission of empowering users with cutting-edge solutions. Key elements such as a modern color palette, clean typography, and intuitive layouts were chosen to guide users effortlessly through the platform.",
                    "The interface emphasizes accessibility and professionalism, balancing vibrant aesthetics with functional design. From interactive call-to-action buttons to clear content hierarchies, every detail works together to create a visually engaging and user-friendly experience. This thoughtful approach ensures AppBaker’s platform is not only appealing but also effective in achieving its goals.",
                ]}
                image="/AppImages/AppbakerVisualIdentity.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Design Handoff and Future Testing Plans"
                subtexts={[
                    "Due to constraints in budget and time, the stakeholders were unable to allocate resources for user testing during the design phase. As a result, the finalized UI designs were handed off to the development team for implementation.",
                    "To ensure the design effectively meets user needs, the team plans to leverage tools such as Google Analytics and Microsoft Clarity post-launch. These tools will provide valuable data on user behavior, interaction patterns, and potential pain points. This analytical feedback will serve as the foundation for future research and iterations, ensuring continuous improvement and alignment with user expectations.",
                    "By prioritizing data-driven insights, the AppBaker team remains committed to refining the platform and enhancing the overall user experience in subsequent phases.",
                ]}
                gapSize={8}
                paddingSize={5}
            />
        </Container>
    );
}
