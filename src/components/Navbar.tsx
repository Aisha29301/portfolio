"use client";
import { useState, useEffect } from "react";

const LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience"  },
  { label: "Projects",   href: "#projects"    },
  { label: "Skills",     href: "#skills"      },
  { label: "Contact",    href: "#contact"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#hero" className="f-serif text-xl font-black tracking-tight text-hi hover:text-gold transition-colors">
          AL<span className="text-gold">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a key={l.href} href={l.href}
               className="nl f-sans text-sm text-mid hover:text-hi transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="mailto:aishwaryaplokhande@gmail.com"
           className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded border border-gold/30 text-gold text-sm f-sans hover:bg-gold/8 transition-all">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" style={{ animation:"slowPulse 2s infinite" }} />
          Open to work
        </a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-mid" aria-label="Toggle menu">
          <span className="flex flex-col gap-1.5 w-5">
            <span className={`h-px bg-current transition-all ${open ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`h-px bg-current ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-current transition-all ${open ? "-rotate-45 -translate-y-0.5" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-5 flex flex-col gap-4">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               className="f-sans text-sm text-mid hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
