import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";

const admissionSteps = [
  {
    title: "Entrance Exam",
    desc: "All prospective students must sit for an entrance exam conducted by Tribhuvan University, covering general knowledge, logical reasoning, and foundational IT skills. The exam fee is set by the university and paid during application.",
  },
  {
    title: "Second Entrance Exam (Missed First Attempt)",
    desc: "Students unable to attend the first exam due to genuine circumstances may appear for a second entrance exam, also conducted by TU, following the same syllabus and evaluation criteria.",
  },
  {
    title: "Result Announcement",
    desc: "Tribhuvan University announces the entrance exam results. Students who pass become eligible for admission into BICTE at Aadikavi Bhanubhakta Campus.",
  },
  {
    title: "Admission Deadline",
    desc: "Successful candidates must complete their admission — submitting documents, paying fees, and registering — before the given deadline. Unfilled seats are then offered to second-exam candidates or the waiting list.",
  },
  {
    title: "Final Enrollment",
    desc: "Once all formalities are complete, students are officially enrolled into the first semester of the BICTE programme.",
  },
];

export default function Admissions() {
  return (
    <>
      <PageHeader
        image="/gallery/graduates.jpg"
        title="Admissions"
        subtitle="How to apply, fees, and scholarship opportunities for BICTE"
      />

      {/* Admission Process */}
      <section className="bg-white py-16">
        <Reveal>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Admission Process
            </h2>
            <p className="mt-3 text-sm text-stone sm:text-base">
              Admission into BICTE follows a fair, structured process
              coordinated with Tribhuvan University.
            </p>

            <div className="mt-8 space-y-6">
              {admissionSteps.map((step, idx) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">{step.title}</h3>
                    <p className="mt-1 text-sm text-stone">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Fees */}
      <section className="bg-gray-50 py-16">
        <Reveal>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Semester Fee
            </h2>
            <p className="mt-4 text-4xl font-bold text-primary">
              NPR 40,000
              <span className="ml-2 text-base font-normal text-stone">
                / semester
              </span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* Scholarships */}
      <section className="bg-white py-16">
        <Reveal>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Scholarship Opportunities
            </h2>
            <p className="mt-3 text-sm text-stone sm:text-base">
              Aadikavi Bhanubhakta Campus supports academic excellence and
              eases financial burden through several scholarship avenues.
            </p>

            <div className="mt-8">
              <h3 className="font-semibold text-navy">
                Merit-Based Campus Scholarships
              </h3>
              <p className="mt-2 text-sm text-stone">
                Each semester, the top three rank holders receive a fee
                deduction, funded from a total pool of NPR 30,000:
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { rank: "1st Rank", amount: "NPR 15,000" },
                  { rank: "2nd Rank", amount: "NPR 10,000" },
                  { rank: "3rd Rank", amount: "NPR 5,000" },
                ].map((item) => (
                  <div
                    key={item.rank}
                    className="rounded-lg border border-stone/10 bg-gray-50 p-5 text-center"
                  >
                    <p className="text-sm text-stone">{item.rank}</p>
                    <p className="mt-1 text-xl font-bold text-primary">
                      {item.amount}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-stone/80">
                If multiple students tie for a rank, the corresponding award
                is divided equally among them; in such cases the fund is
                redistributed proportionally rather than granting all three
                tiers separately.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {[
                "Financial hardship support — students from economically disadvantaged backgrounds may also be considered for scholarship assistance.",
                "External merit- or need-based programs — offered by government and private institutions beyond the campus.",
              ].map((point) => (
                <div key={point} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-sm text-stone">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}