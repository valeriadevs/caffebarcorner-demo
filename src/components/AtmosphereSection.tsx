import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AtmosphereSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="atmosfera" className="relative py-32 overflow-hidden">
      {/* Rich gradient background — change colors here */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(350,25%,12%)] via-[hsl(20,20%,10%)] to-[hsl(30,30%,8%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-tungsten/8 blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-pink-ambient/12 blur-[80px]" />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-primary/6 blur-[60px]" />
      
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-16 bg-foreground/10" />
        <div className="w-3 h-3 rounded-full bg-tungsten/40 glow-amber" />
      </div>

      <div ref={ref} className={`relative z-10 container mx-auto px-6 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary/60 text-xs uppercase tracking-[0.3em] font-medium">Atmosfera</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight glow-text">
            Večeri u Corneru imaju{" "}
            <span className="text-gradient-warm">poseban ritam.</span>
          </h2>
          <p className="text-foreground/50 leading-relaxed text-lg font-light">
            Toplo svjetlo starih lampi, zvuk čaša i razgovora, opeka koja priča priče —
            svaki kutak Cornera dizajniran je da se osjećaš kao doma.
          </p>
        </div>

        {/* IMAGE PLACEHOLDER — replace the gradient div below with an <img> tag later */}
        <div className="mt-14 rounded-sm overflow-hidden aspect-[16/10] bg-gradient-to-br from-[hsl(20,35%,18%)] via-[hsl(350,20%,14%)] to-[hsl(35,40%,12%)] relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-tungsten/10 blur-[80px]" />
          <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-foreground/30">Placeholder · zamijeni slikom</div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
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
