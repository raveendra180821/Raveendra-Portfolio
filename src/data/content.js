export const PROFILE = {
  name: "Raveendra",
  role: "Developer",
  title: "Product Integration Engineer I / Full Stack Developer",
  location: "Hyderabad, India",
  experience: "2+ years",
  kicker: "Open to full-stack and backend roles",
  headline:
    "I am a software developer who enjoys writing code, solving problems, and understanding how things work behind the scenes.",
  about: [
    "I am curious and enjoy learning new things. When a project requires something I haven’t worked with before, I’m comfortable learning it and figuring out how it works.",
    "With my current experience, I Strengthen my problem-solving skills and gain hands-on experience with APIs, debugging production issues and working with cross-functional teams.",
    "I have a strong foundation in JavaScript, React, and Node.js, although I've had limited opportunities to apply them in my professional role. I’ve continued building my skills through personal projects and learning in my own timee.",
    "I’m looking to bring these experiences together, work on more development-focused projects, and continue growing while exploring AI and LLMs.",
  ],
  stack: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  lookingFor: [
    "React.js",
    "JavaScript",
    "Node.js",
    "Full Stack Development",
    "Backend Development",
  ],
  email: "YOUR_EMAIL",
  github: "YOUR_GITHUB_URL",
  linkedin: "YOUR_LINKEDIN_URL",
  resume: "/resume.pdf",
};

export const ROLES = [
  "Full Stack Developer",
  "Backend Developer",
  "Product Integration Engineer",
  "React.js Developer",
];

export const STATS = [
  { value: "2+", label: "Years" },
  { value: "30+", label: "Integrations" },
  { value: "01", label: "Shipped project" },
];

export const COPY = {
  about: {
    title: "About",
    lead: "How I like to work, and what I want to build next.",
  },
  experience: {
    title: "Experience",
    lead: "Customer-specific integrations at Phenom — APIs, workflows, data mapping, and production debugging.",
  },
  skills: {
    title: "Skills",
    lead: "What I use at work, and what I use on my own projects.",
  },
  projects: {
    title: "Projects",
    lead: "Things I built myself to learn the stack end to end.",
  },
  contact: {
    title: "Get in touch",
    lead: "I'm looking for React, Node, full-stack, or backend work. Email is fine.",
  },
  footer: "Developer in Hyderabad.",
};

export const EXPERIENCE = {
  role: "Product Integration Engineer I",
  company: "Phenom",
  location: "Hyderabad, India",
  duration: "Feb 2024 – Present",
  summary:
    "I build and configure customer-specific product integrations at Phenom. Most of the work is APIs, workflows, data mapping, and getting those integrations ready for production.",
  highlights: [
    {
      title: "Customer-specific integrations",
      text: "I build and configure integrations around each customer's requirements, connecting their ATS or other systems to the Phenom product so data can move between the two correctly.",
    },
    {
      title: "APIs and data",
      text: "I work with REST APIs and structured data like JSON and XML. That includes auth, reading requests and responses, mapping fields, and transforming external data so it fits the product.",
    },
    {
      title: "Workflows and migrations",
      text: "I configure integration workflows, often in JavaScript-based setups, and I've migrated existing integrations from older platforms onto newer ones.",
    },
    {
      title: "Production debugging",
      text: "When an integration fails in production, I trace the workflow, API calls, mappings, configuration, and data to find the actual cause. Then I fix it or bring in the internal team that owns the next piece.",
    },
    {
      title: "Team collaboration",
      text: "Integration work often depends on other teams. When a change, dependency, or issue needs their involvement, I work with them to get it resolved.",
    },
    {
      title: "Apply UI",
      text: "I also made targeted frontend fixes in the Apply product — form validation, field behavior, fonts, spacing, and alignment — to clean up how the product looks and behaves.",
    },
  ],
  tools: [
    "REST APIs",
    "JSON",
    "XML",
    "XPath",
    "OAuth",
    "JavaScript",
    "MongoDB",
    "Postman",
    "Git",
    "Jira",
    "Grafana",
  ],
};

export const SKILL_GROUPS = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["JavaScript", "React.js", "Redux", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "JWT",
      "Socket.IO",
    ],
  },
  {
    id: "database",
    label: "Database",
    items: ["MongoDB", "Mongoose", "SQLite"],
  },
  {
    id: "tools",
    label: "Tools",
    items: ["Git", "GitHub", "Postman", "Jira", "VS Code"],
  },
];

export const PROJECTS = [
  {
    id: "devtinder",
    name: "devTinder",
    tag: "Personal project",
    blurb:
      "A full-stack social connection platform. You can make a profile, send a connection request, and chat in real time.",
    overview:
      "React on the front, Node and Express for the API, MongoDB for data, Socket.IO for chat.",
    why:
      "To get hands-on experience building a full-stack application",
    how:
      "The React app talks to Express for login, profiles, and connection requests. Protected routes use JWT. Chat goes over Socket.IO, so messages show up without a refresh.",
    hard:
      "The tricky parts were keeping connection requests in sync and making chat feel live without opening it to anyone. The socket checks who you are before you join.",
    authentication:
      "Login returns a JWT. Routes that need it ask for the token. So does the socket connection.",
    realtime:
      "Chat uses Socket.IO over WebSockets. Two people can talk without hitting refresh.",
    features: [
      "Sign up and login",
      "Developer profiles",
      "Connection requests",
      "Realtime chat",
      "JWT-protected routes",
    ],
    stack: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "JWT",
    ],
    github: "YOUR_GITHUB_URL",
    live: null,
  },
];
