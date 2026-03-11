import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { siteConfig } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <Container>
        <div className="glass-panel flex flex-col items-start justify-between gap-6 rounded-[32px] px-6 py-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl font-semibold">{siteConfig.name}</p>
            <p className="mt-2 max-w-xl text-sm text-muted">
              AI engineer focused on RAG systems, evaluation rigor, and full-stack delivery.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <Badge>{siteConfig.status}</Badge>
            <div className="flex items-center gap-3">
              <Link aria-label="GitHub" href={siteConfig.github} target="_blank" className="glass-panel rounded-full p-3 text-muted transition-colors hover:text-text">
                <Github className="h-4 w-4" />
              </Link>
              <Link aria-label="LinkedIn" href={siteConfig.linkedin} target="_blank" className="glass-panel rounded-full p-3 text-muted transition-colors hover:text-text">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link aria-label="Email" href={`mailto:${siteConfig.email}`} className="glass-panel rounded-full p-3 text-muted transition-colors hover:text-text">
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
