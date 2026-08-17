export type LeadershipMember = {
  name: string;
  role: string;
  /** Optional context under the role, e.g. a semester or a note. */
  meta?: string;
  /**
   * Path under /public, e.g. "/leadership/biwash-ranabhat-president.webp".
   * Leave undefined to fall back to an initials avatar.
   */
  photo?: string;
  quote?: string;
  linkedin?: string;
  github?: string;
  email?: string;
};

// Sourced from the official ABIT Club members board, Aadikavi Bhanubhakta
// Campus \u2014 "Club Members 2082-84" (B.S.). Update this file as the committee
// changes; photos live in /public/leadership.

// Featured executive \u2014 shown in the large highlighted card.
export const president: LeadershipMember = {
  name: "Biwash Ranabhat",
  role: "President",
  photo: "/leadership/biwash-ranabhat-president.webp",
};

// Core executive committee \u2014 shown in a grid next to the president.
export const officers: LeadershipMember[] = [
  {
    name: "Bishal Ruchal",
    role: "I.P. President",
    photo: "/leadership/bishal-ruchal.webp",
  },
  {
    name: "Rajib Ranabhat",
    role: "Vice-President",
    photo: "/leadership/rajib-ranabhat.webp",
  },
  {
    name: "Suraj B.K.",
    role: "Secretary",
    photo: "/leadership/suraj-bk.webp",
  },
  {
    name: "Prerana Thapa",
    role: "Treasurer",
    photo: "/leadership/prerana-thapa.webp",
  },
  {
    name: "Ashim Chhetri",
    role: "Joint Secretary",
    photo: "/leadership/ashim-chhetri.webp",
  },
  {
    name: "Rohit Thapa",
    role: "Spokesperson",
    photo: "/leadership/rohit-thapa.webp",
  },
];

// General members \u2014 shown as a row of compact horizontal cards.
export const members: LeadershipMember[] = [
  {
    name: "Samikshya Shrestha",
    role: "Member",
    photo: "/leadership/samikshya-shrestha.webp",
  },
  {
    name: "Diwas Bastola",
    role: "Member",
    photo: "/leadership/diwas-bastola.webp",
  },
  {
    name: "Nisha Giri",
    role: "Member",
    photo: "/leadership/nisha-giri.webp",
  },
  {
    name: "Diwash Ranabhat",
    role: "Member",
    photo: "/leadership/diwash-ranabhat.webp",
  },
  {
    name: "Biwash Ranabhat",
    role: "Member",
    photo: "/leadership/biwash-ranabhat-member.webp",
  },
];

// Club advisors \u2014 senior faculty/administration supporting the club.
export const advisors: LeadershipMember[] = [
  { name: "Mahaprashad Hadkhale", role: "Campus Chief" },
  { name: "Ghan Bdr. Thapa", role: "H.O.D. of BICTE" },
];