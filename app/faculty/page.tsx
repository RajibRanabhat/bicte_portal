"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  User,
  X,
  Phone,
  GraduationCap,
  BookOpen,
  Clock,
  Building2,
  Expand,
} from "lucide-react";
import { faculty, type FacultyMember, type FacultyGroup } from "@/data/faculty";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

const accentStyles = {
  gold: {
    dot: "bg-gold",
    wash: "from-gold/15",
    tagBg: "bg-gold/12",
    tagText: "text-gold-dark",
    ring: "group-hover:ring-gold/40",
    iconHover: "group-hover:bg-gold/10 group-hover:text-gold-dark",
    icon: "text-gold-dark",
  },
  primary: {
    dot: "bg-primary",
    wash: "from-primary/14",
    tagBg: "bg-primary/10",
    tagText: "text-primary",
    ring: "group-hover:ring-primary/40",
    iconHover: "group-hover:bg-primary/10 group-hover:text-primary",
    icon: "text-primary",
  },
  stone: {
    dot: "bg-stone",
    wash: "from-navy/10",
    tagBg: "bg-navy/8",
    tagText: "text-navy",
    ring: "group-hover:ring-navy/30",
    iconHover: "group-hover:bg-navy/8 group-hover:text-navy",
    icon: "text-navy",
  },
} as const;

type Accent = (typeof accentStyles)[keyof typeof accentStyles];

const filters = [
  { label: "All faculty", value: "all" },
  { label: "Leadership", value: "Programme Leadership" },
  { label: "ICT faculty", value: "ICT Faculty" },
  { label: "Supporting faculty", value: "Supporting Faculty" },
];

