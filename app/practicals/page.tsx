"use client";

import { useState } from "react";
import Link from "next/link";
import { FlaskConical, FileText, ArrowRight, Wrench, ClipboardList } from "lucide-react";
import { practicals, subjectSlug } from "@/data/practicals";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const ordinal = (n: number) =>
  n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : `${n}th`;

const intro = [
  {
    icon: FlaskConical,
    title: "Practical Sessions",
    desc: "Every ICT subject with a lab component runs weekly practical sessions in the campus computer lab.",
  },
  {
    icon: Wrench,
    title: "Industry Tools",
    desc: "Students work with the same tools used in the field — Wireshark, IDEs, database systems and more.",
  },
  {
    icon: ClipboardList,
    title: "Verified Labsheets",
    desc: "Completed lab reports are checked and signed off by the subject teacher before submission.",
  },
];

export default function Practicals() {
  const [activeSemester, setActiveSemester] = useState(5);
  const current = practicals.find((s) => s.number === activeSemester);

  return (
    <>
      <PageHeader
        image="/gallery/demo.jpg"
        title="Practicals"
        subtitle="Lab sessions, tools, and labsheets for BICTE's ICT subjects"
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Reveal duration={600}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Learning by doing
              </p>
            </Reveal>
            <Reveal delay={100} duration={700}>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Practical Work at BICTE
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
            <Reveal delay={250} duration={700}>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-stone sm:text-base">
                Theory only goes so far. Alongside lectures, ICT subjects carry
                structured lab work where students build, break and analyse real
                systems — then document what they found.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {intro.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  direction={idx === 0 ? "left" : idx === 2 ? "right" : "up"}
                  duration={700}
                  delay={idx * 130}
                >
                  <div className="group h-full rounded-2xl bg-gray-50 p-7 transition-all duration-300 hover:bg-white hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-bold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Semester browser */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal duration={600}>
            <h2 className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-stone/60">
              Browse by semester
            </h2>
          </Reveal>

          <Reveal delay={120} duration={700}>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {practicals.map((sem) => {
                const isActive = activeSemester === sem.number;
                return (
                  <button
                    key={sem.number}
                    onClick={() => setActiveSemester(sem.number)}
                    className={`cursor-pointer rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-md shadow-primary/25"
                        : "bg-white text-stone/70 hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    {ordinal(sem.number)} Sem
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div
            key={activeSemester}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {current?.subjects.map((subject, idx) => {
              const labCount = subject.labs?.length ?? 0;
              const hasLabs = labCount > 0;

              return (
                <Reveal
                  key={subject.code}
                  direction={idx % 2 === 0 ? "left" : "right"}
                  duration={650}
                  delay={idx * 90}
                >
                  <Link
                    href={`/practicals/${subjectSlug(subject.code)}`}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      hasLabs ? "ring-1 ring-primary/15" : ""
                    }`}
                  >
                    <span
                      className={`absolute inset-y-0 left-0 w-1 origin-top transition-transform duration-500 ${
                        hasLabs
                          ? "scale-y-100 bg-primary"
                          : "scale-y-0 bg-stone/30 group-hover:scale-y-100"
                      }`}
                    />

                    <div className="flex items-start justify-between gap-3">
                      <div>
                        {subject.group && (
                          <span className="mb-2 inline-block rounded-full bg-crimson/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-crimson">
                            {subject.group}
                          </span>
                        )}
                        <p className="text-xs font-semibold tracking-wide text-primary">
                          {subject.code}
                        </p>
                        <h3 className="mt-1 font-bold leading-snug text-navy">
                          {subject.name}
                          {subject.note && (
                            <span className="ml-1.5 text-xs font-normal text-stone/60">
                              ({subject.note})
                            </span>
                          )}
                        </h3>
                      </div>
                      <FlaskConical
                        className={`h-5 w-5 flex-shrink-0 transition-colors duration-300 ${
                          hasLabs ? "text-primary" : "text-stone/25"
                        }`}
                      />
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-stone/10 pt-4">
                      {hasLabs ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                          <FileText className="h-3.5 w-3.5" />
                          {labCount} labsheets
                        </span>
                      ) : (
                        <span className="text-xs text-stone/50">
                          Labsheets coming soon
                        </span>
                      )}
                      <ArrowRight className="h-4 w-4 text-stone/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}