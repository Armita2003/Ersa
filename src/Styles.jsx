import { Button, Card, Container, Stack, styled, Typography } from "@mui/material";

export const Tags = styled(Stack)(() => ({
  borderRadius: 35,
  border: "1px solid rgba(0, 0, 0, 0.1)",
  padding: "12px 12px 9px",
  backgroundColor: "rgba(255, 255, 255, 1)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const TagTypography = styled(Typography)(({}) => ({
  fontFamily: ` var(--font-pphatton), serif`,
  fontWeight: 700,
  fontSize: 12,
  textAlign: "center",
}));

export const LatestWorkContainers = styled(Card)(({}) => ({
  height: "auto",
  border: "1px solid #E2E2E2",
  backgroundColor: "white",
  padding: "24px",
  borderRadius: 8,
}));

export const LatestWorkTitleTypography = styled(Typography)(({}) => ({
  width: 117,
  height: 25,
  fontFamily: ` var(--font-pphatton), serif`,
  fontWeight: 700,
  fontSize: 20,
  color: "black",
  zIndex: 1,
}));
export const LatestWorkRoleTypography = styled(Typography)(({}) => ({
  height: 14,
  fontFamily: ` var(--font-pphatton), serif`,
  fontWeight: 500,
  fontSize: 10,
  color: "#404040",
  zIndex: 1,
}));

export const LatestWorkHoverText = styled(Stack)(({}) => ({
  height: 22,
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 700,
  fontSize: 20,
  color: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
  opacity: 0,
  visibility: "hidden",
}));

export const AdventureCompanyTypography = styled(Typography)(({ theme }) => ({
  height: 45,
  fontFamily: ` var(--font-pphatton), serif`,
  fontWeight: 500,
  fontSize: 36,
  color: "black",
  [theme.breakpoints.down("md")]: {
    fontSize: 28,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
}));
export const AdventureRoleTypography = styled(Typography)(({ theme }) => ({
  height: 30,
  fontFamily: ` var(--font-pphatton), serif`,
  fontSize: 24,
  color: "#404040",
  marginBottom: 4,
  [theme.breakpoints.down("md")]: {
    fontSize: 20,
    marginBottom: 2,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    marginBottom: 2,
  },
}));
export const AdventureLocationTypography = styled(Typography)(({ theme }) => ({
  height: 20,
  fontFamily: ` var(--font-pphatton), serif`,
  fontWeight: 500,
  fontSize: 16,
  color: "#8A8A8A",
  marginBottom: 16,
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
    marginBottom: 8,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 8,
    marginBottom: 4,
  },
}));
export const AdventureListRoleTypography = styled(Typography)(({ theme }) => ({
  fontFamily: ` var(--font-pphatton), serif`,
  fontWeight: 700,
  fontSize: 12,
  color: "#404040",
  [theme.breakpoints.down("md")]: {
    fontSize: 11,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 8,
  },
}));
export const AdventureListTypography = styled(Typography)(({ theme }) => ({
  fontFamily: ` var(--font-pphatton), serif`,
  fontWeight: 500,
  fontSize: 12,
  color: "#404040",
  lineHeight: 2,
  [theme.breakpoints.down("md")]: {
    fontSize: 11,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 8,
  },
}));

export const FooterText = styled(Typography)(({ theme }) => ({
  fontFamily: ` var(--font-pphatton), serif`,
  fontWeight: 700,
  fontSize: 32,
  color: "#8C404E",
  display: "inline",
  [theme.breakpoints.down("md")]: {
    fontSize: 23,
  },
}));

export const FooterSubText = styled(Typography)(({ theme }) => ({
  fontFamily: ` var(--font-pphatton), serif`,
  fontWeight: 700,
  fontSize: 20,
  display: "inline",
  color: "black",
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
  },
}));

export const FooterButton = styled(Button)(({}) => ({
  borderRadius: 32,
  paddingTop: 19,
  paddingRight: 16,
  paddingBottom: 16,
  paddingLeft: 16,
  gap: 8,
  textTransform: "none",
}));

export const FooterButtonText = styled(Typography)(({ theme }) => ({
  height: 33,
  fontFamily: ` var(--font-pphatton), serif`,
  fontWeight: 700,
  fontSize: 20,
  lineHeight: "33.22px",
   [theme.breakpoints.down("md")]: {
    fontWeight: 500,
    fontSize: 18,
  },
}));

