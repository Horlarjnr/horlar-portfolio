export type Proficiency = "Beginner" | "Intermediate" | "Proficient" | "Advanced";

export interface Skill {
  name: string;
  proficiency: Proficiency;
  color: string; // badge accent color
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", proficiency: "Advanced", color: "#F0DB4F" },
      { name: "TypeScript", proficiency: "Proficient", color: "#3178C6" },
      { name: "HTML5", proficiency: "Advanced", color: "#E44D26" },
      { name: "CSS3", proficiency: "Advanced", color: "#2965F1" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", proficiency: "Advanced", color: "#61DAFB" },
      { name: "Next.js", proficiency: "Proficient", color: "#0B0B0B" },
      { name: "Node.js", proficiency: "Intermediate", color: "#3C873A" },
      { name: "Express.js", proficiency: "Intermediate", color: "#303030" },
      { name: "Tailwind CSS", proficiency: "Advanced", color: "#38BDF8" },
    ],
  },
  {
    title: "Databases & BaaS",
    skills: [
      { name: "Supabase", proficiency: "Proficient", color: "#3ECF8E" },
      { name: "PostgreSQL", proficiency: "Intermediate", color: "#336791" },
      { name: "Auth & Storage", proficiency: "Proficient", color: "#5FD4F4" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", proficiency: "Advanced", color: "#F05032" },
      { name: "GitHub", proficiency: "Advanced", color: "#0B0B0B" },
      { name: "VS Code", proficiency: "Advanced", color: "#007ACC" },
      { name: "Thunder Client", proficiency: "Intermediate", color: "#F97A1F" },
    ],
  },
];
