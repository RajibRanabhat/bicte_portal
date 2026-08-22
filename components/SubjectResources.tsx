"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  NotebookPen,
  X,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  categoryStyles,
  getResourceCounts,
  subjectCategory,
  type QuestionPart,
  type Subject,
} from "@/data/curriculum";

type Props = {
  subject: Subject & { semester: number };
  syllabusFile: string;
};

type LightboxState = {
  label: string;
  parts: QuestionPart[];
  index: number;
};

function SectionTitle({
  eyebrow,
  title,
  accent,
  muted = false,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  muted?: boolean;
}) {
  return (
    <div className="mb-7">
      <p
        className="text-xs font-semibold uppercase tracking-[0.25em]"
        style={{ color: muted ? "rgba(50,50,57,0.3)" : accent }}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-2xl font-bold tracking-tight sm:text-3xl ${
          muted ? "text-stone/40" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <span
        className={`mt-4 block h-[3px] w-20 rounded-full ${
          muted ? "bg-stone/15" : "bg-crimson"
        }`}
      />
    </div>
  );
}

function EmptyState({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-stone/20 bg-white/70 p-12 text-center text-sm text-stone/45 backdrop-blur-sm">
      {children}
    </div>
  );
}

export default function SubjectResources({ subject, syllabusFile }: Props) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const counts = getResourceCounts(subject);
  const category = subjectCategory(subject.code);
  const style = categoryStyles[category];

  const step = (delta: number) => {
    setLightbox((prev) => {
      if (!prev) return prev;
      const next = (prev.index + delta + prev.parts.length) % prev.parts.length;
      return { ...prev, index: next };
    });
  };

  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const pills = [
    { label: "Syllabus", available: true },
    {
      label:
        counts.questions === 1
          ? "1 question paper"
          : `${counts.questions} question papers`,
      available: counts.questions > 0,
    },
    {
      label: counts.books === 1 ? "1 book" : `${counts.books} books`,
      available: counts.books > 0,
    },
    {
      label: counts.notes === 1 ? "1 note set" : `${counts.notes} note sets`,
      available: counts.notes > 0,
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden bg-gray-50/70">

        <section className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <Reveal duration={650}>
            <Link
              href="/curriculum"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
              style={{ color: style.hex }}
            >
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to curriculum
            </Link>

            <div className="mt-6 flex flex-wrap gap-2">
              <span
                className="rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: style.hex }}
              >
                {style.label}
              </span>

              {pills.map((pill) => (
                <span
                  key={pill.label}
                  className="rounded-full px-4 py-1.5 text-[11px] font-semibold"
                  style={
                    pill.available
                      ? { backgroundColor: style.tint, color: style.hex }
                      : {
                          background: "rgba(255,255,255,0.7)",
                          color: "#b6bac0",
                          border: "1px dashed #e0e3e8",
                        }
                  }
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Syllabus */}
          <div className="mt-16">
            <Reveal duration={700}>
              <SectionTitle
                eyebrow="Official document"
                title="Syllabus"
                accent={style.hex}
              />

              <div className="overflow-hidden rounded-2xl shadow-lg">
                <div
                  className="flex items-center gap-3 px-5 py-4"
                  style={{ backgroundColor: style.hex }}
                >
                  <FileText className="h-4 w-4 flex-shrink-0 text-white/80" />
                  <span className="flex-1 truncate text-sm font-semibold text-white">
                    {syllabusFile.split("/").pop()}
                  </span>

                  <a href={syllabusFile}
                    download
                    aria-label="Download syllabus"
                    title="Download"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/15 hover:text-white"
                  >
                    <Download className="h-4 w-4" />
                  </a>

                  <a href={syllabusFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in a new tab"
                    title="Open in a new tab"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/15 hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Dark reader gutters, like a real PDF viewer */}
                <div data-lenis-prevent className="hidden bg-[#2b2b2b] md:block">
                  <iframe
                    src={syllabusFile}
                    title="Syllabus"
                    className="h-[92vh] min-h-[820px] w-full"
                  />
                </div>

                <a href={syllabusFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white px-5 py-10 text-xs font-semibold md:hidden"
                  style={{ color: style.hex }}
                >
                  <FileText className="h-4 w-4" />
                  Open the syllabus PDF
                </a>
              </div>
            </Reveal>
          </div>

          {/* Old questions */}
          <div className="mt-20">
            <Reveal duration={700}>
              <SectionTitle
                eyebrow="Past papers"
                title="Old Questions"
                accent={style.hex}
                muted={counts.questions === 0}
              />

              {counts.questions === 0 ? (
                <EmptyState>Question papers not added yet.</EmptyState>
              ) : (
                <div className="space-y-2.5">
                  {subject.questions?.map((paper) => {
                    const meta = [
                      paper.fullMarks ? `Full marks ${paper.fullMarks}` : null,
                      paper.duration,
                      paper.instruction,
                    ]
                      .filter(Boolean)
                      .join(" · ");

                    const label = [paper.year, paper.session]
                      .filter(Boolean)
                      .join(" · ");

                    return (
                      <button
                        key={`${paper.year}-${paper.session ?? "regular"}`}
                        type="button"
                        onClick={() =>
                          setLightbox({ label, parts: paper.parts, index: 0 })
                        }
                        className="group flex w-full cursor-pointer items-center gap-4 rounded-xl bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <span className="flex-shrink-0 rounded-lg bg-crimson/10 px-3 py-1.5 text-sm font-bold text-crimson-dark">
                          {paper.year}
                        </span>

                        <span className="flex-1">
                          <span className="block text-sm font-semibold text-navy">
                            {paper.parts.map((p) => p.label).join(" + ")}
                            {paper.session ? ` · ${paper.session}` : ""}
                          </span>
                          {meta && (
                            <span className="mt-0.5 block text-[11px] text-stone/50">
                              {meta}
                            </span>
                          )}
                        </span>

                        <ChevronRight className="h-4 w-4 flex-shrink-0 text-stone/30 transition-all group-hover:translate-x-0.5 group-hover:text-crimson" />
                      </button>
                    );
                  })}
                </div>
              )}
            </Reveal>
          </div>

          {/* Books */}
          <div className="mt-20">
            <Reveal duration={700}>
              <SectionTitle
                eyebrow="Further reading"
                title="Books"
                accent={style.hex}
                muted={counts.books === 0}
              />

              {counts.books === 0 ? (
                <EmptyState>Books not added yet.</EmptyState>
              ) : (
                <div className="space-y-4">
                  {subject.books?.map((book) => (
                    <div
                      key={book.title}
                      className="group flex gap-5 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div
                        className="h-20 w-14 flex-shrink-0 rounded-md shadow-md transition-transform duration-500 group-hover:scale-105"
                        style={{
                          background:
                            book.role === "Prescribed" ? "#c9a227" : style.hex,
                        }}
                      />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold leading-snug text-navy">
                            {book.title}
                          </h3>
                          <span
                            className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                            style={
                              book.role === "Prescribed"
                                ? {
                                    backgroundColor: "rgba(201,162,39,0.14)",
                                    color: "#9a7b19",
                                  }
                                : { backgroundColor: style.tint, color: style.hex }
                            }
                          >
                            {book.role}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-stone/70">
                          {book.authors}
                        </p>
                        <p className="mt-1 text-[11px] text-stone/45">
                          {[book.edition, book.publisher, book.year]
                            .filter(Boolean)
                            .join(" · ")}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-4">
                          {book.file && (
                            <a href={book.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
                              style={{ color: style.hex }}
                            >
                              <BookOpen className="h-3.5 w-3.5" />
                              Read
                            </a>
                          )}
                          {book.link && (
                            <a href={book.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
                              style={{ color: style.hex }}
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              Publisher listing
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          </div>

          {/* Notes */}
          <div className="mt-20">
            <Reveal duration={700}>
              <SectionTitle
                eyebrow="Study material"
                title="Notes"
                accent={style.hex}
                muted={counts.notes === 0}
              />

              {counts.notes === 0 ? (
                <EmptyState>Notes not added yet.</EmptyState>
              ) : (
                <div className="space-y-3">
                  {subject.notes?.map((note) => (
                    <a key={note.title}
                      href={note.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <span
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundColor: style.tint, color: style.hex }}
                      >
                        <NotebookPen className="h-4 w-4" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-bold text-navy">
                          {note.title}
                        </span>
                        {note.description && (
                          <span className="mt-1.5 block text-sm leading-relaxed text-stone/70">
                            {note.description}
                          </span>
                        )}
                        <span className="mt-3 block text-[11px] text-stone/45">
                          {[note.pages ? `${note.pages} pages` : null, note.source]
                            .filter(Boolean)
                            .join(" · ")}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </section>
      </div>

      {/* Question paper lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-navy/92 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Question paper"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 cursor-pointer text-white/60 transition-colors hover:text-white"
          >
            <X className="h-7 w-7" />
          </button>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            {lightbox.label} · {lightbox.parts[lightbox.index].label}
          </p>

          <img
            src={lightbox.parts[lightbox.index].file}
            alt={lightbox.parts[lightbox.index].label}
            className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox.parts.length > 1 && (
            <div
              className="mt-5 flex items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2">
                {lightbox.parts.map((part, i) => (
                  <button
                    key={part.label}
                    type="button"
                    onClick={() => setLightbox({ ...lightbox, index: i })}
                    aria-label={part.label}
                    className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                      i === lightbox.index
                        ? "w-8 bg-white"
                        : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}