export const ResumeMainBody = styled(Container)(({ theme }) => ({
  position: "relative",
  backgroundColor: "white",
  height: "100%",
  padding: 40,
  [theme.breakpoints.down("md")]: {
    padding: 20,
  },
}));

export const ResumeTitle = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 700,
  fontSize: 48,
  color: "#1F1F1F",
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
  },
}));

export const ResumeRole = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 400,
  fontSize: 24,
  color: "#07073A",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));

export const ResumeContact = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 400,
  fontSize: 24,
  color: "#1F1F1F",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));

export const ResumeCategory = styled(Typography)(({ theme }) => ({
  fontFamily: `"Raleway", serif`,
  fontWeight: 600,
  fontSize: 32,
  color: "#8C404E",
  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
  },
}));

export const ResumeDesignRole = styled(Typography)(({ theme }) => ({
  fontFamily: `"Raleway", serif`,
  fontWeight: 700,
  fontSize: 24,
  color: "#1E1E1E",
  display: "inline",
  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
  },
}));
export const ResumeDesignLocationTypography = styled(Typography)(({ theme }) => ({
  height: 20,
  fontFamily: `"Raleway", serif`,
  fontWeight: 700,
  fontSize: 20,
  color: "rgba(30, 30, 30, 0.5)",
  marginBottom: 8,
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
    marginBottom: 2,
  },
}));

export const ResumeListTypography = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 300,
  fontSize: 20,
  color: "#1E1E1E",
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
  },
}));

export const COMPARISON_SATOSHI_FONT = `'Satoshi', sans-serif`;
export const COMPARISON_FEATURE_BG = "rgba(37, 92, 254, 0.6)";
export const COMPARISON_BORDER = "1px solid rgba(153, 153, 153, 0.5)";
export const COMPARISON_BORDER_FAINT = "1px solid rgba(153, 153, 153, 0.3)";
export const COMPARISON_TEXT_DARK = "#3D3D3D";

export const COMPARISON_TABLE_CONTAINER_SX = {
  border: "1px solid",
  borderColor: "grey.400",
  borderRadius: "8px",
  overflow: "hidden",
  bgcolor: "rgba(255, 255, 255, 0.2)",
};

export const COMPARISON_FEATURE_SURFACE_SX = {
  bgcolor: COMPARISON_FEATURE_BG,
  color: "white",
  fontFamily: COMPARISON_SATOSHI_FONT,
};

export const COMPARISON_TABLE_HEADER_CELL_BASE_SX = {
  fontWeight: 700,
  borderBottom: COMPARISON_BORDER,
  py: 2,
  fontFamily: COMPARISON_SATOSHI_FONT,
};

export const COMPARISON_TABLE_BODY_CELL_BASE_SX = {
  borderBottom: COMPARISON_BORDER,
  py: 2,
  color: COMPARISON_TEXT_DARK,
  textAlign: "center",
  fontFamily: COMPARISON_SATOSHI_FONT,
};

export const COMPARISON_MOBILE_CARD_SX = {
  border: "1px solid",
  borderColor: "grey.300",
  borderRadius: "12px",
  bgcolor: "white",
};

export const COMPARISON_MOBILE_FEATURE_BOX_SX = {
  ...COMPARISON_FEATURE_SURFACE_SX,
  px: 2,
  py: 1,
  borderRadius: "8px",
  mb: 2,
};

export const COMPARISON_MOBILE_CHIP_BASE_SX = {
  fontWeight: 600,
  fontSize: "0.75rem",
  mb: 0.5,
};

