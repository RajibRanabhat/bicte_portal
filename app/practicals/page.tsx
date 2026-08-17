import type { Metadata } from "next";
import { practicals } from "@/data/practicals";
import type { Semester } from "@/data/practicals";
import { SemesterSection } from "@/components/practicals/semester-section";

export const metadata: Metadata = {
  title: "Practicals | BICTE Portal",
  description: "Semester-wise practical work for the BICTE program.",
};

const ALL_SEMESTERS: Semester[] = [1, 2, 3, 4, 5, 6, 7, 8];

export default function PracticalsPage() {
  return (
    <main className="min-h-screen bg-[#F4F5F1]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-6 border-b border-[#DDD8CC] pb-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8A8577]">BICTE Portal</p>
          <h1 className="text-2xl font-bold text-[#1C2333] sm:text-3xl">Practicals</h1>
          <p className="mt-1 text-sm text-[#5B5748]">
            Practical work organised semester-wise. Open a semester to see its subjects.
          </p>
        </header>

        <div className="space-y-3">
          {ALL_SEMESTERS.map((semester) => (
            <SemesterSection
              key={semester}
              semester={semester}
              practicals={practicals.filter((p) => p.semester === semester)}
              defaultOpen={semester === 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}