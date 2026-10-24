# NEXORA AI — Modern AI SaaS Landing Page

**OASIS INFOBYTE Internship — Web Development and Designing**  
**Level 1 · Task 1: Landing Page**

---

## 📌 Project Overview

**NEXORA AI** is a professional, high-converting, and fully responsive landing page for a next-generation AI SaaS platform. Built exclusively with **HTML5 and CSS3**, the project showcases fundamental front-end design mastery without relying on any external CSS frameworks (such as Bootstrap or Tailwind) or JavaScript scripts.

The landing page features a sleek dark-mode aesthetic inspired by leading SaaS products (Linear, Vercel, Supabase, Raycast), utilizing glassmorphism, responsive CSS Grid and Flexbox layouts, CSS custom properties, and a 100% pure CSS mobile hamburger navigation menu.

---

## 🚀 Key Highlights & Technologies

* **HTML5 Semantic Architecture**: Built using semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`) ensuring high accessibility (a11y) and SEO optimization.
* **Pure CSS3**: Custom design system using CSS variables, Flexbox, and CSS Grid.
* **Zero JavaScript Dependency**: All interactive UI elements—including the mobile drawer navigation, smooth page scrolling, hover states, and back-to-top button—are implemented with **100% pure CSS**.
* **Fully Responsive**: Media queries crafted for desktop, laptop, tablet, and mobile screens.
* **Modern SaaS Visuals**: Custom glassmorphism, subtle glowing background orbs, elevated cards, and authentic product visuals.

---

## 📂 Project Structure

```text
Task-1-AI-SaaS-Landing-Page/
│
├── index.html              # Main semantic HTML5 webpage
├── css/
│   └── style.css           # Complete CSS3 design system & responsive styling
├── assets/
│   └── images/             # Visual assets
│       ├── dashboard-preview.jpg
│       ├── avatar-1.jpg
│       ├── avatar-2.jpg
│       └── avatar-3.jpg
└── README.md               # Project documentation & execution guide
```

> **Strict Compliance**: No JavaScript files (`.js`) or `js/` directory exist in this repository.

---

## 🌐 Website Sections

### 1. Navigation Bar
* Modern brand logo with custom SVG gradient icon.
* Navigation links: **Home**, **Features**, **How It Works**, **Results**, **Pricing**, **Testimonials**, **Contact**.
* **Log In** and **Get Started** action buttons.
* **Pure CSS Mobile Hamburger Menu**: Uses the CSS checkbox hack (`#nav-toggle:checked ~ .nav-menu`) with an animated hamburger icon that smoothly transforms into an "X" on mobile screens.

### 2. Hero Section
* **Headline**: *"Work Smarter. Create Faster. Powered by AI."*
* Professional supporting copy communicating NEXORA AI's value proposition.
* Dual CTA buttons: **Get Started Free** (gradient button with arrow) and **Explore Features** (glassmorphic button).
* **Trust Indicators**: 5-star rating display (4.9/5 from 10,000+ teams), SOC2 compliance tag, and 14-day free trial guarantee.
* **Product Visual**: High-resolution dark-mode SaaS dashboard in a custom browser window mockup with floating metric badges.

### 3. Features Section (CSS Grid)
Six capability cards showcasing core platform strengths:
1. **AI Content Generation**: Multimodal copy, articles, and tone customization.
2. **Smart Automation**: Zero-code autonomous workflow pipelines.
3. **AI Research Assistant**: Semantic search and cited executive summaries.
4. **Data Insights**: Telemetry visualization and predictive analytics.
5. **Team Collaboration**: Multiplayer canvas and role-based permissions.
6. **Secure & Private**: SOC2 compliance and zero-training data guarantee.

### 4. How It Works (3 Steps)
1. **Create your account**: Instant 60-second onboarding with complimentary starter credits.
2. **Connect your workflow**: 1-click sync with Slack, Notion, GitHub, and Google Workspace.
3. **Let NEXORA AI do the work**: Deploy autonomous agents and automated routines.

### 5. Statistics (Demo Metrics)
* **10K+** Active Users
* **50K+** Tasks Automated
* **99.9%** Guaranteed Uptime
* **4.9/5** User Satisfaction Rating