export const Works = [
  {
    title: "ShopeyeQ",
    name: "ShopeyeQ",
    role: "App Design",
    image: "/LatestWorkImages/ShopeyeQPhone.png",
    circle: "/LatestWorkImages/ShopeyeQCircle.png",
  },
  {
    title: "ShopeyeQ",
    name: "ShopeyeQ-Desktop",
    role: "Dashboard",
    image: "/LatestWorkImages/ShopeyeQDesktop.svg",
    circle: "/LatestWorkImages/ShopeyeQDesktopCircle.svg",
  },
  {
    title: "YouDoo",
    name: "YouDoo",
    role: "App Design",
    image: "/LatestWorkImages/YouDooPhone.svg",
    circle: "/LatestWorkImages/YouDooCircle.svg",
  },
  {
    title: "HUDU",
    name: "HUDU",
    role: "App Design",
    image: "/LatestWorkImages/HuduPhone.png",
    circle: "/LatestWorkImages/HuduCircle.png",
  },
  {
    title: "Yat Yap",
    name: "Yat-Yap",
    role: "App Design",
    image: "/LatestWorkImages/YatYapPhone.png",
    circle: "/LatestWorkImages/YatYapCircle.png",
  },
  {
    title: "Apsy",
    name: "Apsy",
    role: "UX research / Design",
    image: "/LatestWorkImages/ApsyLaptop.png",
    circle: "/LatestWorkImages/ApsyCircle.png",
  },
  {
    title: "WelfLab",
    name: "WelfLab",
    role: "Landing Page",
    image: "/LatestWorkImages/WelfLaptop.png",
    circle: "/LatestWorkImages/WelfCircle.png",
  },
  {
    title: "AppBaker",
    name: "AppBaker",
    role: "Landing Page",
    image: "/LatestWorkImages/AppBakerLaptop.png",
    circle: "/LatestWorkImages/AppBakerCircle.png",
  },
];

export const Adventure = [
  {
    company: "APSY",
    role: "Product Owner",
    location: "United States | Oct 2021 - Present",
    list: [
      "Accelerated from UI/UX designer to Product Owner within six months",
            "Orchestrated communication with global clients, overseeing the entire design process remotely",
            "Efficiently managed customer onboarding, cultivating and sustaining 10+ ongoing customer relationships",
            "Spearheaded 10 research projects, presenting actionable recommendations to clients, designers, and engineers",
            "Executed comprehensive user research, including competitive analysis, user flow, interviews, and style guide development",
            "Led the UI design process, incorporating client feedback, coordinating with the development team, and ensuring successful product launches on the app store",
    ],
  },
  {
    company: "WELF",
    role: "UI/UX Designer",
    location: "Germany | Feb 2022 - Nov 2024",
    list: [
      "Key contributor to the rebranding of Welf and development of main landing pages",
            "Headed a dashboard project for image recognition-based retail execution and tracking services, enhancing operational efficiency for grocery retailers and suppliers",
             "Developed comprehensive style guides and collaborated closely with developers to deliver outstanding design solutions",
              "Proficient in high performance mobile and web application development, with expertise in AI and AR focused projects",
    ]
  },
  {
    company: "Hotelian",
    role: "UI/UX Designer",
    location: "U.A.E. | Mar 2019 - Sep 2021",
    list: [
  "Redesigned the company’s website and developed a tailored app for their existing client base",
            "Wore multiple hats in a startup environment, gaining diverse insights into UI/UX",
            "Conducted heuristic evaluation and comparative analysis of major competitors in the travel industry",
            "Utilized website analytics to offer valuable insights into competitors' current business state and viability",
             "Spearheaded the redesign of the onboarding experience and landing page layout",
             "Produced Hi-Fi user flows, site maps, personas, and research documents for the company CEO",
            "Created the new UI design and collaborated with the engineering team for full development",
    ],
  },
];
export const Skills = [
  {
    title: "Research",
    list: [
      "Qualitative Research",
      "Competitive Analysis",
      "User Interviews",
      "Literature Reviews",
      "Card Sorting",
      "Evaluative Research",
      "Creating Surveys",
      "Rapid Research",
    ],
  },
  {
    title: "Testing And Evaluation",
    list: ["Usability Testing", "Remote User Testing", "Heuristic Evaluations", "A/B Testing"],
  },
  {
    title: "Tools",
    list: ["Adobe XD", "Figma", "Sketch", "InVision", "Zeplin", "Axure RP"],
  },
  {
    title: "Visualisation",
    list: ["Spline", "Photoshop"],
  },
  {
    title: "Language",
    list: ["IELTS = 8.5", "Persian"],
  },
];

export const WorkDetailContainer = styled(Stack)(({ theme, prop }) => ({
  backgroundColor: prop,
  maxWidth: "100%",
  height: "100%",
  padding: "80px !important",
  [theme.breakpoints.down("md")]: {
    padding: "30px !important",
  },
  // zIndex: -10,
}));

