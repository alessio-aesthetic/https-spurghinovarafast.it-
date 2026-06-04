"use client";

const items = [
  "Arrivati velocemente, scarico liberato e spiegazione chiara.",
  "Servizio pulito, tecnico preparato, nessuna perdita di tempo.",
  "Videoispezione utile: hanno trovato il punto esatto del problema.",
  "Chiamati di notte per fognatura bloccata, intervento risolto."
];

export function Testimonials() {
  return (
    <section className="overflow-hidden bg-page py-20">
      <div className="flex w-max animate-[marquee_24s_linear_infinite] gap-5 hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, index) => (
          <div key={`${item}-${index}`} className="w-[380px] bg-panel p-7 text-xl font-semibold leading-8 text-text">
            "{item}"
          </div>
        ))}
      </div>
    </section>
  );
}
