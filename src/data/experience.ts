export interface ExperienceEntry {
  role: string;
  organization: string;
  date: string;
  points: string[];
}

// Sourced from CV "WORK EXPERIENCE" — do not invent entries here.
export const experience: ExperienceEntry[] = [
  {
    role: "Web Development Fellow",
    organization: "IOTB TECH Fellowship",
    date: "May 2026 – Present",
    points: [
      "Collaborate in an agile team environment to design and ship production features.",
      "Conducted user research and survey data analysis to design and build Study Circle, an interactive Q&A knowledge base.",
      "Developed mobile-first, responsive landing pages adhering to strict design specifications using HTML5, CSS3, and Tailwind CSS.",
    ],
  },
  {
    role: "Industrial Training (IT)",
    organization: "Ogun TechHub, Abeokuta",
    date: "October 2023 – March 2024",
    points: [
      "Participated in hands-on technical workshops, code reviews, and software design training sessions to build industry-standard developer workflows.",
    ],
  },
];
