import AboutHeader from "../components/about/AboutHeader";
import AboutBioCard from "../components/about/AboutBioCard";
import AboutSkillsCard from "../components/about/AboutSkillsCard";
import AboutExperienceCard from "../components/about/AboutExperienceCard";
import AboutCTASection from "../components/about/AboutCTASection";
import AboutEducation from "../components/about/AboutEducation";

import Watermark from "../components/Watermark";

export default function About() {
  return (
    <div className="container mx-auto px-2 py-4 mb-10">
      <Watermark />
      <div className="max-w-5xl mx-auto space-y-12">
        <AboutHeader />
        <AboutBioCard />
        <AboutSkillsCard />
        <AboutExperienceCard />
        <AboutEducation />
        <AboutCTASection />

      </div>
    </div>
  );
}
