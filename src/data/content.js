export const PROFILE = {
  name: "Raveendra",
  role: "Developer",
  title: "Product Integration Engineer I / Full Stack Developer",
  location: "Hyderabad, India",
  experience: "2+ years",
  kicker: "Open to full-stack and backend roles",
  headline:
    "Software developer focused on building reliable integrations, backend systems, and full-stack applications.",
  about: [
    "I enjoy understanding how systems work behind the scenes, solving problems, and turning requirements into working software.",
    "In my current role, I work on customer-specific product integrations involving REST APIs, data mapping, workflows, migrations, and production debugging.",
    "Alongside my professional work, I build full-stack projects with JavaScript, React, Node.js, Express.js, and MongoDB to strengthen my development skills through hands-on implementation.",
    "I’m looking to work on development-focused products where I can contribute across the stack, deepen my backend skills, and continue exploring AI and LLM technologies.",
  ],
  stack: [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
  ],
  lookingFor: [
    "React.js",
    "JavaScript",
    "Node.js",
    "Full Stack Development",
    "Backend Development",
  ],
  email: "raveendra180821@gmail.com",
  github: "https://github.com/raveendra180821",
  linkedin: "https://www.linkedin.com/in/raveendra180821/",
  resume: "/resume.pdf",
};

export const ROLES = [
  "Full Stack Developer",
  "Backend Developer",
  "Product Integration Engineer",
  "React.js Developer",
];

export const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "30+", label: "Integrations" },
  { value: "1", label: "Full-Stack Project" },
];

export const COPY = {
  about: {
    title: "About",
    lead: "A little about what I build, how I work, and where I want to grow.",
  },

  experience: {
    title: "Experience",
    lead: "Customer-specific integrations at Phenom involving APIs, workflows, data mapping, migrations, and production debugging.",
  },

  skills: {
    title: "Skills",
    lead: "Technologies I use professionally and in my full-stack projects.",
  },

  projects: {
    title: "Projects",
    lead: "Projects I built to strengthen my full-stack and backend development skills.",
  },

  contact: {
    title: "Get in touch",
    lead: "I'm open to React, Node.js, full-stack, and backend opportunities.",
  },

  footer: "Developer in Hyderabad.",
}

export const EXPERIENCE = {
  role: "Product Integration Engineer I",
  company: "Phenom",
  location: "Hyderabad, India",
  duration: "Feb 2024 – Present",

  summary:
    "I build and configure customer-specific product integrations at Phenom, working across APIs, workflows, data mapping, migrations, and production troubleshooting.",

  highlights: [
    {
      title: "Customer-specific integrations",
      text: "Build and configure integrations based on customer requirements, connecting external ATS and other systems with the Phenom platform so data can move reliably between systems.",
    },

    {
      title: "APIs and data transformation",
      text: "Work with REST APIs and structured data such as JSON and XML, including authentication, request and response handling, field mapping, and data transformation.",
    },

    {
      title: "Workflows and migrations",
      text: "Configure JavaScript-based integration workflows and migrate existing integrations from legacy platforms to newer systems.",
    },

    {
      title: "Production debugging",
      text: "Investigate production issues by tracing workflows, API requests and responses, mappings, configurations, and data to identify the underlying cause and coordinate fixes when other teams are involved.",
    },

    {
      title: "Cross-functional collaboration",
      text: "Work with internal teams to resolve integration dependencies, production issues, and changes that require coordination across different parts of the product.",
    },

    {
      title: "Frontend improvements",
      text: "Contribute targeted frontend fixes in the Apply product, including form validation, field behavior, typography, spacing, and alignment.",
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
    items: [
      "JavaScript",
      "React.js",
      "Redux",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
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
    items: [
      "MongoDB",
      "Mongoose",
      "SQLite",
    ],
  },

  {
    id: "tools",
    label: "Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Jira",
      "VS Code",
    ],
  },
];

export const PROJECTS = [
  {
    id: "devtinder",
    name: "devTinder",
    tag: "Full-Stack Personal Project",

    blurb:
      "A full-stack social connection platform for developers with profiles, connection requests, persistent conversations, and real-time messaging.",

    overview:
      "Built with React and Redux on the frontend, Node.js and Express for the API layer, MongoDB and Mongoose for persistence, and Socket.IO for real-time communication.",

    why:
      "Built to gain hands-on experience designing and implementing a complete full-stack application, including authentication, API integration, database modeling, and real-time communication.",

    how:
      "The React application communicates with Express APIs for authentication, profiles, and connection management. JWT protects application routes. Chat history is persisted in MongoDB, while Socket.IO delivers new messages in real time without requiring a page refresh.",

    hard:
      "The most challenging part was designing the real-time chat flow. I created deterministic conversation rooms from both participant IDs, persisted messages in MongoDB before broadcasting them, and managed socket lifecycle and online status through a shared React Socket Context.",

    authentication:
      "The application uses JWT-based authentication for protected API routes. Socket connections are initialized only after the authenticated user is available in the application state, connecting the real-time layer to the existing authentication flow.",

    realtime:
      "Implemented one-to-one real-time messaging with Socket.IO. Users join a shared conversation room derived from both participant IDs. Messages are saved to MongoDB and then emitted to the room, while socket connection and disconnection events are used to maintain online status and last-seen information.",

    features: [
      "Sign up and login",
      "Developer profiles",
      "Connection requests",
      "Persistent chat history",
      "Real-time one-to-one messaging",
      "Online and last-seen status",
      "JWT-protected API routes",
      "Production Socket.IO configuration",
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

    github: "https://github.com/raveendra180821/devTinder",
    live: "http://13.48.59.100",
  },
];