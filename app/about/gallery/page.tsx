"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { gallery, type GalleryPhoto } from "@/data/gallery";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryPhoto | null>(null);

  const PhotoGrid = ({ photos }: { photos: GalleryPhoto[] }) => {
    if (photos.length === 0) {
      return <p className="text-sm italic text-stone/60">Photos coming soon.</p>;
    }
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <button
            key={photo.src}
            onClick={() => setSelected(photo)}
            className="cursor-pointer overflow-hidden rounded-lg border border-stone/10 bg-white text-left shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md"
          >
            <div className="relative h-56 w-full">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover"
              />
            </div>
            <p className="p-3 text-sm text-stone">{photo.caption}</p>
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <PageHeader
        image="/gallery/club.jpg"
        title="Gallery"
        subtitle="Moments from bootcamps, workshops, excursions, and achievements at BICTE"
      />

      {/* Categories */}
      {gallery.map((category, idx) => (
        <section
          key={category.title}
          className={`py-16 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <Reveal>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                {category.title}
              </h2>

              {category.topics ? (
                <div className="mt-8 space-y-12">
                  {category.topics.map((topic) => (
                    <div key={topic.title}>
                      <h3 className="text-lg font-semibold text-primary">
                        {topic.title}
                      </h3>
                      <div className="mt-4">
                        <PhotoGrid photos={topic.photos} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-8">
                  <PhotoGrid photos={category.photos ?? []} />
                </div>
              )}
            </div>
          </Reveal>
        </section>
      ))}

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute right-4 top-4 text-white/80 hover:text-white"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full">
              <Image
                src={selected.src}
                alt={selected.caption}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-sm text-white/90">
              {selected.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}