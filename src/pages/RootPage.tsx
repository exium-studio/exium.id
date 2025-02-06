import HeroHome from "@/pages/section/HeroHome";
import CContainer from "@/components/ui-custom/CContainer";
import ServicesHome from "./section/ServicesHome";
import AboutUsHome from "./section/AboutUsHome";
import WorksHome from "./section/WorksHome";
import TheWayWeWork from "./section/TheWayWeWork";
import ClientStory from "./section/ClientStory";
import Footer from "./section/Footer";
import useScrollToTop from "@/hooks/useScrollToTop";
import WAWidget from "@/components/widget/WAWidget";
import StatsHome from "./section/StatsHome";

const RootPage = () => {
  useScrollToTop();

  return (
    <CContainer>
      <HeroHome />
      <StatsHome />
      <WorksHome />
      <AboutUsHome />
      <ServicesHome />
      <TheWayWeWork />
      <ClientStory />
      <Footer />

      <WAWidget />
    </CContainer>
  );
};

export default RootPage;
