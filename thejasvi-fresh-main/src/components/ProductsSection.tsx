import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import OrderModal from "./OrderModal";

import imgCoconutOil from "@/assets/product-coconut-oil.jpg";
import imgGhee from "@/assets/product-ghee.jpg";
import imgPaneer from "@/assets/product-paneer.jpg";
import imgCurd from "@/assets/product-curd.jpg";
import imgKhova from "@/assets/product-khova.jpg";
import imgCoconut from "@/assets/product-coconut.jpg";

export interface Product {
  name: string;
  price: string;
  priceNum: number | null;
  unit: string;
  image: string;
  description: string;
}

const products: Product[] = [
  { name: "Coconut Oil", price: "₹400", priceNum: 400, unit: "bottle", image: imgCoconutOil, description: "Cold-pressed, pure coconut oil. Courier included." },
  { name: "Ghee", price: "₹700", priceNum: 700, unit: "kg", image: imgGhee, description: "Traditional homemade ghee. Courier included." },
  { name: "Paneer", price: "₹350", priceNum: 350, unit: "per kg", image: imgPaneer, description: "Fresh, soft paneer made from pure milk." },
  { name: "Curd", price: "₹70", priceNum: 70, unit: "per litre", image: imgCurd, description: "Thick, creamy curd set in clay pots." },
  { name: "Milk Khova", price: "₹250", priceNum: 250, unit: "per kg", image: imgKhova, description: "Rich, dense milk khova for sweets." },
  { name: "Fresh Coconut", price: "Contact for price", priceNum: null, unit: "piece", image: imgCoconut, description: "Farm-fresh coconuts, bulk orders available." },
];

function ProductCard({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="group rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative overflow-hidden aspect-square bg-cream">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={800}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.priceNum && (
            <span className="absolute top-3 right-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow">
              {product.price}
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-card-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xl font-bold text-primary">
              {product.price}
              {product.priceNum && <span className="text-xs font-normal text-muted-foreground ml-1">/ {product.unit}</span>}
            </span>
          </div>
          {product.priceNum && (
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-2 py-1">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-muted-foreground hover:text-foreground p-0.5">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-6 text-center text-sm font-semibold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="text-muted-foreground hover:text-foreground p-0.5">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <ShoppingCart className="h-4 w-4" />
                Order Now
              </button>
            </div>
          )}
          {!product.priceNum && (
            <a
              href="https://wa.me/919786622633?text=Hi%2C%20I%20want%20to%20enquire%20about%20Fresh%20Coconut%20pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.02]"
            >
              Contact on WhatsApp
            </a>
          )}
        </div>
      </motion.div>
      {modalOpen && (
        <OrderModal
          product={product}
          quantity={qty}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-cream/40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">🥛 Our Products</h2>
          <p className="section-subtitle">
            Handpicked, farm-fresh dairy and coconut products delivered to your doorstep
          </p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
