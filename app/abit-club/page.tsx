import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  Code2,
  Github,
  GraduationCap,
  Lightbulb,
  Mail,
  Megaphone,
  Rocket,
  Users,
  Wrench,
} from "lucide-react";

const activities = [
  {
    icon: Code2,
    title: "Technical Workshops",
    description:
      "Practical sessions on programming, web development, databases, networking, and emerging technologies.",
  },
  {
    icon: Rocket,
    title: "Bootcamps & Training",
    description:
      "Intensive learning programs that help students turn classroom concepts into practical technical skills.",
  },
  {
    icon: Lightbulb,
    title: "Projects & Innovation",
    description:
      "Encouraging students to build useful projects, experiment with ideas, and solve real-world problems.",
  },
  {
    icon: Users,
    title: "Peer Learning",
    description:
      "A collaborative environment where seniors and juniors share knowledge, resources, and experience.",
  },
  {
    icon: Megaphone,
    title: "Events & Seminars",
    description:
      "Technology events, talks, competitions, and awareness programs designed to connect students with opportunities.",
  },
  {
    icon: Award,
    title: "Leadership Development",
    description:
      "Opportunities to develop communication, teamwork, event management, and leadership skills.",
  },
];

const milestones = [
  {
    year: "2022",
    title: "ABIT Club Established",
    description:
      "ABIT Club was established as a student-led platform to strengthen the technical and collaborative culture of BICTE students.",
  },
  {
    year: "2023",
    title: "Technical Activities Expanded",
    description:
      "The club expanded its focus toward workshops, competitions, peer learning, and practical technology activities.",
  },
  {
    year: "2024",
    title: "BICTE Portal Initiative",
    description:
      "Students began building digital resources and platforms to make academic information more accessible to the BICTE community.",
  },
  {
    year: "2025",
    title: "More Learning Opportunities",
    description:
      "The club continued promoting practical learning through training sessions, projects, events, and student collaboration.",
  },
];

const gallery = [
  {
    title: "Technical Workshop",
    type: "Workshop",
    icon: Wrench,
  },
  {
    title: "Student Collaboration",
    type: "Community",
    icon: Users,
  },
  {
    title: "Project Development",
    type: "Projects",
    icon: Code2,
  },
  {
    title: "Learning Session",
    type: "Training",
    icon: BookOpen,
  },
  {
    title: "Technology Event",
    type: "Event",
    icon: CalendarDays,
  },
  {
    title: "Innovation & Ideas",
    type: "Innovation",
    icon: Lightbulb,
  },
];

