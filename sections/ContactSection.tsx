import { RevealLine, FadeUp } from "@/components/motion";

export default function ContactSection() {
  return (
    <div className="bg-white w-full flex items-center justify-center px-6 md:px-20 py-16 md:py-20">
      <div className="max-w-300 w-full flex flex-col justify-center items-center">
        <div className="w-full md:max-w-200 flex flex-col justify-center items-center">
          <RevealLine
            delay={0.06}
            className="text-goldenOrange uppercase font-400 tracking-[0.25em] text-sm text-center"
          >
            Empecemos
          </RevealLine>

          <h2 className="text-charcoal font-medium text-[32px] md:text-[48px] text-center whitespace-pre-line mt-4 text-pretty">
            <RevealLine delay={0.12}>Tu imagen ya está comunicando.</RevealLine>
            <br />
            <RevealLine delay={0.2} className="font-light">
              La diferencia está en si lo hace conscientemente.
            </RevealLine>
          </h2>

          <FadeUp
            delay={0.32}
            className="text-charcoal opacity-70 text-center mt-6 font-light text-sm md:text-base text-pretty"
          >
            La asesoría de imagen va más allá de la estética. Es estrategia,
            comunicación y la construcción de una presencia que abre puertas.
          </FadeUp>
        </div>

        <FadeUp delay={0.42} className="w-full md:w-auto flex flex-col md:flex-row justify-center items-center gap-4 mt-12">
          <a
            className="bg-charcoal text-white rounded-full py-5 px-10 hover:bg-goldenOrange transition-colors w-full md:w-max text-center text-sm"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coordinar una reunión
          </a>

          <a
            className="bg-[#25D366] text-charcoal rounded-full py-5 px-10 hover:bg-goldenOrange transition-colors w-full md:w-max text-center text-sm"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribirme por whatsapp
          </a>
        </FadeUp>
      </div>
    </div>
  );
}
