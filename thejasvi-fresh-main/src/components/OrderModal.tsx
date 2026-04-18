import { useState } from "react";
import { X } from "lucide-react";
import type { Product } from "./ProductsSection";

interface Props {
  product: Product;
  quantity: number;
  onClose: () => void;
}

export default function OrderModal({ product, quantity, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("UPI");
  const [statusMessage, setStatusMessage] = useState("");

  const handleOrder = async () => {
    if (!name.trim() || !phone.trim() || !address.trim()) return;

    const total = product.priceNum ? `₹${product.priceNum * quantity}` : "TBD";
    const msg = `*New Order from Thejasvi Agro Website*%0A%0A*Customer Name:* ${encodeURIComponent(name)}%0A*Phone Number:* ${encodeURIComponent(phone)}%0A*Product:* ${encodeURIComponent(product.name)}%0A*Quantity:* ${quantity}%0A*Total:* ${total}%0A*Address:* ${encodeURIComponent(address)}%0A*Payment Mode:* ${payment}%0A%0APlease confirm this order.`;

    const url = `https://wa.me/919786622633?text=${msg}`;
    const isInIframe = (() => {
      try {
        return window.self !== window.top;
      } catch {
        return true;
      }
    })();

    if (isInIframe) {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(url);
          setStatusMessage("Preview blocks WhatsApp here. The order link is copied — open it in a new tab.");
          return;
        }
      } catch {
        // Ignore and show fallback message below.
      }

      setStatusMessage("Preview blocks WhatsApp in the editor. Publish the site to use the redirect normally.");
      return;
    }

    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.assign(url);
      return;
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 backdrop-blur-sm px-4" onClick={onClose}>
      <div
        className="relative w-full max-w-md rounded-2xl bg-card p-6 shadow-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="h-5 w-5" />
        </button>
        <h3 className="text-xl font-bold text-card-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          Order {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          {product.price} × {quantity} = {product.priceNum ? `₹${product.priceNum * quantity}` : "Contact for price"}
        </p>

        <div className="mt-5 space-y-4">
          <div>
            <label className="text-sm font-medium text-card-foreground">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                autoFocus
                autoComplete="name"
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
              />
          </div>
          <div>
            <label className="text-sm font-medium text-card-foreground">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile number"
                autoComplete="tel"
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
              />
          </div>
          <div>
            <label className="text-sm font-medium text-card-foreground">Delivery Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Full delivery address with pincode"
                rows={3}
                autoComplete="street-address"
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm resize-none"
              />
          </div>
          <div>
            <label className="text-sm font-medium text-card-foreground">Payment Mode</label>
            <div className="mt-2">
              <span className="inline-flex items-center rounded-lg border border-primary bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                UPI Only
              </span>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Payment details will be shared on WhatsApp for secure UPI transfer.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleOrder}
          disabled={!name.trim() || !phone.trim() || !address.trim()}
          className="mt-8 w-full rounded-xl bg-whatsapp px-4 py-3.5 text-base font-bold text-white shadow-lg transition-all active:scale-95 disabled:opacity-40 disabled:grayscale disabled:cursor-not-allowed hover:bg-whatsapp/90"
        >
          Send Order via WhatsApp
        </button>

        {statusMessage ? (
          <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
            {statusMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
}