export const WorkDetailLandingBox = styled(Stack)(({ theme }) => ({
  width: 784,
  gap: 72,
  display: "flex",
  alignSelf: "flex-start",
  justifySelf: "flex-start",
  flexWrap: "wrap",
  [theme.breakpoints.down("lg")]: {
    gap: 62,
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    gap: 52,
    width: "100%",
  },
}));

export const WorkDetailLandingHeaderText = styled(Typography)(({ theme, color }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 700,
  fontSize: 46,
  color: color,
  lineHeight: "64.8px",
  [theme.breakpoints.down("lg")]: {
    fontSize: 35,
    lineHeight: "48.4px",
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 32,
    lineHeight: "42.4px",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 26,
    lineHeight: "36.4px",
    width: "100%",
  },
}));

export const WorkDetailLandingHeaderSubText = styled(Typography)(({ theme, color }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 400,
  fontSize: 20,
  color: color,
  [theme.breakpoints.down("lg")]: {
    fontSize: 18,
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
    lineHeight: "28.4px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
    lineHeight: "22.4px",
  },
}));

export const DetailsTypography = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 700,
  fontSize: 30,
  lineHeight: " 39px",
  width: "100%",
  color: "#1F1F1F",
  [theme.breakpoints.down("md")]: {
    fontSize: 20,
    lineHeight: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
    lineHeight: "20px",
  },
}));

export const SubDetailsTypography = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 500,
  fontSize: 20,
  lineHeight: "26px",
  color: "#111111",
  [theme.breakpoints.down("md")]: {
    fontSize: 15,
    lineHeight: "22px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 13,
    lineHeight: "20px",
    fontWeight: 400,
  },
}));

export const BackgroundIconButton = styled(Button)(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "8px",
  border: "1px solid #E5E5E5",
  backgroundColor: "white",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  padding: 0,
  zIndex: 1,
  minWidth: "40px",
}));

export const BoldSubDetailsTypography = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 700,
  fontSize: 20,
  lineHeight: "26px",
  color: "#111111",
  [theme.breakpoints.down("md")]: {
    fontSize: 15,
    lineHeight: "22px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 13,
    lineHeight: "20px",
  },
}));
export const ListTypography = styled(Typography)(({ theme, title }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: title ? 700 : 500,
  fontSize: 20,
  lineHeight: "26px",
  color: "#1F1F1F",
  // paddingBottom: 20,
  display: "inline",
  [theme.breakpoints.down("md")]: {
    fontSize: 15,
    lineHeight: "22px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 13,
    lineHeight: "20px",
  },
}));

export const WorkDetailPercentages = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 700,
  fontSize: 72,
  textAlign: "center",
  // color: "#3950FF",
  height: 79,
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 62,
  },
  [theme.breakpoints.down("md")]: {
    height: 59,
    fontSize: 42,
  },
}));
export const WorkDetailSubTextPercentages = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 400,
  fontSize: 16,
  textAlign: "center",
  lineHeight: "22.4px",
  color: "#111111",
  // width: 280,
  // width: "100%",
  height: 22,
  textAlign: "center",
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 14,
  },
  [theme.breakpoints.down("md")]: {
    height: 18,
    fontSize: 12,
  },
}));

export const Percentages = [
  { text: "Inefficiency in Sales Activities", number: "70%" },
  { text: "Data Accuracy Issues", number: "40%" },
  { text: "Lack of Real-Time Sales Visibility", number: "72%" },
  { text: "Excessive Time Spent on Travel", number: "35%" },
];

export const HuduPercentages = [
  { text: "abandoned the project-posting", number: "45%" },
  { text: "struggled to find key features", number: "60%" },
  { text: "left profiles incomplete", number: "40%" },
  { text: "drop in daily active users in six months", number: "30%" },
];

export const YachtOwnersPercentages = [
  { text: "struggle with maintaining a consistent, well-trained crew", number: "68%" },
  { text: "report challenges with crew transitions and onboarding", number: "72%" },
  { text: "spend excessive time on manual crew management tasks", number: "25%" },
];

export const CrewMembersPercentages = [
  { text: "of crew members are dissatisfied with traditional job management systems", number: "40%" },
  { text: "of crew members feel disconnected from the yachting community", number: "33%" },
  { text: "of crew members report lost job opportunities due to scheduling conflicts", number: "20%" },
];

