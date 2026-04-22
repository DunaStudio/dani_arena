import { RevealLine } from "@/components/motion";

export default function FraseSection() {
  return (
    <div className="bg-porcelain w-full p-20 flex justify-center items-center">
      <div className="max-w-300">
        <RevealLine
          delay={0.08}
          className="text-center text-charcoal text-[80px] font-normal leading-[1.2]"
        >
          Antes de hablar, <br />
        </RevealLine>
        <RevealLine
          delay={0.16}
          className="text-center text-charcoal text-[80px] font-normal leading-[1.2]"
        >
          tu imagen
        </RevealLine>
        <RevealLine
          delay={0.24}
          className="text-center text-charcoal text-[80px] font-normal leading-[1.2]"
        >
          {" "}
          ya dijo algo.
        </RevealLine>
      </div>
    </div>
  );
}
