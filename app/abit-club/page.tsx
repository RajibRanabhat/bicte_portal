import Image from "next/image";
import Link from "next/link";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/quicksand/700.css";
import {
  ArrowRight,
  BookOpen,
  Camera,
  CalendarDays,
  Code2,
  Flag,
  Laptop,
  Lightbulb,
  Mic,
  PartyPopper,
  Rocket,
  Trophy,
  Users,
  Users2,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  AnimatedGrid,
  LeadershipIntro,
  LeadershipSubLabel,
  PresidentSpotlightCard,
  OfficerCard,
  CompactMemberCard,
} from "@/components/LeadershipCards";
import { advisors, members, officers, president } from "@/data/leadership";

// Self-hosted via @fontsource so the build never depends on reaching
// Google's font CDN. Scoped to the Leadership section only, per request \u2014
// the rest of the page keeps the site's default font.
const quicksandStyle = { fontFamily: "'Quicksand', sans-serif" };

const pillars = [
  {
    icon: BookOpen,
    title: "Learn",
    text: "Gain new skills through workshops and peer learning.",
  },
  {
    icon: Wrench,
    title: "Build",
    text: "Turn ideas into real-world projects and solutions.",
  },
  {
    icon: Users,
    title: "Lead",
    text: "Grow as a leader and make a positive impact.",
  },
];

const activities = [
  {
    icon: Laptop,
    title: "Workshops",
    text: "Hands-on sessions on latest technologies and tools.",
  },
  {
    icon: Trophy,
    title: "Hackathons",
    text: "Compete, collaborate and build innovative solutions.",
  },
  {
    icon: Code2,
    title: "Projects",
    text: "Real-world projects that make an actual impact.",
  },
  {
    icon: Mic,
    title: "Seminars",
    text: "Expert talks and knowledge sharing sessions.",
  },
  {
    icon: Users,
    title: "Community",
    text: "Connect, collaborate and grow together as a community.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Encouraging new ideas and creative thinking.",
  },
];

const milestones = [
  { year: "2021", label: "ABIT Club Was Founded", icon: Flag },
  { year: "2022", label: "First Workshop Series Conducted", icon: Rocket },
  { year: "2023", label: "Organized First Tech Fest", icon: PartyPopper },
  { year: "2024", label: "IoT Bootcamp Launched", icon: Mic },
  { year: "2025", label: "More Projects & More Impact", icon: Camera },
];

const galleryPreview = [
  {
    src: "/gallery/club.jpg",
    caption: "ABIT Club honoured with the Best Club of the Year award, 2024",
  },
  {
    src: "/gallery/cc2.jpg",
    caption: "Participants collaborating during the Content Creation workshop",
  },
  {
    src: "/gallery/boot2.jpg",
    caption: "ICT Bootcamp session in progress",
  },
  {
    src: "/gallery/iotgroup.jpg",
    caption: "ICT Spring Bootcamp 2024 \u2014 IoT & Robotics cohort",
  },
  {
    src: "/gallery/iot4.jpg",
    caption: "ABIT Club members demonstrating a robotics project",
  },
];

