import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/images/logo.jpg"
        alt="Omar Fashion"
        width={707}
        height={707}
        priority
        className="h-9 w-9 rounded-full border border-gold/40 object-cover shadow-[0_0_0_1px_rgb(197_164_110_/_0.15)]"
      />
      <span className="font-serif text-lg font-semibold tracking-wide">
        OMAR<span className="text-gold">FASHION</span>
      </span>
    </span>
  );
}
