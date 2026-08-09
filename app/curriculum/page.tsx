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
import Reveal from "@/components/Reveal";
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

export default function Curriculum() {
  const totalCredits = getTotalCredits();
  const totalCourses = getTotalCourses();
  const totalElectives = getTotalElectives();

  return (
    <>
      <PageHeader
        image="/campus.jpg"
        title="Curriculum"
        subtitle="8-semester course structure with course code, title and credit hours for every subject."
      />

      <section className="bg-white pt-12">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-lg border border-stone/10 bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-stone/60">Total Credits</p>
                <p className="mt-1 text-2xl font-bold text-blue-600">{totalCredits}</p>
              </div>
              <div className="rounded-lg border border-stone/10 bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-stone/60">Total Courses</p>
                <p className="mt-1 text-2xl font-bold text-purple-600">{totalCourses}</p>
              </div>
              <div className="rounded-lg border border-stone/10 bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-stone/60">Semesters</p>
                <p className="mt-1 text-2xl font-bold text-navy">{curriculum.length}</p>
              </div>
              <div className="rounded-lg border border-stone/10 bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-stone/60">Electives</p>
                <p className="mt-1 text-2xl font-bold text-orange-500">{totalElectives}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white py-12">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {curriculum.map(function (semester) {
                const colors = semesterColors[(semester.number - 1) % semesterColors.length];
                const rows = getSemesterRows(semester);
                const credits = getSemesterCredits(semester);
                const count = getSemesterCourseCount(semester);
                const perCourse = count > 0 ? Math.round(credits / count) : 3;

                return (
                  <div key={semester.number} className="rounded-lg border border-stone/10 bg-gray-50 p-6">
                    <div className="flex items-start justify-between">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">BICTE</p>
                      <span className={"rounded-full px-2.5 py-1 text-xs font-semibold " + colors.pill}>{credits} Credits</span>
                    </div>

                    <div className="mt-1 flex items-baseline justify-between">
                      <h2 className="text-xl font-bold text-navy">{semester.title}</h2>
                      <span className="text-xs text-stone/50">{count} Courses, {count}x{perCourse}</span>
                    </div>

                    <ul className="mt-4">
                      {rows.map(function (row, idx) {
                        if (row.kind === "subject") {
                          const subject = row.subject;
                          return (
                            <li key={subject.code} className="flex items-center justify-between gap-3 border-b border-stone/10 py-3 last:border-0">
                              <a href={pdfHref(subject)} target="_blank" rel="noopener noreferrer" className="group flex flex-1 items-center gap-3 rounded px-1 py-0.5 hover:bg-primary/5">
                                <span className={"flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold " + colors.num}>{idx + 1}</span>
                                <span className="text-sm">
                                  <span className="font-semibold text-primary">{subject.code}:</span>{" "}
                                  <span className="font-medium text-navy group-hover:text-primary">{subject.name}</span>
                                </span>
                              </a>
                              <span className="shrink-0 text-sm font-semibold text-primary">{subject.credits ?? 3} Cr.</span>
                            </li>
                          );
                        }

                        return (
                          <li key={row.label} className="border-b border-stone/10 py-3 last:border-0">
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex flex-1 items-center gap-3">
                                <span className={"flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold " + colors.num}>{idx + 1}</span>
                                <span>
                                  <span className="block text-sm font-semibold text-navy">{row.label}</span>
                                  <span className="block text-xs text-stone/50">Any one</span>
                                </span>
                              </div>
                              <span className="shrink-0 text-sm font-semibold text-primary">{row.credits} Cr.</span>
                            </div>

                            <div className="mt-2 ml-10 space-y-1 rounded-md border border-dashed border-amber-300 bg-amber-50/60 p-2">
                              {row.options.map(function (opt) {
                                return (
                                  <a key={opt.code} href={pdfHref(opt)} target="_blank" rel="noopener noreferrer" className="block rounded px-2 py-1 text-sm text-stone transition-colors hover:bg-white hover:text-primary">
                                    <span className="font-semibold text-primary">{opt.code}:</span>{" "}
                                    <span className="font-medium text-navy">{opt.name}</span>
                                  </a>
                                );
                              })}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}