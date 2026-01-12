import { HeroSection } from "@/components/HeroSection";
import { OurServices } from "@/components/OurServices";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { PanelKlinik } from "@/components/PanelKlinik";
import { ContactUs } from "@/components/ContactUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      <PanelKlinik />
      <ContactUs />
    </main>
  );
}
