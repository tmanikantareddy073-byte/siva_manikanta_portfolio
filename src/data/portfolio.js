/**
 * Central Personal & Portfolio Configuration
 * Note: Authentic details for Siva Manikanta Reddy.
 * No fabricated statistics, companies, or social links.
 */

import { getAssetUrl } from '../utils/assets';

export const profile = {
  name: "SIVA MANIKANTA REDDY",
  displayName: "Siva Manikanta Reddy",
  email: "tmanikantareddy073@gmail.com",
  web3formsKey: "", // Optional: add Web3Forms key for 1-second instant AWS SES delivery
  phone: "+91 9949189992",
  location: "Vijayawada, Andhra Pradesh",
  role: "Computer Science Student | Developer | AI/ML Enthusiast",
  domainLabel: "COMPUTER SCIENCE • DEVELOPMENT • AI/ML",
  statusBadge: "BUILDING • LEARNING • CREATING",
  heroDescription: "Building practical software solutions, interactive web experiences and intelligent applications while continuously exploring modern technologies.",
  aboutText: "I am a Computer Science student focused on developing practical applications while strengthening my skills in programming, web development, Python and AI/ML.",
  
  // Future configurable links (leave empty if not configured; UI will not render broken links)
  socialLinks: {
    github: "", // e.g. "https://github.com/username"
    linkedin: "", // e.g. "https://linkedin.com/in/username"
    twitter: "",
    leetcode: "",
  },
  
  // Resume configuration: File should be placed in public/resume/resume.pdf
  resume: {
    filePath: getAssetUrl('/resume/resume.pdf'),
    lastUpdated: "2026",
  },
};

export const journeyStages = [
  {
    year: "2022",
    stage: "SSC",
    institution: "S V B V N (E.M.) High School, Vijayawada",
    score: "75%",
    description: "Foundational secondary school education emphasizing science, mathematics, and early analytical reasoning.",
    status: "Completed",
  },
  {
    year: "2025",
    stage: "DIPLOMA — C.M.E",
    institution: "Usha Rama College of Engineering",
    score: "87%",
    description: "Diploma in Computer Engineering. Developed solid fundamentals in computer hardware, structured programming, core databases, and web technologies.",
    status: "Completed",
  },
  {
    year: "Current",
    stage: "B.TECH / PROJECT BUILDING",
    institution: "Amrita Sai Institute of Science and Technology (JNTUK)",
    score: "88% (Ongoing)",
    description: "Active engineering coursework, building real-world software prototypes, exploring generative UI architectures, and participating in technical hackathons.",
    status: "In Progress",
  },
  {
    year: "2028",
    stage: "B.TECH GRADUATION",
    institution: "Amrita Sai Institute of Science and Technology (JNTUK)",
    score: "Targeting Excellence",
    description: "Upcoming graduation with specialization in Computer Science & Machine Learning (CSM), prepared for software engineering and AI application development roles.",
    status: "Target",
  },
];
