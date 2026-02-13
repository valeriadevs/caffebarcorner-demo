import { Sun } from "lucide-react";

const TerraceSection = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Light coastal gradient - contrast from dark interior */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-secondary" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Soft light glow */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-tungsten/5 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
        <Sun className="w-8 h-8 text-primary/60 mx-auto mb-6" strokeWidth={1} />
        <span className="text-primary/60 text-xs uppercase tracking-[0.3em] font-medium">
          Terasa
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
          Terasa uz more,{" "}
          <span className="text-gradient-warm">ista Corner energija.</span>
        </h2>
        <p className="text-foreground/50 text-lg font-light leading-relaxed max-w-xl mx-auto">
          Kad sunce zađe, Corner se širi van — morski povjetarac, opušteni razgovori
          i najbolja pića pod otvorenim nebom.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default TerraceSection;
