"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";

const phone = "+393291234567";

export function Header() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(18px)"]);
  const bg = useTransform(scrollY, [0, 80], ["rgba(14,14,14,0)", "rgba(14,14,14,.78)"]);

  return (
    <motion.header
      style={{ backdropFilter: blur, backgroundColor: bg }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link href="/" className="relative h-9 w-48">
          <Image src="/logo.svg" alt="Spurghi Novara Fast" fill priority className="object-contain object-left" />
        </Link>
        <a href={`tel:${phone}`} className="link-line hidden items-center gap-3 text-sm font-bold md:flex">
          <Phone className="h-4 w-4 text-accent" />
          329 123 4567
        </a>
        <a href={`tel:${phone}`} className="flex h-11 w-11 items-center justify-center bg-accent md:hidden">
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </motion.header>
  );
}
