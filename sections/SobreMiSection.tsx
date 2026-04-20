import Image from "next/image";

const checkItems = [
  "Más de 10 años de experiencia en consultoría de imagen",
  "Enfoque integral: personal, empresarial y político",
  "Metodología adaptada a cada cliente y contexto",
  "Resultados medibles en presencia y percepción",
];

export default function SobreMiSection() {
  return (
    <section className="w-full bg-porcelain flex justify-center px-20 pt-20 pb-16">
      <div className="max-w-300 w-full flex items-center gap-20">
        <div className="flex-1 flex flex-col">
          <p className="text-goldenOrange uppercase tracking-[0.25em] text-sm font-normal">
            Sobre mí
          </p>
          <h2 className="text-charcoal text-[48px] font-medium leading-[1.2] mt-4">
            Soy Dani Arena, tu aliada en imagen estratégica
          </h2>
          <p className="text-charcoal opacity-70 font-light text-base mt-6">
            Mi misión es democratizar la asesoría de imagen. No es un lujo
            exclusivo ni algo solo para mujeres interesadas en moda. Es una
            herramienta poderosa para cualquier persona o empresa que quiera
            comunicar mejor quién es y lo que ofrece.
          </p>
          <p className="text-charcoal opacity-70 font-light text-base mt-4">
            Trabajo con un enfoque estratégico donde cada decisión de imagen
            tiene un propósito claro: conectar, persuadir y posicionar.
          </p>
          <ul className="mt-10 flex flex-col gap-5">
            {checkItems.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="text-goldenOrange text-lg leading-none">✓</span>
                <span className="text-charcoal font-light text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-115 h-145 shrink-0">
          <div className="absolute inset-0 top-[10%] rounded-[10px] overflow-hidden">
            <Image
              src="/images/SobreMi/FondoSobreMi.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-16 left-0 right-0 h-[135%]">
            <Image
              src="/images/SobreMi/SobreMi.png"
              alt="Dani Arena"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
