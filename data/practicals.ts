export type PracticalSubject = {
  code: string;
  name: string;
  note?: string;
  group?: string;
};

export type PracticalSemester = {
  number: number;
  subjects: PracticalSubject[];
};

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
      { code: "ICT Ed. 455", name: "Java Programming" },
      { code: "ICT Ed. 456", name: "Data Communication and Network" },
      { code: "ICT Ed. 457", name: "Software Engineering and Project Management", note: "Project" },
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