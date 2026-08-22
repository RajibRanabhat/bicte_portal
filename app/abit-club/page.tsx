"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, User, X, Expand } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import {
  advisors,
  members,
  officers,
  president,
  type LeadershipMember,
} from "@/data/leadership";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.72c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

type Lightbox = { src: string; alt: string; caption?: string };

const activities = [
  {
    title: "IoT & Robotics",
    desc: "Hands-on sessions where students build connected devices and robotics projects, then showcase them to visiting schools.",
    photo: "/gallery/iot.jpg",
  },
  {
    title: "Digital Marketing",
    desc: "A practical bootcamp covering online growth, campaigns and analytics, closing with a Digital Growth award ceremony.",
    photo: "/gallery/boot.jpg",
  },
  {
    title: "Content Creation",
    desc: "Workshops focused on video editing, production and visual storytelling, run as sandbox sessions in the training hall.",
    photo: "/gallery/cc1.jpg",
  },
  {
    title: "Web Development with Next.js",
    desc: "Mentor-led coding sessions where students learn modern web development and ship a project of their own.",
    photo: "/gallery/nj1.jpg",
  },
];

const awards = [
  { year: "2024", label: "Best Club of the Year" },
  { year: "2023", label: "Best Club of the Year" },
];

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <Reveal duration={600}>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={100} duration={700}>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      <Reveal direction="wipe" delay={350} duration={800} className="mt-5 flex justify-center">
        <span className="block h-[3px] w-20 rounded-full bg-crimson" />
      </Reveal>
      {subtitle && (
        <Reveal delay={250} duration={700}>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-stone sm:text-base">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

function GroupLabel({
  label,
  note,
  dot,
}: {
  label: string;
  note: string;
  dot: string;
}) {
  return (
    <Reveal duration={600}>
      <div>
        <div className="flex items-center gap-3">
          <span className={`h-2 w-2 rounded-full ${dot}`} />
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-navy">
            {label}
          </h3>
          <span className="h-px flex-1 bg-stone/10" />
        </div>
        <p className="ml-5 mt-2 text-xs text-stone/50">{note}</p>
      </div>
    </Reveal>
  );
}

function Socials({ member, dark = false }: { member: LeadershipMember; dark?: boolean }) {
  if (!member.facebook && !member.github) return null;

  const base = `flex h-7 w-7 items-center justify-center rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
    dark
      ? "bg-white/10 text-white/70 hover:bg-white/25 hover:text-white"
      : "bg-white text-stone/40 shadow-sm hover:bg-primary hover:text-white"
  }`;

  return (
    <div className="flex gap-2">
      {member.facebook && (
        <a href={member.facebook}
          target="_blank"
          rel="noopener noreferrer"
          title={`${member.name} on Facebook`}
          aria-label={`${member.name} on Facebook`}
          className={base}
        >
          <FacebookIcon className="h-3.5 w-3.5" />
        </a>
      )}
      {member.github && (
        <a href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          title={`${member.name} on GitHub`}
          aria-label={`${member.name} on GitHub`}
          className={base}
        >
          <GithubIcon className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}

function MemberCard({
  member,
  size = "md",
  onZoom,
}: {
  member: LeadershipMember;
  size?: "sm" | "md";
  onZoom: (lb: Lightbox) => void;
}) {
  const avatar = size === "sm" ? "h-[76px] w-[76px]" : "h-24 w-24";

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-50 pb-5 pt-7 text-center transition-all duration-400 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-navy/10">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/12 to-transparent"
      />
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
      />

      <div className="relative px-4">
        {member.photo ? (
          <button
            type="button"
            onClick={() =>
              onZoom({
                src: member.photo!,
                alt: member.name,
                caption: `${member.name} · ${member.role}`,
              })
            }
            aria-label={`View photo of ${member.name}`}
            className={`relative mx-auto block ${avatar} cursor-pointer overflow-hidden rounded-full shadow-lg ring-2 ring-white transition-all duration-500 group-hover:scale-105 group-hover:ring-primary/40`}
          >
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="192px"
              className="object-cover object-top"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-all duration-300 hover:bg-navy/45 hover:opacity-100">
              <Expand className="h-4 w-4" />
            </span>
          </button>
        ) : (
          <div
            className={`mx-auto flex ${avatar} items-center justify-center rounded-full bg-white text-stone/25 shadow-lg ring-2 ring-white`}
          >
            <User className="h-8 w-8" />
          </div>
        )}

        <p
          className={`mt-4 font-bold leading-snug text-navy ${
            size === "sm" ? "text-[13px]" : "text-sm"
          }`}
        >
          {member.name}
        </p>
        <p className="mt-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
          {member.role}
        </p>
        {member.meta && (
          <p className="mt-1 text-[10px] text-stone/45">{member.meta}</p>
        )}

        <div className="mt-3.5 flex justify-center">
          <Socials member={member} />
        </div>
      </div>
    </div>
  );
}

export default function AbitClub() {
  const [lightbox, setLightbox] = useState<Lightbox | null>(null);

  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <>
      <PageHeader
        image="/gallery/club.jpg"
        title="ABIT Club"
        subtitle="The student wing of the BICTE programme"
      />

      {/* Who we are */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            <Reveal direction="left" duration={800}>
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -bottom-5 -left-5 h-full w-full rounded-2xl border-2 border-primary/20"
                />
                <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-xl sm:h-96">
                  <Image
                    src="/leadership/abit-club.webp"
                    alt="ABIT Club members at a bootcamp project exhibition"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-7 right-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-xl sm:h-28 sm:w-28">
                  <Image
                    src="/abit-club-logo.jpeg"
                    alt="ABIT Club logo"
                    fill
                    sizes="224px"
                    className="object-contain p-1.5"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" duration={800} delay={120}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Who we are
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  Learn, build and lead together
                </h2>
                <span className="mt-5 inline-block h-[3px] w-16 rounded-full bg-crimson" />

                <p className="mt-7 text-sm leading-relaxed text-stone sm:text-base">
                  ABIT Club is the student-led wing organization of the BICTE
                  Department at Aadikavi Bhanubhakta Campus, empowering students
                  to learn beyond the classroom through workshops, bootcamps,
                  projects and collaborative activities.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {awards.map((award, idx) => (
                    <Reveal
                      key={award.year}
                      direction="up"
                      duration={600}
                      delay={300 + idx * 110}
                    >
                      <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/25 bg-gold/8 px-4 py-2.5 text-xs font-semibold text-gold-dark transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/15">
                        <Award className="h-4 w-4" />
                        {award.label}
                        <span className="text-gold-dark/50">·</span>
                        {award.year}
                      </span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="What we do"
            title="Bootcamps & Workshops"
            subtitle="Practical learning sessions that help BICTE students explore tools, technologies and skills beyond the classroom."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {activities.map((activity, idx) => (
              <Reveal
                key={activity.title}
                direction={idx % 2 === 0 ? "left" : "right"}
                duration={700}
                delay={(idx % 2) * 100}
              >
                <div className="group h-full overflow-hidden rounded-2xl bg-white transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-navy/10">
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: activity.photo,
                        alt: activity.title,
                        caption: activity.title,
                      })
                    }
                    aria-label={`View photo from ${activity.title}`}
                    className="relative block aspect-[16/10] w-full cursor-pointer overflow-hidden"
                  >
                    <Image
                      src={activity.photo}
                      alt={activity.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-navy/10 transition-colors duration-300 group-hover:bg-navy/30"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <Expand className="h-5 w-5" />
                      </span>
                    </span>
                  </button>

                  <div className="relative p-6">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
                    />
                    <h3 className="text-lg font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-primary">
                      {activity.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-stone">
                      {activity.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal duration={700} delay={300}>
            <div className="mt-14 text-center">
              <Link
                href="/about/gallery"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                See photos from our sessions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Committee */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Executive Committee · 2082–84 B.S."
            title="Meet the Team"
          />

          {/* President */}
          <Reveal duration={800} className="mt-14">
            <div className="relative overflow-hidden rounded-3xl bg-navy shadow-xl">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/25 blur-3xl"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-crimson/12 blur-3xl"
              />

              <div className="relative flex flex-col items-center gap-8 p-8 text-center sm:flex-row sm:items-start sm:p-11 sm:text-left">
                {president.photo && (
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: president.photo!,
                        alt: president.name,
                        caption: `${president.name} · ${president.role}`,
                      })
                    }
                    aria-label={`View photo of ${president.name}`}
                    className="group relative h-32 w-32 flex-shrink-0 cursor-pointer overflow-hidden rounded-full shadow-2xl ring-4 ring-white/15 transition-transform duration-500 hover:scale-105"
                  >
                    <Image
                      src={president.photo}
                      alt={president.name}
                      fill
                      sizes="256px"
                      className="object-cover object-top"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-all duration-300 group-hover:bg-navy/45 group-hover:opacity-100">
                      <Expand className="h-5 w-5" />
                    </span>
                  </button>
                )}

                <div className="flex-1">
                  <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    {president.role}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {president.name}
                  </h3>

                  {president.quote && (
                    <div className="mt-6">
                      <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-white/40">
                        A message from the President
                      </p>
                      <p className="mt-3 border-l-2 border-crimson/60 pl-5 text-sm italic leading-relaxed text-white/70">
                        {president.quote}
                      </p>
                    </div>
                  )}

                  <div className="mt-6 flex justify-center sm:justify-start">
                    <Socials member={president} dark />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Officers */}
          <div className="mt-12">
            <GroupLabel
              label="Executive Members"
              note="Leading and managing the club's activities."
              dot="bg-primary"
            />
            <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {officers.map((officer, idx) => (
                <Reveal key={officer.name} duration={650} delay={idx * 70}>
                  <MemberCard member={officer} onZoom={setLightbox} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Members */}
          <div className="mt-16">
            <GroupLabel
              label="Club Members"
              note="Students contributing to the club's projects and events."
              dot="bg-navy"
            />
            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {members.map((member, idx) => (
                <Reveal key={member.name} duration={650} delay={idx * 70}>
                  <MemberCard member={member} size="sm" onZoom={setLightbox} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Advisors */}
          <div className="mt-16">
            <GroupLabel
              label="Faculty Advisors"
              note="Guiding and supporting the club's vision."
              dot="bg-gold"
            />
            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {advisors.map((advisor, idx) => (
                <Reveal key={advisor.name} duration={700} delay={idx * 100}>
                  <div className="group relative flex items-center gap-6 overflow-hidden rounded-2xl bg-gray-50 p-7 transition-all duration-400 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:shadow-navy/10">
                    <span
                      aria-hidden
                      className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gold transition-transform duration-500 group-hover:scale-y-100"
                    />
                    {advisor.photo && (
                      <button
                        type="button"
                        onClick={() =>
                          setLightbox({
                            src: advisor.photo!,
                            alt: advisor.name,
                            caption: `${advisor.name} · ${advisor.role}`,
                          })
                        }
                        aria-label={`View photo of ${advisor.name}`}
                        className="relative h-28 w-28 flex-shrink-0 cursor-pointer overflow-hidden rounded-full shadow-lg ring-2 ring-white transition-all duration-500 group-hover:scale-105 group-hover:ring-gold/40"
                      >
                        <Image
                          src={advisor.photo}
                          alt={advisor.name}
                          fill
                          sizes="224px"
                          className="object-cover object-top"
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-all duration-300 hover:bg-navy/45 hover:opacity-100">
                          <Expand className="h-4 w-4" />
                        </span>
                      </button>
                    )}
                    <div>
                      <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-gold-dark">
                        {advisor.role}
                      </p>
                      <p className="mt-2 text-lg font-bold leading-snug text-navy">
                        {advisor.name}
                      </p>
                      <div className="mt-3">
                        <Socials member={advisor} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/92 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-5 cursor-pointer text-white/60 transition-colors hover:text-white"
          >
            <X className="h-7 w-7" />
          </button>

          <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            {lightbox.caption && (
              <p className="mt-5 text-sm font-semibold text-white/90">
                {lightbox.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}