export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-20 pt-20 pb-0 bg-white">
      <div className="max-w-300 w-full flex flex-col items-center">
        <p className="text-goldenOrange uppercase tracking-[0.25em] text-sm font-normal">
          Consultoría de imagen integral
        </p>
        <h1 className="text-charcoal text-[60px] font-medium text-center leading-[1.15] mt-4 max-w-200">
          Tu imagen es tu mejor herramienta estratégica
        </h1>
        <p className="text-charcoal opacity-70 text-center text-base font-light mt-6 max-w-130">
          Asesoría de imagen para profesionales, empresas y campañas políticas.
          Porque la imagen no es solo estética, es comunicación, presencia y
          estrategia.
        </p>

        <div className="w-full mt-14 rounded-[10px] overflow-hidden aspect-video">
          <iframe
            src="https://player.vimeo.com/video/1184397731?title=0&byline=0&portrait=0&dnt=1"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