### 6. Pricing Plans
Three structured tiers:
* **Free ($0/mo)**: Basic AI tools, 1,000 credits/mo, community support.
* **Pro ($29/mo) — Highlighted**: Labeled with a radiant **"MOST POPULAR"** badge, violet glow shadow, advanced models, 50,000 credits/mo, and priority support.
* **Business ($79/mo)**: Unlimited seats, custom API keys, 99.9% SLA, and dedicated success manager.

### 7. Customer Testimonials
Three authentic customer reviews with verified badges, 5-star ratings, and executive headshot portraits:
* **Sarah Jenkins** (Head of Growth, ScaleFlow)
* **Marcus Vance** (CTO, Synthetix Labs)
* **Aisha Patel** (Lead Product Designer, Orbit Studio)

### 8. Contact Section
* Direct communication details (Email, 24/7 Live Concierge, HQ location).
* Complete HTML5 contact form with built-in validation states (`required`, email pattern matching, custom focus glow).

### 9. Final CTA
* High-impact radiant banner: *"Ready to transform the way you work?"*
* **Start for Free** and **Schedule a Demo** buttons with risk-free guarantees.

### 10. Footer & Back-to-Top
* Detailed 4-column footer with brand overview, product links, company information, resources, and social links (X/Twitter, GitHub, LinkedIn, Discord).
* Copyright 2026 NEXORA AI Inc.
* Pure CSS floating **Back-to-Top** anchor button.

---

## 🎨 CSS Architecture & Techniques

### CSS Custom Properties (Variables)
All colors, gradients, font stacks, spacing values, border radii, and shadows are centralized at `:root`:
```css
:root {
  --bg-primary: #07090e;
  --bg-card: rgba(17, 24, 39, 0.7);
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --gradient-brand: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  --shadow-glow: 0 0 35px rgba(99, 102, 241, 0.25);
  /* ... */
}
```

### Pure CSS Mobile Menu Technique
The mobile navigation operates without any JavaScript by utilizing an accessible hidden checkbox:
```html
<input type="checkbox" id="nav-toggle" class="nav-toggle">
<label for="nav-toggle" class="nav-toggle-label">
  <span class="hamburger-bar"></span>
  <span class="hamburger-bar"></span>
  <span class="hamburger-bar"></span>
</label>
```
```css
/* Triggers mobile menu drawer to expand smoothly when checkbox is checked */
.nav-toggle:checked ~ .nav-menu {
  height: calc(100vh - var(--header-height));
  padding: 2rem 1.5rem;
  overflow-y: auto;
}
```

---

## 💻 How to Run & Preview the Project

You can run this project locally using any of the following methods:

### Method 1: Direct File Open (Easiest)
1. Navigate to the folder:
   `LEVEL 1/Task-1-AI-SaaS-Landing-Page/`
2. Double-click **`index.html`** or right-click and choose **Open with > Google Chrome** (or Edge, Firefox, Safari).

### Method 2: VS Code Live Server Extension
1. Open the folder in VS Code.
2. Install the **Live Server** extension if not already installed.
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The site will launch automatically at `http://127.0.0.1:5500`.

### Method 3: Python Built-in HTTP Server
In your terminal / PowerShell, run:
```bash
cd "LEVEL 1/Task-1-AI-SaaS-Landing-Page"
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

---

## 🎓 Internship Evaluation Talking Points

When presenting this project during your OASIS INFOBYTE evaluation:
1. **Layout Strategy**: Explain why you used **CSS Grid** for the features and statistics sections (2-dimensional layout control) and **Flexbox** for the navigation, pricing features, and hero CTA groups (1-dimensional flow).
2. **CSS-Only Interactivity**: Highlight how the mobile hamburger menu transforms and opens purely via CSS `:checked` selector, showing deep understanding of CSS pseudo-classes.
3. **Design System & Scalability**: Discuss the `:root` variables and how they ensure visual consistency and allow instant theme tweaking.
4. **Performance & Clean Code**: Mention that zero third-party framework overhead means near-instant page load time and 100% clean, understandable code.

---

**Developed with ❤️ for the OASIS INFOBYTE Internship.**
