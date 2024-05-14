import {
  AboutSection,
  FooterSection,
  HeroSection,
  Navbar,
  ProjectsSection,
  SkillsSection,
  ContactSection,
} from "@/component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-8 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <FooterSection />
    </main>
  );
}
