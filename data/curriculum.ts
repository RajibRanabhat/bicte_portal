export { subjectSlug } from "@/data/practicals";
import { subjectSlug } from "@/data/practicals";

export function codeToSlug(code: string): string {
  return code.replace(/\./g, "").replace(/\s+/g, "_").trim();
}

export type QuestionPart = {
  label: string;
  description: string;
  /** Image path under /public. Opens in the lightbox. */
  file: string;
};

export type QuestionPaper = {
  year: string;
  /** e.g. "Regular", "Terminal". Omit for the main annual paper. */
  session?: string;
  fullMarks?: number;
  duration?: string;
  /** Printed instruction, e.g. "Attempt all questions". Omit if unverified. */
  instruction?: string;
  parts: QuestionPart[];
};

export type BookRole = "Prescribed" | "Reference";

export type Book = {
  title: string;
  authors: string;
  edition?: string;
  publisher?: string;
  year?: string;
  role: BookRole;
  /** Local copy under /public, when the campus is permitted to host it. */
  file?: string;
  /** External listing — publisher, library or archive page. */
  link?: string;
};

export type NoteResource = {
  title: string;
  description?: string;
  pages?: number;
  file: string;
  /** Where the material came from, credited on the card. */
  source?: string;
};

export type SlideDeck = {
  unit: string;
  title: string;
  file?: string;
  link?: string;
};

export type Subject = {
  code: string;
  name: string;
  credits?: number;
  syllabus?: string;
  elective?: string;
  /** Newest first. */
  questions?: QuestionPaper[];
  books?: Book[];
  notes?: NoteResource[];
  slides?: SlideDeck[];
  videoPlaylist?: string;
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
      {
        code: "ICT Ed. 466",
        name: "Computer Graphics",
        questions: [
          {
            year: "2079",
            fullMarks: 40,
            duration: "3 hrs",
            parts: [
              {
                label: "Group A",
                description: "10 objective questions, 1 mark each",
                file: "/questions/ict-ed-466/2079-group-a.jpg",
              },
              {
                label: "Group B",
                description: "6 subjective questions, 5 marks each",
                file: "/questions/ict-ed-466/2079-group-b.jpg",
              },
            ],
          },
        ],
        books: [
          {
            title: "Computer Graphics: Principles and Practice",
            authors:
              "John F. Hughes, Andries van Dam, Morgan McGuire, David F. Sklar, James D. Foley, Steven K. Feiner, Kurt Akeley",
            edition: "3rd edition",
            publisher: "Addison-Wesley",
            year: "2013",
            role: "Reference",
            file: "/books/cg-principles-and-practice.pdf",
          },
        ],
        notes: [
          {
            title: "Computer Graphics — condensed notes",
            description:
              "Covers hardware, output primitives, 2D and 3D transformations, clipping, viewing, visible surface detection and shading.",
            pages: 91,
            file: "/notes/ict-ed-466-condensed-notes.pdf",
            source: "Compiled from Hearn and Baker",
          },
        ],
      },
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

export type SubjectCategory = "ICT" | "Education" | "Math" | "Language";

export function subjectCategory(code: string): SubjectCategory {
  if (code.includes("ICT")) return "ICT";
  if (code.includes("Math")) return "Math";
  if (code.includes("Eng") || code.includes("शि")) return "Language";
  return "Education";
}

type CategoryStyle = { label: string; hex: string; tint: string };

export const categoryStyles: Record<SubjectCategory, CategoryStyle> = {
  ICT: { label: "ICT", hex: "#1878b5", tint: "rgba(24, 120, 181, 0.12)" },
  Education: { label: "Education", hex: "#1b3a6b", tint: "rgba(27, 58, 107, 0.12)" },
  Math: { label: "Mathematics", hex: "#c0392b", tint: "rgba(192, 57, 43, 0.12)" },
  Language: { label: "Language", hex: "#6b7f8f", tint: "rgba(107, 127, 143, 0.14)" },
};

/** Flat list of every subject with its semester — powers search. */
export const flatSubjects = curriculum.flatMap((sem) =>
  sem.subjects.map((subject) => ({
    ...subject,
    semester: sem.number,
    category: subjectCategory(subject.code),
  }))
);

/* ---------- resources ---------- */

export type ResourceCounts = {
  questions: number;
  books: number;
  notes: number;
  slides: number;
  video: boolean;
  total: number;
};

export function getResourceCounts(subject: Subject): ResourceCounts {
  const questions = subject.questions?.length ?? 0;
  const books = subject.books?.length ?? 0;
  const notes = subject.notes?.length ?? 0;
  const slides = subject.slides?.length ?? 0;
  const video = Boolean(subject.videoPlaylist);

  return {
    questions,
    books,
    notes,
    slides,
    video,
    total: questions + books + notes + slides + (video ? 1 : 0),
  };
}

/** True when a subject has anything beyond its syllabus PDF. */
export function hasResources(subject: Subject): boolean {
  return getResourceCounts(subject).total > 0;
}

/** Every subject that earns a /curriculum/[subject] page. */
export const subjectsWithResources = flatSubjects.filter(hasResources);

export function findSubjectBySlug(slug: string) {
  return flatSubjects.find((subject) => subjectSlug(subject.code) === slug) ?? null;
}