function FacultyCard({
  member,
  accent,
  onOpenProfile,
}: {
  member: FacultyMember;
  accent: Accent;
  onOpenProfile: () => void;
}) {
  const washClass = `pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b to-transparent ${accent.wash}`;
  const avatarClass = `relative mx-auto h-24 w-24 overflow-hidden rounded-full shadow-lg ring-2 ring-transparent transition-all duration-500 group-hover:scale-105 ${accent.ring}`;
  const fallbackClass = `mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-stone/30 shadow-lg ring-2 ring-transparent transition-all duration-500 group-hover:scale-105 ${accent.ring}`;
  const tagClass = `mt-3 inline-block rounded-full px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${accent.tagBg} ${accent.tagText}`;
  const iconClass = `flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-stone/45 transition-all duration-300 ${accent.iconHover}`;
  const telHref = `tel:${member.phone}`;

  return (
    <button
      onClick={onOpenProfile}
      className="group relative w-full cursor-pointer overflow-hidden rounded-2xl bg-gray-50 text-center transition-all duration-400 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:shadow-navy/10"
    >
      <span className={washClass} />

      <div className="relative px-6 pb-6 pt-9">
        {member.photo ? (
          <div className={avatarClass}>
            <Image src={member.photo} alt={member.name} fill sizes="96px" className="object-cover" />
          </div>
        ) : (
          <div className={fallbackClass}>
            <User className="h-11 w-11" />
          </div>
        )}

        <h3 className="mt-4 text-base font-semibold leading-snug text-navy">
          {member.name}
        </h3>
        <p className="mt-1 text-sm text-stone/70">{member.designation}</p>

        <span className={tagClass}>{member.specialization}</span>

        {(member.phone || member.facebook) && (
          <div className="mt-5 flex justify-center gap-2.5 border-t border-stone/10 pt-4">
            {member.phone && (
              <a
                href={telHref}
                onClick={(e) => e.stopPropagation()}
                aria-label="Phone"
                className={iconClass}
              >
                <Phone className="h-4 w-4" />
              </a>
            )}
            {member.facebook && (
              <a
                href={member.facebook}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="Facebook"
                className={iconClass}
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </button>
  );
}

function ProfileRow({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
  accent: Accent;
}) {
  if (!value) return null;

  const iconClass = `mt-0.5 shrink-0 ${accent.icon}`;

  return (
    <div className="flex items-start gap-3 border-t border-stone/10 py-3.5 text-left first:border-t-0">
      <span className={iconClass}>{icon}</span>
      <span>
        <span className="block text-[9.5px] font-semibold uppercase tracking-[0.16em] text-stone/45">
          {label}
        </span>
        <span className="mt-0.5 block text-sm text-navy">{value}</span>
      </span>
    </div>
  );
}

function ProfileModal({
  member,
  accent,
  onClose,
  onZoomPhoto,
}: {
  member: FacultyMember;
  accent: Accent;
  onClose: () => void;
  onZoomPhoto: () => void;
}) {
  const washClass = `pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b to-transparent ${accent.wash}`;
  const tagClass = `mt-3 inline-block rounded-full px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${accent.tagBg} ${accent.tagText}`;
  const telHref = `tel:${member.phone}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <span className={washClass} />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-stone/40 transition-colors hover:bg-stone/10 hover:text-navy"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative px-8 pb-8 pt-10 text-center">
          {member.photo ? (
            <button
              onClick={onZoomPhoto}
              className="group relative mx-auto h-28 w-28 cursor-pointer overflow-hidden rounded-full shadow-xl ring-2 ring-white"
              aria-label="Enlarge photo"
            >
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="112px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-all duration-300 group-hover:bg-navy/50 group-hover:opacity-100">
                <Expand className="h-5 w-5" />
              </span>
            </button>
          ) : (
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white text-stone/30 shadow-xl ring-2 ring-white">
              <User className="h-12 w-12" />
            </div>
          )}

          <h3 className="mt-4 text-xl font-bold tracking-tight text-navy">{member.name}</h3>
          <p className="mt-1 text-sm text-stone/70">{member.designation}</p>
          <span className={tagClass}>{member.specialization}</span>

          {member.bio && (
            <p className="mt-5 text-sm italic leading-relaxed text-stone">{member.bio}</p>
          )}

          <div className="mt-7 rounded-2xl bg-gray-50 px-5 py-1">
            <ProfileRow icon={<GraduationCap className="h-4 w-4" />} label="Qualification" value={member.qualification} accent={accent} />
            <ProfileRow icon={<BookOpen className="h-4 w-4" />} label="Subjects taught" value={member.subjectsTaught} accent={accent} />
            <ProfileRow icon={<Clock className="h-4 w-4" />} label="Experience" value={member.experience} accent={accent} />
            <ProfileRow icon={<Building2 className="h-4 w-4" />} label="Office hours" value={member.officeHours} accent={accent} />
            <ProfileRow icon={<Phone className="h-4 w-4" />} label="Contact" value={member.phone} accent={accent} />
          </div>

          {(member.phone || member.facebook) && (
            <div className="mt-6 flex justify-center gap-3">
              {member.phone && (
                <a
                  href={telHref}
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-navy/85"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call
                </a>
              )}
              {member.facebook && (
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-5 py-2.5 text-xs font-semibold text-navy transition-all duration-300 hover:bg-gray-200"
                >
                  <FacebookIcon className="h-3.5 w-3.5" />
                  Facebook
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PhotoLightbox({ member, onClose }: { member: FacultyMember; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/92 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 cursor-pointer text-white/60 transition-colors hover:text-white"
      >
        <X className="h-7 w-7" />
      </button>

      <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={member.photo}
          alt={member.name}
          className="max-h-[76vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
        />
        <p className="mt-5 text-sm font-semibold text-white">{member.name}</p>
        <p className="mt-0.5 text-xs text-white/50">{member.designation}</p>
      </div>
    </div>
  );
}

export default function Faculty() {
  const [profileMember, setProfileMember] = useState<{ member: FacultyMember; accent: Accent } | null>(null);
  const [zoomedMember, setZoomedMember] = useState<FacultyMember | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleGroups = useMemo(() => {
    return faculty.filter((g) => activeFilter === "all" || g.title === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <PageHeader
        image="/campus.jpg"
        title="Faculty"
        subtitle="Meet the educators behind the BICTE programme"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal duration={600}>
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((f) => {
                const isActive = activeFilter === f.value;
                const btnClass = `cursor-pointer rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-navy text-white shadow-md shadow-navy/20"
                    : "bg-gray-100 text-stone/70 hover:bg-gray-200 hover:text-navy"
                }`;

                return (
                  <button key={f.value} onClick={() => setActiveFilter(f.value)} className={btnClass}>
                    {f.label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {visibleGroups.map((group: FacultyGroup) => {
            const accent = accentStyles[group.accent];
            const dotClass = `h-2 w-2 rounded-full ${accent.dot}`;

            return (
              <div key={group.title} className="mt-16 first:mt-14">
                <Reveal duration={650}>
                  <div className="flex items-center gap-3">
                    <span className={dotClass} />
                    <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-navy">
                      {group.title}
                    </h2>
                    <span className="h-px flex-1 bg-stone/10" />
                    <span className="text-[10px] uppercase tracking-wider text-stone/40">
                      {group.members.length}
                    </span>
                  </div>
                </Reveal>

                <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.members.map((member, i) => (
                    <Reveal key={member.name} duration={600} delay={i * 70}>
                      <FacultyCard
                        member={member}
                        accent={accent}
                        onOpenProfile={() => setProfileMember({ member, accent })}
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {profileMember && (
        <ProfileModal
          member={profileMember.member}
          accent={profileMember.accent}
          onClose={() => setProfileMember(null)}
          onZoomPhoto={() => setZoomedMember(profileMember.member)}
        />
      )}

      {zoomedMember && (
        <PhotoLightbox member={zoomedMember} onClose={() => setZoomedMember(null)} />
      )}
    </>
  );
}