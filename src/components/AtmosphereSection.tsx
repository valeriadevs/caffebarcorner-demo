import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AtmosphereSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="atmosfera" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brick-pattern opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/50 to-background/80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-tungsten/8 blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-pink-ambient/10 blur-[60px]" />
      
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-16 bg-foreground/10" />
        <div className="w-3 h-3 rounded-full bg-tungsten/40 glow-amber" />
      </div>

      <div ref={ref} className={`relative z-10 container mx-auto px-6 text-center max-w-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="text-primary/60 text-xs uppercase tracking-[0.3em] font-medium">Atmosfera</span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight glow-text">
          Večeri u Corneru imaju{" "}
          <span className="text-gradient-warm">poseban ritam.</span>
        </h2>
        <p className="text-foreground/50 leading-relaxed text-lg font-light">
          Toplo svjetlo starih lampi, zvuk čaša i razgovora, opeka koja priča priče —
          svaki kutak Cornera dizajniran je da se osjećaš kao doma.
        </p>

        <div className="mt-16 flex items-center justify-center gap-6 flex-wrap">
          {["Lampe", "Opeka", "Staklo", "Koža"].map((word, i) => (
            <span key={i} className="text-xs uppercase tracking-[0.25em] text-muted-foreground/40 border border-border/30 px-4 py-2 rounded-sm">
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtmosphereSection;
