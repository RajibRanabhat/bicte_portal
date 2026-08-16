import { notFound } from "next/navigation";
import { practicals, subjectSlug } from "@/data/practicals";
import SubjectLabs from "@/components/SubjectLabs";

export function generateStaticParams() {
  return practicals.flatMap((sem) =>
    sem.subjects.map((s) => ({ subject: subjectSlug(s.code) }))
  );
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: slug } = await params;

  let found = null;
  let semester = 0;

  for (const sem of practicals) {
    const match = sem.subjects.find((s) => subjectSlug(s.code) === slug);
    if (match) {
      found = match;
      semester = sem.number;
      break;
    }
  }

  if (!found) notFound();

  return <SubjectLabs subject={found} semester={semester} />;
}