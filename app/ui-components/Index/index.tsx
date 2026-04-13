import About from "./About/page";
import Banner from "./Banner/page";
import Expertise from "./Expertise/page";
import FAQ from "./Faq/page";
import Hero from "./Hero/page";
import Paralex from "./Paralex/page";
import PricingPlans from "./PricingPlans/page";
import Services from "./Services/page";
import Testimonial from "./Testimonial/page";

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Paralex />
      <Services />
      <Expertise />
      <PricingPlans />
      <Testimonial />
      <FAQ />
      <Banner />
    </>
  );
};

export default Index;
