import {
  ContactSection,
  FooterSection,
  Navbar,
  ProjectsSection,
} from "@/component";

export default function project() {
  return (
    <main className="flex min-h-screen flex-col bg-[#252525] container mx-auto">
      <Navbar />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
