export function codeToSlug(code: string): string {
  return code.replace(/\./g, "").replace(/\s+/g, "_").trim();
}

export type Subject = {
  code: string;
  name: string;
  credits?: number;
  syllabus?: string;
  elective?: string;
};

export type Semester = {
  number: number;
  title: string;
  subjects: Subject[];
};

export const curriculum: Semester[] = [
  {
    number: 1,
    title: "1st Semester",
    subjects: [
      { code: "Ed. 411", name: "Fundamental of Education" },
      { code: "ICT Ed. 415", name: "Introduction to Information Technology" },
      { code: "ICT Ed. 416", name: "Programming Concept with C" },
      { code: "Eng. Ed. 411", name: "English Language-I" },
      { code: "ने. शि. ४११", name: "साधारण नेपाली-१", syllabus: "Nepali_1" },
      { code: "Math Ed. 416", name: "Mathematics-I" },
    ],
  },
  {
    number: 2,
    title: "2nd Semester",
    subjects: [
      { code: "Ed. 422", name: "Developmental Psychology" },
      { code: "ICT Ed. 425", name: "Digital Logics" },
      { code: "ICT Ed. 426", name: "Object Oriented Programming with C++" },
      { code: "Eng. Ed. 421", name: "English Language-II" },
      { code: "ने. शि. ४२१", name: "साधारण नेपाली-२", syllabus: "Nepali_2" },
      { code: "Math Ed. 426", name: "Mathematics-II" },
    ],
  },
  {
    number: 3,
    title: "3rd Semester",
    subjects: [
      { code: "Ed. 432", name: "Learning Psychology" },
      { code: "ICT Ed. 438", name: "21st Century Skills" },
      { code: "ICT. Ed. 439", name: "Computer Architecture and Organization" },
      { code: "ICT Ed. 435", name: "Data Structure and Algorithm" },
      { code: "ICT Ed. 437", name: "Web Technology" },
      { code: "Math Ed. 436", name: "Probability and Statistics" },
    ],
  },
  {
    number: 4,
    title: "4th Semester",
    subjects: [
      { code: "Ed. 442", name: "Fundamentals of Curriculum" },
      { code: "ICT. Ed. 444", name: "Educational Leadership in Digital Era" },
      { code: "ICT Ed. 447", name: "System Analysis and Design" },
      { code: "ICT Ed. 445", name: "Operating System" },
      { code: "ICT Ed. 446", name: "Database Management System" },
      { code: "Math Ed. 442", name: "Numerical Analysis" },
    ],
  },
  {
    number: 5,
    title: "5th Semester",
    subjects: [
      { code: "Ed. 452", name: "Assessment and Evaluation" },
      { code: "ICT Ed. 455", name: "Java Programming" },
      { code: "ICT Ed. 456", name: "Data Communication and Network" },
      { code: "ICT Ed. 457", name: "Software Engineering and Project Management" },
      { code: "Math Ed. 452", name: "Discrete Math" },
    ],
  },
  {
    number: 6,
    title: "6th Semester",
    subjects: [
      { code: "Ed. 462", name: "Research Methods in Education" },
      { code: "ICT Ed. 465", name: "Visual Programming with C#" },
      { code: "ICT Ed. 466", name: "Computer Graphics" },
      { code: "ICT Ed. 467", name: "Digital Pedagogy and LMS" },
      { code: "ICT Ed. 468", name: "Network and Information Security" },
    ],
  },
  {
    number: 7,
    title: "7th Semester",
    subjects: [
      { code: "Ed. 472", name: "Research Project" },
      { code: "ICT Ed. 477", name: "Python Programming" },
      { code: "ICT Ed 478", name: "Teaching Method in ICT" },
      { code: "ICT Ed 473", name: "Geographical Information System (GIS)", elective: "Elective I" },
      { code: "ICT Ed 474", name: "Multimedia", elective: "Elective I" },
      { code: "ICT Ed. 479", name: "Capstone Project" },
    ],
  },
  {
    number: 8,
    title: "8th Semester",
    subjects: [
      { code: "ICT. Ed 482", name: "Artificial Intelligence in Education" },
      { code: "ICT. Ed. 486", name: "System Administration using Linux" },
      { code: "Ed 481", name: "Classroom Pedagogy" },
      { code: "ICT. Ed 484", name: "Big Data and Data Analysis", elective: "Elective II" },
      { code: "ICT. Ed 483", name: "Cloud Computing", elective: "Elective II" },
      { code: "ICT Ed 487", name: "Teaching Practicum in ICT in Education" },
    ],
  },
];

export type CurriculumRow =
  | { kind: "subject"; subject: Subject }
  | { kind: "elective"; label: string; credits: number; options: Subject[] };

export function getSemesterRows(semester: Semester): CurriculumRow[] {
  const rows: CurriculumRow[] = [];
  const seen = new Set<string>();

  for (const subject of semester.subjects) {
    if (subject.elective) {
      if (seen.has(subject.elective)) continue;
      seen.add(subject.elective);
      const options = semester.subjects.filter((s) => s.elective === subject.elective);
      rows.push({
        kind: "elective",
        label: subject.elective,
        credits: options[0]?.credits ?? 3,
        options,
      });
    } else {
      rows.push({ kind: "subject", subject });
    }
  }

  return rows;
}

export function getSemesterCredits(semester: Semester): number {
  return getSemesterRows(semester).reduce(
    (sum, row) => sum + (row.kind === "subject" ? row.subject.credits ?? 3 : row.credits),
    0
  );
}

export function getSemesterCourseCount(semester: Semester): number {
  return getSemesterRows(semester).length;
}

export function getTotalCredits(): number {
  return curriculum.reduce((sum, s) => sum + getSemesterCredits(s), 0);
}

export function getTotalCourses(): number {
  return curriculum.reduce((sum, s) => sum + getSemesterCourseCount(s), 0);
}

export function getTotalElectives(): number {
  const labels = new Set<string>();
  curriculum.forEach((s) =>
    s.subjects.forEach((sub) => {
      if (sub.elective) labels.add(sub.elective);
    })
  );
  return labels.size;
}