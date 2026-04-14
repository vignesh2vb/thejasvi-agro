import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919786622633?text=Hi%2C%20I%20want%20to%20order%20from%20Thejasvi%20Agro%20Products"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl transition-transform hover:scale-110 animate-bounce"
      aria-label="Chat on WhatsApp"
      style={{ animationDuration: "2s" }}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
