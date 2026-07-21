import { MessageCircle } from "lucide-react";
import { brand } from "@/lib/content";

export function WhatsAppCTA() {
  const href = `https://wa.me/${brand.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    brand.waMessage,
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
