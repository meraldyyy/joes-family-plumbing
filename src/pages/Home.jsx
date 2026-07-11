
import Navbar from "../components/layout/Navbar";

import Hero from "../components/Hero";
import Brand from "../components/Brand";
import About from "../components/About";
import Stats from "../components/Stats";
import ServiceCategories from "../components/ServiceCategories";
import Service from "../components/Service";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import EmergencyCTA from "../components/EmergencyCTA";
import Contact from "../components/Contact";

import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      
      <Navbar />

      <main>
        <Hero />
        <About />
        <Stats />
        <ServiceCategories />
        <Service />
        <WhyChooseUs />
        <Process />
         <Brand />
        
        <Testimonials />
        <Faq />
        <EmergencyCTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}