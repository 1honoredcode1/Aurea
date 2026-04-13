import About from "./About/page";
import Banner from "./Banner/page";
import Blog from "./Blog/page";
import Expertise from "./Expertise/page";
import FAQ from "./Faq/page";
import Hero from "./Hero/page";
import Newsletter from "./Newsletter/page";
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
      <Blog />
      <Newsletter />
    </>
  );
};

export default Index;
