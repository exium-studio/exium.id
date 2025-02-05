import HeroHome from "@/pages/section/HeroHome";
import CContainer from "@/components/ui-custom/CContainer";
import ServicesHome from "./section/ServicesHome";
import AboutUsHome from "./section/AboutUsHome";
import WorksHome from "./section/WorksHome";
import TheWayWeWork from "./section/TheWayWeWork";
import ClientStory from "./section/ClientStory";
import Footer from "./section/Footer";
import useScrollToTop from "@/hooks/useScrollToTop";

const RootPage = () => {
  useScrollToTop();

  return (
    <CContainer>
      <HeroHome />
      <WorksHome />
      <AboutUsHome />
      <ServicesHome />
      <TheWayWeWork />
      <ClientStory />
      <Footer />
    </CContainer>
  );
};

export default RootPage;
