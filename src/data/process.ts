export interface ProcessPhase {
  index: string;
  title: string;
  subtitle: string;
  points: string[];
}

// This is an original process built around the actual stack used across
// EventEase, Study Circle, User Management, and TaskFlow — not copied
// from any reference site.
export const processPhases: ProcessPhase[] = [
  {
    index: "01",
    title: "Discover",
    subtitle: "Scope & data model",
    points: [
      "Clarify goals, users, and constraints",
      "Map out the data model and Supabase schema",
      "Sketch the page and component structure",
    ],
  },
  {
    index: "02",
    title: "Design",
    subtitle: "UI system & flows",
    points: [
      "Wireframe the key user flows and states",
      "Set design tokens — color, spacing, type",
      "Plan breakpoints for a mobile-first layout",
    ],
  },
  {
    index: "03",
    title: "Build",
    subtitle: "Component-driven dev",
    points: [
      "Build in React / TypeScript, component by component",
      "Wire up Supabase auth, storage, and RLS policies",
      "Keep commits small with a clear Git history",
    ],
  },
  {
    index: "04",
    title: "Test",
    subtitle: "Verify & harden",
    points: [
      "Manual QA across breakpoints and browsers",
      "API checks with Postman / Thunder Client",
      "Pass over accessibility and edge cases",
    ],
  },
  {
    index: "05",
    title: "Ship",
    subtitle: "Launch & support",
    points: [
      "Deploy to Vercel with environment checks",
      "Smoke-test the production build",
      "Stay on for feedback and follow-up fixes",
    ],
  },
];
