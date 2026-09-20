export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  gallery: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "eventease",
    name: "EventEase",
    category: "Event Planning & Booking Management System",
    description:
      "A full-stack platform for discovering venues and caterers, booking events, and managing vendors with multi-role authorization and real-time features.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    image: "/assets/projects/eventease/screenshot-1.png",
    gallery: [
      "/assets/projects/eventease/screenshot-1.png",
      "/assets/projects/eventease/screenshot-2.png",
      "/assets/projects/eventease/screenshot-3.png",
    ],
    githubUrl: "https://github.com/Horlarjnr/event-planning-system",
    liveUrl: "https://event-planning-system-six.vercel.app",
  },
  {
    slug: "study-circle",
    name: "Study Circle",
    category: "Peer-to-Peer Knowledge Base",
    description:
      "A knowledge-sharing platform for Q&A, discussions, and mentor-verified solutions with search, comments and upvoting features.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "GitHub"],
    image: "/assets/projects/study-circle/screenshot-1.png",
    gallery: [
      "/assets/projects/study-circle/screenshot-1.png",
      "/assets/projects/study-circle/screenshot-2.png",
      "/assets/projects/study-circle/screenshot-3.png",
    ],
    githubUrl: "https://github.com/iotb-tech/study-circle",
    liveUrl: "https://study-circle-sandy.vercel.app",
  },
  {
    slug: "user-management",
    name: "User Management System",
    category: "Admin Dashboard & User Management",
    description:
      "A secure admin portal with user management, role-based access, and data analytics for better system oversight.",
    technologies: ["HTML", "JavaScript", "Node.js", "Supabase"],
    image: "/assets/projects/user-management/screenshot-1.png",
    gallery: [
      "/assets/projects/user-management/screenshot-1.png",
      "/assets/projects/user-management/screenshot-2.png",
      "/assets/projects/user-management/screenshot-3.png",
    ],
    githubUrl: "https://github.com/Horlarjnr/user-management",
    liveUrl: "https://horlar-jnr-user-management.vercel.app",
  },
  {
    slug: "taskflow",
    name: "TaskFlow",
    category: "Task Management Application",
    description:
      "A simple and effective task manager with user authentication, real-time updates and persistent data storage.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    image: "/assets/projects/taskflow/screenshot-1.png",
    gallery: [
      "/assets/projects/taskflow/screenshot-1.png",
      "/assets/projects/taskflow/screenshot-2.png",
      "/assets/projects/taskflow/screenshot-3.png",
    ],
    githubUrl: "https://github.com/Horlarjnr/taskflow-starter-",
    liveUrl: "https://taskflow-starter-gilt.vercel.app",
  },
];
