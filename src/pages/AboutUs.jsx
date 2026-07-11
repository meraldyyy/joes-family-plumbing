import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutTimeline from "../components/about/AboutTimeline";
import AboutValues from "../components/about/AboutValues";
import AboutTeam from "../components/about/AboutTeam";

import Stats from "../components/Stats"; // sesuaikan path component CTA lu

export default function About() {
  return (
    <>
      <Navbar />

      <AboutHero />
      <AboutStory />
      <Stats/>
      <AboutTimeline />
      <AboutValues />
      <AboutTeam />

      <Footer />
    </>
  );
}