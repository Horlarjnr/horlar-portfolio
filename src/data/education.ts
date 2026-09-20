export interface EducationEntry {
  degree: string;
  institution: string;
  date: string;
  detail?: string;
}

// Sourced from CV "EDUCATION" — do not invent entries here.
export const education: EducationEntry[] = [
  {
    degree: "B.Sc. Computer Science with Mathematics",
    institution: "Obafemi Awolowo University (OAU), Ile-Ife",
    date: "Expected 2028",
    detail:
      "Relevant coursework: Human-Computer Interaction, Artificial Intelligence, Database Systems, Web Development",
  },
  {
    degree: "Ordinary National Diploma (OND)",
    institution: "Federal School of Statistics",
    date: "2021",
  },
];
