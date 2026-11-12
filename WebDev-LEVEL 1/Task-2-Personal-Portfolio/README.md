# Sahil Dabade — Personal Portfolio Website

**OASIS INFOBYTE Internship — Web Development and Designing**  
**Level 1 · Task 2: Personal Portfolio Website**

---

## 📌 Project Overview

This repository contains the personal portfolio website for **Sahil Dabade**, an Information Technology engineering student at Nutan Maharashtra Institute of Engineering and Technology (NMIET), Talegaon (affiliated with Savitribai Phule Pune University — SPPU) and aspiring web developer.

Built as part of the **OASIS INFOBYTE Web Development and Designing Internship (Level 1 — Task 2)**, this portfolio is tailored for internship applications, placement preparations, GitHub showcase, and personal technical branding. It features a modern, clean, and high-performance design built exclusively with **HTML5, Vanilla CSS3, and Vanilla JavaScript**—with zero third-party framework dependencies.

---

## 🚀 Key Highlights & Technologies

* **Semantic HTML5 Architecture**: Fully structured with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements for maximum accessibility (WCAG AA compliant) and search engine optimization (SEO).
* **Vanilla CSS3 Design System**:
  * Centralized CSS custom properties (`:root` tokens for colors, typography, elevations, transitions).
  * Two curated themes: **Midnight Navy + Electric Blue Tech Dark Mode (Default)** and **Crisp Light Mode** with smooth transition switching and `localStorage` persistence.
  * Modern CSS Grid and Flexbox layouts.
  * Responsive cards with hover micro-interactions, subtle glowing borders, and rounded corners.
* **Modular Vanilla JavaScript**:
  * **Theme Switcher**: Instant dark/light mode toggle saved across sessions.
  * **Mobile Navigation Drawer**: Accessible hamburger menu with focus management, outside click close, and `Escape` key listener.
  * **Active Navigation State (Scroll Spy)**: Uses `IntersectionObserver` to highlight the current section in the navbar.
  * **Project Category Filtering**: Interactive tabs to filter projects by category (*All*, *Web Applications*, *Frontend & Landing*).
  * **Scroll Reveal Animations**: Subtle element entry animations triggered via `IntersectionObserver`.
  * **Certificate Lightbox Modal**: Interactive credential preview with accessible dialog semantics.
  * **Client-Side Form Validation**: Real-time validation for contact form fields with non-intrusive feedback and polite toast notification.
  * **Floating Back-to-Top Button**: Smooth scrolling utility appearing when viewport scrolls past 350px.
* **Zero Framework Bloat**: No React, Bootstrap, or TailwindCSS used. 100% clean, native web standards.

---

## 📂 Project Structure

```text
Task-2-Personal-Portfolio/
│
├── index.html                      # Main semantic HTML5 webpage
├── css/
│   └── style.css                   # Complete Vanilla CSS design system & responsive styling
├── js/
│   └── script.js                   # Vanilla JS interactivity, theme toggle & validation
├── assets/
│   └── images/                     # Visual assets & vector project mockups
│       ├── sahil-profile.png       # Sahil Dabade's genuine professional profile photograph
│       ├── profile-sahil.jpg       # Supplementary developer visual
│       ├── project-alex.svg        # AI Assistant Alex interface mockup
│       ├── project-gaming.svg      # Gaming Store Website interface mockup
│       ├── project-drinks.svg      # Cold Drink Store Website interface mockup
│       ├── project-weather.svg     # Weather Web Application dashboard mockup
│       ├── project-nexora.jpg      # NEXORA AI SaaS Landing Page preview (Task 1)
│       └── certificate-oasis.svg   # Oasis Infobyte Internship Certificate preview
└── README.md                       # Complete documentation & project guide
```

> **Strict Isolation Notice**: All files for Task 2 reside exclusively inside `Task-2-Personal-Portfolio`. Task 1 (`Task-1-AI-SaaS-Landing-Page`) remains completely untouched and intact.

---

## 🌐 Website Sections

### 1. Navigation Bar
* Brand logo: `<Sahil Dabade />` with active live status indicator dot.
* Section links: **Home**, **About**, **Skills**, **Education**, **Projects**, **Experience**, **Certifications**, and **Contact**.
* Interactive **Dark/Light Theme Toggle** button.
* Accessible **Mobile Drawer Navigation** for smaller viewports.

### 2. Hero Section (Two-Column Layout)
* **Left Column**:
  * Greeting: *"Hi, I'm Sahil Dabade"*
  * Headline: *"IT Student | Web Developer"*
  * Supporting Statement: *"Information Technology student focused on web development, programming, and building practical projects. Passionate about creating responsive digital experiences and solving real-world challenges."*
  * CTA Buttons: **View Projects** (`#projects`), **Contact Me** (`#contact`), and **Resume** (`#resume`).
  * Highlight Metrics Bar: B.E. IT @ NMIET, 5+ Practical Projects, Level 1 Intern, C++ & DSA.
* **Right Column**:
  * **Sahil's Genuine Profile Photograph** (`assets/images/sahil-profile.png`):
    * Displayed in a circular frame with subtle gradient border and soft ambient shadow.
    * 100% genuine, unaltered, undistorted, responsive on all devices.
    * Accessible alt text: *"Sahil Dabade - Information Technology student and web developer"*.

