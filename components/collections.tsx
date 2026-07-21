"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { collections, type Collection } from "@/lib/content";
import { CollectionModal } from "./collection-modal";

export function Collections() {
  const [active, setActive] = useState<Collection | null>(null);

  return (
    <section id="collections" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Collections</p>
          <h2 className="font-serif text-4xl sm:text-5xl">Pieces with presence.</h2>
          <p className="mt-4 text-foreground/70">
            A rotating selection of bespoke and ready-to-wear kaftans. Select a piece to view details
            and begin an inquiry.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <motion.button
              key={c.slug}
              type="button"
              onClick={() => setActive(c)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card-surface group overflow-hidden text-left"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={c.image}
                  alt={`${c.name} — ${c.category} kaftan`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-background/70 px-3 py-1 text-xs text-gold backdrop-blur">
                  {c.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl">{c.name}</h3>
                  <span className="text-sm text-foreground/60">{c.price}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-foreground/65">{c.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-gold">
                  View details <Plus size={14} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <CollectionModal item={active} onClose={() => setActive(null)} />
    </section>
  );
}
