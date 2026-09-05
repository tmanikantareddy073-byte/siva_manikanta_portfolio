# Siva Manikanta Reddy — Personal Portfolio & Project Lab

> **Computer Science Student | Developer | AI/ML Enthusiast**  
> An interactive, futuristic personal portfolio website engineered with **React, Vite, Tailwind CSS, Framer Motion, Lucide React, and HTML5 Canvas**.

---

## 🌟 Core Concept: DIGITAL IDENTITY × PROJECT LAB

This website is designed around the concept of a personal technology workspace rather than a generic resume template. It guides visitors through an interconnected exploration:
```
MY IDENTITY ➔ MY JOURNEY ➔ MY SKILLS ➔ PROJECT LAB ➔ CERTIFICATION VAULT ➔ MY EXPERIENCE ➔ LET'S CONNECT
```

---

## ✨ Features & Architecture

### 1. Digital Intelligence Core (Hero Section)
- Interactive HTML5 Canvas featuring dynamic neural network nodes, 3D rotating polyhedron core, particle drift, and physics-based cursor attraction.
- Authentic status badge: `● BUILDING • LEARNING • CREATING`.

### 2. Interactive Technology Constellation (Skills)
- Grouped into:
  - **Programming**: Python, Java
  - **Web Development**: HTML, CSS, JavaScript, MERN Stack
  - **Database**: SQL
  - **AI / Machine Learning**: Clearly identified as an active learning and project development domain
- Clicking any skill reveals a real-time **Relationship Inspector** showing exactly which projects and certifications use it.

### 3. Project Lab & Case Study System
- **GenUI AI (Primary Featured Project)**:
  - Generative UI for Dynamic Workflows (NRI-U Hackathon project)
  - Animated 6-stage architecture pipeline
  - Comprehensive 5-stage case study (Problem, Idea, AI Processing, Dynamic UI, Result)
- **Digital Attendance System**: Web-based roster and attendance logging.
- **Expense Master**: Python expenditure prediction utility with interactive preview simulator.
- **Password Generator**: High-entropy password utility with terminal preview.
- **Full Case Study Modal**: Deep dive into problem, solution, contribution, tech stack, and media with keyboard ESC support.

### 4. Certification Vault & Document Viewer
- Pre-configured for all 6 verified certificates:
  1. *NRI-U Hackathon Participation Certificate*
  2. *Full Stack Web Development in MERN Stack Internship Certificate*
  3. *IBM AI/ML Course Certificate*
  4. *AWS Academy Data Engineering Virtual Internship*
  5. *Infosys Springboard Basics of Python*
  6. *Cisco Networking Academy Introduction to Cybersecurity*
- Interactive document viewer supporting PDF iframe embedding, image zoom in/out/reset, fullscreen, and download.
- Graceful pending upload fallback card with clear drop-in instructions.

### 5. NRI-U Hackathon Journey
- Dedicated competitive timeline connecting initial idea, prototyping, iteration, hackathon defense, and the NRI-U participation certificate.

### 6. Education & Experience
- **Education**: B.Tech CSM (88%, JNTUK), Diploma C.M.E (87%, Usha Rama), SSC (75%, S V B V N High School).
- **Experience**: MERN Stack Web Development Internship and AWS Virtual Internship with editable fields.

### 7. Resume Subsystem
- Dedicated viewer and download trigger targeting `public/resume/resume.pdf`.

### 8. Custom Cursor & Aesthetics
- Desktop-only spring cursor with contextual badges (`VIEW PROJECT`, `VIEW CERT`, `EXPLORE`).
- Sleek Dark Mode default with an intentional, crisp Light Mode switch.

---

## 📁 How to Add Documents & Screenshots Later

### Adding Certificates
1. Drop your PDF or image files in `public/certificates/` (e.g. `nri-u-hackathon.pdf`).
2. Open `src/data/certificates.js` and set the `file` attribute:
   ```javascript
   file: "/certificates/nri-u-hackathon.pdf"
   ```
3. The Certification Vault will immediately display the document with zoom and download controls.

### Adding Resume
1. Place your resume PDF at:
   ```
   public/resume/resume.pdf
   ```
2. The navbar and hero resume buttons will immediately open and download your file.

### Adding Project Screenshots
1. Save project screenshots in:
   - `public/projects/genui/`
   - `public/projects/attendance/`
   - `public/projects/expense-master/`
   - `public/projects/password-generator/`
2. Add the image paths to the `images` array in `src/data/projects.js`.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

---

## 🚢 Deployment to Vercel

This repository is pre-configured and 100% ready for Vercel:
1. Push this folder to your GitHub repository.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework preset will automatically detect **Vite**.
4. Click **Deploy**.
