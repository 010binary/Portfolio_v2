import {
  ContactSection,
  FooterSection,
  Navbar,
  SkillsSection,
} from "@/component";

export default function Skills() {
  return (
    <main className="flex min-h-screen flex-col bg-[#252525] container mx-auto">
      <Navbar />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