export const ProblemStatementPercentages = [
  { text: "Didn't create an app", number: "55%" },
  { text: "Were not published in Apsy", number: "44%" },
  { text: "Published to the stores", number: "0.6%" },
];

export const FuturePlansList = [
  { desc: "Continuously gather user feedback to identify emerging needs and pain points." },
  {
    desc: "Explore the integration of advanced AI-driven support features, such as a chatbot for instant issue resolution.",
  },
  { desc: "Expand the library of pre-designed model types to cater to a broader range of user needs and industries." },
  {
    desc: "Further personalize email communication by leveraging behavioral analytics to deliver even more targeted and impactful updates.",
  },
  {
    desc: "Conduct regular usability testing to ensure the platform evolves in line with user expectations and industry trends.",
  },
];

export const KeyInsightsList = [
  { desc: "Users spent excessive time navigating the onboarding screen, indicating a lack of clear guidance." },
  {
    desc: "Drop-offs consistently occurred at points where users were required to make decisions without sufficient context or examples.",
  },
];

export const UserQuotesList = [
  { desc: "“The platform looks promising but feels overwhelming without clear instructions.”" },
  { desc: "“I didn’t know how to preview my app while building it.”" },
];

export const SurveyFeedbackAnalysisList = [
  { desc: "49% of respondents said they didn’t understand the next steps after naming their app." },
  { desc: "35% felt the onboarding process lacked sufficient explanation of features." },
  { desc: "28% wanted more visual or video-based guides." },
];

export const KeyBehavioralPatternsList = [
  { desc: "High drop-off rates: 49% of users left the process before reaching the “app name” stage." },
  { desc: "Heat-maps: Showed repeated clicks on non-interactive elements, indicating unclear UI design." },
  {
    desc: "Session replays: Revealed users frequently revisiting the same steps, suggesting uncertainty about completing tasks.",
  },
];

export const MeetingInsightsList = [
  {
    desc: (
      <>
        <strong>Purpose of the Landing Page:</strong> Showcase AppBaker’s expertise in delivering digital products,
        ranging from MVP development to full-scale app solutions, across various industries including tech, healthcare,
        and e-commerce.
      </>
    ),
  },
  {
    desc: (
      <>
        {" "}
        <strong>Target Audience:</strong> Businesses seeking to develop custom applications, including startups and
        enterprises in diverse sectors.
      </>
    ),
  },
  {
    desc: (
      <>
        <strong> KPIs:</strong> Increase inbound inquiries, enhance brand credibility, boost client engagement, and
        elevate lead conversion rates."{" "}
      </>
    ),
  },
  {
    desc: (
      <>
        <strong>Business Objectives:</strong> Position AppBaker as a leader in app development, drive project
        acquisition, and highlight their expertise in delivering secure, high-quality, and scalable digital solutions.
      </>
    ),
  },
];

export const SeamlessInformationArchitectureList = [
  {
    desc: "Technologies: Categorized into foundational tech stacks (Mobile, Backend, Big Data) and advanced capabilities (AI, AR, Cloud), these sections align technical expertise with specific industries like Healthcare, Media, and Smart Cities.",
  },
  {
    desc: "Services: Featuring UI/UX Design, DevOps, Product Development, and more, this pillar emphasizes AppBaker’s ability to provide tailored, end-to-end solutions for diverse business needs.",
  },
  {
    desc: "Supporting Sections: Additional areas, including Projects, Insights, Careers, and About Us, offer users a deeper understanding of AppBaker’s expertise, culture, and thought leadership.",
  },
];

export const ImprovingUsabilityList = [
  {
    desc: "Advanced Filtering Options: Introduce enhanced filtering to refine job searches based on yacht type, location, duration, pay, or specific crew requirements. This ensures users quickly find opportunities that match their preferences.",
  },
  {
    desc: "Measuring Platform Value: Develop tools to track application success rates, response times, and interview outcomes. For yacht owners, analyze metrics such as time saved in recruitment and quality of hires. This helps users understand the tangible value YATYAP provides.",
  },
  {
    desc: "Enhanced Data Visualization: Offer dashboards for both crew and yacht owners, displaying insights like job history, average hire success, or career progress to aid in better decision-making.",
  },
  {
    desc: "Personalized Recommendations: Implement algorithms tailored to user profiles, previous job activity, and preferences, enabling personalized job suggestions for crew and ideal candidate recommendations for yacht owners.",
  },
];

