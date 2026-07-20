"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, BookOpen, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";

const heroImages = [
  { src: "/campus.jpg", alt: "Aadikavi Bhanubhakta Campus building" },
  { src: "/gallery/club.jpg", alt: "ABIT Club — Best Club of the Year" },
  { src: "/gallery/demo.jpg", alt: "IoT project demonstration" },
  { src: "/gallery/graduates.jpg", alt: "BICTE graduates at convocation" },
];

const stats = [
  { value: 13, suffix: "+", label: "Years of Service", icon: Clock },
  { value: 10, suffix: "+", label: "Staff Members", icon: Users },
  { value: 100, suffix: "+", label: "Students", icon: BookOpen },
  { value: 120, suffix: "+", label: "Graduates", icon: GraduationCap },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const steps = 40;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
        {heroImages.map((img, idx) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={idx === 0}
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-navy/70" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="text-sm font-medium text-white/90 sm:text-base">
            Aadikavi Bhanubhakta Campus
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Bachelor in Information & Communication
            <br className="hidden sm:block" /> Technology Education
          </h1>
          <p className="mt-4 max-w-xl text-sm text-gray-200 sm:text-base">
            Shaping future ICT educators through a strong blend of technology,
            pedagogy, and practical training.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/curriculum"
              className="rounded-md bg-crimson px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-crimson-dark"
            >
              Explore Curriculum
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-10 flex gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === current ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="bg-white py-16">
        <Reveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Program at a Glance
              </h2>
              <p className="mt-2 text-sm text-stone sm:text-base">
                A four-year bachelor&apos;s program blending ICT and education
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "4-Year Bachelor's",
                  desc: "Comprehensive undergraduate program",
                },
                {
                  title: "TU Affiliated",
                  desc: "Recognized by Tribhuvan University",
                },
                {
                  title: "ICT + Education",
                  desc: "Programming, networking, pedagogy & more",
                },
                {
                  title: "Career-Ready",
                  desc: "Practical projects & internship exposure",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-stone/10 bg-gray-50 p-6 text-center transition-shadow hover:shadow-md"
                >
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-stone">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Stats Counter */}
      <section className="bg-navy py-14">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex flex-col items-center">
                    <Icon className="h-8 w-8 text-white/70" />
                    <div className="mt-2 text-4xl font-bold text-white sm:text-5xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-2 text-sm text-white/80">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Why BICTE */}
      <section className="bg-gray-50 py-16">
        <Reveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Why Study BICTE at Aadikavi Bhanubhakta Campus?
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  title: "Comprehensive Learning Experience",
                  desc: "A curriculum that blends ICT expertise with educational practices for holistic learning.",
                },
                {
                  title: "Practical Exposure",
                  desc: "Hands-on projects and internships designed to build real-world experience and employability.",
                },
                {
                  title: "Experienced Faculty",
                  desc: "Guidance from educators and ICT professionals with extensive field expertise.",
                },
                {
                  title: "Career-Ready Skills",
                  desc: "Proficiency in emerging technologies like multimedia, cloud computing, and e-learning development.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm text-stone">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}