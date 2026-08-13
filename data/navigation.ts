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
      { label: "Gallery", href: "/about/gallery" },
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
  {
    label: "Faculty",
    href: "/faculty",
  },
  {
    label: "ABIT Club",
    href: "/abit-club",
  },
];