"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Spurghi a Novara",
    text: "Interventi rapidi su pozzetti, fosse biologiche, reti condominiali e scarichi in emergenza.",
    image: "/images/hero-bw.webp"
  },
  {
    title: "Disotturazione tubi",
    text: "Sonde professionali per liberare scarichi lenti, colonne bloccate e tubazioni esterne.",
    image: "/images/tecnico.webp"
  },
  {
    title: "Videoispezione",
    text: "Analisi delle tubazioni per individuare rotture, radici, depositi e ostruzioni ricorrenti.",
    image: "/images/videoispezione.webp"
  }
];

export function Services() {
  return (
    <section className="bg-page px-5 py-24 lg:px-8">
      <div className="container-grid mx-auto max-w-7xl gap-y-10">
        <div className="col-span-12 lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Servizi</p>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-text lg:text-6xl">
            Tutto cio' che serve quando uno scarico si ferma.
          </h2>
        </div>
        <div className="col-span-12 grid grid-cols-1 gap-5 lg:col-span-12 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="group bg-panel"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.12, duration: 0.55 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-accent/0 transition duration-500 group-hover:bg-accent/20" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black tracking-[-0.03em] transition group-hover:translate-x-2">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-muted">{service.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
