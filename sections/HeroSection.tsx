export default function HeroSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center px-20 pt-20 pb-0"
      style={{ background: "linear-gradient(to bottom, white 72%, #fbf9f6 72%)" }}
    >
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
          <video
            className="w-full h-full object-cover"
            controls
            playsInline
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
