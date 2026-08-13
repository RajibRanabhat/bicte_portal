"use client";

import { useState } from "react";
import { FlaskConical, FileText } from "lucide-react";
import { practicals } from "@/data/practicals";
import { codeToSlug } from "@/data/curriculum";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export default function Practicals() {
  const [activeSemester, setActiveSemester] = useState(1);
  const [openSubject, setOpenSubject] = useState<string | null>(null);

  const currentSemester = practicals.find((s) => s.number === activeSemester);

  const toggleSubject = (code: string) => {
    setOpenSubject((prev) => (prev === code ? null : code));
  };

  const ordinal = (n: number) => {
    if (n === 1) return "1st";
    if (n === 2) return "2nd";
    if (n === 3) return "3rd";
    return n + "th";
  };

  return (
    <>
      <PageHeader
        image="/gallery/demo.jpg"
        title="Practicals"
        subtitle="Lab sessions, tools, and syllabi for BICTE's ICT subjects"
      />

      <section className="bg-white py-16">
        <Reveal>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {practicals.map((sem) => {
                const isActive = activeSemester === sem.number;
                return (
                  <button
                    key={sem.number}
                    onClick={() => {
                      setActiveSemester(sem.number);
                      setOpenSubject(null);
                    }}
                    className={
                      "cursor-pointer rounded-md border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors " +
                      (isActive
                        ? "border-primary bg-primary text-white"
                        : "border-stone/20 text-stone hover:border-primary/40 hover:text-primary")
                    }
                  >
                    {ordinal(sem.number)} Sem
                  </button>
                );
              })}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {currentSemester
                ? currentSemester.subjects.map((subject) => {
                    const isOpen = openSubject === subject.code;
                    return (
                      <div
                        key={subject.code}
                        className="overflow-hidden rounded-lg border border-stone/10"
                      >
                        <button
                          onClick={() => toggleSubject(subject.code)}
                          className="flex w-full cursor-pointer items-start justify-between gap-3 bg-gray-50 p-5 text-left transition-colors hover:bg-primary/5"
                        >
                          <div>
                            {subject.group ? (
                              <span className="mb-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                                {subject.group}
                              </span>
                            ) : null}
                            <p className="text-xs font-semibold text-primary">
                              {subject.code}
                            </p>
                            <p className="mt-0.5 font-semibold text-navy">
                              {subject.name}
                              {subject.note ? (
                                <span className="ml-1.5 text-xs font-normal text-stone/60">
                                  ({subject.note})
                                </span>
                              ) : null}
                            </p>
                          </div>
                          <FlaskConical className="mt-1 h-5 w-5 flex-shrink-0 text-primary/40" />
                        </button>

                        {isOpen ? (
                          <div className="border-t border-stone/10 bg-white p-5">
                            <a
                              href={"/syllabus/" + codeToSlug(subject.code) + ".pdf"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary underline"
                            >
                              <FileText className="h-3.5 w-3.5" />
                              View Syllabus
                            </a>

                            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-stone/60">
                              Table of Contents
                            </p>
                            <p className="mt-2 text-sm italic text-stone/50">
                              Lab sheets coming soon.
                            </p>
                          </div>
                        ) : null}
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}