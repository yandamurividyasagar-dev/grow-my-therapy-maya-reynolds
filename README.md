# Dr. Maya Reynolds, PsyD — Clinical Psychology Practice Website
> **Assignment Submission**: Front-End Developer Internship @ Grow My Therapy  
> **Candidate Framework**: Next.js 14 (App Router) + TypeScript + Tailwind CSS  
> **Live Demo**: [Deploy to Vercel](https://vercel.com/new)  
> **Client Persona**: Dr. Maya Reynolds, PsyD (Santa Monica, CA)

---

## 🌟 Executive Project Overview

This repository contains the production-grade clone and creative redesign of the **Conejo Valley Counseling** homepage template, transformed into a bespoke, high-converting digital homepage for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist based in **Santa Monica, California**.

The project preserves 100% of the structural rhythm, section order, flex/grid systems, and mobile responsiveness of the original template while elevating the aesthetic into a **warm, grounding, editorial, and deeply reassuring therapeutic sanctuary**.

---

## 🧩 Assignment Requirements Checklist

### Part 1: UI Cloning Accuracy
- [x] **Structural Rhythm**: Recreated layout order, section proportions, grid systems, and padding scale matching the original homepage.
- [x] **Mobile Responsiveness**: Tested across Mobile (375px), Tablet (768px), and Desktop (1440px+). Zero horizontal scrollbars.
- [x] **Design Tokens**: Standardized CSS custom properties and Tailwind tokens for primary (`#2C4A3E`), accent (`#C47A5A`), background (`#FAF8F5`), and typography.

### Part 2: Redesign for Dr. Maya Reynolds, PsyD
- [x] **Single Source of Truth**: All website copy extracted strictly from Dr. Maya Reynolds' profile with zero invention or false assumptions.
- [x] **Color Palette**: Coastal Sage (`#2C4A3E`), Warm Terracotta (`#C47A5A`), Warm Linen Cream (`#F9F6F0`), and Forest Charcoal (`#1A2421`).
- [x] **3 Core Services**:
  1. *Anxiety & Panic Relief*
  2. *Trauma & EMDR Therapy*
  3. *Burnout & Perfectionism Support*
- [x] **Image Curation**: Integrated authentic headshots of Dr. Maya Reynolds and actual Santa Monica office photos showing brick, wood, and warm sunlight.
- [x] **SEO Optimization**: Embedded Local SEO keywords (`Santa Monica CA Psychologist`, `EMDR Therapist Santa Monica`), structured H1-H3 hierarchy, and valid `JSON-LD` `Psychologist` schema.

### Part 3: Custom "Our Office" Section
- [x] **Physical Office Showcase**: Created a dedicated, custom section for Dr. Maya's Santa Monica practice space (`123th Street 45 W, Santa Monica, CA 90401`).
- [x] **Office Environment Highlights**: Featured natural light, privacy, calm uncluttered aesthetic, and hybrid in-person / telehealth badges.

---

## 🛠️ Tech Stack & Clean Architecture

* **Framework**: Next.js 14.2 (App Router)
* **Language**: TypeScript (Strict Type Safety)
* **Styling**: Tailwind CSS 3.4 + Custom Tokens + CSS Variables
* **Icons**: Lucide React (`lucide-react`)
* **Typography**: `next/font/google` (*Cormorant Garamond* Serif + *Plus Jakarta Sans*)
* **Structured Data**: JSON-LD (`MedicalBusiness` / `Physician` Schema)
* **Deployment**: Vercel Ready (`vercel.json`)

---

## 📁 Project Folder Structure

```
dr-maya-reynolds-therapy/
├── public/
│   └── images/
│       ├── dr-maya-reynolds.png    # Authentic Headshot
│       └── office-gallery.png      # Santa Monica Office Interior Photos
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind Directives & CSS Variable Tokens
│   │   ├── layout.tsx              # Root Shell, Google Fonts, JSON-LD Schema
│   │   ├── page.tsx                # Main Homepage Composition
│   │   ├── robots.ts               # Robots.txt Generator
│   │   └── sitemap.ts              # XML Sitemap Generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx          # Local SEO Links & Clinical Disclaimer
│   │   │   └── Navbar.tsx          # Sticky Header, Trust Bar & Mobile Drawer
│   │   ├── modals/
│   │   │   └── ConsultationModal.tsx # Interactive Booking Modal Form
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx    # Bio & Philosophy Narrative
│   │   │   ├── ApproachSection.tsx # Modalities (EMDR, CBT, Somatic)
│   │   │   ├── CTASection.tsx      # Conversion Banner
│   │   │   ├── FAQSection.tsx      # Accessible Accordion FAQs
│   │   │   ├── HeroSection.tsx     # Main SEO Hero & Headshot Frame
│   │   │   ├── OfficeSection.tsx   # Custom "Our Office" Section
│   │   │   ├── ServicesSection.tsx # 3 Specialty Cards Grid
│   │   │   └── TrustBanner.tsx     # Credential Bar
│   │   └── ui/
│   │       ├── Badge.tsx           # Status & Category Pills
│   │       ├── Button.tsx          # Accessible Button Primitives
│   │       ├── Card.tsx            # Surface Containers
│   │       └── SectionHeading.tsx  # Typography Wrapper
│   ├── config/
│   │   ├── siteConfig.ts           # Navigation & Contact Defaults
│   │   └── therapistProfile.ts     # Single Source of Truth Data Schema
│   └── lib/
│       ├── schema.ts               # JSON-LD Schema Generator
│       └── utils.ts                # Tailwind Class Merger (clsx + twMerge)
├── next.config.mjs
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── README.md
```

---

## 🚀 Local Setup & Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/dr-maya-reynolds-therapy.git
   cd dr-maya-reynolds-therapy
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build Verification**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🚢 Deploying to Vercel

1. Push your project code to a public GitHub repository.
2. Log into your [Vercel Dashboard](https://vercel.com).
3. Click **"New Project"** and import the GitHub repository.
4. Keep framework preset as **Next.js**.
5. Click **"Deploy"**. Vercel will automatically build and deploy the project.

---

## 🎙️ 5-Minute Loom Presentation Pitch Outline (Client Demo to Dr. Maya)

```
0:00 - 0:45 | Warm Introduction & Strategic Goal
"Hi Dr. Maya! I'm thrilled to present the first draft of your new website homepage..."

0:45 - 2:00 | Desktop Homepage Walkthrough
"Notice how we positioned your primary credentials—Licensed Clinical Psychologist in Santa Monica... We highlighted your 3 key specialties: Anxiety, EMDR Trauma, and Burnout..."

2:00 - 3:15 | Custom 'Our Office' Showcase
"We created a custom section dedicated to your Santa Monica practice space at 123th Street 45 W... It highlights natural light, privacy, and calm uncluttered environment..."

3:15 - 4:15 | Mobile Experience & Client Conversion
"Over 65% of clients find therapists on their mobile phones. Here is how your site responds on mobile... Navigating to FAQs and booking a call is frictionless..."

4:15 - 5:00 | Next Steps & Call to Action
"Everything is built with high contrast, fast loading speed, and local SEO optimizations... I'd love to hear your thoughts and make any final tweaks!"
```

---

## 📄 License & Credits

Built for the **Grow My Therapy Internship Assignment**. All copy and office details derived from Dr. Maya Reynolds' profile.
