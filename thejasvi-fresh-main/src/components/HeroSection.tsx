import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Fresh dairy and coconut products from the farm"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm border border-primary-foreground/20 mb-6">
            🌿 100% Natural & Farm Fresh
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading)", color: "white" }}
          >
            Pure. Fresh.{" "}
            <span className="text-primary" style={{ color: "oklch(0.75 0.18 145)" }}>
              Natural.
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            Delivering farm-fresh dairy and coconut products to your doorstep.
            Trusted by families across Tamil Nadu.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:scale-105 shadow-lg"
            >
              Shop Now
            </a>
            <a
              href="https://wa.me/919786622633?text=Hi%2C%20I%20want%20to%20order%20from%20Thejasvi%20Agro%20Products"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-whatsapp px-8 py-3.5 text-base font-semibold text-whatsapp-foreground transition-transform hover:scale-105 shadow-lg"
            >
              Order via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
