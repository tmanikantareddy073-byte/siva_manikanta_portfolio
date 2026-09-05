/**
 * Certification Vault Data Architecture
 * 
 * Instructions for adding certificates later:
 * 1. Place your certificate document in public/certificates/ (e.g. public/certificates/nri_hackathon.pdf)
 * 2. Update the `file` property below to match the path (e.g. file: "/certificates/nri_hackathon.pdf")
 * 3. Update the `type` property to "pdf" or "image" accordingly
 * 4. The Certificate Vault & Document Viewer will automatically load and render it!
 */

export const certificates = [
  {
    id: "nri-u-hackathon",
    number: "01",
    title: "NRI-U Hackathon Participation Certificate",
    organization: "NRI Institute of Technology (NRI-U)",
    category: "Hackathon & Innovation",
    date: "2025",
    description: "Participation certificate awarded for engineering and presenting GenUI AI (Generative UI for Dynamic Workflows) at the NRI-U Hackathon.",
    file: "", // e.g. "/certificates/nri-u-hackathon.pdf"
    type: "pdf", // "pdf" or "image"
    featured: true,
    highlight: "Connected to GenUI AI project",
  },
  {
    id: "mern-stack-internship",
    number: "02",
    title: "Full Stack Web Development in MERN Stack Internship Certificate",
    organization: "Internship Program",
    category: "Web Development",
    date: "", // To be specified when certificate document is added
    description: "Certificate of completion for Full Stack Web Development covering MongoDB, Express.js, React.js, and Node.js.",
    file: "", // e.g. "/certificates/mern-stack-cert.pdf"
    type: "pdf",
    featured: false,
    highlight: "Full Stack Development",
  },
  {
    id: "ibm-aiml",
    number: "03",
    title: "IBM AI/ML Course Certificate",
    organization: "IBM",
    category: "Artificial Intelligence",
    date: "", // To be specified
    description: "Certification covering fundamental concepts, algorithms, and practical workflows in Artificial Intelligence and Machine Learning.",
    file: "", // e.g. "/certificates/ibm-aiml.pdf"
    type: "pdf",
    featured: false,
    highlight: "AI/ML Fundamentals",
  },
  {
    id: "aws-data-engineering",
    number: "04",
    title: "AWS Academy Data Engineering Virtual Internship",
    organization: "AWS Academy",
    category: "Cloud & Data Engineering",
    date: "", // Present in existing profile
    description: "Virtual internship covering core cloud infrastructure, data pipelines, and AWS cloud data services.",
    file: "", // e.g. "/certificates/aws-data-engineering.pdf"
    type: "pdf",
    featured: false,
    highlight: "Cloud Data Pipelines",
  },
  {
    id: "infosys-python",
    number: "05",
    title: "Infosys Springboard Basics of Python",
    organization: "Infosys Springboard",
    category: "Programming",
    date: "", // Present in existing profile
    description: "Foundational programming certification establishing core syntax, data structures, and procedural problem-solving in Python.",
    file: "", // e.g. "/certificates/infosys-python.pdf"
    type: "pdf",
    featured: false,
    highlight: "Python Foundations",
  },
  {
    id: "cisco-cybersecurity",
    number: "06",
    title: "Cisco Networking Academy Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    category: "Cybersecurity & Networks",
    date: "", // Present in existing profile
    description: "Certification covering principles of information security, network defense basics, and cyber threat identification.",
    file: "", // e.g. "/certificates/cisco-cybersecurity.pdf"
    type: "pdf",
    featured: false,
    highlight: "Security & Networking",
  },
];
