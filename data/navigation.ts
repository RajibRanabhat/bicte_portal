export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Faculty", href: "/faculty" },
      { label: "Curriculum", href: "/curriculum" },
    ],
  },
  {
    label: "Admissions",
    href: "/about/admissions",
  },
  {
    label: "Practicals",
    href: "/practicals",
  },
  {
    label: "Major Activities",
    href: "/major-activities",
    children: [{ label: "Gallery", href: "/about/gallery" }],
  },
  {
    label: "ABIT Club",
    href: "/abit-club",
  },
];