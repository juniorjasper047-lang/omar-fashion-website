"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { craft } from "@/lib/content";

export function Process() {
  return (
    <section id="craft" className="bg-muted/30 py-20 sm:py-28">
      <div className="container-x">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">The Craft</p>
          <h2 className="font-serif text-4xl sm:text-5xl">From cloth to heirloom.</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {craft.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-surface overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image src={s.image} alt={s.title} fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover" />
              </div>
              <div className="p-5">
                <span className="font-serif text-2xl text-gold">{s.step}</span>
                <h3 className="mt-1 font-serif text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/65">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
