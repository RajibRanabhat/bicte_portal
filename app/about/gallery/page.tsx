"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { gallery, type GalleryPhoto } from "@/data/gallery";
import PageHeader from "@/components/PageHeader";

// ---------------------------------------------------------------------------
// Hand-picked cover photo per album / sub-album.
// Key = "Category Title" or "Category Title>Topic Title"
// Falls back to the first photo in the set if no override is found.
// ---------------------------------------------------------------------------
const COVER_OVERRIDES: Record<string, string> = {
  "Recognition & Awards": "/gallery/club.jpg",
  "Bootcamps & Workshops": "/gallery/iotgroup.jpg",
  "Bootcamps & Workshops>IoT & Robotics": "/gallery/iotgroup.jpg",
  "Bootcamps & Workshops>Digital Marketing": "/gallery/dm4.jpg",
  "Bootcamps & Workshops>Content Creation": "/gallery/cc2.jpg",
  "Bootcamps & Workshops>Building Web with Next.js": "/gallery/nj3.jpg",
  Excursions: "/gallery/sikkim.jpg",
  Graduation: "/gallery/grads2.jpg",
};

const albumColors = [
  "bg-blue-100 text-blue-600",
  "bg-pink-100 text-pink-600",
  "bg-purple-100 text-purple-600",
  "bg-orange-100 text-orange-600",
  "bg-teal-100 text-teal-600",
  "bg-cyan-100 text-cyan-600",
];

function getCover(photos: GalleryPhoto[], key: string): GalleryPhoto {
  const overrideSrc = COVER_OVERRIDES[key];
  return photos.find((p) => p.src === overrideSrc) ?? photos[0];
}

function flattenPhotos(category: (typeof gallery)[number]): GalleryPhoto[] {
  if (category.photos) return category.photos;
  if (category.topics) return category.topics.flatMap((t) => t.photos);
  return [];
}

// ---------------------------------------------------------------------------
// View state: which "folder" the user is currently browsing.
// ---------------------------------------------------------------------------
type ViewState =
  | { level: "categories" }
  | { level: "topics"; categoryIndex: number }
  | { level: "photos"; categoryIndex: number; topicIndex: number | null };

// ---------------------------------------------------------------------------
// Converging-cascade entrance.
// Cards don't fly in from random directions — that reads as noisy. Instead,
// each card's horizontal origin is based on where it sits in the row (left
// side of the grid drifts in from the left, right side from the right,
// center drifts up from directly below), so the whole grid feels like it's
// assembling itself toward the middle. A blur-to-focus swap adds polish
// without a "spinning" feel.
// ---------------------------------------------------------------------------
function getOrigin(index: number, columns: number) {
  const col = index % columns;
  const mid = (columns - 1) / 2;
  const offsetFromCenter = col - mid; // negative = left side, positive = right side, 0 = center

  return {
    x: offsetFromCenter * 55,
    y: 36,
  };
}

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: (origin: { x: number; y: number }) => ({
    opacity: 0,
    x: origin.x,
    y: origin.y,
    scale: 0.92,
    filter: "blur(6px)",
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 20, mass: 0.8 },
  },
};

const panelVariants: Variants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, x: -24, transition: { duration: 0.2, ease: "easeIn" } },
};

