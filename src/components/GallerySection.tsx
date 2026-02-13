const GallerySection = () => {
  return (
    <section id="galerija" className="py-24 section-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-14">
          <span className="text-primary/60 text-xs uppercase tracking-[0.3em] font-medium">
            Vizuali
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-4">Galerija</h2>
          <div className="divider-warm mt-4" />
        </div>

        {/* Abstract gallery grid using color/texture blocks */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { bg: "bg-brick-pattern", label: "Interijer", span: "md:col-span-2 row-span-2 aspect-square md:aspect-auto min-h-[200px] md:min-h-[300px]" },
            { bg: "bg-gradient-to-br from-secondary to-muted", label: "Šank", span: "aspect-square" },
            { bg: "bg-gradient-to-tr from-wood to-brick", label: "Detalji", span: "aspect-square" },
            { bg: "bg-gradient-to-r from-muted to-secondary", label: "Terasa", span: "md:col-span-2 aspect-video" },
            { bg: "bg-gradient-to-bl from-brick-light to-wood", label: "Večer", span: "aspect-square" },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative ${item.span} ${item.bg} rounded-sm overflow-hidden group cursor-pointer`}
            >
              {/* Warm overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-end p-4">
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 group-hover:text-primary transition-colors duration-300">
                  {item.label}
                </span>
              </div>
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-tungsten/10 blur-[40px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
