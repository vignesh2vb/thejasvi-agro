import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Priya S.", text: "Best quality ghee I've ever used! The aroma is incredible and you can tell it's 100% pure.", rating: 5 },
  { name: "Karthik R.", text: "Fresh paneer and fast delivery. My family loved it. Will definitely order again!", rating: 5 },
  { name: "Lakshmi M.", text: "Pure coconut oil with amazing aroma. Reminds me of my grandmother's homemade oil.", rating: 5 },
  { name: "Suresh V.", text: "The curd is thick and creamy, just like traditional homemade curd. Highly recommend!", rating: 5 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">⭐ What Our Customers Say</h2>
        <p className="section-subtitle">Trusted by hundreds of families across Tamil Nadu</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border p-6 shadow-sm"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground italic">"{r.text}"</p>
              <p className="mt-4 text-sm font-bold text-card-foreground">— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
