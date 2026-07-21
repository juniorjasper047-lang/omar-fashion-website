"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { hero } from "@/lib/content";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src={images.hero}
        alt="A model wearing an Omar Fashion bespoke kaftan"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-background/30" />

      <div className="container-x relative z-10 pb-16 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-5">{hero.eyebrow}</p>
          <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            {hero.title[0]}
            <br />
            <span className="text-gold">{hero.title[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/75">{hero.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} variant="gold">
              {hero.primaryCta.label} <ArrowRight size={16} />
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
