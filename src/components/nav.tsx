"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/product", label: "Product" },
  { href: "/data", label: "Data" },
  { href: "/garmin", label: "Garmin" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottom: "1px solid var(--color-border)",
        background: "color-mix(in srgb, var(--color-background) 90%, transparent)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground text-sm"
        >
          Velora
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm bg-accent text-white px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity font-medium"
          >
            Get access
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{ borderTop: "1px solid var(--color-border)" }}
          className="md:hidden bg-background"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-6 py-3.5 text-sm text-muted hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href="/contact"
              className="block text-sm bg-accent text-white px-4 py-2.5 rounded-full text-center font-medium"
              onClick={() => setOpen(false)}
            >
              Get access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
