import { Landing } from "@/components/landing/Landing";
import Layout from "@/layouts";

const HomePage = () => {
    return <Landing />;
};

HomePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default HomePage;
