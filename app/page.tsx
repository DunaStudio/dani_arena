import FraseSection from "@/sections/FraseSection";
import GaleriaSection from "@/sections/GaleriaSection";
import HeroSection from "@/sections/HeroSection";
import QueHagoSection from "@/sections/QueHagoSection";
import ServiciosSection from "@/sections/ServiciosSection";
import SobreMiSection from "@/sections/SobreMiSection";
import ParaQuienSection from "@/sections/ParaQuienSection";
import ProgramasSection from "@/sections/ProgramasSection";
import TestimoniosSection from "@/sections/TestimoniosSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-porcelain">
      <HeroSection />
      <SobreMiSection />
      <QueHagoSection />
      <ServiciosSection />
      <ParaQuienSection />
      <ProgramasSection />
      <FraseSection />
      <GaleriaSection />
      <TestimoniosSection />
    </div>
  );
}
