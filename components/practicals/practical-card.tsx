import type { Practical } from "@/data/practicals";
import { SEMESTER_LABELS } from "@/data/practicals";

function FieldRow({ emoji, label, value }: { emoji: string; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5">
      <span className="text-sm">{emoji}</span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-[#8A8577]">{label}</p>
        <p className="text-sm text-[#1C2333]">{value}</p>
      </div>
    </div>
  );
}

function FieldList({ emoji, label, items }: { emoji: string; label: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5">
      <span className="text-sm">{emoji}</span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-[#8A8577]">{label}</p>
        <ul className="mt-1 space-y-1">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-[#1C2333]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#8A8577]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PracticalCard({ practical }: { practical: Practical }) {
  const { resources } = practical;
  const hasResources = resources.practicalSheetUrl || resources.labManualUrl || resources.sourceCodeUrl;

  return (
    <article className="rounded-md border border-[#DDD8CC] bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="space-y-3">
        <FieldRow emoji="📚" label="Semester" value={SEMESTER_LABELS[practical.semester]} />
        <FieldRow emoji="📖" label="Subject" value={practical.subjectName} />
        <FieldRow emoji="📝" label="Practical no." value={practical.practicalNumber} />
        <FieldRow emoji="📌" label="Topic" value={practical.topic} />
        <FieldRow emoji="🎯" label="Objective" value={practical.objective} />
        <FieldRow emoji="🛠" label="Software" value={practical.softwareUsed.join(", ")} />
        <FieldRow emoji="💻" label="Technologies" value={practical.technologies.join(", ")} />
        <FieldList emoji="🔧" label="Lab tools" items={practical.labTools} />
        <FieldList emoji="📋" label="Practical activities" items={practical.practicalActivities} />
        <FieldList emoji="🎓" label="Learning outcomes" items={practical.learningOutcomes} />
        <FieldRow emoji="👨‍🏫" label="Faculty" value={practical.faculty} />

        {hasResources && (
          <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5 border-t border-dashed border-[#E4E0D3] pt-3">
            <span className="text-sm">📁</span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#8A8577]">Resources</p>
              <div className="mt-1.5 flex flex-wrap gap-2">
                {resources.practicalSheetUrl && (
                  <a
                    href={resources.practicalSheetUrl}
                    className="inline-flex items-center gap-1.5 rounded-md bg-[#1C2333] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#2B3450]"
                  >
                    📥 Practical sheet
                  </a>
                )}
                {resources.labManualUrl && (
                  <a
                    href={resources.labManualUrl}
                    className="inline-flex items-center gap-1.5 rounded-md border border-[#DDD8CC] px-3 py-1.5 text-xs font-medium text-[#1C2333] transition-colors hover:bg-[#F3F1E9]"
                  >
                    📖 Lab manual
                  </a>
                )}
                {resources.sourceCodeUrl && (
                  <a
                    href={resources.sourceCodeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-[#DDD8CC] px-3 py-1.5 text-xs font-medium text-[#1C2333] transition-colors hover:bg-[#F3F1E9]"
                  >
                    💻 Source code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
