export type ProjectCategory = "Full Stack" | "Frontend" | "UI System" | "DevOps";

export type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  role: string;
  impact: string;
  badge: string;
  tech: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  accent: "red" | "cyan" | "yellow" | "violet";
};

export const projectCategories: ProjectCategory[] = [
  "Frontend",
  "Full Stack",
  "UI System",
  "DevOps"
];

export const projects: Project[] = [
  {
    title: "Manga Portfolio",
    category: "Frontend",
    description:
      "A comic-inspired portfolio experience with theme switching, localization, responsive sections, and recruiter-friendly project storytelling.",
    problem:
      "Most entry portfolios look interchangeable and hide the candidate's product thinking.",
    role: "Designed and built the full React interface, visual system, data model, and deployment-ready structure.",
    impact:
      "Turns the first 30 seconds of recruiter scanning into a clear view of skills, polish, and personality.",
    badge: "Manga",
    tech: ["React", "TypeScript", "Tailwind", "i18next"],
    features: ["Theme toggle", "Japanese localization", "Responsive cards", "Accessible nav"],
    demoUrl: "https://kshitish-dev.vercel.app",
    githubUrl: "https://github.com/kshitish-panda",
    accent: "red"
  },
  {
    title: "Full-Stack Dashboard",
    category: "Full Stack",
    description:
      "A dashboard concept for protected workflows, API-backed records, clear loading states, and practical deployment boundaries.",
    problem:
      "Internal tools often fail when the UI, API, auth, and empty states are designed separately.",
    role: "Planned the data flow, API contract, protected UI states, and reusable dashboard patterns.",
    impact: "Shows readiness for real product work beyond static pages.",
    badge: "API",
    tech: ["React", "Express", "MongoDB", "JWT"],
    features: ["Protected routes", "API states", "Reusable tables", "Deployment config"],
    demoUrl: "https://kshitish-dev.vercel.app/#projects",
    githubUrl: "https://github.com/kshitish-panda",
    accent: "cyan"
  },
  {
    title: "UI Component Kit",
    category: "UI System",
    description:
      "A reusable set of cards, sections, buttons, form fields, and visual tokens powering the portfolio's comic system.",
    problem:
      "Visual polish becomes hard to maintain when each section invents its own spacing and states.",
    role: "Created reusable component boundaries and consistent class patterns for repeated interface pieces.",
    impact: "Keeps the app visually consistent while making new sections faster to add.",
    badge: "UI",
    tech: ["React", "Tailwind", "CSS", "A11y"],
    features: ["Reusable panels", "Focus states", "Design tokens", "Motion safety"],
    demoUrl: "https://kshitish-dev.vercel.app/#skills",
    githubUrl: "https://github.com/kshitish-panda",
    accent: "yellow"
  },
  {
    title: "Deployment Flow",
    category: "DevOps",
    description:
      "A deployment-ready plan for frontend hosting, backend environment variables, CORS, and contact form delivery.",
    problem:
      "A polished app still loses trust if environment setup and deployment are fragile.",
    role: "Separated client/server responsibilities and documented production-oriented configuration points.",
    impact: "Demonstrates that projects can move from local development to a hosted recruiter demo.",
    badge: "Ops",
    tech: ["Vercel", "Render", "Node", "Env Vars"],
    features: ["API base URL", "CORS plan", "Build script", "Static hosting"],
    demoUrl: "https://kshitish-dev.vercel.app/#contact",
    githubUrl: "https://github.com/kshitish-panda",
    accent: "violet"
  }
];
