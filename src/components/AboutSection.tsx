import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="o-nama" className="py-24 section-dark">
      <div ref={ref} className={`container mx-auto px-6 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary/60 text-xs uppercase tracking-[0.3em] font-medium">O nama</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-8">Tko smo mi</h2>
          <div className="divider-warm mb-8" />
          <p className="text-foreground/60 text-lg font-light leading-relaxed mb-6">
            Corner je mjesto susreta, razgovora i opuštanja.
          </p>
          <p className="text-foreground/50 leading-relaxed">
            Vintage ambijent, dobra atmosfera i pića koja se pamte.
            Svaki detalj — od opeke na zidovima do pažljivo birane glazbe —
            osmišljen je da stvori prostor u kojem se vrijeme uspori.
          </p>
        </div>

        {/* IMAGE PLACEHOLDER — replace the gradient div below with an <img> tag later */}
        <div className="mt-14 rounded-sm overflow-hidden aspect-square max-w-lg mx-auto bg-gradient-to-br from-[hsl(25,30%,14%)] via-[hsl(15,25%,10%)] to-[hsl(35,35%,12%)] relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-tungsten/8 blur-[80px]" />
          <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-foreground/30">Placeholder · zamijeni slikom</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