export default function AbitClubPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-stone">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-primary/5 via-white to-navy/5">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-navy/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  BICTE Student Community
                </div>

                <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
                  Learn.
                  <span className="text-primary"> Build.</span>
                  <span className="text-crimson"> Lead.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-stone/80">
                  ABIT Club is a student-led community of ICT Education
                  students at Aadikavi Bhanubhakta Campus, focused on practical
                  learning, collaboration, innovation, and leadership.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="#about"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-dark"
                  >
                    Explore ABIT
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="#activities"
                    className="inline-flex items-center justify-center rounded-lg border border-primary/20 bg-white px-6 py-3.5 font-semibold text-navy transition hover:border-primary hover:bg-primary/5"
                  >
                    What We Do
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-stone/10 pt-6 text-sm text-stone/70">
                  <span className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    BICTE Community
                  </span>

                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Student Led
                  </span>

                  <span className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    Innovation Focused
                  </span>
                </div>
              </div>

              {/* HERO VISUAL */}
              <div className="relative lg:col-span-5">
                <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-3 shadow-2xl">
                  <div className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-[#214a83] to-primary p-8 text-white">
                    <div className="absolute right-[-60px] top-[-60px] h-48 w-48 rounded-full border-[30px] border-white/10" />
                    <div className="absolute bottom-[-80px] left-[-50px] h-56 w-56 rounded-full border-[40px] border-white/10" />

                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl font-black text-primary shadow-xl">
                        A
                      </div>

                      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                        Association of ICT Education
                      </p>

                      <h2 className="mt-3 text-3xl font-extrabold">
                        ABIT
                        <span className="text-white/70"> CLUB</span>
                      </h2>

                      <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                        A platform where BICTE students connect, learn,
                        experiment, create, and grow together.
                      </p>
                    </div>

                    <div className="relative mt-10 flex items-center justify-between border-t border-white/15 pt-5">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/50">
                          Campus
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          Aadikavi Bhanubhakta Campus
                        </p>
                      </div>

                      <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                        Damauli
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-stone/10 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
            <Stat value="BICTE" label="Student Community" />
            <Stat value="100%" label="Student Driven" />
            <Stat value="Practical" label="Learning Focus" />
            <Stat value="ABIT" label="Campus Community" />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <SectionLabel>Who We Are</SectionLabel>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  Bridging classroom learning with practical technology.
                </h2>

                <p className="mt-6 leading-8 text-stone/80">
                  ABIT Club provides a collaborative platform for BICTE
                  students to move beyond theoretical learning and explore
                  practical technology, projects, teamwork, and leadership.
                </p>

                <p className="mt-4 leading-8 text-stone/80">
                  Through workshops, bootcamps, seminars, competitions,
                  projects, and peer learning, the club encourages students to
                  continuously learn and build useful skills for their academic
                  and professional journey.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <ValueCard icon={BookOpen} title="Learn" />
                  <ValueCard icon={Code2} title="Build" />
                  <ValueCard icon={Award} title="Lead" />
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <InfoPanel
                    icon={GraduationCap}
                    title="Academic"
                    text="Supporting BICTE students in their academic journey."
                  />
                  <InfoPanel
                    icon={Code2}
                    title="Technical"
                    text="Turning concepts into practical technical skills."
                    offset
                  />
                  <InfoPanel
                    icon={Users}
                    title="Community"
                    text="Connecting students through collaboration and peer learning."
                  />
                  <InfoPanel
                    icon={Rocket}
                    title="Innovation"
                    text="Encouraging ideas, experimentation, and project building."
                    offset
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVITIES */}
        <section
          id="activities"
          className="scroll-mt-20 bg-slate-50 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>What We Do</SectionLabel>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Creating opportunities to learn by doing.
              </h2>

              <p className="mt-4 text-stone/70">
                ABIT focuses on activities that help students develop both
                technical knowledge and professional skills.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.title}
                    className="group rounded-2xl border border-stone/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-navy">
                      {activity.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-stone/70">
                      {activity.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="leadership" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Leadership</SectionLabel>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Students leading students.
              </h2>

              <p className="mt-4 text-stone/70">
                The executive committee works together to turn ideas into
                meaningful activities for the BICTE community.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-4xl">
              <div className="rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 to-navy/5 p-8 sm:p-10">
                <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-primary text-4xl font-black text-white shadow-lg shadow-primary/20">
                    A
                  </div>

                  <div>
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      Executive Committee
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-navy">
                      ABIT Club Leadership
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-stone/70">
                      The club leadership coordinates events, learning
                      activities, student collaboration, technical initiatives,
                      and community programs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                <RoleCard title="President" />
                <RoleCard title="Vice President" />
                <RoleCard title="Secretary" />
                <RoleCard title="Treasurer" />
                <RoleCard title="Technical Coordinator" />
                <RoleCard title="Event Coordinator" />
              </div>

              <p className="mt-6 text-center text-xs text-stone/50">
                Replace these role placeholders with the current ABIT
                executive committee members.
              </p>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section
          id="journey"
          className="scroll-mt-20 bg-navy py-20 text-white lg:py-28"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Our Journey
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Growing together, one milestone at a time.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/60">
                A simple timeline for documenting the growth and achievements
                of ABIT Club.
              </p>
            </div>

            <div className="relative mt-14">
              <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-white/10 md:block md:left-1/2" />

              <div className="space-y-8">
                {milestones.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative md:flex md:items-center ${
                      index % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="md:w-1/2 md:px-10">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                        <span className="text-sm font-bold text-primary">
                          {item.year}
                        </span>

                        <h3 className="mt-2 text-lg font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/60">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-0 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-navy bg-primary text-xs font-bold md:flex md:left-1/2 md:-translate-x-1/2">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>ABIT in Action</SectionLabel>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Moments from our community.
              </h2>

              <p className="mt-4 text-stone/70">
                Replace these visual placeholders with real ABIT Club event
                photographs as they become available.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`group relative overflow-hidden rounded-2xl ${
                      index === 0 || index === 3
                        ? "lg:row-span-2 lg:min-h-[420px]"
                        : "min-h-[200px]"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-[#0f274b]" />

                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[25px] border-white/10 transition duration-500 group-hover:scale-125" />

                    <div className="relative flex h-full min-h-[200px] flex-col justify-between p-7 text-white">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                          {item.type}
                        </span>

                        <h3 className="mt-1 text-xl font-bold">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* JOIN CTA */}
        <section
          id="join"
          className="scroll-mt-20 bg-gradient-to-r from-primary to-primary-dark py-20 text-white"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
              <Users className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Be part of the ABIT community.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/80">
              Learn with your peers, build meaningful projects, participate in
              technical activities, and contribute to the BICTE community.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 font-bold text-primary transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Contact ABIT
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Back to BICTE Portal
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER INFO */}
        <section className="border-t border-stone/10 bg-slate-50 py-12">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-bold text-white">
                  A
                </div>

                <div>
                  <p className="font-bold text-navy">ABIT Club</p>
                  <p className="text-xs text-stone/60">
                    Association of ICT Education
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-sm text-sm leading-6 text-stone/60">
                A student-led community for BICTE students at Aadikavi
                Bhanubhakta Campus.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-navy">Quick Links</h3>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <Link
                  href="#about"
                  className="text-stone/70 transition hover:text-primary"
                >
                  About
                </Link>

                <Link
                  href="#activities"
                  className="text-stone/70 transition hover:text-primary"
                >
                  Activities
                </Link>

                <Link
                  href="#leadership"
                  className="text-stone/70 transition hover:text-primary"
                >
                  Leadership
                </Link>

                <Link
                  href="#gallery"
                  className="text-stone/70 transition hover:text-primary"
                >
                  Gallery
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-navy">Connect</h3>

              <div className="mt-4 flex gap-3">
                <SocialButton icon={Github} label="GitHub" />
                <SocialButton icon={Mail} label="Email" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
      {children}
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-stone/10 px-4 text-center md:border-r last:border-r-0">
      <p className="text-2xl font-extrabold text-navy sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-stone/60">
        {label}
      </p>
    </div>
  );
}

function ValueCard({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="rounded-xl border border-stone/10 bg-white p-4 text-center shadow-sm">
      <Icon className="mx-auto h-5 w-5 text-primary" />
      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-navy">
        {title}
      </p>
    </div>
  );
}

function InfoPanel({
  icon: Icon,
  title,
  text,
  offset = false,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
  offset?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-stone/10 bg-white p-6 shadow-sm ${
        offset ? "mt-8" : ""
      }`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 font-bold text-navy">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-stone/65">{text}</p>
    </div>
  );
}

function RoleCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-stone/10 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Users className="h-5 w-5" />
      </div>

      <h4 className="mt-4 font-bold text-navy">{title}</h4>

      <p className="mt-1 text-xs text-stone/50">
        Member details to be added
      </p>
    </div>
  );
}

function SocialButton({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone/10 bg-white text-stone/70 transition hover:border-primary/20 hover:bg-primary hover:text-white"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}