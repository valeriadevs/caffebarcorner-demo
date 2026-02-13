import { MapPin, Phone, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const hours = [
  { day: "Pon – Čet", time: "08:00 – 00:00" },
  { day: "Pet – Sub", time: "08:00 – 02:00" },
  { day: "Nedjelja", time: "10:00 – 23:00" },
];

const CtaStrip = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="lokacija" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-brick-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-tungsten/8 blur-[120px]" />

      <div ref={ref} className={`relative z-10 container mx-auto px-6 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 glow-text">Vidimo se večeras?</h2>
          <div className="divider-warm" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Info column */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-lg font-medium mb-1">Adresa</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Ul. Otokara Keršovanija 2<br />
                  52440 Poreč, Hrvatska.
                </p>
              </div>
            </div>

            {/* Working hours */}
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-lg font-medium mb-2">Radno vrijeme</h3>
                <div className="space-y-1">
                  {hours.map((h, i) => (
                    <div key={i} className="flex justify-between gap-8 text-sm text-foreground/60">
                      <span>{h.day}</span>
                      <span className="text-foreground/80">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-lg font-medium mb-1">Kontakt</h3>
                <p className="text-foreground/60 text-sm">+123 XX XXX XXX</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://maps.app.goo.gl/kJjsFsaaawZjvakf7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 tracking-wide text-sm uppercase"
              >
                <MapPin className="w-4 h-4" />
                Upute
              </a>
              <a
                href="tel:+123XXXXXX"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-foreground/20 text-foreground/80 font-medium rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-300 tracking-wide text-sm uppercase"
              >
                <Phone className="w-4 h-4" />
                Nazovi
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-sm overflow-hidden border border-border/30 min-h-[300px]">
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.996864919356!2d13.591924696789548!3d45.2276311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477c979e06b435ff%3A0xe0e5ec99c39c6d0a!2sCaffe%20Bar%20Corner!5e0!3m2!1sen!2sin!4v1770963683487!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 300, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Corner lokacija"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaStrip;
