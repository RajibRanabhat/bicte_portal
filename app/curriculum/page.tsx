import { curriculum, codeToSlug } from "@/data/curriculum";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";

export default function Curriculum() {
  return (
    <>
      <PageHeader
        image="/campus.jpg"
        title="Curriculum"
        subtitle="8-semester course structure for the BICTE programme"
      />

      {/* Semester Grid */}
      <section className="bg-white py-16">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {curriculum.map((semester) => (
                <div
                  key={semester.number}
                  className="rounded-lg border border-stone/10 bg-gray-50 p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    BICTE
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-navy">
                    {semester.title}
                  </h2>

                  <ol className="mt-4 space-y-2">
                    {semester.subjects.map((subject, idx) => (
                      <li key={subject.code}>
                        <a
                          href={`/syllabus/${subject.syllabus ?? codeToSlug(subject.code)}.pdf`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block cursor-pointer rounded px-1 py-0.5 text-sm text-stone transition-colors hover:bg-primary/5 hover:text-primary"
                        >
                          <span className="font-medium text-navy">
                            {idx + 1}.
                          </span>{" "}
                          <span className="text-primary">
                            {subject.code}:
                          </span>{" "}
                          {subject.name}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}