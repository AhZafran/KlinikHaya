# Clinic Website Recreation Guide

A comprehensive guide to recreate this modern clinic website for another medical practice.

---

## Table of Contents

1. [Technology Stack Overview](#1-technology-stack-overview)
2. [Project Setup](#2-project-setup)
3. [Project Structure](#3-project-structure)
4. [Configuration Files](#4-configuration-files)
5. [Brand Configuration](#5-brand-configuration)
6. [Components Breakdown](#6-components-breakdown)
7. [Styling System](#7-styling-system)
8. [Assets & Media](#8-assets--media)
9. [SEO & Analytics](#9-seo--analytics)
10. [Customization Checklist](#10-customization-checklist)
11. [Deployment](#11-deployment)

---

## 1. Technology Stack Overview

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | React framework with App Router |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first CSS |
| Framer Motion | 12.x | Animations |
| Embla Carousel | 8.x | Carousel/slider component |
| Lucide React | 0.556.x | General icons |
| Iconify React | 6.x | Healthcare icons |
| shadcn/ui | - | UI component system |

---

## 2. Project Setup

### Step 1: Create Next.js Project

```bash
npx create-next-app@latest clinic-name --typescript --tailwind --eslint --app --src-dir=false
cd clinic-name
```

### Step 2: Install Dependencies

```bash
# Core UI dependencies
npm install framer-motion motion embla-carousel-react

# Icon libraries
npm install lucide-react @iconify/react @iconify-json/healthicons

# Utility libraries
npm install class-variance-authority clsx tailwind-merge

# Radix UI primitives (for shadcn/ui)
npm install @radix-ui/react-slot

# Animation CSS
npm install tw-animate-css
```

### Step 3: Initialize shadcn/ui

```bash
npx shadcn@latest init
```

Select these options:
- Style: Default
- Base color: Slate
- CSS variables: Yes

---

## 3. Project Structure

```
clinic-website/
├── app/
│   ├── globals.css          # Global styles & Tailwind config
│   ├── layout.tsx           # Root layout (Header, Footer, Analytics)
│   ├── page.tsx             # Homepage with all sections
│   ├── error.tsx            # Error boundary
│   ├── loading.tsx          # Loading state
│   ├── not-found.tsx        # 404 page
│   ├── robots.ts            # Robots.txt generation
│   └── sitemap.ts           # Sitemap generation
│
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx       # Button with variants
│   │   ├── carousel.tsx     # Embla carousel wrapper
│   │   └── feature-section.tsx  # Interactive feature showcase
│   │
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer section
│   ├── HeroSection.tsx      # Hero banner with doctors
│   ├── AboutUs.tsx          # About clinic section
│   ├── OurExpertise.tsx     # Expertise carousel
│   ├── OurServices.tsx      # Services carousel
│   ├── WhyChooseUs.tsx      # Benefits cards
│   ├── Testimonials.tsx     # Patient reviews
│   ├── PanelKlinik.tsx      # Insurance panels
│   ├── FAQ.tsx              # FAQ accordion
│   ├── ContactUs.tsx        # Contact & map
│   └── StructuredData.tsx   # SEO JSON-LD
│
├── lib/
│   ├── brand.ts             # ⭐ MAIN CONFIG FILE - Clinic info
│   └── utils.ts             # Utility functions (cn)
│
├── public/
│   └── images/
│       ├── logo.png         # Clinic logo
│       ├── og-image.jpg     # Social media preview
│       ├── clinic/          # Clinic photos
│       ├── doctors/         # Doctor photos
│       ├── kepakaran/       # Expertise images
│       └── panels/          # Insurance logos
│
├── components.json          # shadcn/ui config
├── next.config.ts           # Next.js config
├── postcss.config.mjs       # PostCSS/Tailwind config
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

---

## 4. Configuration Files

### package.json

```json
{
  "name": "clinic-name",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@iconify-json/healthicons": "^1.2.12",
    "@iconify/react": "^6.0.2",
    "@radix-ui/react-slot": "^1.2.4",
    "@tailwindcss/postcss": "^4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.26.2",
    "lucide-react": "^0.556.0",
    "motion": "^12.25.0",
    "next": "^16.1.1",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "tailwind-merge": "^3.4.0",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.3.5"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "^16.1.1",
    "typescript": "^5"
  }
}
```

### next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Add other external image domains here
    ],
  },
};

export default nextConfig;
```

### postcss.config.mjs

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### components.json (shadcn/ui)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

---

## 5. Brand Configuration

The most important file for customization: `lib/brand.ts`

```typescript
// lib/brand.ts
export const brand = {
  // ============================================
  // BASIC INFORMATION
  // ============================================
  name: "Your Clinic Name",
  tagline: "Your clinic tagline here",
  description: "Full description of your clinic services...",
  logo: "/images/logo.png",

  // ============================================
  // BRAND COLORS
  // ============================================
  colors: {
    primary: "#8c55a1",      // Main brand color
    secondary: "#de539d",    // Secondary color
    accent: "#f492c6",       // Accent color
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    whatsapp: "+60123456789",
    phone: ["+60 12-345 6789", "+60 3-1234 5678"],
    email: "clinic@email.com",
    address: "Your clinic address here",
    googleMapsUrl: "https://maps.google.com/?q=...",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=...",
  },

  // ============================================
  // OPERATING HOURS
  // ============================================
  hours: {
    weekdays: "8:30 AM - 11:00 PM",
    weekends: "8:30 AM - 11:00 PM",
    holidays: "Closed",
    note: "24-hour emergency services available",
  },

  // ============================================
  // SERVICES OFFERED
  // ============================================
  services: [
    { name: "Service 1", icon: "healthicons:hospital" },
    { name: "Service 2", icon: "healthicons:doctor" },
    // Add more services...
  ],

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    facebook: "https://facebook.com/yourclinic",
    instagram: "https://instagram.com/yourclinic",
    tiktok: "https://tiktok.com/@yourclinic",
  },

  // ============================================
  // SEO KEYWORDS
  // ============================================
  seoKeywords: [
    "clinic near me",
    "family clinic",
    "your city clinic",
    // Add location-specific keywords
  ],
};

// ============================================
// HELPER FUNCTIONS
// ============================================
export function getWhatsAppUrl(message?: string) {
  const baseUrl = `https://wa.me/${brand.contact.whatsapp.replace(/[^0-9]/g, "")}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}

export function getPhoneUrl(index = 0) {
  return `tel:${brand.contact.phone[index].replace(/[^0-9+]/g, "")}`;
}

export function getEmailUrl() {
  return `mailto:${brand.contact.email}`;
}
```

---

## 6. Components Breakdown

### 6.1 Layout Components

#### app/layout.tsx
- Root wrapper for entire application
- Includes `<Header />` and `<Footer />`
- Font configuration (Google Fonts)
- Meta tags and SEO
- Analytics scripts (GTM)

#### components/Header.tsx
- Fixed/sticky navigation
- Logo with link to homepage
- WhatsApp contact button
- Mobile responsive

#### components/Footer.tsx
- Contact information
- Operating hours
- Social media links
- Address with Google Maps link

### 6.2 Page Sections

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `HeroSection.tsx` | Welcome banner | Doctor profiles, stats, service cards, CTA buttons |
| `AboutUs.tsx` | Clinic introduction | Clinic photo, description, service highlights |
| `OurExpertise.tsx` | Featured specialties | Interactive carousel with images |
| `OurServices.tsx` | All services | Icon-based service cards in carousel |
| `WhyChooseUs.tsx` | Benefits | 6 benefit cards with icons |
| `Testimonials.tsx` | Patient reviews | Auto-scrolling columns, infinite loop |
| `PanelKlinik.tsx` | Insurance panels | Logo grid with hover effects |
| `FAQ.tsx` | Common questions | Expandable accordion items |
| `ContactUs.tsx` | Contact info | Map embed, hours, contact buttons |
| `StructuredData.tsx` | SEO | JSON-LD schema markup |

### 6.3 UI Components

#### components/ui/button.tsx
```typescript
// Button with multiple variants
<Button variant="default">Primary</Button>
<Button variant="outline">Outlined</Button>
<Button variant="ghost">Ghost</Button>
<Button size="lg">Large</Button>
```

#### components/ui/carousel.tsx
```typescript
// Embla carousel wrapper
<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

#### components/ui/feature-section.tsx
```typescript
// Interactive feature showcase
<FeatureSection
  features={featuresArray}
  autoPlayInterval={5000}
/>
```

---

## 7. Styling System

### 7.1 Global Styles (app/globals.css)

```css
@import "tailwindcss";
@import "tw-animate-css";

/* ============================================
   BRAND COLOR VARIABLES
   ============================================ */
:root {
  /* Primary Color (adjust for your brand) */
  --primary: 288 31% 49%;
  --primary-foreground: 0 0% 100%;

  /* Secondary Color */
  --secondary: 333 65% 60%;
  --secondary-foreground: 0 0% 100%;

  /* Accent Color */
  --accent: 328 81% 77%;
  --accent-foreground: 0 0% 0%;

  /* Background & Text */
  --background: 0 0% 100%;
  --foreground: 0 0% 15%;

  /* UI Colors */
  --card: 0 0% 100%;
  --card-foreground: 0 0% 15%;
  --border: 0 0% 90%;
  --muted: 0 0% 96%;
  --muted-foreground: 0 0% 45%;

  /* Radius */
  --radius: 0.625rem;
}

/* ============================================
   CUSTOM SCROLLBAR (Optional)
   ============================================ */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: hsl(var(--primary));
  border-radius: 4px;
}

/* ============================================
   TAILWIND THEME TOKENS
   ============================================ */
@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  /* Add more as needed */
}
```

### 7.2 Utility Function (lib/utils.ts)

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 7.3 Common Tailwind Patterns

```tsx
// Section container
<section className="py-16 md:py-24 bg-background">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>

// Section title
<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
  Section Title
</h2>

// Card
<div className="bg-card rounded-xl p-6 shadow-lg border border-border">
  {/* Card content */}
</div>

// Gradient button
<Button className="bg-gradient-to-r from-primary to-secondary text-white">
  Click Me
</Button>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

---

## 8. Assets & Media

### 8.1 Required Images

```
public/images/
├── logo.png              # Clinic logo (PNG with transparency)
│                         # Recommended: 200x60px or similar ratio
│
├── og-image.jpg          # Social media preview
│                         # Required: 1200x630px
│
├── clinic/
│   └── clinic-about.jpg  # Clinic building/interior photo
│                         # Recommended: 800x600px or larger
│
├── doctors/
│   ├── doctor-1.png      # Doctor profile photos
│   └── doctor-2.png      # Recommended: 400x500px, transparent BG
│
├── kepakaran/            # Expertise/specialty images
│   ├── service-1.jpg     # Recommended: 600x400px each
│   ├── service-2.jpg
│   └── ...
│
└── panels/               # Insurance/corporate panel logos
    ├── panel-1.png       # Recommended: 200x100px each
    ├── panel-2.png       # PNG with transparency preferred
    └── ...
```

### 8.2 Image Optimization Tips

1. **Use WebP or AVIF** for better compression
2. **Optimize before upload** using tools like TinyPNG
3. **Use Next.js Image component** for automatic optimization:
   ```tsx
   import Image from "next/image";

   <Image
     src="/images/clinic/clinic-about.jpg"
     alt="Our clinic"
     width={800}
     height={600}
     className="rounded-xl"
     priority // For above-the-fold images
   />
   ```

---

## 9. SEO & Analytics

### 9.1 Meta Tags (app/layout.tsx)

```typescript
export const metadata: Metadata = {
  title: "Clinic Name | Tagline",
  description: "Your clinic description for search engines...",
  keywords: ["keyword1", "keyword2", "location clinic"],
  authors: [{ name: "Clinic Name" }],
  openGraph: {
    title: "Clinic Name | Tagline",
    description: "Description for social sharing",
    url: "https://yourclinic.com",
    siteName: "Clinic Name",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_MY", // or your locale
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic Name | Tagline",
    description: "Description for Twitter",
    images: ["/images/og-image.jpg"],
  },
};
```

### 9.2 Structured Data (components/StructuredData.tsx)

```typescript
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: brand.name,
    description: brand.description,
    url: "https://yourclinic.com",
    telephone: brand.contact.phone[0],
    email: brand.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Street Address",
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "MY",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:30",
        closes: "23:00",
      },
    ],
    medicalSpecialty: ["FamilyMedicine", "Gynecology"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
```

### 9.3 Google Tag Manager

In `app/layout.tsx`:
```typescript
<head>
  <script
    dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXXX');`,
    }}
  />
</head>
<body>
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" ... />
  </noscript>
</body>
```

### 9.4 Sitemap & Robots

```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: "https://yourclinic.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://yourclinic.com/sitemap.xml",
  };
}
```

---

## 10. Customization Checklist

### Phase 1: Basic Setup
- [ ] Create new Next.js project
- [ ] Install all dependencies
- [ ] Copy project structure

### Phase 2: Brand Configuration
- [ ] Update `lib/brand.ts` with new clinic info:
  - [ ] Clinic name and tagline
  - [ ] Contact information (phone, email, WhatsApp)
  - [ ] Address and Google Maps links
  - [ ] Operating hours
  - [ ] Social media links
  - [ ] SEO keywords

### Phase 3: Visual Identity
- [ ] Update brand colors in `app/globals.css`
- [ ] Replace logo (`/public/images/logo.png`)
- [ ] Create OG image (`/public/images/og-image.jpg`)
- [ ] Add clinic photos
- [ ] Add doctor photos
- [ ] Add service/expertise images
- [ ] Add insurance panel logos

### Phase 4: Content Updates
- [ ] Update `HeroSection.tsx`:
  - [ ] Doctor names and specialties
  - [ ] Statistics (years, patients, reviews)
  - [ ] Service cards
- [ ] Update `AboutUs.tsx`:
  - [ ] Clinic description
  - [ ] Service highlights
- [ ] Update `OurExpertise.tsx`:
  - [ ] Expertise areas and images
- [ ] Update `OurServices.tsx`:
  - [ ] Service list and icons
- [ ] Update `WhyChooseUs.tsx`:
  - [ ] Benefits specific to your clinic
- [ ] Update `Testimonials.tsx`:
  - [ ] Patient reviews
- [ ] Update `PanelKlinik.tsx`:
  - [ ] Insurance panel logos
- [ ] Update `FAQ.tsx`:
  - [ ] Common questions for your services
- [ ] Update `ContactUs.tsx`:
  - [ ] Google Maps embed code

### Phase 5: SEO & Analytics
- [ ] Update meta tags in `app/layout.tsx`
- [ ] Update `StructuredData.tsx` with correct schema
- [ ] Replace GTM ID with your tracking ID
- [ ] Update `sitemap.ts` with correct URL
- [ ] Update `robots.ts` with correct sitemap URL

### Phase 6: Testing
- [ ] Test on mobile devices
- [ ] Test all links (WhatsApp, phone, email)
- [ ] Verify Google Maps embed
- [ ] Check image loading
- [ ] Test form submissions (if any)
- [ ] Validate structured data (Google Rich Results Test)
- [ ] Check page speed (PageSpeed Insights)

### Phase 7: Deployment
- [ ] Deploy to Vercel/Netlify
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Verify analytics tracking
- [ ] Submit sitemap to Google Search Console

---

## 11. Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

Set these in your deployment platform:
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID
- `NEXT_PUBLIC_SITE_URL` - Your production URL

### Custom Domain

1. Add domain in Vercel dashboard
2. Update DNS records:
   - A Record: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`
3. Enable HTTPS (automatic with Vercel)

---

## Quick Start Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production build
npm run build        # Create production build
npm start            # Start production server

# Linting
npm run lint         # Check for code issues

# Deploy
vercel --prod        # Deploy to Vercel
```

---

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Iconify Icons](https://icon-sets.iconify.design/)
- [shadcn/ui Components](https://ui.shadcn.com/)

---

*This guide was created for recreating clinic websites based on the Klinik Haya template.*
