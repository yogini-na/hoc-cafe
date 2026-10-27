# HOC – High on Caffeine (Nagpur, Maharashtra)

A production-ready, accessible, and responsive website for **HOC – High on Caffeine**, a real neighbourhood café located on Mankapur Ring Road in Nagpur, Maharashtra, India.

---

## ☕ Project Overview

- **Business Name:** HOC – High on Caffeine
- **Address:** SVG3, Mankapur Ring Road, near Axis Bank, Padole Layout, Bhamti, Gayatri Nagar, Trimurti Nagar, Nagpur, Maharashtra, India.
- **Reported Community Rating:** 4.2 / 5 (150 reviews) — transparently noted as user-supplied feedback.
- **Verified Customer Highlights:** Ginger (Adrak) Tea, fragrant Rose Tea, multi-flavour Lassis, Bombay-style Bun Maska, grilled sandwiches, hot vegetable masala Maggi, and an unhurried, welcoming café atmosphere for studying and socializing.

---

## 🔗 Live Deployments & Repository Links

- **GitHub Repository (yogini-na):** [https://github.com/yogini-na/hoc-cafe](https://github.com/yogini-na/hoc-cafe)
- **Collaborator Access (SanchitaSingh14):** [https://github.com/yogini-na/hoc-cafe/invitations](https://github.com/yogini-na/hoc-cafe/invitations)
- **Live Netlify Deployment:** [http://clever-cajeta-b0acf5.netlify.app](http://clever-cajeta-b0acf5.netlify.app) *(Password: `My-Drop-Site`)*
- **One-Click Netlify Claim URL:** [Claim on Netlify](https://app.netlify.com/drop/clever-cajeta-b0acf5#drop_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3OTMwOTMzMzYsImV4cCI6MTc5MzA5NjkzNiwiaXNzIjoiTmV0bGlmeSIsInNlc3Npb25faWQiOiI3NTc4N2RiMy03ODRkLTRkMzQtYjNlZS1lNTVhMTk0M2ZjMTcifQ.ar9owSUQZhAZ5Saf34H4sumGFq1vDK4QBnYiaPSVJ0c)

---

## 🎨 Visual Design System

The website features an editorial coffee-shop aesthetic built with a disciplined palette and typography:

### Color Tokens
- **Espresso Brown:** `#241710` (Primary dark background)
- **Deep Coffee:** `#35251D` (Surface & card background)
- **Caramel:** `#A66A3F` (Primary action accent)
- **Warm Cream:** `#F5EBDD` (Contrasting light section background)
- **Cream Light:** `#FAF5EE` (Light card surface)
- **Muted Gold:** `#C5A16B` (Borders, emblems, and highlights)
- **Soft White:** `#FFFDF9` (Primary typography)
- **Secondary Text:** `#D9C3B0` (Dark backgrounds) / `#6A564A` (Cream backgrounds)

### Typography
- **Headings & Display:** `Playfair Display` (Editorial serif)
- **Body & Controls:** `Plus Jakarta Sans` (Clean, modern sans-serif)

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons:** [Lucide React](https://lucide.dev/) (Outlined, minimal icons)
- **Linter:** [Oxlint](https://oxc-project.github.io/)

---

## 📁 Project Architecture

```
hoc-cafe/
├── public/
│   ├── favicon.svg              # Custom SVG coffee emblem favicon
│   ├── _redirects               # Netlify SPA redirect rule
│   └── images/                  # High-resolution food & café photography
│       ├── hero-spread.jpg
│       ├── tea-selection.jpg
│       ├── coffee-speciality.jpg
│       ├── refreshment-lassi.jpg
│       ├── bites-bun-maska.jpg
│       ├── bites-sandwich.jpg
│       ├── bites-maggi.jpg
│       ├── editorial-signature.jpg
│       └── cafe-ambience.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Responsive navigation with mobile drawer
│   │   ├── Footer.tsx           # Brand footer, dynamic year & back-to-top
│   │   ├── SectionHeading.tsx   # Reusable dual-theme section header
│   │   ├── MenuCard.tsx         # Product card with FSSAI veg marker & tags
│   │   └── MenuFilters.tsx      # Accessible category filter pills
│   ├── sections/
│   │   ├── HeroSection.tsx      # Editorial hero with dark overlay & CTAs
│   │   ├── FeaturesSection.tsx  # "Why HOC?" 4 compact feature blocks
│   │   ├── MenuSection.tsx      # Live category-filtered menu showcase
│   │   ├── SignatureSection.tsx # "Little Breaks. Better Days." editorial
│   │   ├── ReviewSection.tsx    # Customer feedback themes & rating notice
│   │   ├── AboutSection.tsx     # Neighbourhood café narrative
│   │   └── LocationSection.tsx  # Map embed, copy address & directions
│   ├── data/
│   │   ├── site.ts              # Business address, config & review themes
│   │   └── menu.ts              # Typed menu categories & item records
│   ├── App.tsx                  # Main layout & accessibility skip link
│   ├── main.tsx                 # React DOM entry point
│   └── index.css                # Tailwind theme tokens & utility styles
├── netlify.toml                 # Netlify build & security headers
├── package.json                 # Scripts and dependencies
└── tsconfig.json                # TypeScript compiler configuration
```

---

## 🚀 Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Run Code Quality Linting:**
   ```bash
   npm run lint
   ```

4. **Compile Production Bundle:**
   ```bash
   npm run build
   ```

5. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## 🌐 Netlify Deployment Instructions

### Method A: Deploy via Netlify Git Integration (Recommended)
1. Push this directory to your GitHub / GitLab repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production website for HOC Cafe Nagpur"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Log into [Netlify](https://app.netlify.com/).
3. Click **Add new site** > **Import an existing project**.
4. Select your Git repository.
5. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy hoc-cafe**.

### Method B: Deploy via Netlify CLI
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Run build:
   ```bash
   npm run build
   ```
3. Deploy to production:
   ```bash
   netlify deploy --prod --dir=dist
   ```

---

## 📋 Pre-Launch Business Verification Checklist

Before publishing to a live custom domain (`hoc-nagpur.com` or similar), verify the following real-world business details with the café owner:

1. [ ] **Google Business Profile / Place ID:** Link the Google Maps button directly to the verified Place ID or claim page.
2. [ ] **Opening Hours:** Confirm exact daily operating hours (e.g., 9:00 AM – 11:00 PM) and update `src/sections/LocationSection.tsx`.
3. [ ] **Official Contact Number:** Verify if a dedicated mobile or WhatsApp ordering line is available.
4. [ ] **Menu Pricing:** Add exact INR prices for each item in `src/data/menu.ts`.
5. [ ] **Social Media Links:** Connect verified Instagram and Facebook handles in `src/components/Footer.tsx`.
