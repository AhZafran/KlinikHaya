# Website Structure Template

This document outlines the complete structure of the WeCare Clinic website, serving as a template for creating similar professional service websites.

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Configuration Files](#configuration-files)
- [Core Components](#core-components)
- [Styling System](#styling-system)
- [SEO & Analytics](#seo--analytics)
- [Brand Configuration](#brand-configuration)
- [Deployment](#deployment)
- [Development Workflow](#development-workflow)

---

## Project Overview

**Type**: Single-page professional service website (Clinic/Healthcare)
**Framework**: Next.js 16 (App Router)
**Styling**: Tailwind CSS 4
**Deployment**: Vercel

### Key Features
- Responsive design (mobile-first)
- SEO optimized with structured data
- Google Tag Manager integration
- WhatsApp integration for customer contact
- Performance optimized (image optimization, font loading)
- Accessibility compliant

---

## Tech Stack

### Core Dependencies
```json
{
  "next": "16.0.7",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "typescript": "^5"
}
```

### UI & Styling
```json
{
  "tailwindcss": "^4",
  "@tailwindcss/postcss": "^4",
  "tw-animate-css": "^1.4.0",
  "lucide-react": "^0.556.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.4.0"
}
```

### UI Components
```json
{
  "@radix-ui/react-slot": "^1.2.4"
}
```

### Development Tools
```json
{
  "eslint": "^9",
  "eslint-config-next": "16.0.7",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19"
}
```

---

## Folder Structure

```
klinik-wecare/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout (Header, Footer, metadata)
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles & Tailwind imports
│   ├── error.tsx            # Error boundary
│   ├── loading.tsx          # Loading state
│   ├── not-found.tsx        # 404 page
│   ├── robots.ts            # Robots.txt generation
│   └── sitemap.ts           # Sitemap generation
│
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   │   └── button.tsx       # Button component
│   ├── Header.tsx           # Site header with navigation
│   ├── Footer.tsx           # Site footer
│   ├── HeroSection.tsx      # Hero/banner section
│   ├── ContactUs.tsx        # Contact section with map
│   ├── OurServices.tsx      # Services showcase
│   ├── WhyChooseUs.tsx      # Features/benefits section
│   ├── Testimonials.tsx     # Customer testimonials
│   ├── OurPanel.tsx         # Panel partners section
│   └── StructuredData.tsx   # JSON-LD structured data for SEO
│
├── lib/                     # Utility functions & configurations
│   ├── brand.ts             # Centralized brand configuration
│   └── utils.ts             # Utility functions (cn helper)
│
├── public/                  # Static assets
│   ├── images/              # Images (logo, icons, etc.)
│   │   ├── logo.png
│   │   ├── og-image.jpg     # Open Graph image
│   │   └── ...
│   └── *.svg                # SVG assets
│
├── .vercel/                 # Vercel deployment config
├── .next/                   # Build output (auto-generated)
├── node_modules/            # Dependencies
│
├── package.json             # Project dependencies & scripts
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── components.json          # shadcn/ui configuration
├── eslint.config.mjs        # ESLint configuration
├── postcss.config.mjs       # PostCSS configuration
├── .gitignore               # Git ignore rules
└── README.md                # Project documentation
```

---

## Configuration Files

### 1. `package.json`
Defines project metadata, dependencies, and scripts.

**Key Scripts:**
```json
{
  "dev": "next dev",        // Development server
  "build": "next build",    // Production build
  "start": "next start",    // Production server
  "lint": "eslint"          // Linting
}
```

### 2. `tsconfig.json`
TypeScript compiler configuration.

**Key Settings:**
- Path alias: `@/*` maps to project root
- Target: ES2017
- JSX: react-jsx
- Strict mode enabled

### 3. `next.config.ts`
Next.js framework configuration.

**Common Configurations:**
- Image optimization settings
- Environment variables
- Redirects/rewrites
- Headers configuration

### 4. `components.json`
shadcn/ui component library configuration.

**Key Settings:**
```json
{
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### 5. `postcss.config.mjs`
PostCSS configuration for Tailwind CSS.

### 6. `eslint.config.mjs`
ESLint rules and Next.js linting configuration.

---

## Core Components

### 1. Layout Component (`app/layout.tsx`)

**Purpose**: Root layout wrapper for all pages

**Key Features:**
- Global metadata (SEO, Open Graph, Twitter Cards)
- Font loading (Google Fonts)
- Google Tag Manager integration
- Structured data inclusion
- Header and Footer components
- Global styles

**Structure:**
```tsx
export const metadata: Metadata = {
  // SEO metadata
  title: "...",
  description: "...",
  keywords: [...],

  // Open Graph
  openGraph: {...},

  // Twitter Cards
  twitter: {...},

  // Robots
  robots: {...},

  // Verification
  verification: {...}
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* GTM Script */}
      </head>
      <body>
        {/* GTM Noscript */}
        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

### 2. Page Component (`app/page.tsx`)

**Purpose**: Home page composition

**Structure:**
```tsx
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContactUs />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      {/* Add more sections as needed */}
    </main>
  )
}
```

### 3. Section Components

All section components follow a similar pattern:

**Common Structure:**
```tsx
export function SectionName() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Section Title
          </h2>
          <p className="text-muted-foreground mt-4">
            Section description
          </p>
        </div>

        {/* Section Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Content items */}
        </div>
      </div>
    </section>
  )
}
```

### 4. Header Component

**Features:**
- Sticky navigation
- Logo (Next.js Image optimization)
- CTA button (WhatsApp integration)
- Responsive design
- Brand color theming

### 5. Footer Component

**Typical Sections:**
- Business information (address, hours)
- Contact details
- Social media links
- Google Maps integration
- Copyright information

### 6. StructuredData Component

**Purpose**: JSON-LD structured data for SEO

**Common Schemas:**
- Organization
- LocalBusiness
- MedicalBusiness/MedicalClinic
- OpeningHours
- ContactPoint

---

## Styling System

### 1. Global Styles (`app/globals.css`)

**Structure:**
```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* CSS variables mapping */
}

:root {
  /* Light theme colors */
  --primary: ...;
  --background: ...;
  --foreground: ...;
}

.dark {
  /* Dark theme colors */
}

@layer base {
  /* Base styles */
}
```

### 2. Color System

**Brand Colors:**
- Primary: `#283a67` (oklch format in CSS)
- Accent: `#df0000`
- Background/Foreground
- Muted/Secondary colors
- Border/Input colors

**Theme Support:**
- Light mode (default)
- Dark mode (via `.dark` class)

### 3. Tailwind Configuration

**Custom Features:**
- Custom color palette
- Typography scale
- Spacing system
- Border radius tokens
- Animation utilities (tw-animate-css)

### 4. Component Styling Pattern

**Using `cn()` utility:**
```tsx
import { cn } from "@/lib/utils"

<div className={cn(
  "base-classes",
  conditional && "conditional-classes",
  props.className
)}>
```

---

## SEO & Analytics

### 1. Metadata Configuration

**Location**: `app/layout.tsx`

**Essential Fields:**
- `title`: Page title (50-60 characters)
- `description`: Meta description (150-160 characters)
- `keywords`: Relevant keywords array
- `authors`: Business/author information
- `metadataBase`: Canonical URL base

### 2. Open Graph (Social Sharing)

**Required Fields:**
```tsx
openGraph: {
  title: "...",
  description: "...",
  url: "...",
  siteName: "...",
  images: [{
    url: "/images/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "..."
  }],
  locale: "en_MY",
  type: "website"
}
```

**Image Requirements:**
- Size: 1200x630px
- Format: JPG/PNG
- Max file size: <1MB
- Clear branding/text

### 3. Twitter Cards

```tsx
twitter: {
  card: "summary_large_image",
  title: "...",
  description: "...",
  images: ["..."]
}
```

### 4. Robots Configuration

```tsx
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1
  }
}
```

### 5. Structured Data (JSON-LD)

**Implementation**: `components/StructuredData.tsx`

**Common Schemas:**
```tsx
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "...",
  "image": "...",
  "address": {...},
  "openingHoursSpecification": [...],
  "telephone": "...",
  "url": "..."
}
```

### 6. Google Tag Manager

**Implementation**: In `app/layout.tsx`

**Two Parts:**
1. Script in `<head>`
2. Noscript iframe in `<body>`

**GTM Container ID Format**: `GTM-XXXXXXX`

### 7. Sitemap Generation

**File**: `app/sitemap.ts`

```tsx
export default function sitemap() {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    }
  ]
}
```

### 8. Robots.txt Generation

**File**: `app/robots.ts`

```tsx
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: 'https://example.com/sitemap.xml'
  }
}
```

---

## Brand Configuration

### Centralized Brand File (`lib/brand.ts`)

**Purpose**: Single source of truth for all brand-related data

**Structure:**
```tsx
export const BRAND = {
  // Basic Info
  name: "Business Name",
  tagline: "Tagline",

  // Colors
  colors: {
    primary: "#283a67"
  },

  // Logo
  logo: {
    path: "/images/logo.png",
    alt: "Business Logo"
  },

  // Contact
  contact: {
    whatsapp: "60123456789",
    whatsappMessage: "Hello...",
    phone: "+60 12-345 6789",
    address: {
      street: "...",
      city: "...",
      state: "...",
      postcode: "...",
      country: "...",
      full: "..."
    },
    email: "contact@example.com",
    googleMapsUrl: "...",
    googleMapsEmbed: "..."
  },

  // Operating Hours
  operatingHours: {
    weekdays: "9:00 AM - 5:00 PM",
    saturday: "9:00 AM - 1:00 PM",
    sunday: "Closed",
    publicHolidays: "Closed"
  },

  // Social Media
  social: {
    facebook: "...",
    instagram: "...",
    whatsapp: "..."
  }
} as const

// Helper Functions
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || BRAND.contact.whatsappMessage
  return `https://wa.me/${BRAND.contact.whatsapp}?text=${encodeURIComponent(message)}`
}
```

**Benefits:**
- Easy to update across entire site
- Type-safe with TypeScript
- Reusable helper functions
- Single file to modify for new projects

---

## Deployment

### Vercel Deployment

**Configuration**: `.vercel/project.json`

**Steps:**
1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`
3. Set environment variables (if any)
4. Deploy

**Custom Domain Setup:**
1. Add domain in Vercel dashboard
2. Configure DNS records (CNAME/A records)
3. SSL automatically configured

### Environment Variables

**Common Variables:**
```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_API_URL=https://api.example.com
```

**Usage in Code:**
```tsx
const gtmId = process.env.NEXT_PUBLIC_GTM_ID
```

---

## Development Workflow

### 1. Initial Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### 2. Adding shadcn/ui Components

```bash
# Initialize shadcn/ui (first time)
npx shadcn@latest init

# Add components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

### 3. Creating New Sections

**Pattern:**
1. Create component in `components/`
2. Import BRAND config if needed
3. Use consistent styling classes
4. Add to `app/page.tsx`

**Example:**
```tsx
// components/NewSection.tsx
import { BRAND } from "@/lib/brand"

export function NewSection() {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Section Title
        </h2>
        {/* Content */}
      </div>
    </section>
  )
}
```

### 4. Adding Images

**Best Practices:**
- Use Next.js `<Image>` component
- Optimize images before adding (use WebP/AVIF)
- Provide width/height for proper aspect ratio
- Use `priority` for above-the-fold images

```tsx
import Image from "next/image"

<Image
  src="/images/example.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={isAboveFold}
/>
```

### 5. Testing

**Manual Testing:**
- Responsive design (mobile, tablet, desktop)
- Browser compatibility (Chrome, Safari, Firefox, Edge)
- Performance (Lighthouse)
- SEO (Lighthouse, Google Search Console)
- Accessibility (WAVE, axe DevTools)

**Automated Testing:**
```bash
# Build test
npm run build

# Lint check
npm run lint
```

### 6. Building for Production

```bash
# Create production build
npm run build

# Test production build locally
npm run start
```

### 7. Performance Optimization

**Checklist:**
- [ ] Image optimization (WebP/AVIF, proper sizing)
- [ ] Font optimization (subset, preload)
- [ ] Code splitting (dynamic imports)
- [ ] Lazy loading (images, components)
- [ ] Minification (automatic in Next.js)
- [ ] Caching headers
- [ ] Remove unused CSS/JS

---

## Reusable Patterns & Best Practices

### 1. Component Organization

**Pattern:**
```
components/
├── ui/              # Generic UI components
├── sections/        # Page sections (optional)
└── [ComponentName].tsx
```

### 2. Styling Conventions

**Class Order:**
```tsx
className="
  layout-classes     // display, position, flex, grid
  spacing-classes    // padding, margin
  sizing-classes     // width, height
  typography-classes // text-size, font-weight
  color-classes      // bg, text, border colors
  state-classes      // hover, focus, active
"
```

### 3. Responsive Design

**Breakpoints:**
```tsx
className="
  base-mobile-class
  sm:tablet-class    // 640px+
  md:desktop-class   // 768px+
  lg:large-class     // 1024px+
  xl:xlarge-class    // 1280px+
"
```

### 4. Accessibility

**Essential Practices:**
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Proper heading hierarchy (h1 > h2 > h3)
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support
- Focus states

### 5. Performance

**Image Loading:**
```tsx
// Above the fold
<Image priority />

// Below the fold
<Image loading="lazy" />
```

**Dynamic Imports:**
```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

### 6. SEO Best Practices

**Checklist:**
- [ ] Unique title per page (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Open Graph tags
- [ ] Structured data (JSON-LD)
- [ ] Sitemap
- [ ] Robots.txt
- [ ] Canonical URLs
- [ ] Mobile-friendly
- [ ] Fast loading (Core Web Vitals)

### 7. Code Quality

**TypeScript Usage:**
- Define interfaces for props
- Use type inference
- Avoid `any` type
- Use const assertions for constants

**Example:**
```tsx
interface SectionProps {
  title: string
  description?: string
  children: React.ReactNode
}

export function Section({ title, description, children }: SectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </section>
  )
}
```

---

## Customization Guide for New Projects

### Step 1: Update Brand Configuration

**File**: `lib/brand.ts`

Update all fields:
- Business name and tagline
- Colors
- Logo path
- Contact information
- Operating hours
- Social media links

### Step 2: Update Metadata

**File**: `app/layout.tsx`

Update:
- Page title
- Description
- Keywords
- Open Graph data
- Twitter card data
- Domain URLs

### Step 3: Replace Images

**Folder**: `public/images/`

Replace:
- Logo
- Open Graph image (1200x630px)
- Favicon
- Other brand images

### Step 4: Update Content

**Files**: All component files

Replace:
- Section titles
- Descriptions
- Services/features
- Testimonials
- Contact information

### Step 5: Update Analytics

**File**: `app/layout.tsx`

Replace:
- Google Tag Manager ID
- Google Analytics ID (if separate)
- Other tracking codes

### Step 6: Test & Deploy

1. Test locally (`npm run dev`)
2. Build (`npm run build`)
3. Deploy to Vercel
4. Configure custom domain
5. Verify SEO (Google Search Console)
6. Monitor analytics

---

## Common Issues & Solutions

### 1. Image Not Loading

**Issue**: Image 404 error
**Solution**:
- Verify file path in `public/` folder
- Check file name case sensitivity
- Ensure image is in correct format

### 2. Styles Not Applying

**Issue**: Tailwind classes not working
**Solution**:
- Run dev server restart
- Check class name spelling
- Verify Tailwind configuration
- Clear `.next` cache

### 3. Build Errors

**Issue**: TypeScript/ESLint errors during build
**Solution**:
- Run `npm run lint` to check errors
- Fix type errors
- Add type definitions if needed

### 4. Slow Page Load

**Issue**: Poor performance scores
**Solution**:
- Optimize images (use WebP, proper sizing)
- Add `priority` to above-fold images
- Remove unused dependencies
- Enable caching

### 5. SEO Not Working

**Issue**: Site not appearing in search results
**Solution**:
- Submit sitemap to Google Search Console
- Verify robots.txt allows crawling
- Check structured data with Rich Results Test
- Ensure proper meta tags

---

## Resources & References

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

### Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [WAVE Accessibility Tool](https://wave.webaim.org)
- [WebP Converter](https://cloudconvert.com/webp-converter)

### SEO
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org)
- [Open Graph Protocol](https://ogp.me)

---

## License & Credits

**Framework**: Next.js (MIT License)
**UI Components**: shadcn/ui (MIT License)
**Styling**: Tailwind CSS (MIT License)
**Icons**: Lucide React (ISC License)

---

## Version History

- **v1.0.0** - Initial template structure
  - Next.js 16 App Router
  - Tailwind CSS 4
  - shadcn/ui integration
  - SEO optimization
  - GTM integration

---

**Last Updated**: January 2026
