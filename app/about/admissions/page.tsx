import {
  ClipboardEdit,
  Repeat2,
  ClipboardCheck,
  Clock3,
  GraduationCap,
  Banknote,
  Award,
  HeartHandshake,
  Globe2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";

const roadmapSteps = [
  {
    icon: ClipboardEdit,
    label: "Entrance Exam",
    desc: "Sit for the TU entrance exam covering general knowledge and basic IT skills.",
    x: 6,
    y: 25,
  },
  {
    icon: Repeat2,
    label: "2nd Exam",
    desc: "Missed the first attempt? Appear for the second TU entrance exam.",
    x: 30,
    y: 78,
  },
  {
    icon: ClipboardCheck,
    label: "Results",
    desc: "Tribhuvan University announces results and eligible candidates.",
    x: 55,
    y: 25,
  },
  {
    icon: Clock3,
    label: "Admission Deadline",
    desc: "Submit documents and pay fees before the deadline to confirm your seat.",
    x: 78,
    y: 78,
  },
  {
    icon: GraduationCap,
    label: "Enrollment",
    desc: "Officially enrolled into BICTE's first semester. Welcome aboard!",
    x: 96,
    y: 25,
  },
];

const ranks = [
  {
    rank: "1st Rank",
    amount: "NPR 15,000",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    border: "border-amber-200",
  },
  {
    rank: "2nd Rank",
    amount: "NPR 10,000",
    iconBg: "bg-gray-200",
    iconColor: "text-gray-500",
    border: "border-gray-300",
  },
  {
    rank: "3rd Rank",
    amount: "NPR 5,000",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
    border: "border-orange-200",
  },
];

const otherScholarships = [
  {
    icon: HeartHandshake,
    title: "Financial Hardship Support",
    desc: "Students from economically disadvantaged backgrounds may also be considered for scholarship assistance.",
  },
  {
    icon: Globe2,
    title: "External Programs",
    desc: "Merit- or need-based scholarships offered by government and private institutions beyond the campus.",
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

      {/* Admission Roadmap */}
      <section className="bg-white py-16">
        <Reveal>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
              Admission Roadmap
            </h2>

            {/* Desktop curvy road */}
            <div className="relative mt-16 hidden h-64 w-full md:block">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <defs>
                  <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1878b5" />
                    <stop offset="70%" stopColor="#1878b5" />
                    <stop offset="100%" stopColor="#c0392b" />
                  </linearGradient>
                </defs>
                <path
                  d="M 6 25 C 20 25, 20 78, 30 78 S 45 25, 55 25 S 68 78, 78 78 S 90 25, 96 25"
                  fill="none"
                  stroke="url(#roadGradient)"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeDasharray="1.2 2.4"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {roadmapSteps.map((step, idx) => {
                const Icon = step.icon;
                const isLast = idx === roadmapSteps.length - 1;
                const cardAbove = step.y > 50;
                return (
                  <div
                    key={step.label}
                    className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ left: `${step.x}%`, top: `${step.y}%` }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-md transition-transform duration-200 group-hover:scale-110 ${
                            isLast
                              ? "bg-crimson group-hover:animate-pulse"
                              : "bg-primary"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span
                          className={`absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white ${
                            isLast ? "bg-crimson-dark" : "bg-navy"
                          }`}
                        >
                          {idx + 1}
                        </span>
                      </div>
                      <span className="mt-1.5 whitespace-nowrap text-xs font-semibold text-stone">
                        {step.label}
                      </span>
                    </div>
                    <div
                      className={`pointer-events-none absolute left-1/2 w-40 -translate-x-1/2 rounded-lg border p-2.5 text-center text-xs text-stone opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 ${
                        isLast ? "border-crimson" : "border-primary"
                      } bg-white ${
                        cardAbove
                          ? "bottom-full mb-2 translate-y-1 group-hover:translate-y-0"
                          : "top-full mt-2 -translate-y-1 group-hover:translate-y-0"
                      }`}
                    >
                      {step.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile fallback — vertical list */}
            <div className="mt-10 space-y-4 md:hidden">
              {roadmapSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-navy text-[9px] font-bold text-white">
                        {idx + 1}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        {step.label}
                      </p>
                      <p className="text-xs text-stone">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Fees */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-primary/15 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Banknote className="h-7 w-7" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-navy">
                Semester Fee
              </h2>
              <p className="mt-2 text-4xl font-bold text-primary">
                NPR 50,000
              </p>
              <p className="mt-1 text-xs text-stone/70">
                As per the university-set rate, per semester
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Scholarships */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div>
              <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
                Scholarship Opportunities
              </h2>
              <p className="mt-3 text-center text-sm text-stone sm:text-base">
                Aadikavi Bhanubhakta Campus supports academic excellence and
                eases financial burden through several scholarship avenues.
              </p>
            </div>
          </Reveal>

          <div className="mt-10">
            <h3 className="text-center font-semibold text-navy">
              Merit-Based Campus Scholarships
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {ranks.map((item, idx) => (
                <Reveal key={item.rank} delay={idx * 120}>
                  <div
                    className={`rounded-xl border ${item.border} bg-gray-50 p-6 text-center transition-shadow hover:shadow-md`}
                  >
                    <div
                      className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}
                    >
                      <Award className="h-6 w-6" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-stone">
                      {item.rank}
                    </p>
                    <p className="mt-1 text-xl font-bold text-primary">
                      {item.amount}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-stone/70">
              Ties split the award proportionally from the NPR 30,000 pool.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {otherScholarships.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={idx * 120}>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-stone">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}