"use client";

import { useId, useState } from "react";
import type { Practical, Semester } from "@/data/practicals";
import { SEMESTER_LABELS } from "@/data/practicals";
import { PracticalCard } from "./practical-card";

interface SemesterSectionProps {
  semester: Semester;
  practicals: Practical[];
  /** Open by default (e.g. the first semester) */
  defaultOpen?: boolean;
}

export function SemesterSection({ semester, practicals, defaultOpen = false }: SemesterSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <section className="overflow-hidden rounded-md border border-[#DDD8CC] bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2">
          <span className="text-base">📚</span>
          <span className="text-base font-semibold text-[#1C2333]">{SEMESTER_LABELS[semester]}</span>
          <span className="font-mono text-xs text-[#8A8577]">
            {practicals.length} {practicals.length === 1 ? "practical" : "practicals"}
          </span>
        </span>
        <span
          className={`text-[#8A8577] transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          ⌄
        </span>
      </button>

      {open && (
        <div id={panelId} className="border-t border-[#DDD8CC] bg-[#FBFAF6] p-4">
          {practicals.length === 0 ? (
            <p className="text-sm text-[#5B5748]">No practicals added for this semester yet.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {practicals.map((p) => (
                <PracticalCard key={p.id} practical={p} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}