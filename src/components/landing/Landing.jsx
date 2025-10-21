import Footer from "../footer";
import { Header } from "../header";
import LandingFirstSlide from "./LandingFirstSlide";
import LatestWork from "./LatestWork";

export function Landing() {
  return (
    <>
      <Header />
      <LandingFirstSlide />
      <LatestWork />
      <Footer />
    </>
  );
}
