"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Users,
  BookOpen,
  GraduationCap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { faculty } from "@/data/faculty";
import { gallery } from "@/data/gallery";

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
  { value: 200, suffix: "+", label: "Graduates", icon: GraduationCap },
];

const highlights = [
  {
    title: "Four-Year Degree",
    desc: "Eight semesters affiliated to Tribhuvan University, offered here since 2070 B.S.",
  },
  {
    title: "ICT Meets Pedagogy",
    desc: "Programming, networking and databases taught alongside modern teaching practice.",
  },
  {
    title: "Lab-Based Learning",
    desc: "Weekly practical sessions with documented, teacher-verified labsheets.",
  },
  {
    title: "Built for Careers",
    desc: "Graduates move into ICT teaching, development and systems roles.",
  },
];

const featuredFaculty = faculty
  .flatMap((group) => group.members)
  .filter((m) => m.photo)
  .slice(0, 5);

// One photo from each category in turn, so similar shots don't cluster.
const allPhotos = (() => {
  const buckets = gallery.flatMap((cat) => [
    ...(cat.photos ? [cat.photos] : []),
    ...(cat.topics?.map((t) => t.photos) ?? []),
  ]);

  const out: { src: string; caption: string }[] = [];
  const max = Math.max(...buckets.map((b) => b.length));

  for (let i = 0; i < max; i++) {
    for (const bucket of buckets) {
      if (bucket[i]) out.push(bucket[i]);
    }
  }

  return out;
})();

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
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="text-center">
      <Reveal duration={600}>
        <p
          className={`text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? "text-white/50" : "text-primary"
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
      <Reveal direction="wipe" delay={350} duration={800} className="mt-5 flex justify-center">
        <span className="block h-[3px] w-20 rounded-full bg-crimson" />
      </Reveal>
    </div>
  );
}

function GalleryCard({ photo }: { photo: { src: string; caption: string } }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.55, root: el.parentElement }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      href="/about/gallery"
      className={`group relative aspect-square w-56 flex-none snap-start overflow-hidden rounded-2xl transition-all duration-700 ease-out sm:w-64 ${
        inView ? "scale-100 opacity-100 blur-0" : "scale-90 opacity-40 blur-[2px]"
      }`}
    >
      <Image
        src={photo.src}
        alt={photo.caption}
        fill
        sizes="256px"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
      <span
        className={`absolute inset-x-0 bottom-0 p-4 text-[11px] font-semibold leading-snug text-white transition-all duration-700 delay-100 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {photo.caption}
      </span>
    </Link>
  );
}

function GalleryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 12 : 300;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;

      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const card = el.firstElementChild as HTMLElement | null;
        const step = card ? card.offsetWidth + 12 : 300;
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3200);

    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        style={{ scrollbarWidth: "none" }}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [&::-webkit-scrollbar]:hidden sm:px-6 lg:px-8"
      >
        {allPhotos.map((photo, idx) => (
          <GalleryCard key={`${photo.src}-${idx}`} photo={photo} />
        ))}
      </div>

      <button
        onClick={() => scrollByCard(-1)}
        aria-label="Previous photos"
        className="absolute left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 text-navy shadow-lg transition-all hover:scale-110 hover:bg-white md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => scrollByCard(1)}
        aria-label="Next photos"
        className="absolute right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 text-navy shadow-lg transition-all hover:scale-110 hover:bg-white md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
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
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[520px] w-full overflow-hidden">
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
              className={`object-cover transition-transform duration-[7000ms] ease-out ${
                idx === current ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/70 to-navy/90" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-sm">
            Aadikavi Bhanubhakta Campus
          </p>
          <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Bachelor in Information &amp; Communication
            <br className="hidden sm:block" /> Technology Education
          </h1>
          <span className="mt-6 inline-block h-[3px] w-20 rounded-full bg-crimson" />
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
            Shaping future ICT educators through a strong blend of technology,
            pedagogy, and practical training.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/curriculum"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-crimson/25 transition-all hover:-translate-y-0.5 hover:bg-crimson-dark"
            >
              Explore Curriculum
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-12 flex gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ${
                  idx === current ? "w-8 bg-crimson" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            <Reveal direction="left" duration={800}>
              <div className="relative">
                <div className="absolute -bottom-5 -left-5 h-full w-full rounded-2xl border-2 border-primary/20" />
                <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-xl sm:h-96">
                  <Image
                    src="/campus.jpg"
                    alt="Aadikavi Bhanubhakta Campus"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" duration={800} delay={120}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Welcome to
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  BICTE at Aadikavi Bhanubhakta Campus
                </h2>
                <span className="mt-5 inline-block h-[3px] w-16 rounded-full bg-crimson" />

                <p className="mt-7 text-sm leading-relaxed text-stone sm:text-base">
                  Offered here since 2070 B.S., BICTE is a four-year,
                  eight-semester undergraduate programme affiliated with
                  Tribhuvan University — combining advanced ICT skills with
                  modern teaching methodologies.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                  Established in 2044 B.S., the campus is the largest and most
                  reputable institution for higher education in the Tanahun
                  district, serving students from across the region.
                </p>

                <Link
                  href="/about"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy/85"
                >
                  Learn more about us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Programme at a Glance */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="What to expect" title="Programme at a Glance" />

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => (
              <Reveal key={item.title} duration={700} delay={idx * 110}>
                <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-7 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="text-2xl font-bold tracking-tight text-primary/25 transition-colors duration-300 group-hover:text-primary/50">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-bold leading-snug text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-stone">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — gradient band */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-navy to-crimson py-20">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal duration={600}>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              The BICTE Programme
            </p>
          </Reveal>

          <Reveal duration={800} delay={120}>
            <div className="mt-12 grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="group flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mt-4 text-4xl font-bold text-white sm:text-5xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Faculty */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Who teaches you" title="Meet the Faculty" />

          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {featuredFaculty.map((member, idx) => (
              <Reveal key={member.name} duration={650} delay={idx * 80}>
                <Link href="/faculty" className="group block text-center">
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full shadow-lg ring-2 ring-transparent transition-all duration-500 group-hover:scale-105 group-hover:ring-primary/40">
                    <Image
                      src={member.photo!}
                      alt={member.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-xs font-semibold leading-snug text-navy">
                    {member.name}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-primary/70">
                    {member.specialization}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal duration={700} delay={400}>
            <div className="mt-14 text-center">
              <Link
                href="/faculty"
                className="group inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-xs font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-gray-50"
              >
                See all faculty
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery carousel */}
      <section className="overflow-hidden bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Life at BICTE" title="Beyond the Classroom" />
        </div>

        <div className="mt-16">
          <GalleryCarousel />
        </div>

        <Reveal duration={700} delay={200}>
          <div className="mt-12 text-center">
            <Link
              href="/about/gallery"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              View full gallery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}