export const HybridCardSortingList = [
  {
    desc: "Solutions: Organized by industries—Retail, Banking, Social, and E-commerce. Clicking on each reveals relevant projects, which are further clickable for detailed pages.",
  },
  {
    desc: "Expertise: Grouped by core capabilities—Data Science, Data Engineering, Custom Software, Enterprise Solutions, and Big Data, each displaying use cases.",
  },
  {
    desc: "Services: Comprehensive service offerings, including Management IT Counseling, Requirements Engineering, Project Audit, Custom Software Development, Solution Integration, Infrastructure Management, Maintenance and Back Office, and Data Engineering.",
  },
  { desc: "Company: Simplified into About Us and Career pages." },
  { desc: "A “Get in Touch” button was added as a separate, prominent call-to-action for accessibility." },
];

export const SocialListeningList = [
  {
    desc: "Difficulty keeping track of multiple apps and data points.",
  },
  {
desc:"Limited personalization in workout and meal recommendations"
  },
  {
    desc: "Feeling unmotivated or isolated without social accountability"
  }
];

export const SecondSocialListeningList = [
  {
    desc: "Integrated tracking of mood, movement, and nutrition in one platform",
  },
  {
    desc: "Personalized recommendations based on goals, restrictions, and habits"
  },
  {
    desc: "Social motivation through challenges, leaderboards, and friend support"
  }
];

export const LowFidelityWireframesList = [
  {
    desc: "Onboarding & Profile Setup - Quick setup of mood, activity, diet, and restrictions.",
  },
  {
    desc: "Daily Mood & Activity Logging - Easy, one-tap check-ins and activity updates."
  },
  {
    desc: "Movement Challenges & Leaderboards - Browsing, joining, and tracking challenges with friends."
  },
  {
    desc: "Nutrition & Recipe Discovery - Browsing recipes, generating shopping lists, and scanning items for dietary compatibility."
  },
  {
    desc: "Insights & Progress Dashboard - Visual summaries of mood, movement, and nutrition trends."
  },
];

export const DesignSystemList = [
  {
    desc: "Color Palette – Soft, calming tones with vibrant accents to reflect mood and energy",
  },
  {
    desc: "Typography – Clean, readable type for clear hierarchy and quick scanning"
  },
  {
    desc: "Components – Reusable UI elements such as buttons, cards, sliders, and navigation"
  },
  {
    desc: "Iconography – Simple, expressive icons to enhance usability and emotional connection"
  },
  {
    desc: "Interaction Patterns – Defined behaviors for gestures, transitions, and feedback"
  },
];

export const CompetitiveAnalysisList = [
  { desc: "Gain insights into digital product trends" },
  { desc: "Identify the target market and competitors" },
  { desc: "Understand how businesses discover and engage with digital solutions" },
  { desc: "Evaluate common pain points in digital product development" },
];

export const PostLaunchMonitoringList = [
  { desc: "User feedback and app reviews" },
  { desc: "Analytics on drop-off points and feature adoption" },
  { desc: "Behavioral patterns in daily usage and long-term engagement" },
];

export const UserInterviewList = [
  { desc: "Identifying key factors that motivate users to choose HUDU for their job postings or service browsing" },
  { desc: "Discovering pain points users face when posting jobs, browsing through listings, or managing profiles" },
  { desc: "Understanding what makes a seamless, efficient user experience on HUDU" },
  {
    desc: "Evaluating competitors’ strengths and weaknesses from the users' perspective, and how HUDU could differentiate itself",
  },
];

export const HomeRedesignOutcome = [
  { desc: "Enlarged Images significantly enhanced visual engagement and made the homepage more appealing." },
  {
    desc: "Displayed Location Data was clear and helped users quickly find projects relevant to their geographic preferences.",
  },
  {
    desc: "Map Feature was intuitive and highly appreciated, enabling users to explore projects based on location seamlessly.",
  },
  {
    desc: "Filter and Sort Options were effective in reducing the time taken to locate desired projects, improving overall navigation efficiency.",
  },
];

