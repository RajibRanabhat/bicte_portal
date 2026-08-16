"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  FileText,
  Download,
  User,
  ArrowLeft,
  FlaskConical,
} from "lucide-react";
import type { PracticalSubject } from "@/data/practicals";
import { codeToSlug } from "@/data/curriculum";
import Reveal from "@/components/Reveal";

const ordinal = (n: number) =>
  n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : `${n}th`;

export default function SubjectLabs({
  subject,
  semester,
}: {
  subject: PracticalSubject;
  semester: number;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const labs = subject.labs ?? [];

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-navy py-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/practicals"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All practicals
          </Link>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            {ordinal(semester)} Semester · {subject.code}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {subject.name}
          </h1>
          <span className="mt-5 inline-block h-[3px] w-16 rounded-full bg-crimson" />

          {subject.description && (
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              {subject.description}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`/syllabus/${codeToSlug(subject.code)}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white/85 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10"
            >
              <FileText className="h-4 w-4" />
              View Syllabus
            </a>

            {subject.labsheet && (
              <a
                href={`/labsheets/${subject.labsheet}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-crimson px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-crimson-dark"
              >
                <Download className="h-4 w-4" />
                Full Lab Report
              </a>
            )}
          </div>

          {subject.teacher && (
            <p className="mt-6 inline-flex items-center gap-2 text-xs text-white/50">
              <User className="h-3.5 w-3.5" />
              Conducted by{" "}
              <span className="font-semibold text-white/80">
                {subject.teacher}
              </span>
            </p>
          )}
        </div>
      </section>

      {/* Labs */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {labs.length === 0 ? (
            <Reveal duration={700}>
              <div className="rounded-2xl bg-gray-50 py-20 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FlaskConical className="h-7 w-7" />
                </div>
                <p className="mt-5 font-semibold text-navy">
                  Labsheets not published yet
                </p>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-stone">
                  Lab work for this subject is ongoing. Verified labsheets will
                  appear here once completed and signed off.
                </p>
                <Link
                  href="/practicals"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Browse other subjects
                </Link>
              </div>
            </Reveal>
          ) : (
            <>
              <Reveal duration={600}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-stone/60">
                  Table of Contents · {labs.length} labs
                </h2>
              </Reveal>

              <div className="mt-8 space-y-3">
                {labs.map((lab, idx) => {
                  const isOpen = open === lab.number;
                  return (
                    <Reveal
                      key={lab.number}
                      direction="up"
                      duration={600}
                      delay={idx * 55}
                    >
                      <div
                        className={`overflow-hidden rounded-xl transition-colors duration-300 ${
                          isOpen ? "bg-primary/5 ring-1 ring-primary/20" : "bg-gray-50"
                        }`}
                      >
                        <button
                          onClick={() =>
                            setOpen(isOpen ? null : lab.number)
                          }
                          className="flex w-full cursor-pointer items-center gap-4 p-5 text-left transition-colors hover:bg-primary/5"
                        >
                          <span
                            className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors duration-300 ${
                              isOpen
                                ? "bg-primary text-white"
                                : "bg-white text-primary"
                            }`}
                          >
                            {String(lab.number).padStart(2, "0")}
                          </span>
                          <span className="flex-1 font-semibold leading-snug text-navy">
                            {lab.title}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 flex-shrink-0 text-stone/40 transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`grid transition-all duration-400 ease-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="border-t border-primary/10 px-5 py-5 pl-[4.5rem]">
                              {lab.tools && lab.tools.length > 0 && (
                                <>
                                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone/50">
                                    Tools used
                                  </p>
                                  <div className="mt-2.5 flex flex-wrap gap-2">
                                    {lab.tools.map((tool) => (
                                      <span
                                        key={tool}
                                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20"
                                      >
                                        {tool}
                                      </span>
                                    ))}
                                  </div>
                                </>
                              )}

                              {subject.labsheet && (
                                <a
                                  href={`/labsheets/${subject.labsheet}${
                                    lab.page ? `#page=${lab.page}` : ""
                                  }`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
                                >
                                  <FileText className="h-3.5 w-3.5" />
                                  Open labsheet
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}