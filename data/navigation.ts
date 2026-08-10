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
      { label: "Admissions", href: "/about/admissions" },
    ],
  },
  {
    label: "Curriculum",
    href: "/curriculum",
  },
  {
    label: "Practicals",
    href: "/practicals",
    children: [{ label: "Coming Soon", href: "/practicals" }],
  },
  /*{
    label: "ABIT Club",
    href: "/abit-club",
  },*/
  {
    label: "Faculty",
    href: "/faculty",
  },
  {
    label: "Major Activities",
    href: "/major-activities",
    children: [{ label: "Gallery", href: "/about/gallery" }],
  },
];