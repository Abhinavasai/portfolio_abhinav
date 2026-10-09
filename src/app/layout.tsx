import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/lib/data";
import { ScrollProgress } from "@/components/ui/motion";
import { AmbientScene } from "@/components/ui/ambient-scene";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhinavasai.github.io"),
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} font-sans text-text antialiased`}>
        <ThemeProvider>
          <ScrollProgress />
          <a href="#main" className="skip-link">Skip to content</a>
          <div className="site-shell relative min-h-screen overflow-x-clip">
            <AmbientScene />
            <div className="pointer-events-none fixed inset-0 -z-20 opacity-60 dark:opacity-80">
              <div className="soft-grid absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
            </div>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
