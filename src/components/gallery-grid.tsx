"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  "WhatsApp-Image-2026-02-09-at-15.25.59.jpeg",
  "WhatsApp-Image-2026-02-09-at-15.25.58.jpeg",
  "WhatsApp-Image-2026-02-09-at-15.25.56.jpeg",
  "WhatsApp-Image-2026-02-09-at-15.26.05.jpeg",
  "WhatsApp-Image-2026-02-09-at-15.25.52.jpeg",
  "WhatsApp-Image-2026-02-09-at-15.26.03.jpeg",
  "Img-274.jpg", "Img-271.jpg", "Img-262.jpg", "Img-260.jpg",
  "Img-250.jpg", "Img-248.jpg", "Img-247.jpg", "Img-234.jpg",
  "Img-229.jpg", "Img-224.jpg", "Img-223.jpg", "Img-220.jpg",
  "Img-217.jpg", "Img-214.jpg", "Img-212.jpg", "Img-211.jpg",
  "Img-208.jpg", "Img-194.jpg", "Img-185.jpg", "Img-184.jpg",
  "Img-175.jpg", "Img-168.jpg", "Img-146.jpg", "Img-142.jpg",
  "Img-134.jpg", "Img-133.jpg", "Img-128.jpg", "Img-126.jpg",
  "Img-116.jpg", "Img-96.jpg", "Img-95.jpg", "Img-88.jpg",
  "Img-77.jpg", "Img-77-1.jpg", "Img-65.jpg", "Img-58.jpg",
  "Img-57.jpg", "Img-46.jpg", "Img-41.jpg", "Img-38.jpg",
  "Img-37.jpg", "Img-31.jpg", "Img-30.jpg", "Img-29.jpg",
  "Img-27.jpg", "Img-23.jpg", "Img-20.jpg", "Img-19.jpg",
  "Img-18.jpg", "Img-16.jpg", "Img-14.jpg", "Img-5.jpg",
  "Img-4.jpg", "Img-3.jpg", "Img-1.jpg",
  "AIPDN-PARTNERSHIP-2.jpg", "AIPDN-PARTNERSHIP.jpg",
  "AIPDN-PARTNERSHIP-4.jpg", "AIPDN-PARTNERSHIP-1.jpg",
  "AIPDN-PARTNERSHIP-3.jpg", "AIPDN-PARTNERSHIP-2-1.jpg",
  "1_WhatsApp-Image-2025-11-19-at-09.23.59.jpeg",
  "WhatsApp-Image-2025-11-19-at-09.24.00-2.jpeg",
  "WhatsApp-Image-2025-11-19-at-09.24.00-1.jpeg",
  "WhatsApp-Image-2025-11-19-at-09.24.00.jpeg",
  "WhatsApp-Image-2025-11-19-at-09.23.59.jpeg",
  "WhatsApp-Image-2025-11-19-at-09.24.01-4.jpeg",
  "WhatsApp-Image-2025-11-19-at-09.24.01-3.jpeg",
  "WhatsApp-Image-2025-11-19-at-09.24.01-2.jpeg",
  "WhatsApp-Image-2025-11-19-at-09.24.00-3.jpeg",
  "WhatsApp-Image-2025-11-19-at-09.24.01-1.jpeg",
  "WhatsApp-Image-2025-11-19-at-09.24.01.jpeg",
];

const ITEMS_PER_PAGE = 24;

export function GalleryGrid() {
  const [page, setPage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const totalPages = Math.ceil(GALLERY_IMAGES.length / ITEMS_PER_PAGE);
  const currentImages = GALLERY_IMAGES.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft")
        setLightbox(
          (lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
        );
      if (e.key === "ArrowRight")
        setLightbox((lightbox + 1) % GALLERY_IMAGES.length);
    },
    [lightbox]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <p className="mb-8 text-sm text-muted-foreground">
        Showing {page * ITEMS_PER_PAGE + 1}&ndash;
        {Math.min((page + 1) * ITEMS_PER_PAGE, GALLERY_IMAGES.length)} of{" "}
        {GALLERY_IMAGES.length} photos
      </p>

      <div
        className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        role="list"
        aria-label="Photo gallery"
      >
        {currentImages.map((img, i) => {
          const globalIndex = page * ITEMS_PER_PAGE + i;
          return (
            <button
              key={img}
              role="listitem"
              onClick={() => setLightbox(globalIndex)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-100 cursor-pointer focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              aria-label={`View photo ${globalIndex + 1} of ${GALLERY_IMAGES.length}`}
            >
              <Image
                src={`/images/gallery/${img}`}
                alt={`AIPDN activity photo ${globalIndex + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={i < 4}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          );
        })}
      </div>

      {totalPages > 1 && (
        <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Gallery pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setPage(i);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label={`Page ${i + 1}`}
              aria-current={page === i ? "page" : undefined}
              className={`h-10 w-10 rounded-full text-sm font-medium transition-colors ${
                page === i
                  ? "bg-green-700 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </nav>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close photo viewer"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={() =>
              setLightbox(
                (lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
              )
            }
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="relative max-h-[85vh] max-w-[90vw]">
            <Image
              src={`/images/gallery/${GALLERY_IMAGES[lightbox]}`}
              alt={`AIPDN activity photo ${lightbox + 1}`}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
          </div>
          <button
            onClick={() =>
              setLightbox((lightbox + 1) % GALLERY_IMAGES.length)
            }
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-4 text-sm text-white/60" aria-live="polite">
            {lightbox + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </>
  );
}
