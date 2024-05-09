import {
  AboutSection,
  ContactSection,
  FooterSection,
  MissionSection,
  Navbar,
} from "@/component";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-[#252525] container mx-auto">
      <Navbar />
      <AboutSection />
      <MissionSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
