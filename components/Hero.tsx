"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";

const words = "Spurghi Novara - Pronto Intervento 24H".split(" ");

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-page px-5 pb-12 pt-28 lg:px-8 lg:pb-20">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        autoPlay
        muted
        loop
        playsInline
        poster="/video/poster.jpg"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-page via-page/76 to-page/30" />
      <div className="soft-grid absolute inset-0 opacity-50" />

      <div className="container-grid relative z-10 mx-auto max-w-7xl gap-y-10">
        <div className="col-span-12 lg:col-span-9">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Autospurgo Novara Fast
          </p>
          <h1 className="max-w-6xl text-5xl font-black leading-[0.96] tracking-[-0.06em] text-text sm:text-7xl lg:text-8xl">
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="mr-4 inline-block"
                initial={{ y: 42, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="mt-8 max-w-2xl text-lg leading-8 text-muted"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Spurghi Novara Fast interviene su scarichi bloccati, fognature, fosse biologiche e videoispezioni con
            arrivo rapido, mezzi moderni e disponibilita' 24 ore.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <a
              href="tel:+393291234567"
              className="group inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 font-bold text-white transition hover:translate-y-[-2px] hover:shadow-glow"
            >
              <Phone className="h-5 w-5" />
              Chiama ora
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="https://wa.me/393291234567"
              className="inline-flex items-center justify-center gap-3 border border-white/20 px-7 py-4 font-bold text-white transition hover:border-accent hover:text-accent"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </motion.div>
        </div>
        <motion.div
          className="col-span-12 border-l border-accent pl-6 lg:col-span-3 lg:self-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.26em] text-muted">Tempo medio stimato</p>
          <p className="mt-3 text-6xl font-black text-text">30'</p>
        </motion.div>
      </div>
    </section>
  );
}
