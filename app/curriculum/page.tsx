"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import Link from "next/link";
import { FlaskConical, FileText, ArrowUpRight, Search, X } from "lucide-react";
import {
  curriculum,
  codeToSlug,
  getSemesterRows,
  getSemesterCredits,
  getSemesterCourseCount,
  getTotalCredits,
  getTotalCourses,
  getTotalElectives,
  subjectCategory,
  categoryStyles,
  flatSubjects,
  type Subject,
  type SubjectCategory,
} from "@/data/curriculum";
import { practicals, subjectSlug } from "@/data/practicals";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

function pdfHref(subject: Subject): string {
  const slug = subject.syllabus ?? codeToSlug(subject.code);
  return "/syllabus/" + slug + ".pdf";
}

const labSubjectSlugs = new Set(
  practicals.flatMap((sem) =>
    sem.subjects
      .filter((s) => (s.labs?.length ?? 0) > 0)
      .map((s) => subjectSlug(s.code))
  )
);

type FilterKey = SubjectCategory | "All" | "Labs";

const filters: Array<{ key: FilterKey; label: string; hex: string }> = [
  { key: "All", label: "All", hex: "#1878b5" },
  { key: "ICT", label: "ICT", hex: "#1878b5" },
  { key: "Education", label: "Education", hex: "#1b3a6b" },
  { key: "Math", label: "Mathematics", hex: "#c0392b" },
  { key: "Language", label: "Language", hex: "#6b7f8f" },
  { key: "Labs", label: "Has labs", hex: "#c0392b" },
];

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const ordinal = (n: number) =>
  n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : `${n}th`;

