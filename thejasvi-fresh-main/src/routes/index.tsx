import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DeliverySection from "@/components/DeliverySection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thejasvi Agro Products – Fresh Dairy & Coconut Products" },
      { name: "description", content: "Buy farm-fresh dairy products, pure ghee, coconut oil, paneer, curd and more. Direct from farm to doorstep across Tamil Nadu & India." },
      { property: "og:title", content: "Thejasvi Agro Products – Pure. Fresh. Natural." },
      { property: "og:description", content: "Farm-fresh dairy and coconut products delivered to your doorstep." },
      { name: "keywords", content: "fresh dairy products, coconut oil, pure ghee, paneer, curd, Tamil Nadu dairy products, Thejasvi Agro" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductsSection />
      <WhyChooseUs />
      <DeliverySection />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
