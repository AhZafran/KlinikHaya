# Klinik Haya Website

Professional website for Klinik Haya - A trusted clinic for family and women's health in Kajang, Selangor.

## Overview

This is a modern, SEO-optimized website built with Next.js 16, featuring:
- Professional healthcare clinic design
- Responsive mobile-first layout
- SEO optimization with structured data
- Google Tag Manager integration
- WhatsApp integration for customer contact
- 24-hour service information

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel (ready)

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add images:
   - Place your logo as `public/images/logo.png`
   - Place your Open Graph image as `public/images/og-image.jpg` (1200x630px)

3. Update GTM ID:
   - Open `app/layout.tsx`
   - Replace `GTM-XXXXXXX` with your Google Tag Manager ID

4. Update domain:
   - Find and replace `https://klinikhaya.com` with your actual domain
   - Update in: `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `components/StructuredData.tsx`

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:
```bash
npm run build
```

### Deploy

This project is ready to deploy on Vercel:

1. Push to GitHub
2. Import repository on Vercel
3. Deploy

## Project Structure

```
klinik-haya/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── error.tsx          # Error page
│   ├── loading.tsx        # Loading state
│   ├── not-found.tsx      # 404 page
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
│
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   │   └── button.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── OurServices.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── ContactUs.tsx
│   └── StructuredData.tsx
│
├── lib/                  # Utilities
│   ├── brand.ts          # Brand configuration
│   └── utils.ts          # Utility functions
│
└── public/
    └── images/           # Static images
        ├── logo.png
        └── og-image.jpg
```

## Brand Configuration

All brand information is centralized in `lib/brand.ts`:
- Business name and tagline
- Colors (Purple: #8c55a1, Pink: #de539d)
- Contact information
- Operating hours
- Services
- Social media links

To update brand information, edit this file only.

## Features

### SEO Optimized
- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card tags
- JSON-LD structured data
- Sitemap and robots.txt
- Semantic HTML

### Sections
1. **Hero Section** - Welcome message with CTA
2. **Services** - Healthcare services offered
3. **Why Choose Us** - Key features and benefits
4. **Testimonials** - Patient reviews
5. **Contact** - Contact information with map

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface

## Customization

### Colors
Edit `app/globals.css` to change the color scheme. Current brand colors:
- Primary (Purple): `--primary: 288 31% 49%`
- Secondary (Pink): `--secondary: 333 65% 60%`
- Accent (Soft Pink): `--accent: 328 81% 77%`

### Content
Update content in:
- `lib/brand.ts` - All brand information
- Component files in `components/` - Section-specific content

### Services
Edit the services array in `lib/brand.ts`:
```typescript
services: [
  {
    title: "Service Name (Malay)",
    titleEn: "Service Name (English)",
    description: "Description",
    icon: "IconName"
  }
]
```

## Performance

- Next.js Image optimization
- Font optimization (Open Sans)
- Lazy loading for below-the-fold content
- Minimal JavaScript bundle
- Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2026 Klinik Haya. All rights reserved.

## Support

For technical support, contact the development team.
