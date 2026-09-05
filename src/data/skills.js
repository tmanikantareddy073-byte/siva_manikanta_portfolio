/**
 * Technology Stack & Interactive Constellation Data
 * Rule: No exaggerated expertise. AI/ML is clearly stated as an area of learning and project development.
 * True cross-links between skills, projects, and certifications.
 */

export const skillCategories = [
  {
    id: "programming",
    title: "PROGRAMMING",
    icon: "Code2",
    description: "Core algorithmic foundations and backend logic.",
    skills: [
      {
        name: "Python",
        level: "Core Language",
        highlight: "Primary language for projects & AI scripting",
        usedInProjects: [
          { id: "genui-ai", title: "GenUI AI — Generative UI" },
          { id: "expense-master", title: "Expense Master" },
          { id: "password-generator", title: "Password Generator" }
        ],
        relatedCertifications: [
          { id: "infosys-python", title: "Infosys Springboard Basics of Python" }
        ],
        context: "Extensively utilized for AI orchestrations, scripting, data modeling, and mathematical utility logic."
      },
      {
        name: "Java",
        level: "Foundational Language",
        highlight: "Object-oriented programming & data structures",
        usedInProjects: [],
        relatedCertifications: [],
        context: "Studied as part of core computer science diploma & degree curriculum for OOP concepts, memory management, and structured algorithms."
      }
    ]
  },
  {
    id: "web-dev",
    title: "WEB DEVELOPMENT",
    icon: "Layout",
    description: "Responsive interface engineering and full-stack integration.",
    skills: [
      {
        name: "HTML",
        level: "Frontend Core",
        highlight: "Semantic markup and accessibility",
        usedInProjects: [
          { id: "digital-attendance", title: "Digital Attendance System" },
          { id: "genui-ai", title: "GenUI AI" }
        ],
        relatedCertifications: [],
        context: "Standard semantic structuring for accessible, high-performance web pages."
      },
      {
        name: "CSS",
        level: "Styling & Layouts",
        highlight: "Modern layouts, Flexbox, Grid, animations",
        usedInProjects: [
          { id: "digital-attendance", title: "Digital Attendance System" },
          { id: "genui-ai", title: "GenUI AI" }
        ],
        relatedCertifications: [],
        context: "Crafting fluid responsive layouts, glassmorphism, and micro-interactions."
      },
      {
        name: "JavaScript",
        level: "Interactive Logic",
        highlight: "DOM, async programming, modern ES6+",
        usedInProjects: [
          { id: "digital-attendance", title: "Digital Attendance System" },
          { id: "genui-ai", title: "GenUI AI" }
        ],
        relatedCertifications: [
          { id: "mern-stack-internship", title: "MERN Stack Internship Certificate" }
        ],
        context: "Core scripting language for web reactivity, API communication, and frontend state management."
      },
      {
        name: "MERN Stack",
        level: "Full Stack Framework",
        highlight: "MongoDB, Express, React, Node.js",
        usedInProjects: [
          { id: "genui-ai", title: "GenUI AI (React frontend)" }
        ],
        relatedCertifications: [
          { id: "mern-stack-internship", title: "Full Stack MERN Internship Certificate" }
        ],
        context: "Practical full-stack development experience gained through hands-on internship and interactive project building."
      }
    ]
  },
  {
    id: "database",
    title: "DATABASE",
    icon: "Database",
    description: "Relational modeling and structured querying.",
    skills: [
      {
        name: "SQL",
        level: "Query & Relational Design",
        highlight: "Schema design, queries, SQLite & relational DBs",
        usedInProjects: [
          { id: "digital-attendance", title: "Digital Attendance System" },
          { id: "genui-ai", title: "GenUI AI (SQLite / SQLAlchemy)" }
        ],
        relatedCertifications: [
          { id: "aws-data-engineering", title: "AWS Academy Data Engineering Virtual Internship" }
        ],
        context: "Designing normalized schemas, writing queries, and managing relational persistence layers."
      }
    ]
  },
  {
    id: "ai-ml",
    title: "AI / MACHINE LEARNING",
    icon: "BrainCircuit",
    description: "Active area of learning, coursework, and project experimentation.",
    isLearningArea: true,
    skills: [
      {
        name: "AI / ML Foundations",
        level: "Active Learning & Project Focus",
        highlight: "LLM integration, Prompt Engineering, Model Concepts",
        usedInProjects: [
          { id: "genui-ai", title: "GenUI AI (Google Gemini API orchestration)" }
        ],
        relatedCertifications: [
          { id: "ibm-aiml", title: "IBM AI/ML Course Certificate" }
        ],
        context: "Explored actively through B.Tech CSM specialization, IBM AI/ML coursework, and generative UI project architectures. Not claimed as advanced expertise; maintained as a dedicated growth domain."
      }
    ]
  }
];
