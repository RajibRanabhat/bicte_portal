export type LeadershipMember = {
  name: string;
  role: string;
  meta?: string;
  /** Path under /public. Falls back to initials when absent. */
  photo?: string;
  quote?: string;
  facebook?: string;
  github?: string;
};

/** Executive Committee 2082–84 B.S. */

export const president: LeadershipMember = {
  name: "Biwash Ranabhat",
  role: "President",
  photo: "/leadership/biwash-ranabhat-president.webp",
  facebook: "https://www.facebook.com/ranabhat.biwash.0",
  quote:
    "ABIT Club is a place where ideas become opportunities and students become confident creators. Together, let us learn from one another, build meaningful solutions and lead with purpose.",
};

export const officers: LeadershipMember[] = [
  {
    name: "Bishal Ruchal",
    role: "I.P. President",
    photo: "/leadership/bishal-ruchal.webp",
    facebook: "https://www.facebook.com/bisala.rucala",
  },
  {
    name: "Rajib Ranabhat",
    role: "Vice-President",
    photo: "/leadership/rajib-ranabhat.webp",
    facebook: "https://www.facebook.com/rajib.ranabhat.39",
    github: "https://github.com/RajibRanabhat",
  },
  {
    name: "Suraj B.K.",
    role: "Secretary",
    photo: "/leadership/suraj-bk.webp",
    facebook: "https://www.facebook.com/suraj.sadashankar.18",
    github: "https://github.com/SurajBk06",
  },
  {
    name: "Prerana Thapa",
    role: "Treasurer",
    photo: "/leadership/prerana-thapa.webp",
    facebook: "https://www.facebook.com/prerana.24.07",
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
    facebook: "https://www.facebook.com/rohit.jung.137609",
  },
];

export const members: LeadershipMember[] = [
  {
    name: "Samikshya Shrestha",
    role: "Member",
    photo: "/leadership/samikshya-shrestha.webp",
    facebook: "https://www.facebook.com/samikshya.shrestha.369658",
  },
  {
    name: "Diwas Bastola",
    role: "Member",
    photo: "/leadership/diwas-bastola.webp",
    facebook: "https://www.facebook.com/dibash.banstola.5",
  },
  {
    name: "Nisha Giri",
    role: "Member",
    photo: "/leadership/nisha-giri.webp",
    facebook: "https://www.facebook.com/profile.php?id=61577742166264",
  },
  {
    name: "Diwash Ranabhat",
    role: "Member",
    photo: "/leadership/diwash-ranabhat.webp",
    facebook: "https://www.facebook.com/profile.php?id=61576697976545",
  },
  {
    name: "Biwash Ranabhat",
    role: "Member",
    meta: "7th Semester",
    photo: "/leadership/biwash-ranabhat-member.webp",
  },
];

export const advisors: LeadershipMember[] = [
  {
    name: "Mahaprashad Hadkhale",
    role: "Campus Chief",
    photo: "/leadership/campus-chief.jpeg",
    facebook: "https://www.facebook.com/maha.prasad.hadkhale.2025",
  },
  {
    name: "Er. Ghan Bahadur Thapa",
    role: "Head of Program, BICTE",
    photo: "/leadership/hod.webp",
    facebook: "https://www.facebook.com/aonjand.thapa",
  },
];