import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, '..', 'public', 'resume');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 40, right: 40 },
  info: {
    Title: 'Siva Manikanta Reddy - Curriculum Vitae',
    Author: 'Siva Manikanta Reddy',
    Subject: 'Computer Science Student & Developer Resume',
  }
});

const destPath = path.join(outDir, 'resume.pdf');
const stream = fs.createWriteStream(destPath);
doc.pipe(stream);

// Primary Palette
const PRIMARY = '#0f172a';
const ACCENT = '#0284c7';
const MUTED = '#475569';
const LINE = '#cbd5e1';

// Header
doc.font('Helvetica-Bold').fontSize(22).fillColor(PRIMARY).text('SIVA MANIKANTA REDDY', { align: 'center' });
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(10).fillColor(ACCENT).text('Computer Science Student  •  Developer  •  AI/ML Enthusiast', { align: 'center' });
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(9).fillColor(MUTED).text(
  'Email: tmanikantareddy073@gmail.com  |  Phone: +91 9949189992  |  Location: Vijayawada, Andhra Pradesh',
  { align: 'center' }
);
doc.moveDown(0.5);

// Divider
doc.strokeColor(LINE).lineWidth(0.75).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
doc.moveDown(0.6);

// Helper for section headings
function addSectionHeader(title) {
  doc.moveDown(0.4);
  doc.font('Helvetica-Bold').fontSize(11).fillColor(ACCENT).text(title.toUpperCase());
  doc.strokeColor(ACCENT).lineWidth(1).moveTo(40, doc.y + 2).lineTo(180, doc.y + 2).stroke();
  doc.strokeColor(LINE).lineWidth(0.5).moveTo(180, doc.y + 2).lineTo(555, doc.y + 2).stroke();
  doc.moveDown(0.5);
}

// 1. PROFESSIONAL SUMMARY
addSectionHeader('Professional Summary');
doc.font('Helvetica').fontSize(9).fillColor(PRIMARY).text(
  'Proactive and technically grounded Computer Science student pursuing B.Tech in CSM (Artificial Intelligence & Machine Learning) with 88% academic standing, built upon a Diploma in Computer Engineering (87% distinction). Experienced in building responsive web applications, Python utilities, and generative AI workflow architectures. Passionate about solving real-world challenges through clean, maintainable software and practical applied machine learning.',
  { lineGap: 2 }
);

// 2. EDUCATION
addSectionHeader('Education');

function addEducationItem(degree, institution, details, score, year) {
  const startY = doc.y;
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(PRIMARY).text(degree, 40, startY);
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(ACCENT).text(score, 450, startY, { align: 'right', width: 105 });
  doc.font('Helvetica').fontSize(8.5).fillColor(MUTED).text(`${institution}  •  ${details}`, 40);
  doc.font('Helvetica-Oblique').fontSize(8).fillColor(MUTED).text(`Year: ${year}`, 40);
  doc.moveDown(0.4);
}

addEducationItem(
  'B.Tech in Computer Science & Engineering (CSM - AI & ML)',
  'Amrita Sai Institute of Science and Technology',
  'JNTU Kakinada',
  '88% (Ongoing)',
  '2028'
);

addEducationItem(
  'Diploma in Computer Engineering (C.M.E)',
  'Usha Rama College of Engineering',
  'State Board of Technical Education',
  '87% (Distinction)',
  '2025'
);

addEducationItem(
  'Secondary School Certificate (SSC)',
  'S V B V N (E.M.) High School, Vijayawada',
  'Board of Secondary Education, AP',
  '75%',
  '2022'
);

// 3. TECHNICAL SKILLS
addSectionHeader('Technical Skills');
doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text('Programming Languages: ', { continued: true });
doc.font('Helvetica').fillColor(MUTED).text('Python, Java');
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text('Web Development: ', { continued: true });
doc.font('Helvetica').fillColor(MUTED).text('HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, MERN Stack Fundamentals');
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text('Databases: ', { continued: true });
doc.font('Helvetica').fillColor(MUTED).text('SQL (SQLite, Relational Schema Design, Queries)');
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text('AI & Emerging Tech: ', { continued: true });
doc.font('Helvetica').fillColor(MUTED).text('AI/ML Foundations, LLM API Integration (Google Gemini API), Prompt Engineering, Pydantic');
doc.moveDown(0.2);