export const ProjectRedesignOutcome = [
  { desc: "Breaking the process into five distinct steps reduced user overwhelm and improved clarity." },
  { desc: "Contextual guidance at each step made the process more intuitive and less intimidating." },
  { desc: "Redesigned input fields improved usability and streamlined the user flow." },
  {
    desc: "The dedicated questions section empowered Listers to make informed decisions, ensuring better Doer matches.",
  },
];

export const ProfileRedesignOutcome = [
  {
    desc: "The new layout, with clearly defined sections, made the profile easier to navigate and visually appealing.",
  },
  {
    desc: "Relevant user information was highlighted, reducing the need for excessive clicking and improving access to key details.",
  },
  { desc: "A prominent banner encouraged background check upgrades, resulting in a 12% increase in upgrades." },
  {
    desc: "The breakdown of information into sections reduced friction, enabling users to find the data they needed quickly and efficiently.",
  },
];

export const ReflectionsList = [
  {
    title: "Adoption of New Features:",
    desc: " While the introduction of features like the map view and the redesigned project listing flow received positive feedback, monitoring long-term engagement is essential to ensure users continue to leverage these tools effectively. For instance, ensuring that users actively utilize the map view and sorting options can validate the redesign’s success.",
  },
  {
    title: "Profile Interactions:",
    desc: " The new profile design aims to make information accessible and visually engaging. However, further analysis is needed to determine how these changes influence decision-making, such as whether the banner for background checks encourages genuine trust-building or simply drives financial gains.",
  },
  {
    title: "User Behavior Trends:",
    desc: " Understanding how users navigate and interact with the app in the long term is crucial. For example, tracking which features see consistent engagement and whether any areas of the app remain underutilized can guide iterative updates.",
  },
  {
    title: "Diverse User Needs:",
    desc: " As HUDU continues to grow, considering the diverse needs of users across regions, professions, and technical proficiency levels will be key. Ensuring inclusivity in design and functionality will help maintain broad user satisfaction.",
  },
];

export const ShopeyeQReflectionsList = [
  {
    title: "The Power of Research & Validation: ",
    desc: "Conducting in-depth user research before design was crucial in validating pain points and ensuring that the final product truly addressed the needs of field sales representatives. By leveraging surveys, interviews, and competitive analysis, we discovered that manual reporting and lack of real-time data access were major inefficiencies, shaping our focus on automation and streamlined workflows.",
  },
  {
    title: "Balancing Functionality & Usability: ",
    desc: "One of the biggest challenges was designing a solution that was feature-rich yet intuitive. Sales representatives often work in fast-paced environments, and their tools must be efficient, not overwhelming. Through iterative wireframing and prototyping, we refined the navigation and interactions to minimize steps, reduce cognitive load, and prioritize critical tasks such as PoS scanning, task assignments, and reporting.",
  },
  {
    title: "Integrating AI & Automation Thoughtfully: ",
    desc: "The integration of AI-powered recommendations and intelligent automation was a game-changer. However, we had to ensure that these features complemented existing workflows rather than adding complexity. Testing high-fidelity prototypes helped us fine-tune how AI-driven insights were presented—keeping them contextual, non-intrusive, and actionable.",
  },
  {
    title: "The Importance of Real-Time Data: ",
    desc: "One of the most valuable insights from our research was the high demand for real-time inventory and sales data. Ensuring that users could access up-to-date information while on the go significantly boosted efficiency and accuracy in decision-making. The CRM and PoS integrations played a critical role in making this possible.",
  },
];

export const ShopeyeQFinalThoughtsList = [
  {
    desc: "Further personalization of AI-driven recommendations",
  },
  {
    desc: "Enhanced offline capabilities for better accessibility",
  },
  {
    desc: "Gamification features to boost engagement and productivity",
  },
];

export const SurveyPercentages = [
  { text: "Find reporting tasks most time-consuming", number: "63%" },
  { text: "satisfaction with current apps in the Market ", number: "42%" },
  { text: "of users find real-time data access crucial", number: "85%" },
];

export const KeyFindingsListShopeyeQ = [
  { desc: "“I waste too much time pulling reports from different sources.” → Need for integrated real-time insights" },
  {
    desc: "“Assigning tasks manually is frustrating.” → Need for a smart, automated assignment system",
  },
  {
    desc: "“We lack visibility into field team performance.” → Need for a clear KPI tracking system",
  },
];

