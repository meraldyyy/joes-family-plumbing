import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ResidentialHero from "../components/residential/ResidentialHero";
import ResidentialServices from "../components/residential/ResidentialServices";
import ResidentialBenefits from "../components/residential/ResidentialBenefits";

import EmergencyCTA from "../components/EmergencyCTA";

export default function Residential() {
  return (
    <>
      <Navbar />

      <main>
        <ResidentialHero />
        <ResidentialServices />
        <ResidentialBenefits />
        <EmergencyCTA />
      </main>

      <Footer />
    </>
  );
}