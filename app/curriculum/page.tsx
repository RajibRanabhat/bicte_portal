"use client";

import { motion } from "framer-motion";
import {
  curriculum,
  codeToSlug,
  getSemesterRows,
  getSemesterCredits,
  getSemesterCourseCount,
  getTotalCredits,
  getTotalCourses,
  getTotalElectives,
  type Subject,
} from "@/data/curriculum";
import PageHeader from "@/components/PageHeader";

function pdfHref(subject: Subject): string {
  const slug = subject.syllabus ?? codeToSlug(subject.code);
  return "/syllabus/" + slug + ".pdf";
}

const semesterColors = [
  { pill: "bg-blue-100 text-blue-600", num: "bg-blue-100 text-blue-600" },
  { pill: "bg-pink-100 text-pink-600", num: "bg-pink-100 text-pink-600" },
  { pill: "bg-purple-100 text-purple-600", num: "bg-purple-100 text-purple-600" },
  { pill: "bg-fuchsia-100 text-fuchsia-600", num: "bg-fuchsia-100 text-fuchsia-600" },
  { pill: "bg-red-100 text-red-600", num: "bg-red-100 text-red-600" },
  { pill: "bg-orange-100 text-orange-600", num: "bg-orange-100 text-orange-600" },
  { pill: "bg-teal-100 text-teal-600", num: "bg-teal-100 text-teal-600" },
  { pill: "bg-cyan-100 text-cyan-600", num: "bg-cyan-100 text-cyan-600" },
];

// --- Stat cards: pop in one by one with a little bounce ---
const statGridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

// --- Semester cards: rotate + scale in, one after another ---
const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92, rotate: -1.5 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

// --- Course rows: slide + fade one after another ---
const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

// --- Elective option pills inside a row ---
const optionListVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const optionVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

export default function Curriculum() {
  const totalCredits = getTotalCredits();
  const totalCourses = getTotalCourses();
  const totalElectives = getTotalElectives();

  const stats = [
    { label: "Total Credits", value: totalCredits, color: "text-blue-600" },
    { label: "Total Courses", value: totalCourses, color: "text-purple-600" },
    { label: "Semesters", value: curriculum.length, color: "text-navy" },
    { label: "Electives", value: totalElectives, color: "text-orange-500" },
  ];

  return (
    <>
      <PageHeader
        image="/campus.jpg"
        title="Curriculum"
        subtitle="8-semester course structure with course code, title and credit hours for every subject."
      />

      <section className="bg-white pt-12">
        <motion.div
          variants={statGridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(function (stat) {
              return (
                <motion.div
                  key={stat.label}
                  variants={statCardVariants}
                  whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.2 } }}
                  className="rounded-lg border border-stone/10 bg-white p-4 shadow-sm"
                >
                  <p className="text-xs font-medium text-stone/60">{stat.label}</p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className={"mt-1 text-2xl font-bold " + stat.color}
                  >
                    {stat.value}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-12">
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {curriculum.map(function (semester) {
              const colors = semesterColors[(semester.number - 1) % semesterColors.length];
              const rows = getSemesterRows(semester);
              const credits = getSemesterCredits(semester);
              const count = getSemesterCourseCount(semester);
              const perCourse = count > 0 ? Math.round(credits / count) : 3;

              return (
                <motion.div
                  key={semester.number}
                  variants={cardVariants}
                  whileHover={{ y: -6, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.15)", transition: { duration: 0.25 } }}
                  className="rounded-lg border border-stone/10 bg-gray-50 p-6"
                >
                  <div className="flex items-start justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">BICTE</p>
                    <motion.span
                      initial={{ scale: 0, rotate: -8 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.15 }}
                      className={"rounded-full px-2.5 py-1 text-xs font-semibold " + colors.pill}
                    >
                      {credits} Credits
                    </motion.span>
                  </div>

                  <div className="mt-1 flex items-baseline justify-between">
                    <h2 className="text-xl font-bold text-navy">{semester.title}</h2>
                    <span className="text-xs text-stone/50">{count} Courses, {count}x{perCourse}</span>
                  </div>

                  <motion.ul
                    variants={listVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="mt-4"
                  >
                    {rows.map(function (row, idx) {
                      if (row.kind === "subject") {
                        const subject = row.subject;
                        return (
                          <motion.li
                            key={subject.code}
                            variants={rowVariants}
                            className="flex items-center justify-between gap-3 border-b border-stone/10 py-3 last:border-0"
                          >
                            <motion.a
                              whileHover={{ x: 4 }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              href={pdfHref(subject)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex flex-1 items-center gap-3 rounded px-1 py-0.5 hover:bg-primary/5"
                            >
                              <motion.span
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 350, damping: 18, delay: 0.1 }}
                                className={"flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold " + colors.num}
                              >
                                {idx + 1}
                              </motion.span>
                              <span className="text-sm">
                                <span className="font-semibold text-primary">{subject.code}:</span>{" "}
                                <span className="font-medium text-navy group-hover:text-primary">{subject.name}</span>
                              </span>
                            </motion.a>
                            <span className="shrink-0 text-sm font-semibold text-primary">{subject.credits ?? 3} Cr.</span>
                          </motion.li>
                        );
                      }

                      return (
                        <motion.li
                          key={row.label}
                          variants={rowVariants}
                          className="border-b border-stone/10 py-3 last:border-0"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex flex-1 items-center gap-3">
                              <motion.span
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 350, damping: 18, delay: 0.1 }}
                                className={"flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold " + colors.num}
                              >
                                {idx + 1}
                              </motion.span>
                              <span>
                                <span className="block text-sm font-semibold text-navy">{row.label}</span>
                                <span className="block text-xs text-stone/50">Any one</span>
                              </span>
                            </div>
                            <span className="shrink-0 text-sm font-semibold text-primary">{row.credits} Cr.</span>
                          </div>

                          <motion.div
                            variants={optionListVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="mt-2 ml-10 space-y-1 rounded-md border border-dashed border-amber-300 bg-amber-50/60 p-2"
                          >
                            {row.options.map(function (opt) {
                              return (
                                <motion.a
                                  key={opt.code}
                                  variants={optionVariants}
                                  whileHover={{ x: 3 }}
                                  href={pdfHref(opt)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block rounded px-2 py-1 text-sm text-stone transition-colors hover:bg-white hover:text-primary"
                                >
                                  <span className="font-semibold text-primary">{opt.code}:</span>{" "}
                                  <span className="font-medium text-navy">{opt.name}</span>
                                </motion.a>
                              );
                            })}
                          </motion.div>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </>
  );
}