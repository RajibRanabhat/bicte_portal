export type Semester = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export const SEMESTER_LABELS: Record<Semester, string> = {
  1: "Semester 1",
  2: "Semester 2",
  3: "Semester 3",
  4: "Semester 4",
  5: "Semester 5",
  6: "Semester 6",
  7: "Semester 7",
  8: "Semester 8",
};

export interface PracticalResources {
  /** Link to the practical sheet PDF */
  practicalSheetUrl?: string;
  /** Link to the full lab manual PDF */
  labManualUrl?: string;
  /** Link to a public source-code repo, if one exists */
  sourceCodeUrl?: string;
}

export interface Practical {
  /** Unique slug, e.g. "sem3-cg-p4" */
  id: string;
  semester: Semester;
  subjectName: string;
  /** e.g. "Practical 4" */
  practicalNumber: string;
  topic: string;
  objective: string;
  softwareUsed: string[];
  technologies: string[];
  labTools: string[];
  practicalActivities: string[];
  learningOutcomes: string[];
  faculty: string;
  resources: PracticalResources;
}

/**
 * Sample data — 2 practicals per semester so every field is visible in
 * context. Duplicate an entry and edit it to add your real practicals;
 * no component changes are needed.
 */
export const practicals: Practical[] = [
  // -------------------------------------------------------------- SEM 1
  {
    id: "sem1-foit-p1",
    semester: 1,
    subjectName: "Fundamentals of IT",
    practicalNumber: "Practical 1",
    topic: "Installing an operating system and configuring a workstation",
    objective: "To install an operating system from scratch and configure user accounts, file permissions, and basic system settings.",
    softwareUsed: ["Windows 11", "Ubuntu Desktop"],
    technologies: ["Operating Systems"],
    labTools: ["Computer Lab", "USB installation media", "VirtualBox"],
    practicalActivities: ["Partition the disk", "Install the OS", "Create user accounts", "Configure permissions", "Verify network connectivity"],
    learningOutcomes: ["Perform a clean OS installation", "Manage users and file permissions", "Troubleshoot basic setup issues"],
    faculty: "Er. Sunita Rai",
    resources: {
      practicalSheetUrl: "/practicals/pdf/foit-p1-sheet.pdf",
      labManualUrl: "/practicals/pdf/foit-lab-manual.pdf",
    },
  },
  {
    id: "sem1-progc-p3",
    semester: 1,
    subjectName: "Programming in C",
    practicalNumber: "Practical 3",
    topic: "Menu-driven calculator using functions",
    objective: "To design a menu-driven console calculator that uses separate functions for each arithmetic operation.",
    softwareUsed: ["Code::Blocks"],
    technologies: ["C"],
    labTools: ["Computer Lab", "GCC compiler", "GDB debugger"],
    practicalActivities: ["Study function prototypes", "Write the program", "Compile and execute", "Test edge cases", "Prepare documentation"],
    learningOutcomes: ["Write modular C programs using functions", "Handle invalid user input gracefully", "Debug logic errors with breakpoints"],
    faculty: "Mr. Bipin Thapa",
    resources: {
      practicalSheetUrl: "/practicals/pdf/progc-p3-sheet.pdf",
      labManualUrl: "/practicals/pdf/progc-lab-manual.pdf",
      sourceCodeUrl: "https://github.com/bicte-portal/progc-calculator",
    },
  },

  // -------------------------------------------------------------- SEM 2
  {
    id: "sem2-oop-p2",
    semester: 2,
    subjectName: "Object Oriented Programming",
    practicalNumber: "Practical 2",
    topic: "Class hierarchy for a library management system",
    objective: "To model a small library system using inheritance and polymorphism across book and member classes.",
    softwareUsed: ["IntelliJ IDEA"],
    technologies: ["Java"],
    labTools: ["Computer Lab", "JDK 21", "Git"],
    practicalActivities: ["Design the class diagram", "Implement base and derived classes", "Override key methods", "Test with sample data", "Prepare documentation"],
    learningOutcomes: ["Design class hierarchies that model real relationships", "Apply inheritance and polymorphism correctly", "Write basic unit tests"],
    faculty: "Ms. Anjali Shrestha",
    resources: {
      practicalSheetUrl: "/practicals/pdf/oop-p2-sheet.pdf",
      labManualUrl: "/practicals/pdf/oop-lab-manual.pdf",
      sourceCodeUrl: "https://github.com/bicte-portal/oop-library-system",
    },
  },
  {
    id: "sem2-digital-logic-p4",
    semester: 2,
    subjectName: "Digital Logic",
    practicalNumber: "Practical 4",
    topic: "Simulating a 4-bit binary adder",
    objective: "To design and simulate a 4-bit combinational adder circuit and verify its truth table.",
    softwareUsed: ["Logisim Evolution"],
    technologies: ["Digital Logic Design"],
    labTools: ["Computer Lab", "Breadboard kit", "Digital multimeter"],
    practicalActivities: ["Derive the logic expressions", "Build the circuit in simulation", "Verify against the truth table", "Wire the breadboard version", "Prepare documentation"],
    learningOutcomes: ["Design combinational circuits from Boolean expressions", "Simulate and verify circuit behaviour", "Translate a simulation into physical wiring"],
    faculty: "Er. Sunita Rai",
    resources: {
      practicalSheetUrl: "/practicals/pdf/digital-logic-p4-sheet.pdf",
      labManualUrl: "/practicals/pdf/digital-logic-lab-manual.pdf",
    },
  },

  // -------------------------------------------------------------- SEM 3
  {
    id: "sem3-cg-p4",
    semester: 3,
    subjectName: "Computer Graphics",
    practicalNumber: "Practical 4",
    topic: "Drawing a circle using Bresenham's algorithm",
    objective: "To understand and implement Bresenham's circle-drawing algorithm for efficient raster graphics.",
    softwareUsed: ["Dev C++"],
    technologies: ["C++"],
    labTools: ["Computer Lab", "Dev C++", "Graphics library (graphics.h)"],
    practicalActivities: ["Study the algorithm", "Write the program", "Compile and execute", "Test different inputs", "Analyze the output", "Prepare documentation"],
    learningOutcomes: ["Understand raster graphics concepts", "Implement circle-drawing algorithms", "Improve programming and debugging skills"],
    faculty: "Mr. Bipin Thapa",
    resources: {
      practicalSheetUrl: "/practicals/pdf/cg-p4-sheet.pdf",
      labManualUrl: "/practicals/pdf/cg-lab-manual.pdf",
      sourceCodeUrl: "https://github.com/bicte-portal/cg-bresenham-circle",
    },
  },
  {
    id: "sem3-dbms-p2",
    semester: 3,
    subjectName: "Database Management System",
    practicalNumber: "Practical 2",
    topic: "Designing a normalized schema for a college database",
    objective: "To design an ER diagram for a college database and normalize it to third normal form (3NF).",
    softwareUsed: ["MySQL Workbench"],
    technologies: ["SQL"],
    labTools: ["Computer Lab", "XAMPP", "phpMyAdmin"],
    practicalActivities: ["Draft the ER diagram", "Identify functional dependencies", "Normalize to 3NF", "Create the schema in MySQL", "Prepare documentation"],
    learningOutcomes: ["Design a normalized relational schema", "Identify and resolve redundancy", "Translate an ER diagram into SQL tables"],
    faculty: "Ms. Anjali Shrestha",
    resources: {
      practicalSheetUrl: "/practicals/pdf/dbms-p2-sheet.pdf",
      labManualUrl: "/practicals/pdf/dbms-lab-manual.pdf",
    },
  },

  // -------------------------------------------------------------- SEM 4
  {
    id: "sem4-webtech-p3",
    semester: 4,
    subjectName: "Web Technology",
    practicalNumber: "Practical 3",
    topic: "Student registration form with server-side validation",
    objective: "To build a responsive registration form that validates input on both the client and the server before saving to a database.",
    softwareUsed: ["VS Code", "XAMPP"],
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    labTools: ["Computer Lab", "MySQL", "Chrome DevTools"],
    practicalActivities: ["Build the form markup", "Style it responsively", "Add client-side validation", "Handle submission in PHP", "Prepare documentation"],
    learningOutcomes: ["Structure accessible, semantic web forms", "Validate and sanitize user input", "Connect a front-end form to a database backend"],
    faculty: "Mr. Rajesh Karki",
    resources: {
      practicalSheetUrl: "/practicals/pdf/webtech-p3-sheet.pdf",
      labManualUrl: "/practicals/pdf/webtech-lab-manual.pdf",
      sourceCodeUrl: "https://github.com/bicte-portal/webtech-registration-form",
    },
  },
  {
    id: "sem4-networks-p1",
    semester: 4,
    subjectName: "Computer Networks",
    practicalNumber: "Practical 1",
    topic: "Subnetting a class C network",
    objective: "To divide a given class C network into subnets for four departments and assign usable host ranges.",
    softwareUsed: ["Cisco Packet Tracer"],
    technologies: ["Networking"],
    labTools: ["Computer Lab", "Packet Tracer", "Wireshark"],
    practicalActivities: ["Calculate subnet masks", "Assign host ranges", "Simulate the topology", "Verify connectivity", "Prepare documentation"],
    learningOutcomes: ["Calculate subnets and usable host ranges", "Simulate and troubleshoot small networks", "Read packet captures to diagnose issues"],
    faculty: "Er. Sunita Rai",
    resources: {
      practicalSheetUrl: "/practicals/pdf/networks-p1-sheet.pdf",
      labManualUrl: "/practicals/pdf/networks-lab-manual.pdf",
    },
  },

  // -------------------------------------------------------------- SEM 5
  {
    id: "sem5-se-p2",
    semester: 5,
    subjectName: "Software Engineering",
    practicalNumber: "Practical 2",
    topic: "UML modelling for a case-study system",
    objective: "To model the use-case and class diagrams for a given case study using standard UML notation.",
    softwareUsed: ["draw.io"],
    technologies: ["UML"],
    labTools: ["Computer Lab", "Trello"],
    practicalActivities: ["Elicit requirements", "Draft the use-case diagram", "Draft the class diagram", "Review with peers", "Prepare documentation"],
    learningOutcomes: ["Translate requirements into formal models", "Model a system using standard UML diagrams", "Review and refine diagrams collaboratively"],
    faculty: "Ms. Anjali Shrestha",
    resources: {
      practicalSheetUrl: "/practicals/pdf/se-p2-sheet.pdf",
      labManualUrl: "/practicals/pdf/se-lab-manual.pdf",
    },
  },
  {
    id: "sem5-os-p5",
    semester: 5,
    subjectName: "Operating Systems",
    practicalNumber: "Practical 5",
    topic: "Simulating CPU scheduling algorithms",
    objective: "To implement and compare FCFS, SJF, and Round Robin scheduling algorithms using average waiting time.",
    softwareUsed: ["VS Code"],
    technologies: ["C"],
    labTools: ["Computer Lab", "GCC compiler", "Linux shell"],
    practicalActivities: ["Implement FCFS", "Implement SJF", "Implement Round Robin", "Compare waiting times", "Prepare documentation"],
    learningOutcomes: ["Compare scheduling algorithms by turnaround and waiting time", "Implement scheduling logic in C", "Interpret and present performance results"],
    faculty: "Mr. Bipin Thapa",
    resources: {
      practicalSheetUrl: "/practicals/pdf/os-p5-sheet.pdf",
      labManualUrl: "/practicals/pdf/os-lab-manual.pdf",
      sourceCodeUrl: "https://github.com/bicte-portal/os-scheduler-sim",
    },
  },

  // -------------------------------------------------------------- SEM 6
  {
    id: "sem6-mad-p2",
    semester: 6,
    subjectName: "Mobile Application Development",
    practicalNumber: "Practical 2",
    topic: "Habit-tracker app with local storage",
    objective: "To build a small habit-tracking app that persists entries locally using SQLite.",
    softwareUsed: ["Android Studio", "Flutter SDK"],
    technologies: ["Dart"],
    labTools: ["Computer Lab", "Android Emulator", "Git"],
    practicalActivities: ["Design the UI widgets", "Set up local SQLite storage", "Wire up CRUD operations", "Test on the emulator", "Prepare documentation"],
    learningOutcomes: ["Compose a mobile UI from reusable widgets", "Persist and retrieve data on-device", "Package and test a debug build"],
    faculty: "Mr. Rajesh Karki",
    resources: {
      practicalSheetUrl: "/practicals/pdf/mad-p2-sheet.pdf",
      labManualUrl: "/practicals/pdf/mad-lab-manual.pdf",
      sourceCodeUrl: "https://github.com/bicte-portal/mad-habit-tracker",
    },
  },
  {
    id: "sem6-ai-p3",
    semester: 6,
    subjectName: "Artificial Intelligence",
    practicalNumber: "Practical 3",
    topic: "Maze solving with A* search",
    objective: "To implement the A* search algorithm to find the shortest path through a grid-based maze.",
    softwareUsed: ["Jupyter Notebook"],
    technologies: ["Python"],
    labTools: ["Computer Lab", "NumPy"],
    practicalActivities: ["Represent the maze as a grid", "Implement the heuristic function", "Implement A* search", "Visualize the path", "Prepare documentation"],
    learningOutcomes: ["Implement and reason about informed search", "Design an admissible heuristic", "Visualize algorithm output clearly"],
    faculty: "Ms. Anjali Shrestha",
    resources: {
      practicalSheetUrl: "/practicals/pdf/ai-p3-sheet.pdf",
      labManualUrl: "/practicals/pdf/ai-lab-manual.pdf",
    },
  },

  // -------------------------------------------------------------- SEM 7
  {
    id: "sem7-elearning-p1",
    semester: 7,
    subjectName: "E-Learning & Instructional Design",
    practicalNumber: "Practical 1",
    topic: "Authoring an interactive micro-lesson",
    objective: "To design and publish a short interactive lesson module using the ADDIE instructional design model.",
    softwareUsed: ["Moodle", "H5P"],
    technologies: ["Instructional Design"],
    labTools: ["Computer Lab", "SCORM packaging tools"],
    practicalActivities: ["Storyboard the lesson", "Author interactive content", "Package as SCORM", "Publish to Moodle", "Prepare documentation"],
    learningOutcomes: ["Apply the ADDIE model to design instruction", "Author interactive, accessible content", "Publish a course module on an LMS"],
    faculty: "Mr. Rajesh Karki",
    resources: {
      practicalSheetUrl: "/practicals/pdf/elearning-p1-sheet.pdf",
      labManualUrl: "/practicals/pdf/elearning-lab-manual.pdf",
    },
  },
  {
    id: "sem7-advweb-p4",
    semester: 7,
    subjectName: "Advanced Web Technology",
    practicalNumber: "Practical 4",
    topic: "REST API with JWT authentication",
    objective: "To design a REST API with token-based authentication and connect it to a React front end.",
    softwareUsed: ["VS Code", "Postman"],
    technologies: ["TypeScript", "Node.js"],
    labTools: ["Computer Lab", "Express", "MongoDB"],
    practicalActivities: ["Design the API routes", "Implement JWT authentication", "Protect key routes", "Connect the React front end", "Prepare documentation"],
    learningOutcomes: ["Design a consistent, documented REST API", "Implement token-based authentication end to end", "Integrate a typed front end with a live API"],
    faculty: "Er. Sunita Rai",
    resources: {
      practicalSheetUrl: "/practicals/pdf/advweb-p4-sheet.pdf",
      labManualUrl: "/practicals/pdf/advweb-lab-manual.pdf",
      sourceCodeUrl: "https://github.com/bicte-portal/advweb-jwt-api",
    },
  },

  // -------------------------------------------------------------- SEM 8
  {
    id: "sem8-project-p1",
    semester: 8,
    subjectName: "Major Project",
    practicalNumber: "Practical 1",
    topic: "Project proposal and requirement scoping",
    objective: "To scope a capstone project, define its requirements, and defend the proposal to the panel.",
    softwareUsed: ["Project-dependent"],
    technologies: ["Project-dependent"],
    labTools: ["Computer Lab", "Project management board"],
    practicalActivities: ["Draft the proposal", "Define requirements", "Prepare the pitch", "Defend to the panel", "Revise based on feedback"],
    learningOutcomes: ["Scope a substantial software project", "Communicate a technical plan clearly", "Incorporate panel feedback into a revised plan"],
    faculty: "Ms. Anjali Shrestha",
    resources: {
      practicalSheetUrl: "/practicals/pdf/project-p1-sheet.pdf",
      labManualUrl: "/practicals/pdf/project-lab-manual.pdf",
    },
  },
  {
    id: "sem8-ictpolicy-p2",
    semester: 8,
    subjectName: "ICT Policy & Practice in Education",
    practicalNumber: "Practical 2",
    topic: "ICT readiness audit of a partner school",
    objective: "To audit a school's ICT readiness against national policy benchmarks and present recommendations.",
    softwareUsed: ["MS Excel", "Google Forms"],
    technologies: ["Data collection"],
    labTools: ["Computer Lab", "Audit checklist templates"],
    practicalActivities: ["Design the audit checklist", "Collect data on-site", "Map findings to policy", "Draft recommendations", "Present findings"],
    learningOutcomes: ["Evaluate ICT readiness against policy", "Identify accessibility and equity gaps", "Present findings to a stakeholder audience"],
    faculty: "Mr. Rajesh Karki",
    resources: {
      practicalSheetUrl: "/practicals/pdf/ictpolicy-p2-sheet.pdf",
      labManualUrl: "/practicals/pdf/ictpolicy-lab-manual.pdf",
    },
  },
];