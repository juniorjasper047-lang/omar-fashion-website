"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import type { Collection } from "@/lib/content";
import { Button } from "./ui/button";

export function CollectionModal({
  item,
  onClose,
}: {
  item: Collection | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (item) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={item.name}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            className="relative z-10 grid max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2"
          >
            <div className="relative min-h-[300px]">
              <Image src={item.image} alt={`${item.name} — ${item.category}`} fill className="object-cover" />
            </div>
            <div className="overflow-y-auto p-7">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 text-foreground/60 transition hover:text-gold"
              >
                <X size={20} />
              </button>
              <p className="eyebrow">{item.category}</p>
              <h3 className="mt-2 font-serif text-3xl">{item.name}</h3>
              <p className="mt-1 text-sm text-foreground/60">
                {item.fabric} · {item.price}
              </p>
              <p className="mt-5 leading-relaxed text-foreground/75">{item.description}</p>
              <Button href="#consultation" variant="gold" className="mt-7" onClick={onClose}>
                Inquire about this piece <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
