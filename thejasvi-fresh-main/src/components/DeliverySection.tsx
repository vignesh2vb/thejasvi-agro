import { motion } from "framer-motion";
import { Truck, Package, MapPin } from "lucide-react";

const features = [
  { icon: Truck, title: "Fast & Safe Delivery", desc: "We ensure your products reach fresh and on time." },
  { icon: Package, title: "Courier Included", desc: "Selected products include free courier delivery." },
  { icon: MapPin, title: "Pan India Delivery", desc: "Serving across Tamil Nadu and all over India." },
];

export default function DeliverySection() {
  return (
    <section id="delivery" className="section-padding bg-primary/5">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-title">🚚 Delivery</h2>
        <p className="section-subtitle">Reliable delivery for all your fresh product orders</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <f.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
