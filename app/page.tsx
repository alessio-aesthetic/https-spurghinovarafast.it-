"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useInView } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowRight,
  Check,
  Clock,
  Droplets,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Star,
  Wrench
} from "lucide-react";

const phone = "3291234567";
const whatsapp = "https://wa.me/393291234567";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 }
};

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest))
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.div ref={ref} {...fadeUp}>
      <motion.span
        className="text-6xl font-black tracking-[-0.06em] text-white lg:text-7xl"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        {display}
      </motion.span>
      <span className="ml-2 text-4xl font-black text-[#0066FF]">{suffix}</span>
    </motion.div>
  );
}

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  const services = [
    {
      icon: Droplets,
      title: "Spurghi civili",
      text: "Interventi rapidi su scarichi domestici, cortili, pozzetti e fosse biologiche a Novara."
    },
    {
      icon: Wrench,
      title: "Disotturazione tubi",
      text: "Sonde professionali per liberare tubazioni ostruite, colonne condominiali e scarichi lenti."
    },
    {
      icon: Search,
      title: "Videoispezioni",
      text: "Controllo interno delle condotte per individuare rotture, radici, depositi e blocchi ricorrenti."
    },
    {
      icon: Clock,
      title: "Pronto intervento 24H",
      text: "Squadra disponibile giorno e notte per urgenze su fognature, rigurgiti e allagamenti."
    },
    {
      icon: ShieldCheck,
      title: "Fosse biologiche",
      text: "Svuotamento, aspirazione e lavaggio di fosse, pozzi neri e vasche di raccolta."
    },
    {
      icon: MapPin,
      title: "Provincia di Novara",
      text: "Servizi a Novara, Trecate, Galliate, Cameri, Romentino, Oleggio e comuni vicini."
    }
  ];

  const why = [
    "Arrivo rapido in zona Novara e provincia",
    "Mezzi moderni per spurgo e aspirazione",
    "Tecnici specializzati in scarichi e fognature",
    "Preventivi chiari prima dell'intervento"
  ];

  const testimonials = [
    {
      name: "Marco R.",
      text: "Chiamati per scarico completamente bloccato. Arrivati velocemente e problema risolto senza sporcare."
    },
    {
      name: "Amministratore condominio",
      text: "Intervento ordinato su colonna condominiale. Comunicazione chiara e tempi rispettati."
    },
    {
      name: "Laura P.",
      text: "La videoispezione ha trovato subito il punto del problema. Servizio serio e molto disponibile."
    }
  ];

  return (
    <main className="bg-[#0E0E0E] font-sans text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0E0E0E]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#" className="text-lg font-black tracking-[-0.03em] text-white">
            Spurghi Novara Fast
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/70 md:flex">
            <a href="#servizi" className="transition hover:text-white">
              Servizi
            </a>
            <a href="#numeri" className="transition hover:text-white">
              Numeri
            </a>
            <a href="#recensioni" className="transition hover:text-white">
              Recensioni
            </a>
            <a href="#contatti" className="transition hover:text-white">
              Contatti
            </a>
          </nav>
          <a
            href={`tel:${phone}`}
            className="hidden items-center gap-2 rounded-full bg-[#0066FF] px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.03] md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Chiama 24H
          </a>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <section className="relative flex h-screen min-h-[760px] items-end overflow-hidden px-5 pb-14 pt-28 lg:px-8 lg:pb-20">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/video/poster.jpg"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0E0E0E]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(0,102,255,.25),transparent_28%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">
          <motion.div className="lg:col-span-9" {...fadeUp}>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.28em] text-[#0066FF]">
              Pronto intervento spurghi Novara
            </p>
            <h1 className="max-w-6xl text-5xl font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              SPURGHI NOVARA 24 ORE SU 24
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Autospurgo, disotturazione tubi, pulizia fosse biologiche e pronto intervento fognature a Novara con
              arrivo rapido e assistenza continua.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0066FF] px-7 py-4 font-bold text-white transition hover:translate-y-[-2px]"
              >
                <Phone className="h-5 w-5" />
                Chiama 329 123 4567
              </a>
              <a
                href={whatsapp}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:border-[#0066FF] hover:text-[#0066FF]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111] px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/70">
            Scelti da 5000+ clienti a Novara
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {["Condomini", "Aziende", "Ristoranti", "Privati"].map((logo) => (
              <div
                key={logo}
                className="flex h-14 min-w-[150px] items-center justify-center border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-[0.2em] text-white/40"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="numeri" className="bg-[#0E0E0E] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Counter value={15} suffix="ANNI" />
            <p className="mt-4 text-white/60">Esperienza su spurghi, fosse biologiche e fognature.</p>
          </div>
          <div>
            <Counter value={30} suffix="MIN" />
            <p className="mt-4 text-white/60">Tempo medio stimato per interventi urgenti in zona.</p>
          </div>
          <div>
            <Counter value={24} suffix="/7" />
            <p className="mt-4 text-white/60">Disponibilita' per emergenze giorno e notte.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#0E0E0E] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#0066FF]">Urgenze scarichi</p>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white lg:text-6xl">
              Disotturazioni urgenti a Novara
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              Quando uno scarico si blocca, l'acqua risale o una colonna condominiale non defluisce, serve un
              intervento rapido e preciso. Spurghi Novara Fast opera su bagni, cucine, cortili, pozzetti e reti
              fognarie private con attrezzature professionali per liberare tubazioni ostruite e ridurre il rischio di
              nuovi blocchi.
            </p>
            <a
              href={`tel:${phone}`}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0066FF] px-7 py-4 font-bold text-white"
            >
              Richiedi intervento
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
          <motion.div className="relative h-[460px] overflow-hidden" {...fadeUp}>
            <Image src="/images/tecnico.webp" alt="Tecnico con sonda per disotturazione tubi" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0E0E0E] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div className="relative h-[460px] overflow-hidden lg:order-1" {...fadeUp}>
            <Image src="/images/videoispezione.webp" alt="Monitor videoispezione tubo" fill className="object-cover" />
          </motion.div>
          <motion.div className="lg:order-2" {...fadeUp}>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#0066FF]">Diagnosi tubazioni</p>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white lg:text-6xl">Videoispezioni</h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              La videoispezione consente di individuare rotture, radici, depositi, schiacciamenti e tratti ostruiti
              senza procedere alla cieca. E' la soluzione ideale quando un problema si ripete, quando serve una diagnosi
              prima di un lavoro o quando bisogna documentare lo stato delle condotte.
            </p>
            <a
              href={whatsapp}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#0066FF] px-7 py-4 font-bold text-[#0066FF]"
            >
              Prenota verifica
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="servizi" className="bg-[#0E0E0E] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div className="max-w-3xl" {...fadeUp}>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#0066FF]">Servizi</p>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white lg:text-6xl">
              Soluzioni complete per scarichi e fognature.
            </h2>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  className="border border-[#2A2A2A] bg-[#1C1C1C] p-7 transition hover:-translate-y-2"
                  {...fadeUp}
                >
                  <Icon className="h-7 w-7 text-[#0066FF]" />
                  <h3 className="mt-7 text-2xl font-black tracking-[-0.03em] text-white">{service.title}</h3>
                  <p className="mt-4 leading-7 text-white/60">{service.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0E0E0E] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#0066FF]">Perche' noi</p>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white lg:text-6xl">
              Interventi veloci, chiari, risolutivi.
            </h2>
          </motion.div>
          <div className="grid gap-5">
            {why.map((item) => (
              <motion.div key={item} className="flex gap-4 border-t border-white/10 pt-5" {...fadeUp}>
                <Check className="mt-1 h-6 w-6 shrink-0 text-[#0066FF]" />
                <p className="text-xl font-bold text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="recensioni" className="bg-[#111] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2 className="text-4xl font-black tracking-[-0.04em] text-white lg:text-6xl" {...fadeUp}>
            Recensioni clienti
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <motion.article key={item.name} className="border border-white/10 bg-[#1C1C1C] p-7" {...fadeUp}>
                <div className="flex gap-1 text-[#0066FF]">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-[#0066FF]" />
                  ))}
                </div>
                <p className="mt-7 text-lg leading-8 text-white/75">"{item.text}"</p>
                <p className="mt-6 font-bold text-white">{item.name}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="bg-[#0066FF] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div className="lg:col-span-8" {...fadeUp}>
            <h2 className="text-5xl font-black leading-[0.96] tracking-[-0.06em] lg:text-8xl">
              Hai bisogno di spurghi a Novara ora?
            </h2>
          </motion.div>
          <motion.div className="lg:col-span-4" {...fadeUp}>
            <a
              href={`tel:${phone}`}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-5 font-black text-[#0066FF]"
            >
              Chiama 24H
              <Phone className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#0E0E0E] px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 text-white/65 md:grid-cols-4">
          <div>
            <p className="text-xl font-black text-white">Spurghi Novara Fast</p>
            <p className="mt-4 leading-7">
              Via Esempio 1<br />
              28100 Novara NO<br />
              Tel. 329 123 4567<br />
              info@spurghinovarafast.it
            </p>
          </div>
          <div>
            <p className="font-bold text-white">Servizi</p>
            <ul className="mt-4 space-y-2">
              <li>Spurghi Novara</li>
              <li>Autospurgo</li>
              <li>Disotturazione tubi</li>
              <li>Videoispezione</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">Zone</p>
            <ul className="mt-4 space-y-2">
              <li>Novara</li>
              <li>Trecate</li>
              <li>Galliate</li>
              <li>Cameri</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">Dati aziendali</p>
            <p className="mt-4 leading-7">
              P.IVA 00000000000<br />
              Pronto intervento 24H<br />
              WhatsApp 329 123 4567
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
