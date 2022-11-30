import Faq from "./Faq";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import Pricing from "./Pricing";
import Contact from "./Contact";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};
