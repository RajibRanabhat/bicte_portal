export type FacultyMember = {
  name: string;
  designation: string;
  specialization: string;
  phone?: string;
  facebook?: string;
  photo?: string;
  qualification?: string;
  subjectsTaught?: string;
  experience?: string;
  officeHours?: string;
  bio?: string;
};

export type FacultyGroup = {
  title: string;
  accent: "gold" | "primary" | "stone";
  codePrefix: string;
  members: FacultyMember[];
};

export const faculty: FacultyGroup[] = [
  {
    title: "Programme Leadership",
    accent: "gold",
    codePrefix: "L",
    members: [
      {
        name: "Er. Ghan Bahadur Thapa",
        designation: "Head of Program",
        specialization: "Software Development",
        phone: "9841154498",
        facebook: "https://www.facebook.com/aonjand.thapa",
        photo: "/faculty/gbs.jpg",
      },
    ],
  },
  {
    title: "ICT Faculty",
    accent: "primary",
    codePrefix: "I",
    members: [
      {
        name: "Mr. Kailash Laudari",
        designation: "Instructor",
        specialization: "ICT Education",
        phone: "9827161356",
        photo: "/faculty/kailash.png",
      },
      {
        name: "Er. Michael Thapa",
        designation: "Instructor",
        specialization: "Networking",
        phone: "9827137600",
        facebook: "https://www.facebook.com/ma.ikala.pata.magara",
        photo: "/faculty/michael.jpg",
        subjectsTaught: "Data Communication and Network",
      },
      {
        name: "Er. Bibek Bahadur Bhujel",
        designation: "Instructor",
        specialization: "Programming",
        phone: "9866311341",
        facebook: "https://www.facebook.com/bibek.bhujel.982",
        photo: "/faculty/bibek.jpg",
        subjectsTaught: "Java Programming",
      },
    ],
  },
  {
    title: "Supporting Faculty",
    accent: "stone",
    codePrefix: "S",
    members: [
      {
        name: "Dr. Ram Kumar Adhikari",
        designation: "Reader",
        specialization: "Nepali",
        phone: "9856024528",
        facebook: "https://www.facebook.com/ramkumar.adhikari.756",
        photo: "/faculty/ramkmr.jpg",
      },
      {
        name: "Mr. Bimal Giri",
        designation: "Lecturer",
        specialization: "Education",
        phone: "9856060173",
        facebook: "https://www.facebook.com/Janntl939",
        photo: "/faculty/bimalg.jpg",
      },
      {
        name: "Mr. Rajan Ghimire",
        designation: "Lecturer",
        specialization: "Education",
        phone: "9856063563",
        facebook: "https://www.facebook.com/rajan.ghimire.3990",
        photo: "/faculty/rajan.jpg",
      },
      {
        name: "Mr. Bishnu Kumar Yadav",
        designation: "Lecturer",
        specialization: "Mathematics",
        phone: "9846062970",
        facebook: "https://www.facebook.com/bishnu.yadav.77",
        photo: "/faculty/bishnu.png",
      },
      {
        name: "Mr. Bimal Khatri",
        designation: "Lecturer",
        specialization: "English",
        phone: "9866041995",
        facebook: "https://www.facebook.com/urs.bml1",
        photo: "/faculty/bimalk.jpg",
      },
      {
        name: "Mr. Gopal Dhungana",
        designation: "Lecturer",
        specialization: "Mathematics",
        phone: "9841688093",
        facebook: "https://www.facebook.com/gopal.dhungana.5",
        photo: "/faculty/gopal.jpg",
      },
      {
        name: "Mr. Bishnu Hadkhale",
        designation: "Lecturer",
        specialization: "Education",
        phone: "9851076720",
        facebook: "https://www.facebook.com/bhadkhale",
        photo: "/faculty/bhk.jpg",
      },
      {
        name: "Mr. Bharat Kaphle",
        designation: "Asst. Lecturer",
        specialization: "Education",
        phone: "9856063217",
        facebook: "https://www.facebook.com/bharat.kafle.353",
        photo: "/faculty/bharat.jpg",
      },
      {
        name: "Mr. Govinda Bhattarai",
        designation: "Asst. Lecturer",
        specialization: "Mathematics",
        phone: "9856063400",
        facebook: "https://www.facebook.com/govinda.bhattarai.70661",
        photo: "/faculty/govinda.jpg",
      },
    ],
  },
];