import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";


export default function About() {
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

  return (
    <>
      <PageHeader
        image="/campus.jpg"
        title="About BICTE"
        subtitle="Bachelor in Information and Communication Technology Education, Aadikavi Bhanubhakta Campus"
      />

      {/* About BICTE */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <Reveal direction="left">
              <div>
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                  About the Programme
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                  The Bachelor of Information and Communication Technology in
                  Education (BICTE) program has been offered at Aadikavi
                  Bhanubhakta Campus since 2070 B.S. It is a unique four-year, eight-semester
                  undergraduate program affiliated with Tribhuvan University,
                  combining advanced ICT skills with modern teaching
                  methodologies to prepare students to excel as educators,
                  technologists, and innovators in the digital age.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-md sm:h-80">
                <Image
                  src="/gallery/demo.jpg"
                  alt="Students engaged in a hands-on ICT demonstration"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="mx-auto mt-14 max-w-4xl">
            <h3 className="text-xl font-semibold text-navy">
              Programme Objectives
            </h3>
            <div className="mt-6 space-y-6">
              {objectives.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    {objectives.indexOf(item) + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">{item.title}</h4>
                    <p className="mt-1 text-sm text-stone">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About the Campus */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <Reveal direction="left">
              <div>
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                  About Aadikavi Bhanubhakta Campus
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                  Established in 2044 B.S. (1987 A.D.), Aadikavi Bhanubhakta
                  Campus is the largest and most reputable institution for
                  higher education in the Tanahun district. Located in Vyas
                  Municipality, Ward No. 1, Bigyan Chaur, Damauli, the campus
                  sits at a key geographic point — 150 km west of Kathmandu
                  and 50 km east of Pokhara.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                  As the oldest educational institution in the area, the
                  campus has played a pivotal role in empowering students
                  from downtrodden, indigenous, marginalized, and
                  educationally disadvantaged communities, ensuring they
                  receive the opportunity to pursue higher education.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-md sm:h-80">
                <Image
                  src="/campus.jpg"
                  alt="Aadikavi Bhanubhakta Campus building"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Vision & Mission
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal direction="left">
              <div className="rounded-lg border border-stone/10 bg-gray-50 p-6">
                <h3 className="font-semibold text-primary">Our Vision</h3>
                <p className="mt-2 text-sm text-stone">
                  To be a leading centre of excellence in ICT education,
                  empowering learners to become skilled, ethical, and
                  innovative contributors to Nepal&apos;s digital
                  transformation.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="rounded-lg border border-stone/10 bg-gray-50 p-6">
                <h3 className="font-semibold text-primary">Our Mission</h3>
                <p className="mt-2 text-sm text-stone">
                  To deliver a comprehensive, practical, and ethically
                  grounded education that blends ICT expertise with modern
                  teaching methodologies — preparing graduates for
                  meaningful careers in education, technology, and beyond.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}