export default function Curriculum() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterKey>("All");

  const stats = [
    { label: "Total Credits", value: getTotalCredits(), hex: "#1878b5" },
    { label: "Total Courses", value: getTotalCourses(), hex: "#1b3a6b" },
    { label: "Semesters", value: curriculum.length, hex: "#125f8f" },
    { label: "Electives", value: getTotalElectives(), hex: "#c0392b" },
  ];

  const isSearching = query.trim().length > 0 || filter !== "All";

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return flatSubjects.filter((s) => {
      const matchesQuery =
        q.length === 0 ||
        s.name.toLowerCase().includes(q) ||
        s.code.toLowerCase().includes(q);

      const matchesFilter =
        filter === "All"
          ? true
          : filter === "Labs"
            ? labSubjectSlugs.has(subjectSlug(s.code))
            : s.category === filter;

      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  const clear = () => {
    setQuery("");
    setFilter("All");
  };

  return (
    <>
      <PageHeader
        image="/campus.jpg"
        title="Curriculum"
        subtitle="8-semester course structure with course code, title and credit hours for every subject."
      />

      {/* Stats */}
      <section className="bg-white pt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-2xl bg-gray-50 p-6 text-center transition-colors duration-300 hover:bg-white hover:shadow-lg"
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="absolute inset-x-0 top-0 h-1 origin-left"
                  style={{ backgroundColor: stat.hex }}
                />
                <p
                  className="text-3xl font-bold sm:text-4xl"
                  style={{ color: stat.hex }}
                >
                  <CountUp value={stat.value} duration={1400} />
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-stone/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search + filters */}
      <section className="bg-white pt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a subject or code — try “java”, “network”, “445”"
              className="w-full rounded-2xl bg-gray-50 py-4 pr-12 text-sm text-stone outline-none transition-all duration-300 placeholder:text-stone/40 focus:bg-white focus:ring-2 focus:ring-primary/30"
              style={{ paddingLeft: "3.25rem" }}
            />
            <AnimatePresence>
              {query.length > 0 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-stone/40 transition-colors hover:bg-stone/10 hover:text-stone"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {filters.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className="relative cursor-pointer rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold transition-colors duration-300"
                  style={{ color: active ? "#ffffff" : "#4a4a48" }}
                >
                  {active && (
                    <motion.span
                      layoutId="filterPill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: f.hex }}
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results OR full breakdown */}
      {isSearching ? (
        <section className="bg-white py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <motion.p
                key={results.length}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-stone/60"
              >
                {results.length} {results.length === 1 ? "subject" : "subjects"}
              </motion.p>
              <button
                onClick={clear}
                className="cursor-pointer text-xs font-semibold text-primary hover:underline"
              >
                Clear
              </button>
            </div>

            {results.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-8 rounded-2xl bg-gray-50 py-16 text-center"
              >
                <p className="font-semibold text-navy">No subjects found</p>
                <p className="mx-auto mt-2 max-w-xs text-sm text-stone">
                  Try a different word, or clear the filters to see the full
                  curriculum.
                </p>
              </motion.div>
            ) : (
              <motion.div layout className="mt-6 space-y-2">
                <AnimatePresence mode="popLayout" initial={false}>
                  {results.map((s) => {
                    const style = categoryStyles[s.category];
                    const hasLab = labSubjectSlugs.has(subjectSlug(s.code));

                    return (
                      <motion.div
                        key={`${s.semester}-${s.code}`}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 transition-colors duration-300 hover:bg-white hover:shadow-md"
                      >
                        <span
                          className="shrink-0 rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
                          style={{ backgroundColor: style.hex }}
                        >
                          {style.label}
                        </span>

                        <a href={pdfHref(s)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex-1 text-sm leading-snug"
                        >
                          <span className="font-semibold" style={{ color: style.hex }}>
                            {s.code}:
                          </span>{" "}
                          <span className="font-medium text-navy transition-colors group-hover:text-primary">
                            {s.name}
                          </span>
                        </a>

                        {hasLab && (
                          <Link
                            href={`/practicals/${subjectSlug(s.code)}`}
                            title="View practicals"
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-crimson/10 text-crimson transition-colors hover:bg-crimson hover:text-white"
                          >
                            <FlaskConical className="h-3.5 w-3.5" />
                          </Link>
                        )}

                        <span className="shrink-0 whitespace-nowrap text-[11px] text-stone/50">
                          {ordinal(s.semester)} Sem · {s.credits ?? 3} Cr.
                        </span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </section>
      ) : (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Reveal duration={600}>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Course structure
                </p>
              </Reveal>
              <Reveal delay={100} duration={700}>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  Semester Breakdown
                </h2>
              </Reveal>
              <Reveal
                direction="wipe"
                delay={350}
                duration={800}
                className="mt-5 flex justify-center"
              >
                <span className="block h-[3px] w-20 rounded-full bg-crimson" />
              </Reveal>
            </div>

            {/* Legend */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
              className="mt-8 flex flex-wrap justify-center gap-2.5"
            >
              {(Object.keys(categoryStyles) as SubjectCategory[]).map((key) => (
                <motion.span
                  key={key}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3.5 py-1.5 text-[11px] font-medium text-stone"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-sm"
                    style={{ backgroundColor: categoryStyles[key].hex }}
                  />
                  {categoryStyles[key].label}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={gridVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {curriculum.map((semester) => {
                const rows = getSemesterRows(semester);
                const credits = getSemesterCredits(semester);
                const count = getSemesterCourseCount(semester);

                const counts = semester.subjects.reduce(
                  (acc, s) => {
                    const c = subjectCategory(s.code);
                    acc[c] = (acc[c] ?? 0) + 1;
                    return acc;
                  },
                  {} as Record<SubjectCategory, number>
                );

                const mix = (Object.keys(counts) as SubjectCategory[]).sort(
                  (a, b) => counts[b] - counts[a]
                );

                return (
                  <motion.div
                    key={semester.number}
                    variants={cardVariants}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 26 }}
                    className="overflow-hidden rounded-2xl bg-gray-50 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between gap-4 bg-navy px-6 py-5 text-white">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                          Semester {semester.number}
                        </p>
                        <h3 className="mt-1 text-lg font-bold sm:text-xl">
                          {semester.title}
                        </h3>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold">
                          {credits} Cr.
                        </span>
                        <span className="text-[10px] uppercase tracking-wide text-white/50">
                          {count} {count === 1 ? "course" : "courses"}
                        </span>
                      </div>
                    </div>

                    {/* Composition bar */}
                    <div className="bg-white px-6 pt-4">
                      <div className="flex h-[7px] gap-[3px]">
                        {mix.map((c, i) => (
                          <motion.span
                            key={c}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.65,
                              delay: 0.25 + i * 0.12,
                              ease: [0.22, 0.61, 0.36, 1],
                            }}
                            className="origin-left rounded-full"
                            style={{
                              backgroundColor: categoryStyles[c].hex,
                              flex: counts[c],
                            }}
                          />
                        ))}
                      </div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="mt-2.5 text-[11px] text-stone/50"
                      >
                        {mix
                          .map((c) => `${counts[c]} ${categoryStyles[c].label}`)
                          .join(" · ")}
                      </motion.p>
                    </div>

                    <ul className="bg-white px-6 pb-3">
                      {rows.map((row, idx) => {
                        if (row.kind === "subject") {
                          const subject = row.subject;
                          const style =
                            categoryStyles[subjectCategory(subject.code)];
                          const hasLab = labSubjectSlugs.has(
                            subjectSlug(subject.code)
                          );

                          return (
                            <li
                              key={subject.code}
                              className="border-b border-stone/10 py-3 last:border-0"
                            >
                              <div className="flex items-center justify-between gap-3">
                                <a href={pdfHref(subject)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group flex flex-1 items-center gap-3 rounded-lg px-1.5 py-1 transition-colors hover:bg-gray-50"
                                >
                                  <span
                                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                      backgroundColor: style.tint,
                                      color: style.hex,
                                    }}
                                  >
                                    {idx + 1}
                                  </span>
                                  <span className="text-sm leading-snug">
                                    <span
                                      className="font-semibold"
                                      style={{ color: style.hex }}
                                    >
                                      {subject.code}:
                                    </span>{" "}
                                    <span className="font-medium text-navy transition-colors group-hover:text-primary">
                                      {subject.name}
                                    </span>
                                  </span>
                                  <FileText className="h-3.5 w-3.5 shrink-0 text-transparent transition-colors group-hover:text-primary/50" />
                                </a>

                                <div className="flex shrink-0 items-center gap-2">
                                  {hasLab && (
                                    <Link
                                      href={`/practicals/${subjectSlug(subject.code)}`}
                                      title="View practicals"
                                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-crimson/10 text-crimson transition-colors hover:bg-crimson hover:text-white"
                                    >
                                      <FlaskConical className="h-3.5 w-3.5" />
                                    </Link>
                                  )}
                                  <span className="text-sm font-bold text-stone/50">
                                    {subject.credits ?? 3}
                                  </span>
                                </div>
                              </div>
                            </li>
                          );
                        }

                        const optStyle =
                          categoryStyles[subjectCategory(row.options[0].code)];

                        return (
                          <li
                            key={row.label}
                            className="border-b border-stone/10 py-3 last:border-0"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex flex-1 items-center gap-3 px-1.5">
                                <span
                                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold"
                                  style={{
                                    backgroundColor: optStyle.tint,
                                    color: optStyle.hex,
                                  }}
                                >
                                  {idx + 1}
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-navy">
                                    {row.label}
                                  </span>
                                  <span className="block text-[11px] uppercase tracking-wide text-stone/45">
                                    Choose one
                                  </span>
                                </span>
                              </div>
                              <span className="shrink-0 text-sm font-bold text-stone/50">
                                {row.credits}
                              </span>
                            </div>

                            <div className="ml-10 mt-2 space-y-0.5 rounded-xl border border-dashed border-stone/20 bg-gray-50 p-2">
                              {row.options.map((opt) => (
                                <a key={opt.code}
                                  href={pdfHref(opt)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-white"
                                >
                                  <span
                                    className="font-semibold"
                                    style={{ color: optStyle.hex }}
                                  >
                                    {opt.code}:
                                  </span>
                                  <span className="font-medium text-navy transition-colors group-hover:text-primary">
                                    {opt.name}
                                  </span>
                                  <ArrowUpRight className="h-3 w-3 shrink-0 text-transparent transition-colors group-hover:text-primary/50" />
                                </a>
                              ))}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}