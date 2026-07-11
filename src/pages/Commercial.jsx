import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CommercialHero from "../components/commercial/CommercialHero";
import CommercialServices from "../components/commercial/CommercialServices";
import CommercialStats from "../components/commercial/CommercialStats";
import CommercialMaintenance from "../components/commercial/CommercialMaintenance";
import EmergencyCTA from "../components/EmergencyCTA";

export default function Commercial() {
  return (
    <>
      <Navbar />

      <main>
        <CommercialHero />
        <CommercialServices />
        <CommercialStats />
        <CommercialMaintenance />
        <EmergencyCTA />
      </main>

      <Footer />
    </>
  );
}