export default function GalleryPage() {
  const [view, setView] = useState<ViewState>({ level: "categories" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Photos currently visible in the grid (drives both the grid and the lightbox)
  const currentPhotos: GalleryPhoto[] = useMemo(() => {
    if (view.level !== "photos") return [];
    const category = gallery[view.categoryIndex];
    if (view.topicIndex !== null && category.topics) {
      return category.topics[view.topicIndex].photos;
    }
    return category.photos ?? [];
  }, [view]);

  // Breadcrumb trail
  const crumbs = useMemo(() => {
    const trail: { label: string; onClick: () => void }[] = [
      { label: "Gallery", onClick: () => setView({ level: "categories" }) },
    ];
    if (view.level === "topics" || view.level === "photos") {
      const category = gallery[view.categoryIndex];
      trail.push({
        label: category.title,
        onClick: () =>
          category.topics
            ? setView({ level: "topics", categoryIndex: view.categoryIndex })
            : setView({ level: "categories" }),
      });
    }
    if (view.level === "photos" && view.topicIndex !== null) {
      const category = gallery[view.categoryIndex];
      const topic = category.topics?.[view.topicIndex];
      if (topic) {
        trail.push({ label: topic.title, onClick: () => {} });
      }
    }
    return trail;
  }, [view]);

  // Keyboard navigation for the lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) => (i === null ? null : (i + 1) % currentPhotos.length));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) =>
          i === null ? null : (i - 1 + currentPhotos.length) % currentPhotos.length
        );
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, currentPhotos.length]);

  return (
    <>
      <PageHeader
        image="/campus.jpg"
        title="Gallery"
        subtitle="Moments from awards, bootcamps, excursions, and graduations — organized by album."
      />

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6 flex flex-wrap items-center gap-1 text-sm">
            {crumbs.map(function (crumb, idx) {
              const isLast = idx === crumbs.length - 1;
              return (
                <span key={crumb.label} className="flex items-center gap-1">
                  {idx > 0 && <span className="text-stone/30">/</span>}
                  <button
                    onClick={crumb.onClick}
                    disabled={isLast}
                    className={
                      isLast
                        ? "font-semibold text-navy"
                        : "text-stone/60 transition-colors hover:text-primary"
                    }
                  >
                    {crumb.label}
                  </button>
                </span>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {/* --------------------------- CATEGORIES --------------------------- */}
            {view.level === "categories" && (
              <motion.div
                key="categories"
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.div
                  variants={gridVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {gallery.map(function (category, categoryIndex) {
                    const photos = flattenPhotos(category);
                    const cover = getCover(photos, category.title);
                    const count = photos.length;
                    const color = albumColors[categoryIndex % albumColors.length];

                    return (
                      <motion.button
                        key={category.title}
                        custom={getOrigin(categoryIndex, 3)}
                        variants={cardVariants}
                        whileHover={{ y: -6 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          category.topics
                            ? setView({ level: "topics", categoryIndex })
                            : setView({ level: "photos", categoryIndex, topicIndex: null })
                        }
                        className="group overflow-hidden rounded-lg border border-stone/10 bg-gray-50 text-left shadow-sm"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <motion.img
                            src={cover.src}
                            alt={cover.caption}
                            className="h-full w-full object-cover"
                            whileHover={{ scale: 1.06 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                          <span
                            className={
                              "absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold " +
                              color
                            }
                          >
                            {count} Photos
                          </span>
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-lg font-bold text-white">{category.title}</h3>
                            {category.topics && (
                              <p className="text-xs text-white/80">
                                {category.topics.length} albums inside
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}

            {/* ----------------------------- TOPICS ------------------------------ */}
            {view.level === "topics" && (
              <motion.div
                key="topics"
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.div
                  variants={gridVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {gallery[view.categoryIndex].topics!.map(function (topic, topicIndex) {
                    const cover = getCover(
                      topic.photos,
                      gallery[view.categoryIndex].title + ">" + topic.title
                    );
                    const color = albumColors[topicIndex % albumColors.length];

                    return (
                      <motion.button
                        key={topic.title}
                        custom={getOrigin(topicIndex, 3)}
                        variants={cardVariants}
                        whileHover={{ y: -6 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          setView({
                            level: "photos",
                            categoryIndex: view.categoryIndex,
                            topicIndex,
                          })
                        }
                        className="group overflow-hidden rounded-lg border border-stone/10 bg-gray-50 text-left shadow-sm"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <motion.img
                            src={cover.src}
                            alt={cover.caption}
                            className="h-full w-full object-cover"
                            whileHover={{ scale: 1.06 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                          <span
                            className={
                              "absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold " +
                              color
                            }
                          >
                            {topic.photos.length} Photos
                          </span>
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-lg font-bold text-white">{topic.title}</h3>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}

            {/* ----------------------------- PHOTOS ------------------------------ */}
            {view.level === "photos" && (
              <motion.div
                key="photos"
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.div
                  variants={gridVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
                >
                  {currentPhotos.map(function (photo, idx) {
                    return (
                      <motion.button
                        key={photo.src}
                        custom={getOrigin(idx, 4)}
                        variants={cardVariants}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setLightboxIndex(idx)}
                        className="group flex flex-col overflow-hidden rounded-xl border border-stone/10 bg-white text-left shadow-sm transition-shadow duration-300 hover:shadow-lg"
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <motion.img
                            src={photo.src}
                            alt={photo.caption}
                            className="h-full w-full object-cover"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-navy opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                            View
                          </span>
                        </div>
                        {/* Caption is always visible, not hover-only, so every
                            photo tells its story at a glance. */}
                        <div className="flex flex-1 items-start gap-1.5 px-3 py-2.5">
                          <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <p className="text-xs leading-snug text-stone/70 line-clamp-2 transition-colors duration-200 group-hover:text-navy">
                            {photo.caption}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* -------------------------------- LIGHTBOX -------------------------------- */}
      <AnimatePresence>
        {lightboxIndex !== null && currentPhotos[lightboxIndex] && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute right-4 top-4 text-3xl leading-none text-white/80 transition-colors hover:text-white"
              aria-label="Close"
            >
              &times;
            </button>

            {currentPhotos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) =>
                      i === null ? null : (i - 1 + currentPhotos.length) % currentPhotos.length
                    );
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white transition-colors hover:bg-white/20 sm:left-6"
                  aria-label="Previous photo"
                >
                  &#8249;
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) =>
                      i === null ? null : (i + 1) % currentPhotos.length
                    );
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white transition-colors hover:bg-white/20 sm:right-6"
                  aria-label="Next photo"
                >
                  &#8250;
                </button>
              </>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="flex max-h-[85vh] max-w-3xl flex-col items-center"
              >
                <img
                  src={currentPhotos[lightboxIndex].src}
                  alt={currentPhotos[lightboxIndex].caption}
                  className="max-h-[70vh] rounded-lg object-contain shadow-2xl"
                />
                <div className="mt-4 max-w-xl rounded-lg bg-white/5 px-4 py-3 text-center backdrop-blur-sm">
                  <p className="text-sm text-white/90">
                    {currentPhotos[lightboxIndex].caption}
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    {lightboxIndex + 1} / {currentPhotos.length}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}