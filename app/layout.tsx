import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { brand } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Omar Fashion | Premium Kaftan Tailoring in Ghana",
  description:
    "Omar Fashion crafts bespoke and ready-to-wear premium kaftans in Accra — where Ghanaian heritage meets a modern, refined silhouette.",
  openGraph: {
    title: "Omar Fashion | Premium Kaftan Tailoring in Ghana",
    description: "Bespoke and ready-to-wear premium kaftans, hand-cut and finished in Accra.",
    images: [images.hero],
    type: "website",
    locale: "en_GH",
    siteName: "Omar Fashion",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Fashion | Premium Kaftan Tailoring in Ghana",
    description: "Bespoke and ready-to-wear premium kaftans, hand-cut and finished in Accra.",
    images: [images.hero],
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0E10",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppCTA />
          <Toaster theme="dark" position="top-center" richColors />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
