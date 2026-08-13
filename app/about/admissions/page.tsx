import { Award, HeartHandshake, Globe2, Wallet, BookOpen, Building2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import CountUp from "@/components/CountUp";
import AdmissionRoad from "@/components/AdmissionRoad";

const ranks = [
  {
    rank: "1st Rank",
    amount: 15000,
    accent: "from-amber-300 to-amber-500",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    ring: "ring-amber-200",
    order: "sm:order-2",
    lift: "sm:-mt-6 sm:pb-10",
  },
  {
    rank: "2nd Rank",
    amount: 10000,
    accent: "from-gray-300 to-gray-400",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-500",
    ring: "ring-gray-200",
    order: "sm:order-1",
    lift: "",
  },
  {
    rank: "3rd Rank",
    amount: 5000,
    accent: "from-orange-300 to-orange-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
    ring: "ring-orange-200",
    order: "sm:order-3",
    lift: "",
  },
];

const rankDirections = ["up", "left", "right"] as const;

const included = [
  { icon: BookOpen, label: "Tuition" },
  { icon: Building2, label: "Campus services" },
  { icon: Wallet, label: "Exam fees" },
];

const otherScholarships = [
  {
    icon: HeartHandshake,
    eyebrow: "Need based",
    title: "Financial Hardship Support",
    desc: "Students from economically disadvantaged backgrounds may also be considered for scholarship assistance.",
    bar: "bg-crimson",
    iconBg: "bg-crimson/10",
    iconColor: "text-crimson",
  },
  {
    icon: Globe2,
    eyebrow: "Beyond campus",
    title: "External Programs",
    desc: "Merit- or need-based scholarships offered by government and private institutions beyond the campus.",
    bar: "bg-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
];

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center">
      <Reveal duration={600}>
        <p
          className={`text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? "text-white/60" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={100} duration={700}>
        <h2
          className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {title}
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
      {subtitle && (
        <Reveal delay={250} duration={700}>
          <p
            className={`mx-auto mt-6 max-w-2xl text-sm leading-relaxed sm:text-base ${
              light ? "text-white/70" : "text-stone"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export default function Admissions() {
  return (
    <>
      <PageHeader
        image="/gallery/graduates.jpg"
        title="Admissions"
        subtitle="How to apply, fees, and scholarship opportunities for BICTE"
      />

      {/* Admission Roadmap */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="How to apply" title="Admission Roadmap" />
          <AdmissionRoad />
        </div>
      </section>

      {/* Semester Fee */}
      <section className="relative overflow-hidden bg-navy py-24">
        {/* Decorative glow + grid */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-crimson/10 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal direction="left" duration={800}>
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  What it costs
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Semester Fee
                </h2>
                <span className="mt-5 inline-block h-[3px] w-16 rounded-full bg-crimson" />
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
                  Charged per semester as per the university-set rate, covering
                  tuition and standard campus services.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-2.5 md:justify-start">
                  {included.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Reveal
                        key={item.label}
                        direction="up"
                        duration={600}
                        delay={300 + idx * 110}
                      >
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors duration-300 hover:border-white/30 hover:bg-white/10">
                          <Icon className="h-3.5 w-3.5" />
                          {item.label}
                        </span>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal direction="scale" duration={900} delay={150}>
              <div className="group relative mx-auto w-full max-w-sm">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 to-crimson/20 blur-xl transition-opacity duration-500 group-hover:opacity-80" />
                <div className="relative rounded-3xl border border-white/15 bg-white/[0.07] p-10 text-center backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                    Per semester
                  </p>
                  <p className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                    <CountUp value={50000} prefix="NPR " />
                  </p>
                  <div className="mx-auto mt-6 h-px w-24 bg-white/20" />
                  <p className="mt-5 text-xs leading-relaxed text-white/50">
                    Rate set by Tribhuvan University
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Support available"
            title="Scholarship Opportunities"
            subtitle="Aadikavi Bhanubhakta Campus supports academic excellence and eases financial burden through several scholarship avenues."
          />

          {/* Podium */}
          <div className="mt-16">
            <Reveal duration={600}>
              <h3 className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-stone/60">
                Merit-Based Campus Scholarships
              </h3>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 items-end gap-6 sm:grid-cols-3">
              {ranks.map((item, idx) => (
                <Reveal
                  key={item.rank}
                  direction={rankDirections[idx]}
                  duration={750}
                  delay={idx * 130}
                  className={item.order}
                >
                  <div
                    className={`group relative h-full overflow-hidden rounded-2xl bg-gray-50 p-8 text-center ring-1 ${item.ring} transition-all duration-400 hover:-translate-y-2 hover:bg-white hover:shadow-xl ${item.lift}`}
                  >
                    <span
                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`}
                    />
                    <div
                      className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <Award className="h-7 w-7" />
                    </div>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone/70">
                      {item.rank}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
                      <CountUp value={item.amount} prefix="NPR " />
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal direction="fade" delay={400} duration={800}>
              <p className="mt-8 text-center text-xs text-stone/60">
                Ties split the award proportionally from the NPR 30,000 pool.
              </p>
            </Reveal>
          </div>

          {/* Other scholarships */}
          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
            {otherScholarships.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  direction={idx === 0 ? "left" : "right"}
                  duration={750}
                  delay={idx * 140}
                >
                  <div className="group relative h-full overflow-hidden rounded-2xl bg-gray-50 p-7 pl-8 transition-all duration-400 hover:bg-white hover:shadow-lg">
                    <span
                      className={`absolute inset-y-0 left-0 w-1 origin-top scale-y-0 ${item.bar} transition-transform duration-500 group-hover:scale-y-100`}
                    />
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor} transition-transform duration-500 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {item.eyebrow}
                    </p>
                    <h4 className="mt-2 text-lg font-bold text-navy">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-stone">
                      {item.desc}
                    </p>
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