export type Lab = {
  number: number;
  title: string;
  tools?: string[];
  page?: number;
};

export type PracticalSubject = {
  code: string;
  name: string;
  note?: string;
  group?: string;
  description?: string;
  teacher?: string;
  labsheet?: string;
  labs?: Lab[];
};

export type PracticalSemester = {
  number: number;
  subjects: PracticalSubject[];
};

export function subjectSlug(code: string) {
  return code
    .toLowerCase()
    .replace(/\./g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export const practicals: PracticalSemester[] = [
  {
    number: 1,
    subjects: [
      { code: "ICT Ed. 415", name: "Introduction to Information Technology" },
      { code: "ICT Ed. 416", name: "Programming Concept with C" },
    ],
  },
  {
    number: 2,
    subjects: [
      { code: "ICT Ed. 425", name: "Digital Logics" },
      { code: "ICT Ed. 426", name: "Object Oriented Programming with C++" },
    ],
  },
  {
    number: 3,
    subjects: [
      { code: "ICT Ed. 438", name: "21st Century Skills" },
      { code: "ICT Ed. 439", name: "Computer Architecture and Organization" },
      { code: "ICT Ed. 435", name: "Data Structure and Algorithm" },
      { code: "ICT Ed. 437", name: "Web Technology" },
    ],
  },
  {
    number: 4,
    subjects: [
      { code: "ICT Ed. 447", name: "System Analysis and Design", note: "Project" },
      { code: "ICT Ed. 445", name: "Operating System" },
      { code: "ICT Ed. 446", name: "Database Management System" },
    ],
  },
  {
    number: 5,
    subjects: [
      {
        code: "ICT Ed. 455",
        name: "Java Programming",
        description:
          "Covers the fundamentals of Java — program structure, data types and type casting — before moving into object-oriented concepts and building graphical interfaces with Swing layout managers.",
        teacher: "Er. Bibek Bahadur Bhujel",
        labsheet: "ict-ed-455.pdf",
        labs: [
          { number: 1, title: "Basic structure of a Java program", page: 4 },
          { number: 2, title: "Basic data types in Java", page: 5 },
          { number: 3, title: "Type casting in Java", page: 7 },
          { number: 4, title: "Loops using FizzBuzz", page: 9 },
          { number: 5, title: "Inheritance in Java", page: 11 },
          { number: 6, title: "Polymorphism in Java", page: 13 },
          { number: 7, title: "Exception handling in Java", page: 15 },
          { number: 8, title: "JFrame and JPanel", page: 17 },
          { number: 9, title: "Border layout", page: 19 },
          { number: 10, title: "Box layout", page: 21 },
          { number: 11, title: "Grid layout", page: 23 },
          { number: 12, title: "GridBag layout", page: 25 },
          { number: 13, title: "Flow layout", page: 27 },
        ],
      },
      {
        code: "ICT Ed. 456",
        name: "Data Communication and Network",
        description:
          "Hands-on packet analysis using Wireshark — capturing live network traffic and examining how data moves across a network, from subnetting and transport protocols down to Ethernet frames and DHCP.",
        teacher: "Er. Michael Thapa",
        labsheet: "ict-ed-456.pdf",
        labs: [
          {
            number: 1,
            title: "Installation of Wireshark and learning to use it",
            tools: ["Wireshark", "Npcap"],
            page: 3,
          },
          {
            number: 2,
            title: "Capture and save network traffic using Wireshark",
            tools: ["Wireshark", "Npcap"],
            page: 5,
          },
          {
            number: 3,
            title: "Subnetting and network communication analysis",
            tools: ["Wireshark"],
            page: 7,
          },
          {
            number: 4,
            title: "Analysis of TCP and UDP traffic",
            tools: ["Wireshark"],
            page: 9,
          },
          {
            number: 5,
            title: "Analysis of Ethernet and IEEE 802.11 frames",
            tools: ["Wireshark"],
            page: 11,
          },
          {
            number: 6,
            title: "Analysis of DHCP traffic",
            tools: ["Wireshark"],
            page: 13,
          },
        ],
      },
      {
        code: "ICT Ed. 457",
        name: "Software Engineering and Project Management",
        note: "Project",
      },
    ],
  },
  {
    number: 6,
    subjects: [
      { code: "ICT Ed. 465", name: "Visual Programming with C#" },
      { code: "ICT Ed. 466", name: "Computer Graphics" },
      { code: "ICT Ed. 467", name: "Digital Pedagogy and LMS" },
      { code: "ICT Ed. 468", name: "Network and Information Security" },
    ],
  },
  {
    number: 7,
    subjects: [
      { code: "ICT Ed. 477", name: "Python Programming" },
      { code: "ICT Ed. 473", name: "Geographical Information System (GIS)", group: "Elective I" },
      { code: "ICT Ed. 474", name: "Multimedia", group: "Elective I" },
      { code: "ICT Ed. 479", name: "Capstone Project", note: "Final Project" },
    ],
  },
  {
    number: 8,
    subjects: [
      { code: "ICT Ed. 482", name: "Artificial Intelligence in Education" },
      { code: "ICT. Ed. 486", name: "System Administration using Linux" },
      { code: "ICT Ed. 484", name: "Big Data and Data Analysis", group: "Elective II" },
      { code: "ICT Ed. 483", name: "Cloud Computing", group: "Elective II" },
    ],
  },
];

export const allPracticalSubjects = practicals.flatMap((sem) =>
  sem.subjects.map((subject) => ({ ...subject, semester: sem.number }))
);