import { Logo } from "./logo";
import { brand, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo className="text-foreground" />
          <p className="mt-4 max-w-xs text-sm text-foreground/60">
            {brand.tagline} Crafted in {brand.location}.
          </p>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition hover:text-gold">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <a href={`mailto:${brand.email}`} className="transition hover:text-gold">
                {brand.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-x flex flex-wrap items-center justify-between gap-2 border-t border-border py-6 text-xs text-foreground/40">
        <span>© {new Date().getFullYear()} Omar Fashion. All rights reserved.</span>
        <span>Made in Accra.</span>
      </div>
    </footer>
  );
}
