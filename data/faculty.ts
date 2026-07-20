export type FacultyMember = {
  name: string;
  designation: string;
  photo?: string;
};

export type FacultyGroup = {
  title: string;
  members: FacultyMember[];
};

export const faculty: FacultyGroup[] = [
  {
    title: "Programme Leadership",
    members: [
      {
        name: "Er. Ghan Bahadur Thapa",
        designation: "Head of Program, BICTE",
        photo: "/faculty/gbs.jpg",
      },
    ],
  },
  {
    title: "ICT Faculty",
    members: [
      {
        name: "Er. Michael Thapa",
        designation: "Lecturer",
        photo: "/faculty/michael.jpg",
      },
      {
        name: "Er. Bibek Bahadur Bhujel",
        designation: "Lecturer",
        photo: "/faculty/bibek.jpg",
      },
      {
        name: "Kailash Laudari",
        designation: "Lecturer",
        photo: "/faculty/kailash.png",
      },
    ],
  },
  {
    title: "Supporting Faculty",
    members: [
      {
        name: "Dr. Ram Kumar Adhikari",
        designation: "Assistant Campus Chief",
        photo: "/faculty/ramkmr.jpg",
      },
      {
        name: "Bimal Giri",
        designation: "Assistant Campus Chief",
        photo: "/faculty/bimalg.jpg",
      },
      {
        name: "Bishnu Kumar Yadav",
        designation: "Lecturer",
        photo: "/faculty/bishnu.png",
      },
      {
        name: "Bimal Khatri",
        designation: "Lecturer",
        photo: "/faculty/bimalk.jpg",
      },
      {
        name: "Rajan Ghimire",
        designation: "Lecturer",
        photo: "/faculty/rajan.jpg",
      },
      {
        name: "Bishnu Hadkhale",
        designation: "Lecturer",
        photo: "/faculty/bhk.jpg",
      },
    ],
  },
];