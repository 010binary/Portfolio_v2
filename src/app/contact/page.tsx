import { ContactSection, FooterSection, Navbar } from "@/component";

export default function contact() {
  return (
    <main className="flex min-h-screen flex-col bg-[#252525] container mx-auto">
      <Navbar />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
