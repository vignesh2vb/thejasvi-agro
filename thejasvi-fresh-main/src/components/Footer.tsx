import { Phone, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-background" style={{ fontFamily: "var(--font-heading)" }}>
              🌿 Thejasvi Agro Products
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-background/60">
              Pure, fresh, and natural dairy & coconut products delivered from our farms to your home.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-background/50">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-background/50">Contact</h4>
            <div className="mt-3 space-y-3">
              <a href="tel:+919786622633" className="flex items-center gap-2 text-sm text-background/70 hover:text-background">
                <Phone className="h-4 w-4" /> +91 9786622633
              </a>
              <a
                href="https://wa.me/919786622633"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-background/10 pt-6 text-center text-sm text-background/40">
          © {new Date().getFullYear()} Thejasvi Agro Products. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
