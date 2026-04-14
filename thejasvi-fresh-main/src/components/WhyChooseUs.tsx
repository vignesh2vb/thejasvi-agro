import { motion } from "framer-motion";
import { Leaf, Tractor, ShieldCheck, Sparkles, IndianRupee } from "lucide-react";

const reasons = [
  { icon: Leaf, title: "100% Natural & Fresh", desc: "No artificial additives or chemicals in any product." },
  { icon: Tractor, title: "Direct from Farm", desc: "Products sourced directly from our own farms." },
  { icon: ShieldCheck, title: "No Preservatives", desc: "Pure and preservative-free, the way nature intended." },
  { icon: Sparkles, title: "Hygienic Processing", desc: "Processed in clean, sanitized facilities." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium quality at farmer-friendly prices." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">🌱 Why Choose Us</h2>
        <p className="section-subtitle">We are committed to quality, purity, and freshness</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center rounded-2xl bg-card border border-border p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <r.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-bold text-card-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