### 3. About Me Section
* Detailed narrative covering IT engineering background at NMIET (SPPU), web development focus, algorithmic study in C++ and DSA, and commitment to continuous learning.
* Four core value pillars: Practical Implementation, Continuous Improvement, Team Collaboration, and Responsive Design.
* Quick facts summary card detailing academic affiliation, current degree, and location.

### 4. Technical Skills Toolkit
Categorized into 4 clear groups without artificial percentage bars:
* **Frontend**: HTML5 (Proficient), CSS3 (Proficient), JavaScript (Intermediate), Responsive Web Design (Proficient).
* **Programming**: C++ (Intermediate), Data Structures & DSA (Active Learning), Java (Core / Intermediate).
* **Database**: MySQL (Intermediate), SQL Queries (Intermediate), Database Normalization (Academic Study).
* **Tools & Workflow**: Git (Proficient), GitHub (Proficient), VS Code (Proficient).

### 5. Education Section
Structured chronological timeline:
1. **Bachelor of Engineering (B.E.) — Information Technology**: NMIET, Talegaon · SPPU (Current undergraduate studies).
2. **Higher Secondary Certificate (HSC — 12th Grade)**: Maharashtra State Board · **73.50%** (Science stream).
3. **Secondary School Certificate (SSC — 10th Grade)**: Maharashtra State Board · **94.00%**.

### 6. Projects Section (With Filter Tabs)
* **Category Filters**: All Projects (5), Web Applications (3), Frontend & Landing (2).
* **Included Projects**:
  1. **AI Assistant — Alex**: Chatbot interface with audio frequency visualizer, prompt suggestions, and coding assistance canvas.
  2. **Gaming Store Website**: E-commerce game catalog with cyber aesthetic, discounts, ratings, and cart states.
  3. **Cold Drink Store Website**: Refreshing commercial beverage store with product showcase and clean layout.
  4. **Weather Web Application**: Real-time weather dashboard with temperature gauge, atmospheric metrics, and 5-day forecast.
  5. **NEXORA AI — SaaS Landing Page**: Level 1 Task 1 project showcase featuring dark mode, pure CSS interactivity, and direct preview link to `../Task-1-AI-SaaS-Landing-Page/index.html`.

### 7. Experience & Activities Section
* **Internship**: **OASIS INFOBYTE** — Web Development & Designing Intern (Level 1). Documents completion of Task 1 (AI SaaS Landing Page) and Task 2 (Personal Portfolio Website).
* **Activities & Leadership**:
  * **GirlScript Summer of Code (GSSOC)**: Open-source participant & contributor.
  * **NMIET Innothrive**: Student team leader for annual innovation symposium.
  * **NMIET Hackathon**: Team coordinator & participant.

### 8. Certifications Section
* Professional certificate card displaying the **OASIS INFOBYTE Web Development & Designing (Level 1)** credential.
* Interactive **"Preview Credential"** button that opens an accessible lightbox modal.
* Modular placeholder card for future technical certifications.

### 9. Resume Section
* Dedicated CTA banner: *"Looking for a Dedicated IT Student & Developer?"*
* Direct trigger to download resume (linked with placeholder alert).
* Quick link to GitHub profile.

### 10. Contact Section & Social Links
* Direct communication cards:
  * **Email**: `dabadesahil05@gmail.com`
  * **GitHub**: [github.com/SahilDabade](https://github.com/SahilDabade)
  * **LinkedIn**: [linkedin.com/in/sahildabade](https://linkedin.com/in/sahildabade) *(Placeholder)*
  * **Location**: Talegaon / Pune, Maharashtra, India
* **Interactive Contact Form**: Includes client-side validation for Name, Email, Subject, and Message with immediate feedback and demo confirmation toast.

### 11. Footer & Floating Back-to-Top
* Section directory, copyright attribution, internship milestone citation, and smooth floating back-to-top button.

---

## 💻 How to Run Locally

### Option 1: Direct File Open (Easiest)
1. Navigate to:
   `OIBSIP/LEVEL 1/Task-2-Personal-Portfolio/`
2. Double-click **`index.html`** or right-click and choose **Open with > Google Chrome** (or Edge / Firefox / Safari).

### Option 2: VS Code Live Server
1. Open the `LEVEL 1/Task-2-Personal-Portfolio` folder in VS Code.
2. Install the **Live Server** extension if not installed.
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The site will launch automatically at `http://127.0.0.1:5500`.

### Option 3: Python Built-in HTTP Server
In your terminal / PowerShell:
```bash
cd "LEVEL 1/Task-2-Personal-Portfolio"
python -m http.server 8080
```
Open `http://localhost:8080` in your browser.

---

## 👨‍💻 Author & Contact

**Sahil Dabade**  
*Information Technology Student & Aspiring Web Developer*  
*Nutan Maharashtra Institute of Engineering and Technology (NMIET), Talegaon (SPPU)*

* **GitHub**: [https://github.com/SahilDabade](https://github.com/SahilDabade)
* **LinkedIn**: [https://linkedin.com/in/sahildabade](https://linkedin.com/in/sahildabade) *(Placeholder)*
* **Email**: [dabadesahil05@gmail.com](mailto:dabadesahil05@gmail.com)

---

**Developed for the OASIS INFOBYTE Internship · Level 1 Task 2**
