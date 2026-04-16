import FraseSection from "@/sections/FraseSection";
import GaleriaSection from "@/sections/GaleriaSection";
import ParaQuienSection from "@/sections/ParaQuienSection";
import ProgramasSection from "@/sections/ProgramasSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-porcelain">
      <ParaQuienSection />
      <ProgramasSection />
      <FraseSection />
      <GaleriaSection />
    </div>
  );
}
