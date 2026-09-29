/**
 * Project Lab Data Architecture
 * Strict rule: No invented performance stats, fake accuracies, or fake URLs.
 * Project images should be stored in public/projects/<project-slug>/
 */

export const projects = [
  {
    id: "genui-ai",
    featured: true,
    title: "GENUI AI — GENERATIVE UI FOR DYNAMIC WORKFLOWS",
    shortTitle: "GenUI AI",
    category: "Artificial Intelligence • Generative UI • Hackathon",
    badge: "Primary Featured Project",
    tagline: "Transforms natural-language requests into dynamic, structured user interfaces and interactive workflows.",
    description: "An AI-powered Generative UI project that transforms natural-language requests into dynamic user interfaces and workflows without requiring predefined static interfaces for every scenario.",
    
    // Architecture pipeline for dynamic visual flow
    architectureSteps: [
      { step: "01", name: "USER", detail: "Enters natural language interface or workflow request" },
      { step: "02", name: "NATURAL LANGUAGE PROMPT", detail: "Parsed context & structured intent extraction" },
      { step: "03", name: "AI PROCESSING", detail: "Google Gemini API / LLM converts prompt to structured schema" },
      { step: "04", name: "STRUCTURED UI GENERATION", detail: "JSON UI blueprint validated against Pydantic models" },
      { step: "05", name: "DYNAMIC COMPONENTS", detail: "Component runtime renders dynamic layout tree" },
      { step: "06", name: "INTERACTIVE USER INTERFACE", detail: "Responsive, live user interface ready for direct interaction" },
    ],

    // Case study sections
    caseStudy: [
      {
        number: "01",
        label: "PROBLEM",
        content: "Traditional web applications rely strictly on static, hardcoded interfaces designed ahead of time. When end-users or enterprise workflows require ad-hoc data forms, custom dashboards, or dynamic step-by-step wizards, developers have to manually build each view from scratch, creating a bottleneck.",
      },
      {
        number: "02",
        label: "IDEA",
        content: "Empower users to articulate the exact interface or procedural workflow they need using plain natural language, prompting an intelligent orchestrator to synthesize the layout on the fly.",
      },
      {
        number: "03",
        label: "AI PROCESSING",
        content: "Process incoming natural language requests, identify required form fields, layout blocks, and action bindings, and translate them into a structured component specification using LLM capabilities.",
      },
      {
        number: "04",
        label: "DYNAMIC UI",
        content: "Render real-time React dynamic components based on the structured schema, maintaining styling consistency and responsive design without manual frontend coding for each variations.",
      },
      {
        number: "05",
        label: "RESULT",
        content: "Delivers an interactive, functional interface and workflow dynamically tailored to the user's immediate prompt, demonstrated during the NRI-U Hackathon.",
      },
    ],

    features: [
      "Natural language to UI component synthesis",
      "Dynamic form, table, and dashboard component generation",
      "Validated schema output via structured Pydantic representations",
      "Interactive runtime interface with real-time state manipulation",
      "Modular design allowing custom layout expansion",
    ],

    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Tailwind CSS",
      "SQLite",
      "SQLAlchemy",
      "Pydantic",
      "Google Gemini API",
      "Jinja2",
      "Vite",
    ],

    contribution: "Conceptualized the generative UI workflow, designed the dynamic component rendering pipeline, integrated LLM prompt parsing logic, and prepared the technical demonstration for the NRI-U Hackathon.",

    // Media placeholders (place files in public/projects/genui/ when available)
    images: [],
    github: "", // Add repo URL when public
    demo: "",   // Add live demo URL when configured
    video: "",  // Add demo video URL when configured
  },

  {
    id: "digital-attendance",
    featured: false,
    title: "DIGITAL ATTENDANCE SYSTEM",
    shortTitle: "Digital Attendance",
    category: "Web Application",
    badge: "Web Application",
    tagline: "Digital attendance management system designed for organized, paperless tracking.",
    description: "A digital attendance management system designed to make attendance recording and management more organized, transparent, and efficient compared to legacy manual registers.",

    caseStudy: [
      {
        number: "01",
        label: "PROBLEM",
        content: "Traditional paper-based attendance registers are time-consuming to maintain, error-prone during manual tallying, and difficult to audit or report on systematically.",
      },
      {
        number: "02",
        label: "SOLUTION",
        content: "Developed a structured digital interface where instructors and administrators can record attendance statuses, review attendance summaries, and manage student rosters efficiently.",
      },
      {
        number: "03",
        label: "MY CONTRIBUTION",
        content: "Designed the database schemas, built core frontend user interfaces, and implemented attendance recording logic for seamless record retrieval.",
      },
      {
        number: "04",
        label: "RESULT",
        content: "A centralized digital workflow that eliminates manual tallying errors and provides clear attendance records.",
      }
    ],

    features: [
      "Digital student roster management",
      "Rapid daily attendance status recording",
      "Centralized record tracking and storage",
      "Organized tabular view of attendance entries",
      "Responsive layout for tablet and desktop use",
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Web Technologies",
    ],

    contribution: "Engineered database schema for attendance logging, created intuitive UI layouts for marking student presence, and structured data queries for attendance reporting.",

    images: [],
    github: "",
    demo: "",
    video: "",
  },

  {
    id: "expense-master",
    featured: false,
    title: "EXPENSE MASTER",
    shortTitle: "Expense Master",
    category: "Python • Data • Prediction",
    badge: "Python Mini Project",
    tagline: "Python-based application that estimates monthly expenditure based on user-provided financial inputs.",
    description: "A Python-based mini project that predicts and estimates monthly expenditure patterns based on user-provided inputs such as recurring categories and historical spending inputs.",

    // Interactive flow simulation
    flowSteps: [
      { step: "01", title: "USER INPUT", desc: "User inputs categorical expenditures (rent, utilities, food, discretionary)" },
      { step: "02", title: "DATA PROCESSING", desc: "Data normalization, structuring into numeric arrays & basic validation" },
      { step: "03", title: "PREDICTION", desc: "Algorithmic computation estimating projected end-of-month expenditure" },
      { step: "04", title: "MONTHLY EXPENDITURE", desc: "Structured visual breakdown with actionable budget balance display" },
    ],

    caseStudy: [
      {
        number: "01",
        label: "PROBLEM",
        content: "Individuals often struggle to anticipate end-of-month financial positions because day-to-day spending happens across uncoordinated channels without forward projection.",
      },
      {
        number: "02",
        label: "SOLUTION",
        content: "Built a Python program that accepts categorical spending inputs, calculates baseline and discretionary allocations, and computes projected monthly totals.",
      },
      {
        number: "03",
        label: "RESULT",
        content: "Provides users with an immediate estimate of their monthly expenditure trajectory to prevent overspending before month-end.",
      }
    ],

    features: [
      "Categorized expense entry inputs",
      "Mathematical projection calculation",
      "Breakdown of fixed vs flexible expenditures",
      "Console / visual output summaries",
    ],

    technologies: [
      "Python",
      "Data Structures",
      "Mathematical Modeling",
    ],

    contribution: "Designed the computational logic in Python, implemented input validation, and structured category-based spending calculations.",

    images: [],
    github: "",
    demo: "",
    video: "",
  },
];
