import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SubjectResources from "@/components/SubjectResources";
import {
  codeToSlug,
  findSubjectBySlug,
  flatSubjects,
  subjectSlug,
} from "@/data/curriculum";

/** Every subject gets a page — those without extras show empty states. */
export function generateStaticParams() {
  return flatSubjects.map((subject) => ({
    subject: subjectSlug(subject.code),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = findSubjectBySlug(slug);

  if (!subject) return { title: "Subject not found" };

  return {
    title: `${subject.name} — BICTE`,
    description: `Syllabus, old questions, books and notes for ${subject.code} ${subject.name}, semester ${subject.semester} of the BICTE programme.`,
  };
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: slug } = await params;
  const subject = findSubjectBySlug(slug);

  if (!subject) notFound();

  const syllabusFile = subject.syllabus
    ? `/syllabus/${subject.syllabus}.pdf`
    : `/syllabus/${codeToSlug(subject.code)}.pdf`;

  return (
    <>
      <PageHeader
        image="/campus.jpg"
        title={subject.name}
        subtitle={`${subject.code} · Semester ${subject.semester}`}
      />
      <SubjectResources subject={subject} syllabusFile={syllabusFile} />
    </>
  );
}