// 4. KEY PROJECTS
addSectionHeader('Key Projects');

function addProject(title, category, tech, description) {
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(PRIMARY).text(title, { continued: true });
  doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(ACCENT).text(`  |  ${category}`);
  doc.font('Helvetica-Bold').fontSize(8).fillColor(MUTED).text('Technologies: ', { continued: true });
  doc.font('Helvetica').fontSize(8).fillColor(MUTED).text(tech);
  doc.font('Helvetica').fontSize(8.5).fillColor(PRIMARY).text(`• ${description}`, { lineGap: 1.5 });
  doc.moveDown(0.4);
}

addProject(
  'GenUI AI — Generative UI for Dynamic Workflows',
  'AI / Generative UI / Hackathon',
  'Python, FastAPI, React, Tailwind CSS, SQLite, Google Gemini API, Pydantic, Vite',
  'Engineered an AI-powered system converting natural language prompts into dynamic user interfaces and structured interactive workflows. Validated schema representation via Pydantic and rendered responsive React layouts.'
);

addProject(
  'Digital Attendance System',
  'Full Stack Web Application',
  'HTML, CSS, JavaScript, SQL, Web Technologies',
  'Designed and implemented a digital attendance recording platform to streamline roster tracking, eliminate manual registration errors, and provide structured tabular audit logs.'
);

addProject(
  'Expense Master',
  'Python Prediction Mini Project',
  'Python, Numeric Modeling, Data Structures',
  'Built a financial utility to estimate and project monthly expenditures based on categorical spending inputs, computing fixed vs flexible balance projections.'
);

addProject(
  'Password Generator',
  'Python Security Utility',
  'Python, Randomization Logic, String Permutations',
  'Developed a lightweight security tool that generates high-entropy, customizable passwords using Python primitive data structures and uniform randomness.'
);

// 5. INTERNSHIPS & EXPERIENCE
addSectionHeader('Experience & Internships');

doc.font('Helvetica-Bold').fontSize(9.5).fillColor(PRIMARY).text('Full Stack Web Development Intern (MERN Stack)');
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(MUTED).text('MERN Stack Internship Program  •  Completed');
doc.font('Helvetica').fontSize(8.5).fillColor(PRIMARY).text(
  '• Built responsive full-stack applications with React frontends and Node.js/Express REST APIs.\n• Structured relational & document models, implemented state management, and deployed interactive components.',
  { lineGap: 1.5 }
);
doc.moveDown(0.4);

doc.font('Helvetica-Bold').fontSize(9.5).fillColor(PRIMARY).text('AWS Academy Data Engineering Virtual Intern');
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(MUTED).text('AWS Academy  •  Completed');
doc.font('Helvetica').fontSize(8.5).fillColor(PRIMARY).text(
  '• Explored cloud data pipeline design, distributed storage primitives, and managed cloud infrastructure on AWS.\n• Examined foundational ETL principles and scalable cloud architecture design patterns.',
  { lineGap: 1.5 }
);

// 6. CERTIFICATIONS & ACHIEVEMENTS
addSectionHeader('Certifications & Achievements');
const certs = [
  'NRI-U Hackathon Participation Certificate — NRI Institute of Technology (GenUI AI Project)',
  'Full Stack Web Development in MERN Stack Internship Certificate',
  'IBM AI/ML Course Certificate — Foundations of Artificial Intelligence & Machine Learning',
  'AWS Academy Data Engineering Virtual Internship Certificate',
  'Infosys Springboard Basics of Python Certificate',
  'Cisco Networking Academy Introduction to Cybersecurity Certificate'
];
certs.forEach(cert => {
  doc.font('Helvetica').fontSize(8.5).fillColor(PRIMARY).text(`•  ${cert}`);
  doc.moveDown(0.15);
});

doc.end();

stream.on('finish', () => {
  console.log('Successfully generated resume.pdf at: ' + destPath);
});
