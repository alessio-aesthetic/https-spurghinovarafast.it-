"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-accent px-5 py-24 text-white lg:px-8">
      <div className="container-grid mx-auto max-w-7xl gap-y-8">
        <div className="col-span-12 lg:col-span-8">
          <motion.h2
            className="text-5xl font-black leading-[0.95] tracking-[-0.06em] lg:text-8xl"
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Scarico bloccato a Novara?
          </motion.h2>
        </div>
        <div className="col-span-12 flex flex-col gap-3 lg:col-span-4 lg:self-end">
          <a href="tel:+393291234567" className="inline-flex items-center justify-center gap-3 bg-white px-7 py-4 font-bold text-accent">
            <Phone className="h-5 w-5" />
            Chiama 329 123 4567
          </a>
          <a href="https://wa.me/393291234567" className="inline-flex items-center justify-center gap-3 border border-white px-7 py-4 font-bold text-white">
            <MessageCircle className="h-5 w-5" />
            Scrivi su WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
