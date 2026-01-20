import { HeroSection } from "@/components/HeroSection";
import { AboutUs } from "@/components/AboutUs";
import { OurExpertise } from "@/components/OurExpertise";
import { OurServices } from "@/components/OurServices";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { PanelKlinik } from "@/components/PanelKlinik";
import { FAQ } from "@/components/FAQ";
import { ContactUs } from "@/components/ContactUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <OurExpertise />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      <PanelKlinik />
      <FAQ />
      <ContactUs />
    </main>
  );
}
