import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const tabs = ["Gin", "Whiskey", "Ostala pića", "Pivo"] as const;
type TabKey = (typeof tabs)[number];

const menuData: Record<TabKey, { name: string; desc: string; price: string }[]> = {
  Gin: [
    { name: "Hendrick's G&T", desc: "Krastavac, tonik, svježina", price: "45 kn" },
    { name: "Monkey 47", desc: "47 botanika, premium serve", price: "55 kn" },
    { name: "Tanqueray Negroni", desc: "Klasični bitter koktel", price: "50 kn" },
    { name: "Corner Special G&T", desc: "Naš potpis, sezonski twist", price: "48 kn" },
  ],
  Whiskey: [
    { name: "Jameson", desc: "Glatki irski klasik", price: "35 kn" },
    { name: "Monkey Shoulder", desc: "Blended malt, svestran", price: "45 kn" },
    { name: "Lagavulin 16", desc: "Dimljeni Islay single malt", price: "70 kn" },
  ],
  "Ostala pića": [
    { name: "Aperol Spritz", desc: "Prosecco, Aperol, soda", price: "40 kn" },
    { name: "Espresso Martini", desc: "Votka, kava, likér", price: "50 kn" },
    { name: "Hugo", desc: "Bazga, prosecco, menta", price: "38 kn" },
  ],
  Pivo: [
    { name: "Craft IPA", desc: "Lokalna pivovara, citra hop", price: "30 kn" },
    { name: "Stout", desc: "Tamno, prženi notes", price: "32 kn" },
    { name: "Lager", desc: "Klasično, osvježavajuće", price: "22 kn" },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<TabKey>("Gin");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pica" className="py-24 section-darker">
      <div ref={ref} className={`container mx-auto px-6 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-14">
          <span className="text-primary/70 text-xs uppercase tracking-[0.3em] font-medium">Naša ponuda</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-4">Pića</h2>
          <div className="divider-warm mt-4" />
        </div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 text-sm uppercase tracking-wider font-medium rounded-sm transition-all duration-300 ${
                active === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/50 hover:text-foreground/80 border border-border/50 hover:border-primary/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-1">
          {menuData[active].map((item, i) => (
            <div
              key={`${active}-${i}`}
              className="flex items-baseline justify-between py-5 border-b border-border/30 animate-fade-up group"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both" }}
            >
              <div className="flex-1">
                <h3 className="font-serif text-lg font-medium group-hover:text-primary transition-colors duration-300">{item.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
              <span className="text-primary font-medium ml-4 whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
