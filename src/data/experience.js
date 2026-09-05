/**
 * Experience & Internships Data
 * Strict rule: No invented companies, dates, or responsibilities.
 * Information is kept authentic with editable fields for future completion.
 */

export const experiences = [
  {
    id: "mern-internship",
    role: "Full Stack Web Development Intern (MERN Stack)",
    organization: "MERN Stack Internship Program", // Editable: update when company details are provided
    type: "Internship",
    badge: "Web Development",
    duration: "Completed", // Editable: e.g. "June 2024 – August 2024"
    location: "Remote / Virtual",
    description: "Hands-on internship focused on full-stack web application engineering utilizing the MERN stack (MongoDB, Express.js, React, Node.js).",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JavaScript"],
    keyPoints: [
      "Built and deployed modular full-stack web applications using React frontends and Node/Express backends.",
      "Engineered responsive user interfaces and integrated asynchronous RESTful APIs.",
      "Practiced clean component architecture, state handling, and database schemas.",
    ],
    verifiedCertificateId: "mern-stack-internship",
  },
  {
    id: "aws-internship",
    role: "AWS Academy Data Engineering Virtual Intern",
    organization: "AWS Academy",
    type: "Virtual Internship",
    badge: "Cloud & Data Engineering",
    duration: "Completed", // Editable: e.g. "2024"
    location: "Virtual",
    description: "Comprehensive virtual internship program covering cloud-based data engineering fundamentals, storage primitives, and pipeline workflows on Amazon Web Services.",
    skills: ["AWS Cloud", "Data Engineering", "Cloud Storage", "ETL Fundamentals", "Data Pipelines"],
    keyPoints: [
      "Explored core AWS cloud infrastructure and managed services for data processing.",
      "Examined practical data ingestion, pipeline staging, and cloud storage architectures.",
      "Gained working understanding of scalable cloud architecture design patterns.",
    ],
    verifiedCertificateId: "aws-data-engineering",
  }
];
