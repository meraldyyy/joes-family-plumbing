import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import EmergencyHero from "../components/emergency/EmergencyHero";
import EmergencyIssues from "../components/emergency/EmergencyIssue";
import EmergencyTimeline from "../components/emergency/EmergencyTimeline";
import EmergencyFaq from "../components/emergency/EmergencyFaq";
import EmergencyCTA from "../components/emergency/EmergencyCTA";

export default function Emergency() {
  return (
    <>
      <Navbar />

      <main>
        <EmergencyHero />
        <EmergencyIssues />
        <EmergencyTimeline />
        <EmergencyFaq />
        <EmergencyCTA />
      </main>

      <Footer />
    </>
  );
}