export type GalleryPhoto = {
  src: string;
  caption: string;
};

export type BootcampTopic = {
  title: string;
  photos: GalleryPhoto[];
};

export type GalleryCategory = {
  title: string;
  photos?: GalleryPhoto[];
  topics?: BootcampTopic[];
};

export const gallery: GalleryCategory[] = [
  {
    title: "Recognition & Awards",
    photos: [
      {
        src: "/gallery/club.jpg",
        caption: "ABIT Club honoured with the Best Club of the Year award, 2024",
      },
      {
        src: "/gallery/cup.jpg",
        caption: "ABIT Club receiving the Best Club of the Year award, 2023",
      },
    ],
  },
  {
    title: "Bootcamps & Workshops",
    topics: [
      {
        title: "IoT & Robotics",
        photos: [
          {
            src: "/gallery/demo.jpg",
            caption: "Live demonstration of an IoT-based alcohol detection system",
          },
          {
            src: "/gallery/iot.jpg",
            caption: "Students presenting an RC robotics project to visiting schools",
          },
          {
            src: "/gallery/iot2.jpg",
            caption: "Hands-on session during the IoT & Robotics bootcamp",
          },
          {
            src: "/gallery/iotgroup.jpg",
            caption: "ICT Spring Bootcamp 2024 — IoT & Robotics cohort",
          },
          {
            src: "/gallery/iot3.jpg",
            caption: "Students showcasing projects at the IoT & Robotics exhibition",
          },
          {
            src: "/gallery/iot4.jpg",
            caption: "ABIT Club members demonstrating a robotics project to visiting students",
          },
        ],
      },
      {
        title: "Digital Marketing",
        photos: [
          {
            src: "/gallery/boot.jpg",
            caption: "ICT Bootcamp 2025 — Digital Marketing session in progress",
          },
          {
            src: "/gallery/dm.jpg",
            caption: "Participants collaborating during a bootcamp session",
          },
          {
            src: "/gallery/dm2.jpg",
            caption: "Hands-on practical work during the bootcamp",
          },
          {
            src: "/gallery/dm3.jpg",
            caption: "Students working on their assigned bootcamp tasks",
          },
          {
            src: "/gallery/dm4.jpg",
            caption: "7th ICT Spring Bootcamp 2026 — Digital Growth award ceremony",
          },
          {
            src: "/gallery/dm5.jpg",
            caption: "Bootcamp team collaborating on their digital marketing project",
          },
        ],
      },
      {
        title: "Content Creation",
        photos: [
          {
            src: "/gallery/cc1.jpg",
            caption: "Video editing demonstration during the Content Creation workshop",
          },
          {
            src: "/gallery/cc2.jpg",
            caption: "Participants working together on laptops during the session",
          },
          {
            src: "/gallery/cc3.jpg",
            caption: "Sandbox session in progress at the training hall",
          },
        ],
      },
      {
        title: "Building Web with Next.js",
        photos: [
          {
            src: "/gallery/nj1.jpg",
            caption: "A mentor guiding students through a Next.js coding session",
          },
          {
            src: "/gallery/nj2.jpg",
            caption: "A student following along during the coding walkthrough",
          },
          {
            src: "/gallery/nj3.jpg",
            caption: "Students building their projects during the Next.js workshop",
          },
        ],
      },
    ],
  },
  {
    title: "Excursions",
    photos: [
      {
        src: "/gallery/amity.jpg",
        caption: "A memorable visit to Amity University, Noida",
      },
      {
        src: "/gallery/sikkim.jpg",
        caption: "Group stop at Tsomgo Lake during the Sikkim excursion",
      },
      {
        src: "/gallery/sikkim2.jpg",
        caption: "Students exploring Sikkim during the excursion",
      },
      {
        src: "/gallery/myagde.jpg",
        caption: "BICTE students on an excursion to Myagde Multiple Campus",
      },
      {
        src: "/gallery/kalinchowk.jpg",
        caption: "Refreshment tour to Kalinchowk",
      },
    ],
  },
  {
    title: "Graduation",
    photos: [
      {
        src: "/gallery/grads2.jpg",
        caption: "BICTE graduates at the Tribhuvan University convocation",
      },
      {
        src: "/gallery/graduates.jpg",
        caption: "Graduating batch celebrating their convocation day",
      },
    ],
  },
];