function SectionLabel({
  children,
  center = false,
  light = false,
}: {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary ${
        center ? "justify-center" : ""
      }`}
    >
      {children}
      <span
        className={`h-px w-8 ${light ? "bg-white/30" : "bg-primary/30"}`}
      />
    </div>
  );
}

function PillarItem({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="font-bold text-navy">{title}</p>
        <p className="mt-1 text-sm leading-6 text-stone/60">{text}</p>
      </div>
    </div>
  );
}

function ActivityCard({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-stone/10 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md">
      <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-4 font-bold text-navy">{title}</p>
      <p className="mt-1 text-xs leading-5 text-stone/60">{text}</p>
    </div>
  );
}

export default function AbitClubPage() {
  return (
    <main className="overflow-hidden bg-white text-stone">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/gallery/dm5.jpg"
            alt="ABIT Club members collaborating during a bootcamp session"
            fill
            priority
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 lg:px-8 lg:pb-36 lg:pt-24">
          <div className="max-w-2xl">
            <SectionLabel light>ABIT Club</SectionLabel>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learn. Build.
              <br />
              Lead. <span className="text-primary">Together.</span>
            </h1>

            <p className="mt-6 max-w-xl leading-8 text-white/75">
              ABIT Club is the student wing organization of the BICTE
              department at Aadikavi Bhanubhakta Campus, building a community
              of innovative minds and future leaders.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Explore ABIT Club
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#leadership"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Meet Our Board
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="about" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="right">
              <div className="relative pb-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-navy/10">
                  <Image
                    src="/bootcamp1.JPG"
                    alt="ABIT Club members gathered for a bootcamp project exhibition"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute -bottom-2 left-6 flex items-center gap-3 rounded-2xl border border-stone/10 bg-white px-5 py-3 shadow-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-black text-white">
                    A
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">ABIT Club</p>
                    <p className="text-xs text-stone/60">
                      Est. 2021 &middot; Aadikavi Bhanubhakta Campus
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={100}>
              <div>
                <SectionLabel>Who We Are</SectionLabel>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  More than a club, we are a{" "}
                  <span className="text-primary">community.</span>
                </h2>

                <p className="mt-5 leading-8 text-stone/70">
                  ABIT Club brings students together through technology,
                  creativity, collaboration and leadership. We aim to enhance
                  technical skills, share knowledge and create opportunities
                  for personal and professional growth.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {pillars.map((pillar) => (
                    <PillarItem key={pillar.title} {...pillar} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section
        id="activities"
        className="scroll-mt-24 bg-slate-50 py-20 lg:py-28"
      >
        <Reveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionLabel center>What We Do</SectionLabel>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {activities.map((activity) => (
                <ActivityCard key={activity.title} {...activity} />
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* LEADERSHIP */}
      <section
        id="leadership"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
        style={quicksandStyle}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LeadershipIntro
            eyebrow="Our Leadership"
            heading="Meet the minds leading ABIT Club."
            subheading={"Executive Committee 2082\u201384 B.S."}
          />

          <div className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-stretch">
            <div className="lg:w-[34%]">
              <PresidentSpotlightCard member={president} />
            </div>
            <AnimatedGrid className="grid flex-1 grid-cols-2 gap-5 sm:grid-cols-3">
              {officers.map((officer) => (
                <OfficerCard key={officer.name} member={officer} />
              ))}
            </AnimatedGrid>
          </div>

          <div className="mt-16">
            <LeadershipSubLabel>Members</LeadershipSubLabel>
            <AnimatedGrid className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {members.map((member) => (
                <CompactMemberCard key={member.name} member={member} />
              ))}
            </AnimatedGrid>
          </div>

          <div className="mt-14">
            <LeadershipSubLabel>Club Advisors</LeadershipSubLabel>
            <AnimatedGrid className="mt-6 grid gap-4 sm:grid-cols-2 lg:max-w-xl">
              {advisors.map((advisor) => (
                <CompactMemberCard key={advisor.name} member={advisor} />
              ))}
            </AnimatedGrid>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        id="journey"
        className="scroll-mt-24 bg-navy py-20 text-white lg:py-28"
      >
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <SectionLabel center light>
                Our Journey
              </SectionLabel>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Milestones that shape us.
              </h2>
            </div>

            <div className="relative mt-16">
              <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 lg:block" />

              <div className="flex gap-8 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:pb-0">
                {milestones.map((milestone) => {
                  const Icon = milestone.icon;
                  return (
                    <div
                      key={milestone.year}
                      className="relative flex w-36 shrink-0 flex-col items-center text-center lg:w-auto"
                    >
                      <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/40 bg-navy text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="mt-4 text-lg font-bold">
                        {milestone.year}
                      </p>
                      <p className="mt-1 text-sm leading-5 text-white/60">
                        {milestone.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <SectionLabel>ABIT in Action</SectionLabel>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  Moments that inspire us.
                </h2>
              </div>

              <Link
                href="/about/gallery"
                className="inline-flex items-center gap-2 rounded-lg border border-stone/15 px-5 py-2.5 text-sm font-semibold text-navy transition hover:border-primary hover:text-primary"
              >
                View All Photos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {galleryPreview.map((photo) => (
                <div
                  key={photo.src}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/0 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <p className="absolute inset-x-3 bottom-3 text-xs font-medium leading-4 text-white opacity-0 transition group-hover:opacity-100">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}