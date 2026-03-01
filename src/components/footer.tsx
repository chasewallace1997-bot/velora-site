import Link from "next/link";

const nav = [
  { label: "Product", href: "/product" },
  { label: "Data", href: "/data" },
  { label: "Garmin", href: "/garmin" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
];

export default function Footer() {
  return (
    <footer
      className="mt-32"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="font-semibold text-foreground mb-2 text-sm">
            Velora Labs
          </div>
          <p className="text-sm text-muted leading-relaxed max-w-xs">
            AI-native endurance training OS. Built for athletes who train
            seriously.
          </p>
          <p className="text-xs text-muted mt-5">contact@veloralabs.io</p>
        </div>

        <div>
          <div className="text-xs font-medium text-muted uppercase tracking-widest mb-5">
            Navigation
          </div>
          <ul className="space-y-2.5">
            {nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-medium text-muted uppercase tracking-widest mb-5">
            Legal
          </div>
          <ul className="space-y-2.5">
            {legal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted mt-10">
            © {new Date().getFullYear()} Velora Labs
          </p>
        </div>
      </div>
    </footer>
  );
}
