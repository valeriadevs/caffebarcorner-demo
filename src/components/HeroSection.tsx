const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background - brick pattern with warm glow */}
      <div className="absolute inset-0 bg-brick-pattern animate-blur-in" />
      
      {/* Warm gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      
      {/* Tungsten glow spots */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-tungsten/10 blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-pink-ambient/10 blur-[80px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="animate-fade-up">
          <span className="inline-block text-primary/80 text-sm uppercase tracking-[0.3em] font-medium mb-6">
            Caffe Bar
          </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up glow-text">
          Mjesto gdje večeri{" "}
          <span className="text-gradient-warm">traju duže</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/60 max-w-xl mx-auto mb-10 animate-fade-up-delay font-light leading-relaxed">
          Dobra pića, ugodna energija i prepoznatljiva Corner atmosfera.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-2">
          <a
            href="#pica"
            className="px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 tracking-wide text-sm uppercase"
          >
            Pogledaj Pića
          </a>
          <a
            href="#galerija"
            className="px-8 py-3.5 border border-foreground/20 text-foreground/80 font-medium rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-300 tracking-wide text-sm uppercase"
          >
            Istraži Galeriju →
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
