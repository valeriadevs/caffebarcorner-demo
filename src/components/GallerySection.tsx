import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const galleryItems = [
  {
    /* IMAGE: Replace src with your photo path, e.g. "/interior.jpg" */
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
  const [selectedImage, setSelectedImage] = useState<{ src: string; label: string } | null>(null);

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
                onClick={() => setSelectedImage(item)}
              >
                {/* IMAGE: Each item tries to load the src image. If you haven't added photos yet, the gradient shows. */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    // Hide broken image, gradient background will show
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

      {/* Fullscreen lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none [&>button]:text-foreground/70 [&>button]:hover:text-foreground">
          <VisuallyHidden>
            <DialogTitle>{selectedImage?.label ?? "Gallery image"}</DialogTitle>
          </VisuallyHidden>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              className="w-full h-full max-h-[90vh] object-contain rounded-sm"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GallerySection;
