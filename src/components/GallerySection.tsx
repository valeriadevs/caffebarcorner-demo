import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    src: "/interior.jpg",
    label: "Interijer",
    span: "sm:col-span-2 md:col-span-2 md:row-span-2 aspect-video md:aspect-auto md:min-h-[300px]",
    gradient: "bg-gradient-to-br from-secondary to-muted",
  },
  {
    src: "/bar.jpg",
    label: "Šank",
    span: "aspect-square",
    gradient: "bg-gradient-to-br from-secondary to-muted",
  },
  {
    src: "/details.jpg",
    label: "Detalji",
    span: "aspect-square",
    gradient: "bg-gradient-to-tr from-[hsl(var(--wood))] to-[hsl(var(--brick))]",
  },
  {
    src: "/outdoors.jpg",
    label: "Vanjski prostor",
    span: "sm:col-span-2 md:col-span-2 aspect-video",
    gradient: "bg-gradient-to-r from-muted to-secondary",
  },
  {
    src: "/evenings.jpg",
    label: "Večer",
    span: "aspect-square",
    gradient: "bg-gradient-to-bl from-[hsl(var(--brick-light))] to-[hsl(var(--wood))]",
  },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % galleryItems.length);
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <>
      <section id="galerija" className="py-24 section-dark">
        <div ref={ref} className={`container mx-auto px-6 max-w-5xl overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-14">
            <span className="text-primary/60 text-xs uppercase tracking-[0.3em] font-medium">Vizuali</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-4">Galerija</h2>
            <div className="divider-warm mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`relative ${item.span} rounded-sm overflow-hidden group cursor-pointer transition-all duration-500`}
                style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
                onClick={() => setSelectedIndex(i)}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className={`absolute inset-0 ${item.gradient}`} style={{ zIndex: -1 }} />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 group-hover:text-primary transition-colors duration-300">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen lightbox with arrows */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none [&>button]:text-foreground/70 [&>button]:hover:text-foreground">
          <VisuallyHidden>
            <DialogTitle>{selectedImage?.label ?? "Gallery image"}</DialogTitle>
          </VisuallyHidden>
          {selectedImage && (
            <>
              <img
                src={selectedImage.src}
                alt={selectedImage.label}
                className="w-full h-full max-h-[90vh] object-contain rounded-sm"
              />
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-background/80 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-background/80 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GallerySection;
