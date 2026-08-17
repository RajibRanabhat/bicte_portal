"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { LeadershipMember } from "@/data/leadership";

// Accent used only within the Leadership section, per request. The rest of
// the site keeps using the shared --color-primary token untouched.
export const ACCENT = "#0E76BD";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export const gridContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 24 },
  },
};

const rowIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 260, damping: 24 },
  },
};

function SocialRow({
  member,
  dark = false,
}: {
  member: LeadershipMember;
  dark?: boolean;
}) {
  const items: { href?: string; icon: React.ElementType; label: string }[] = [
    {
      href: member.linkedin,
      icon: FaLinkedinIn,
      label: `${member.name} on LinkedIn`,
    },
    {
      href: member.github,
      icon: FaGithub,
      label: `${member.name} on GitHub`,
    },
    {
      href: member.email ? `mailto:${member.email}` : undefined,
      icon: Mail,
      label: `Email ${member.name}`,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {items.map(({ href, icon: Icon, label }, idx) => {
        const base =
          "flex h-8 w-8 items-center justify-center rounded-full text-xs";

        if (href) {
          return (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className={base}
              style={
                dark
                  ? { backgroundColor: "rgba(255,255,255,0.12)", color: "#fff" }
                  : { backgroundColor: `${ACCENT}1A`, color: ACCENT }
              }
            >
              <Icon className="h-3.5 w-3.5" />
            </motion.a>
          );
        }

        return (
          <span
            key={idx}
            aria-hidden="true"
            className={`${base} cursor-default ${
              dark ? "bg-white/5 text-white/25" : "bg-stone/5 text-stone/25"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
          </span>
        );
      })}
    </div>
  );
}

// Featured "spotlight" card for the club President \u2014 a distinct treatment
// from the officer grid: a slowly rotating gradient ring around the photo,
// ambient glow blobs, and a pop-in role badge.
export function PresidentSpotlightCard({ member }: { member: LeadershipMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 170, damping: 22 }}
      whileHover={{ y: -6 }}
      className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-navy px-8 py-10 text-center shadow-xl"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full blur-3xl"
        style={{ backgroundColor: ACCENT, opacity: 0.22 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.16, 0.32, 0.16] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-12 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: ACCENT, opacity: 0.16 }}
        animate={{ scale: [1.12, 1, 1.12], opacity: [0.12, 0.26, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative flex flex-1 flex-col items-center justify-center">
        <div className="relative h-32 w-32 sm:h-40 sm:w-40">
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, ${ACCENT}, transparent 40%, ${ACCENT})`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-[5px] overflow-hidden rounded-full bg-navy">
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center text-3xl font-bold text-white/80"
                style={{ backgroundColor: `${ACCENT}33` }}
              >
                {initials(member.name)}
              </div>
            )}
          </div>
        </div>

        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 320, damping: 16 }}
          className="mt-5 inline-flex rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
          style={{ backgroundColor: ACCENT }}
        >
          {member.role}
        </motion.span>

        <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-white/60">
          {member.role}, ABIT Club
        </p>
        {member.meta && (
          <p className="text-sm text-white/60">{member.meta}</p>
        )}

        {member.quote && (
          <div className="relative mx-auto mt-6 max-w-xs">
            <span
              aria-hidden="true"
              className="absolute -top-4 left-1/2 -translate-x-1/2 font-serif text-4xl leading-none"
              style={{ color: `${ACCENT}80` }}
            >
              &ldquo;
            </span>
            <p className="text-sm italic leading-6 text-white/70">
              {member.quote}
            </p>
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <SocialRow member={member} dark />
        </div>
      </div>
    </motion.div>
  );
}

export function OfficerCard({ member }: { member: LeadershipMember }) {
  return (
    <motion.div
      variants={cardIn}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone/10 bg-white shadow-sm"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
            style={{ color: `${ACCENT}55` }}
          >
            {initials(member.name)}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-4">
        <p
          className="text-[11px] font-bold uppercase tracking-wider"
          style={{ color: ACCENT }}
        >
          {member.role}
        </p>
        <p className="mt-1 font-bold text-navy">{member.name}</p>
        {member.meta && (
          <p className="text-xs text-stone/55">{member.meta}</p>
        )}
        <div className="mt-3">
          <SocialRow member={member} />
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{ backgroundColor: ACCENT }}
      />
    </motion.div>
  );
}

export function CompactMemberCard({ member }: { member: LeadershipMember }) {
  return (
    <motion.div
      variants={rowIn}
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-stone/10 bg-white p-3 shadow-sm"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center text-sm font-bold"
            style={{ color: `${ACCENT}55` }}
          >
            {initials(member.name)}
          </div>
        )}
      </div>

      <div className="min-w-0">
        <p
          className="truncate text-[11px] font-bold uppercase tracking-wider"
          style={{ color: ACCENT }}
        >
          {member.role}
        </p>
        <p className="truncate font-bold text-navy">{member.name}</p>
        {member.meta && (
          <p className="truncate text-xs text-stone/55">{member.meta}</p>
        )}
        <div className="mt-2">
          <SocialRow member={member} />
        </div>
      </div>
    </motion.div>
  );
}

export function LeadershipIntro({
  eyebrow,
  heading,
  subheading,
}: {
  eyebrow: string;
  heading: string;
  subheading?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div
        className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em]"
        style={{ color: ACCENT }}
      >
        {eyebrow}
        <motion.span
          aria-hidden="true"
          className="h-px"
          style={{ backgroundColor: ACCENT }}
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        {heading}
      </h2>
      {subheading && (
        <span
          className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: `${ACCENT}14`, color: ACCENT }}
        >
          {subheading}
        </span>
      )}
    </motion.div>
  );
}

// Keeps motion's client-only hooks out of the (server) page component \u2014
// page.tsx just wraps its grids with this instead of touching motion.div.
export function AnimatedGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={gridContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function LeadershipSubLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]"
      style={{ color: ACCENT }}
    >
      {children}
      <span
        aria-hidden="true"
        className="h-px w-8"
        style={{ backgroundColor: `${ACCENT}4D` }}
      />
    </motion.div>
  );
}