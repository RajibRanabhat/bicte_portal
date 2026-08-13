"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ClipboardEdit,
  Repeat2,
  ClipboardCheck,
  Clock3,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardEdit,
    title: "Entrance Exam",
    desc: "Sit for the Tribhuvan University entrance exam covering general knowledge and basic IT skills.",
    left: "20.6%",
    top: "9.7%",
    at: 0.06,
  },
  {
    icon: Repeat2,
    title: "Second Attempt",
    desc: "Missed the first one? Appear for the second TU entrance exam held later in the cycle.",
    left: "79.4%",
    top: "31.5%",
    at: 0.28,
  },
  {
    icon: ClipboardCheck,
    title: "Results Published",
    desc: "Tribhuvan University announces results along with the list of eligible candidates.",
    left: "20.6%",
    top: "53.2%",
    at: 0.52,
  },
  {
    icon: Clock3,
    title: "Admission Deadline",
    desc: "Submit your documents and pay the fees before the deadline to confirm your seat.",
    left: "79.4%",
    top: "75%",
    at: 0.76,
  },
  {
    icon: GraduationCap,
    title: "Enrollment",
    desc: "Officially enrolled into BICTE's first semester. Welcome aboard.",
    left: "50%",
    top: "91.9%",
    at: 0.95,
  },
];

const ROAD =
  "M140,60 C140,127 540,127 540,195 C540,262 140,262 140,330 C140,397 540,397 540,465 C540,522 340,515 340,570";

function Pin({
  step,
  index,
  progress,
}: {
  step: (typeof steps)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const Icon = step.icon;
  const isLast = index === steps.length - 1;

  const scale = useTransform(progress, [step.at - 0.05, step.at], [0.55, 1]);
  const opacity = useTransform(progress, [step.at - 0.05, step.at], [0.35, 1]);
  const labelY = useTransform(progress, [step.at - 0.03, step.at + 0.02], [-6, 0]);
  const labelOpacity = useTransform(progress, [step.at, step.at + 0.03], [0, 1]);

  return (
    <div
      className="group absolute flex -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center gap-2"
      style={{ left: step.left, top: step.top }}
    >
      <motion.span
        style={{ scale, opacity }}
        className={`relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md transition-transform duration-300 group-hover:scale-110 ${
          isLast ? "bg-crimson" : "bg-primary"
        }`}
      >
        <Icon className="h-5 w-5" />
        <span
          className={`absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white ${
            isLast ? "bg-crimson-dark" : "bg-navy"
          }`}
        >
          {index + 1}
        </span>
      </motion.span>

      <motion.span
        style={{ y: labelY, opacity: labelOpacity }}
        className="whitespace-nowrap text-xs font-semibold text-navy"
      >
        {step.title}
      </motion.span>

      <span
        className={`pointer-events-none absolute top-full z-20 mt-2 w-48 rounded-xl border bg-white p-3 text-center text-xs leading-relaxed text-stone opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 ${
          isLast ? "border-crimson/30" : "border-primary/25"
        }`}
      >
        {step.desc}
      </span>
    </div>
  );
}

export default function AdmissionRoad() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.55"],
  });

  const dashOffset = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <>
      {/* Desktop — snaking road */}
      <div ref={trackRef} className="relative mt-12 hidden h-[620px] w-full md:block">
        <svg
          viewBox="0 0 680 620"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d={ROAD}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="6 7"
          />
          <motion.path
            d={ROAD}
            fill="none"
            stroke="#1878b5"
            strokeWidth="4"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray={100}
            style={{ strokeDashoffset: dashOffset }}
          />
        </svg>

        {steps.map((step, i) => (
          <Pin key={step.title} step={step} index={i} progress={scrollYProgress} />
        ))}
      </div>

      {/* Mobile — vertical timeline */}
      <div className="relative mt-10 md:hidden">
        <div className="absolute bottom-0 left-[19px] top-0 w-[2px] bg-gray-200" />
        <div className="space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="relative flex gap-4"
              >
                <span
                  className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white ${
                    isLast ? "bg-crimson" : "bg-primary"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-navy text-[9px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div className="pt-0.5">
                  <p className="font-semibold text-navy">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-stone">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}