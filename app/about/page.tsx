import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  CalendarDays,
  Layers,
  Award,
  ArrowUpRight,
  Code2,
  School,
  Server,
  Building2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import { curriculum, getTotalCredits, getTotalCourses } from "@/data/curriculum";

const objectives = [
  {
    title: "Master ICT Fundamentals",
    desc: "Build expertise in programming, networking, database management, and multimedia systems.",
  },
  {
    title: "Integrate Technology in Education",
    desc: "Develop the ability to use ICT tools to enhance teaching and learning practices effectively.",
  },
  {
    title: "Foster Innovation",
    desc: "Encourage creativity and innovative thinking to solve real-world educational challenges using technology.",
  },
  {
    title: "Promote Ethical Practices",
    desc: "Instill ethical and socially responsible use of technology for community and educational development.",
  },
  {
    title: "Enhance Leadership Skills",
    desc: "Prepare students to take on leadership roles in educational technology and related industries.",
  },
];

const alumni = [
  {
    name: "Bikal Shrestha",
    batch: "Batch 2075",
    photo: "/alumni/bikal.jpg",
    role: "Founder, Tatos Digital",
    extra: "Partner at Big Computer, Damauli",
    desc: "Runs a digital agency offering web development, branding, SEO and AI solutions for businesses and institutions.",
    href: "https://rodb.com.np/",
    linkLabel: "tatos digital",
  },
  {
    name: "Rabin Ale",
    batch: "Batch 2076",
    photo: "/alumni/rabin.jpg",
    role: "Creator, TypingOwl",
    extra: "Used nationally and internationally",
    desc: "Built and maintains a typing practice platform now used by learners in Nepal and beyond.",
    href: "https://typingowl.com/",
    linkLabel: "typingowl.com",
  },
];

const careerPaths = [
  {
    icon: School,
    title: "ICT Teaching",
    desc: "Teaching computer science and ICT in schools and colleges — the qualification the degree is built for.",
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "Web and application development, drawing on the C, C++, Java, C# and Python coursework.",
  },
  {
    icon: Server,
    title: "Systems & Networks",
    desc: "Network administration, Linux system administration and information security roles.",
  },
  {
    icon: Building2,
    title: "Government & Institutional IT",
    desc: "IT officer and section officer positions across public offices and organisations.",
  },
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

export default function About() {
  const facts = [
    { icon: GraduationCap, value: "TU", label: "Affiliated" },
    { icon: CalendarDays, value: `${curriculum.length}`, label: "Semesters" },
    { icon: Layers, value: `${getTotalCourses()}`, label: "Courses" },
    { icon: Award, value: `${getTotalCredits()}`, label: "Credit hours" },
  ];

  return (
    <>
      <PageHeader
        image="/campus.jpg"
        title="About BICTE"
        subtitle="Bachelor in Information and Communication Technology Education, Aadikavi Bhanubhakta Campus"
      />

      {/* Quick facts */}
      <section className="bg-white pt-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {facts.map((fact, idx) => {
              const Icon = fact.icon;
              return (
                <Reveal key={fact.label} duration={650} delay={idx * 100}>
                  <div className="group h-full rounded-2xl bg-gray-50 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-lg">
                    <Icon className="mx-auto h-6 w-6 text-primary/50 transition-colors duration-300 group-hover:text-primary" />
                    <p className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
                      {fact.value}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone/50">
                      {fact.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* About the Programme — text left, image right */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            <Reveal direction="left" duration={800}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  The programme
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  About BICTE
                </h2>
                <span className="mt-5 inline-block h-[3px] w-16 rounded-full bg-crimson" />
                <p className="mt-7 text-sm leading-relaxed text-stone sm:text-base">
                  The Bachelor of Information and Communication Technology in
                  Education has been offered at Aadikavi Bhanubhakta Campus
                  since 2070 B.S. It is a four-year, eight-semester
                  undergraduate programme affiliated with Tribhuvan University,
                  combining advanced ICT skills with modern teaching
                  methodologies.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                  Students graduate equipped to work as educators,
                  technologists, and innovators — with practical experience
                  built through weekly lab sessions across every ICT subject.
                </p>

                <Link
                  href="/curriculum"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy/85"
                >
                  View the curriculum
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right" duration={800} delay={120}>
              <div className="relative">
                <div className="absolute -bottom-5 -right-5 h-full w-full rounded-2xl border-2 border-primary/20" />
                <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-xl sm:h-96">
                  <Image
                    src="/gallery/demo.jpg"
                    alt="Students engaged in a hands-on ICT demonstration"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="What you'll gain"
            title="Programme Objectives"
          />

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {objectives.map((item, idx) => (
              <Reveal
                key={item.title}
                direction={idx % 2 === 0 ? "left" : "right"}
                duration={700}
                delay={idx * 90}
                className={idx === objectives.length - 1 ? "md:col-span-2" : ""}
              >
                <div className="group flex h-full gap-5 rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary transition-transform duration-500 group-hover:scale-110">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About the Campus — image left, text right */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            <Reveal direction="left" duration={800}>
              <div className="relative">
                <div className="absolute -bottom-5 -left-5 h-full w-full rounded-2xl border-2 border-crimson/20" />
                <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-xl sm:h-96">
                  <Image
                    src="/campus.jpg"
                    alt="Aadikavi Bhanubhakta Campus building"
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
                  Where we are
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  Aadikavi Bhanubhakta Campus
                </h2>
                <span className="mt-5 inline-block h-[3px] w-16 rounded-full bg-crimson" />
                <p className="mt-7 text-sm leading-relaxed text-stone sm:text-base">
                  Established in 2044 B.S. (1987 A.D.), the campus is the
                  largest and most reputable institution for higher education
                  in the Tanahun district. Located in Vyas Municipality, Ward
                  No. 1, Bigyan Chaur, Damauli — 150 km west of Kathmandu and
                  50 km east of Pokhara.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                  As the oldest educational institution in the area, the campus
                  has played a pivotal role in empowering students from
                  indigenous, marginalized, and educationally disadvantaged
                  communities.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Where graduates go */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="After graduation"
            title="Where BICTE Leads"
            subtitle="The degree opens routes across education, development and public service — and some graduates build their own."
          />

          {/* Alumni */}
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {alumni.map((person, idx) => (
              <Reveal
                key={person.name}
                direction={idx === 0 ? "left" : "right"}
                duration={750}
                delay={idx * 130}
              >
                <a href={person.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-stretch gap-5 overflow-hidden rounded-2xl bg-white p-5 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative aspect-square w-36 flex-shrink-0 self-center overflow-hidden rounded-xl ring-2 ring-primary/20 transition-all duration-500 group-hover:ring-primary/50 sm:w-44">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      sizes="176px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
                      {person.batch}
                    </span>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-navy">
                      {person.name}
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold text-primary">
                      {person.role}
                    </p>
                    <p className="mt-0.5 text-xs text-stone/60">
                      {person.extra}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                      {person.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                      {person.linkLabel}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Career paths */}
          <Reveal duration={600} delay={200}>
            <h3 className="mt-20 text-center text-xs font-semibold uppercase tracking-[0.25em] text-stone/50">
              Common career paths
            </h3>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {careerPaths.map((path, idx) => {
              const Icon = path.icon;
              return (
                <Reveal key={path.title} duration={700} delay={idx * 100}>
                  <div className="group h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 font-bold leading-snug text-navy">
                      {path.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-stone">
                      {path.desc}
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