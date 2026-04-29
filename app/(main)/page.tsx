import FraseSection from "@/sections/FraseSection";
import HeroSection from "@/sections/HeroSection";
import QueHagoSection from "@/sections/QueHagoSection";
import ServiciosSection from "@/sections/ServiciosSection";
import SobreMiSection from "@/sections/SobreMiSection";
import ParaQuienSection from "@/sections/ParaQuienSection";
import ProgramasSection from "@/sections/ProgramasSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import GaleriaSectionWrapper from "@/sections/GaleriaSectionWrapper";
import TestimoniosSectionWrapper from "@/sections/TestimoniosSectionWrapper";
import TrayectoriaSectionWrapper from "@/sections/TrajectoriaSectionWrapper";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-porcelain">
      <HeroSection />
      <SobreMiSection />
      <QueHagoSection />
      <ParaQuienSection />
      <ProgramasSection />
      <ServiciosSection />
      <FraseSection />
      <GaleriaSectionWrapper />
      <TestimoniosSectionWrapper />
      <TrayectoriaSectionWrapper />
      <ContactSection />
      <Footer />
    </div>
  );
}
