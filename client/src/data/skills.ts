type SkillGroup = {
  category: string;
  outcome: string;
  items: {
    name: string;
    confidence: number;
  }[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    outcome: "Build responsive, accessible interfaces that feel polished on mobile and desktop.",
    items: [
      { name: "React", confidence: 92 },
      { name: "TypeScript", confidence: 84 },
      { name: "Tailwind CSS", confidence: 90 },
      { name: "HTML/CSS", confidence: 92 }
    ]
  },
  {
    category: "Backend",
    outcome: "Create REST APIs, contact flows, auth boundaries, and database-backed features.",
    items: [
      { name: "Node.js", confidence: 84 },
      { name: "Express.js", confidence: 82 },
      { name: "REST APIs", confidence: 88 },
      { name: "MongoDB", confidence: 78 }
    ]
  },
  {
    category: "DevOps",
    outcome: "Ship apps with clear environment configuration and deployment-ready builds.",
    items: [
      { name: "Git/GitHub", confidence: 88 },
      { name: "Vercel", confidence: 82 },
      { name: "Render", confidence: 76 },
      { name: "CI Basics", confidence: 72 }
    ]
  },
  {
    category: "Tools",
    outcome: "Debug, test APIs, inspect performance, and collaborate from mockup to release.",
    items: [
      { name: "VS Code", confidence: 94 },
      { name: "Postman", confidence: 86 },
      { name: "Figma", confidence: 76 },
      { name: "Chrome DevTools", confidence: 88 }
    ]
  }
];
