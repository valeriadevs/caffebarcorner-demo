import { MapPin, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CtaStrip = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="lokacija" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-brick-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-tungsten/8 blur-[120px]" />

      <div ref={ref} className={`relative z-10 container mx-auto px-6 text-center max-w-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 glow-text">Vidimo se večeras?</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 tracking-wide text-sm uppercase">
            <MapPin className="w-4 h-4" />
            Upute
          </a>
          <a href="tel:+385" className="flex items-center gap-2 px-8 py-3.5 border border-foreground/20 text-foreground/80 font-medium rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-300 tracking-wide text-sm uppercase">
            <Phone className="w-4 h-4" />
            Nazovi
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaStrip;
