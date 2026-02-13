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
        <div className="mt-14 rounded-sm overflow-hidden aspect-square max-w-lg mx-auto">
            <img src="/onama.jpg" alt="Description" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
