import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { CustomCursor } from "@/components/ui/cursor";
import { siteConfig } from "@/lib/data";

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
          <CustomCursor />
          <div className="relative min-h-screen overflow-x-clip">
            <div className="pointer-events-none fixed inset-0 -z-20 opacity-60 dark:opacity-80">
              <div className="soft-grid absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
            </div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
