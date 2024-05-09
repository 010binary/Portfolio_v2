import {
  AboutSection,
  FooterSection,
  HeroSection,
  MissionSection,
  Navbar,
  ProjectsSection,
  SkillsSection,
  ContactSection
} from "@/component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#252525] container mx-auto">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
