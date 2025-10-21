import useResponsive from "@/hooks/useResponsive";
import { HomeRedesignOutcome, HuduPercentages, ProfileRedesignOutcome, ProjectRedesignOutcome, ReflectionsList, UserInterviewList } from "@/Styles";
import { Container, Stack } from "@mui/material";
import { HomeRedesignOutcomeSvg } from "../../../../../../public/Icons/HomeRedesignOutcome";
import { ListingProjectsRedesignSvg } from "../../../../../../public/Icons/ListingProjectsRedesignSvg";
import { ProfileRedesignOutcomeSvg } from "../../../../../../public/Icons/ProfileRedesignOutcomeSvg";
import { DetailsSection } from "./DetailsSection";

export default function HuduDetails() {
    const SmallScreen = useResponsive("down", "md");

    return (
        <Container maxWidth="xl" sx={{ padding: SmallScreen ? "30px !important" : "80px !important" }}>
            <DetailsSection
                title="Cluttered Design and Ineffective Navigation Hamper User Engagement on HUDU"
                subtexts={[
                    "Users of HUDU faced significant challenges due to a cluttered interface and overwhelming design. A lengthy project-posting process left users stuck, while a disorganized profile layout made it difficult to find and use key features. The absence of incentives further discouraged active participation. These issues collectively contributed to a lackluster user experience and diminished user retention.",
                ]}
                percentages={HuduPercentages}
                percentagesColor="#2F63FE"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Competitive Analysis: Enhancing HUDU’s Position in the Odd Job Marketplace"
                subtexts={[
                    "I analyzed key competitors in the odd job marketplace to uncover design and feature gaps that HUDU could leverage to improve its user experience. Apps like TaskRabbit and Thumbtack excel in offering a wide range of services and strong task filters. However, none provide a seamless location-based job search or an intuitive profile setup process, both of which are critical for users seeking efficiency.",
                    "These insights inspired me to design a more streamlined HUDU experience, focusing on simplifying job posting, introducing location-based filtering, and enhancing user profiles to improve job visibility and ease of navigation.",
                ]}
                image="/AppImages/CompetitveAnalysis.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="User Interviews: Understanding HUDU's User Experience"
                subtexts={[
                    <>
                        While I had gained a solid understanding of the market, competitors, and the general audience, I wanted to delve deeper into
                        the actual users of HUDU.
                        <strong>
                            Who exactly are the people using HUDU, and what have their experiences been like while navigating the platform?
                        </strong>
                        This is when I decided to conduct user interviews to uncover valuable insights directly from the users.
                    </>,
                    "I interviewed six frequent users who fit the demographics identified during my market research. In these interviews, I asked open-ended questions to better understand their needs, pain points, and expectations from the app. The research goals I focused on were:",
                ]}
                list={UserInterviewList}
                textAfterList={[
                    "After gathering all the information gained from the interviews, it was now time to do a deeper analysis by using an empathy map.",
                ]}
                image="/AppImages/UserInterviews.png"
                textAfterImage={[
                    "When taking a look at all the notes, patterns started to emerge across the different categories, allowing me to draw key insights from them. The most prominent patterns that I discovered were the following:",
                ]}
                secondImage="/AppImages/UserInterviews2.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Kickoff Stage: Defining User Needs"
                subtexts={[
                    "In the kickoff stage, we identified the key tasks and challenges faced by field sales representatives, particularly around inefficiencies in task management, manual data entry, and sharing results with stakeholders. Using insights from these tasks, we created Jason, a persona representing the typical user.",
                    "Jason’s role involves navigating multiple PoS locations, scanning products, tracking stock discrepancies, and sharing results. His challenges include time-consuming manual processes and lack of integration with tools like CRM systems.",
                    "Our goal was to design a solution that simplifies Jason’s workflow, automates data entry, and enables seamless integration with third-party tools. By focusing on Jason’s needs, we ensured our design would address real-world pain points, improving efficiency and productivity for field sales representatives.",
                ]}
                image="/AppImages/KickOffStage.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Project Goals"
                subtexts={[
                    "To guide the problem-solving process, I created a Venn diagram that outlines the intersection between business goals, user goals, and technical considerations. This exercise highlights individual and shared objectives, paving a clearer path for prioritizing solutions that benefit all stakeholders while staying technically feasible.",
                ]}
                image="/AppImages/ProjectGoals.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Moving Directly to High-Fidelity Testing for HUDU"
                subtexts={[
                    "Due to tight deadlines, I chose to skip additional wireframe testing and moved directly to creating high-fidelity prototypes for HUDU's redesigned homepage, listing process, and profile. My strategy was to address the key friction points identified in earlier research and testing, focusing on user-friendly copy, clear design patterns, and consistent usability.",
                    "Testing of the high-fidelity prototype yielded promising results, with most tasks successfully completed by testers at a rate of 75% or higher. However, some issues persisted, particularly in navigating the redesigned listing process and exploring the new map view on the homepage. Feedback revealed areas for improvement, including clearer guidance on task flows and better emphasis on newly added features.",
                ]}
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Outcome of Home Redesign:"
                subtexts={[
                    "The testing sessions provided valuable insights into user interactions with the redesigned homepage. Feedback highlighted that:",
                ]}
                list={HomeRedesignOutcome}
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
                <HomeRedesignOutcomeSvg />
            </Stack>
            <DetailsSection
                title="Outcome of Listing Projects Redesign:"
                subtexts={["The testing sessions revealed valuable feedback on the redesigned project listing process:"]}
                list={ProjectRedesignOutcome}
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
                <ListingProjectsRedesignSvg />
            </Stack>
            <DetailsSection
                title="Outcome of Profile Redesign:"
                subtexts={["The testing sessions provided valuable feedback on the redesigned profile:"]}
                list={ProfileRedesignOutcome}
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
                <ProfileRedesignOutcomeSvg />
            </Stack>
            <DetailsSection
                title="Post-Redesign Success: User Feedback and Ratings"
                subtexts={[
                    "Following the HUDU app redesign, app store feedback has provided valuable insights into user satisfaction. Positive reviews emphasize improved navigation, enhanced profiles, and the overall revamped interface. The app’s average rating has risen significantly to 4.7 stars, reflecting both the quantitative and qualitative approval of users.",
                ]}
                image="/AppImages/PostRedesignSuccess.png"
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="Reflections"
                subtexts={[
                    "The redesign of the HUDU app has brought significant improvements to user experience, but as with any evolving platform, there are areas that require ongoing consideration:",
                ]}
                list={ReflectionsList}
                textAfterList={[
                    "Reflecting on these aspects will not only help mitigate potential issues but also drive continuous innovation, keeping HUDU at the forefront of user-centric design.",
                ]}
                gapSize={8}
                paddingSize={5}
            />
            <DetailsSection
                title="10,000 Users and Counting: A Milestone in HUDU’s Journey"
                subtexts={[
                    "The redesign of HUDU was more than a project—it was a mission to redefine the gig economy through user-driven design. Guided by insights, collaboration, and innovation, we introduced changes that improved navigation, clarity, and overall satisfaction. Today, with over 10,000 users and a 39% growth in just 90 days, we celebrate the impact of thoughtful design in empowering our community. This milestone is a testament to what’s possible when user needs and purposeful design align. The journey is just beginning, and I’m proud to be a part of it.",
                ]}
                gapSize={8}
                paddingSize={5}
            />
        </Container>
    );
}