export const KeyDesignListShopeyeQ = [
  { desc: "Simplicity First – Avoid overwhelming users with excessive data. Prioritize clarity." },
  {
    desc: "One-Click Actions – Enable quick task assignments, performance checks, and report generation.",
  },
  {
    desc: "Customizable Insights – Let managers filter and personalize their dashboards.",
  },
  {
    desc: "Mobile-Friendly Design – Ensure access on tablets and mobile devices for on-the-go managers.",
  },
];

export const InformationListShopeyeQ = [
  { desc: "Assignments & Task Manager – Assign, track, and manage field tasks efficiently." },
  { desc: "People & Team – View and manage field representatives, monitor performance, and assign roles." },
  { desc: "Business Intelligence – Real-time data insights, reports, and analytics for strategic decision-making." },
  { desc: "All Products & Portfolio – Manage product listings, track availability, and oversee portfolio performance." },
  { desc: "Onboarding – Guide new users through a structured setup process." },
  { desc: "Competitor Brands – Track competitor activities, analyze market trends, and adjust strategies." },
  { desc: "Promotions – Set up and monitor promotional campaigns and sales activations." },
  { desc: "Point of Sale (POS) – Oversee store performance, inventory status, and sales impact." },
  { desc: "Account Management – Configure user roles, permissions, and system settings." },
];

export const UsabilityTestingShopeyeQ = [
  {desc: 'Evaluate Navigation & Information Hierarchy - Ensure managers could easily find and access essential sections.'},
  {desc: 'Assess Task Assignment & Tracking Flows - Test how intuitively users could assign tasks and monitor team performance.'},
  {desc: 'Measure Data Interpretation & Decision-Making - Observe how managers interacted with KPIs, reports, and insights.'},
  {desc: 'Identify Pain Points & Friction Areas - Detect any usability blockers that slowed down efficiency.'},
];

export const tableDataShopeyeQ = [
  {
    feature: "Zoho CRM",
    strength: "Strong automation, good reporting tools",
    weakness: "Can feel cluttered, steep learning curve",
  },
  {
    feature: "Salesforce",
    strength: "Powerful analytics, customizable dashboards	",
    weakness: "Complex UI, requires extensive setup",
  },
  {
    feature: "Repsly",
    strength: "Excellent field team tracking, mobile-first",
    weakness: "Lacks deep customization for managers",
  },
  {
    feature: "Pepperi",
    strength: "Strong B2B sales automation, omnichannel insights",
    weakness: "UI can feel outdated, limited workflow flexibility",
  },
];


export const TableRowText = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 400,
  fontSize: 18,
  color: "white",
  lineHeight: "23.4px",
  textAlign: "center",
}));

export const TableHeaderText = styled(Typography)(({ theme, prop = "black" }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 700,
  fontSize: 24,
  color: prop,
  lineHeight: "31.2px",
  textAlign: "center",
}));

export const TableColumnText = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 500,
  fontSize: 20,
  color: "white",
  lineHeight: "26px",
}));

export const GridTitle = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 700,
  fontSize: 20,
  color: "#111111",
  lineHeight: "130%",
  letterSpacing:"0%",
   [theme.breakpoints.down("md")]: {
    fontSize: 18,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
}));

export const GridDescription = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 500,
  fontSize: 20,
  color: "#111111",
  lineHeight: "130%",
  letterSpacing:"0%",
  [theme.breakpoints.down("md")]: {
    fontSize: 18,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
}));

export const PrototypeButtonText = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 900,
  fontSize: 24,
  color: "white",
  lineHeight: "24px",
  textTransform: "none",
  textUnderlineOffset: "8px",
  textDecoration: "2px white underline",
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
    fontWeight: 700,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
    fontWeight: 600,
  },
}));

export const YouDooPrototypeButtonText = styled(Typography)(({ theme }) => ({
  fontFamily: `'Satoshi', sans-serif`,
  fontWeight: 900,
  fontSize: 24,
  color: "black",
  lineHeight: "24px",
  textTransform: "none",
  textUnderlineOffset: "8px",
  textDecoration: "2px black underline",
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
    fontWeight: 700,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
    fontWeight: 600,
  },
}));
