import { Wine, Lamp, Users } from "lucide-react";

const features = [
  { icon: Wine, text: "Veliki izbor gina" },
  { icon: Lamp, text: "Vintage lounge atmosfera" },
  { icon: Users, text: "Savršeno za druženje" },
];

const FeatureStrip = () => {
  return (
    <section className="relative py-12 border-y border-border/50">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tungsten/5 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 text-foreground/70">
              <f.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="text-sm uppercase tracking-widest font-medium">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
