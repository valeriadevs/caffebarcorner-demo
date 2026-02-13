import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="o-nama" className="py-24 section-dark">
      <div ref={ref} className={`container mx-auto px-6 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Mobile: stacked, Desktop: side-by-side */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-16">
          <div className="text-center md:text-left md:flex-1">
            <span className="text-primary/60 text-xs uppercase tracking-[0.3em] font-medium">O nama</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-8">Tko smo mi</h2>
            <div className="divider-warm mb-8 md:mx-0" />
            <p className="text-foreground/60 text-lg font-light leading-relaxed mb-6">
              Corner je mjesto susreta, razgovora i opuštanja.
            </p>
            <p className="text-foreground/50 leading-relaxed">
              Vintage ambijent, dobra atmosfera i pića koja se pamte.
              Svaki detalj — od opeke na zidovima do pažljivo birane glazbe —
              osmišljen je da stvori prostor u kojem se vrijeme uspori.
            </p>
          </div>

          <div className="mt-14 md:mt-0 md:flex-1 rounded-sm overflow-hidden aspect-square max-w-lg mx-auto md:mx-0 relative">
            <img src="/onama.jpg" alt="Corner interijer" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
