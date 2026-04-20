import SectionText from "@/components/SectionText";

export default function ContactSection() {
  return (
    <div className="bg-white w-full flex items-center justify-center p-20">
      <div className="max-w-300 flex flex-col justify-center items-center">
        <div className="max-w-200 flex flex-col justify-center items-center">
          <p className="text-goldenOrange uppercase font-400 tracking-[0.25em] text-sm text-center">
            Empecemos
          </p>
          <h2 className="text-charcoal font-medium text-[48px] text-center whitespace-pre-line mt-4 text-pretty">
            Tu imagen ya está comunicando.
            <br />
            <br />
            <span className="font-light">
              La diferencia está en si lo hace conscientemente.
            </span>
          </h2>
          <p className="text-charcoal opacity-70 text-center max-w-[80%] mt-6 font-light text-base text-pretty">
            La asesoría de imagen va más allá de la estética. Es estrategia,
            comunicación y la construcción de una presencia que abre puertas.
          </p>
        </div>

        <div className="flex justify-center items-center gap-5 mt-25">
          <a
            className="bg-charcoal text-white rounded-full py-5 px-10 hover:bg-goldenOrange transition-colors w-max mt-12.5"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Coordinar una reunión</button>
          </a>

          <a
            className="bg-[#25D366] text-charcoal rounded-full py-5 px-10 hover:bg-goldenOrange transition-colors w-max mt-12.5"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Escribirme por whatsapp</button>
          </a>
        </div>
      </div>
    </div>
  );
}
