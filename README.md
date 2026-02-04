# Goddess Rising Hair Extensions - Next.js Conversion

This is the Next.js conversion of the Goddess Rising Hair Extensions React application.

## 🚀 What's Been Converted

### ✅ Completed
- **Project Structure**: Converted from Vite/React to Next.js 15 with App Router
- **Global Styles**: Combined reset.css, variables.css, and global.css into `styles/globals.css`
- **Root Layout**: Created `app/layout.js` with metadata, fonts, Header, and Footer
- **Components**: 
  - Header (with mobile menu and navigation)
  - Footer (with responsive layout)
  - Carousel (Swiper-based hero carousel)
  - BeforeAfter, BlogCard, Reviews, TransformationCarousel
- **Assets**: All images, favicons, robots.txt, and sitemap copied to `/public`
- **Home Page**: Converted to `app/page.js` with proper metadata

### 📝 Pages to Convert
The following pages need to be created in their respective `/app/[page]/page.js` files:

1. **About** (`/app/about/page.js`)
2. **Consultation** (`/app/consultation/page.js`)
3. **Mesh Integration** (`/app/mesh-integration/page.js`)
4. **Hair Extensions** (`/app/hair-extensions/page.js`)
5. **Blog** (`/app/blog/page.js`)
6. **Blog Post** (`/app/blog/[id]/page.js`)
7. **FAQ** (`/app/faq/page.js`)
8. **Contact** (`/app/contact/page.js`)
9. **404 Not Found** (`/app/not-found.js`)

## 🔄 Key Conversion Changes

### React Router → Next.js

**Before (React Router):**
```jsx
import { Link } from 'react-router-dom';
<Link href="/about">About</Link>
```

**After (Next.js):**
```jsx
import Link from 'next/link';
<Link href="/about">About</Link>
```

### Helmet → Metadata

**Before (React Helmet):**
```jsx
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Page Title</title>
  <meta name="description" content="..." />
</Helmet>
```

**After (Next.js Metadata):**
```jsx
export const metadata = {
  title: 'Page Title',
  description: '...',
};
```

### Client Components

Components that use hooks (`useState`, `useEffect`, etc.) or browser APIs need the `'use client'` directive:

```jsx
'use client';

import { useState } from 'react';
// ... component code
```

### Images

For optimal performance, use Next.js Image component where possible:

```jsx
import Image from 'next/image';

<Image 
  src="/assets/images/photo.webp" 
  alt="Description"
  width={800}
  height={600}
  priority // for above-the-fold images
/>
```

## 📁 Directory Structure

```
goddess-rising-nextjs/
├── app/                        # Next.js App Router
│   ├── layout.js              # Root layout with Header/Footer
│   ├── page.js                # Home page
│   ├── about/
│   │   └── page.js
│   ├── consultation/
│   │   └── page.js
│   └── ...
├── components/                 # Reusable components
│   ├── Header.js
│   ├── Header.module.css
│   ├── Footer.js
│   ├── Carousel.js
│   └── ...
├── public/                     # Static assets
│   ├── assets/
│   │   └── images/
│   ├── favicon.ico
│   └── robots.txt
├── styles/                     # Global and module styles
│   ├── globals.css
│   └── *.module.css
├── data/                       # JSON data files
│   └── blogPosts.json
├── package.json
└── next.config.js
```

## 🛠️ Installation & Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Start production server:**
```bash
npm start
```

## 📦 Dependencies

### Core
- `next` ^15.1.4
- `react` ^19.0.0
- `react-dom` ^19.0.0

### UI/Styling
- `@fontsource-variable/cinzel` 5.2.8
- `@fontsource/poppins` 5.2.7
- `swiper` ^11.2.6
- `react-icons` ^5.5.0

## 🎨 Styling Approach

This project uses **CSS Modules** for component-specific styling and a global stylesheet for base styles and variables.

### CSS Variables (from `styles/globals.css`)
```css
--dk-brown: #9E8474;
--footer-color: #F8EFD9;
--heading-color: #D6AF94;
--main-color: #000;
--lighter-color: #FAF6F3;
--title-font: 'Cinzel', serif;
--text-font: 'Poppins', sans-serif;
```

## 🔍 SEO Features

- **Metadata API**: Each page exports metadata for SEO
- **Structured Data**: JSON-LD schema markup for rich results
- **Sitemap**: Located at `/public/sitemap.xml`
- **Robots.txt**: Located at `/public/robots.txt`
- **Open Graph**: Social media preview metadata
- **Canonical URLs**: Proper canonical link handling

## 📱 Responsive Design

All pages and components are fully responsive with mobile-first design:
- Mobile: < 768px
- Tablet: 768px - 1029px
- Desktop: ≥ 1030px

## 🌐 Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended - zero config)
- **Netlify**
- **Any Node.js hosting**

### Vercel Deployment
```bash
npm install -g vercel
vercel
```

## 📝 Converting Remaining Pages

To convert a page from React to Next.js:

1. Create directory: `app/[page-name]/`
2. Create file: `app/[page-name]/page.js`
3. Convert the component:
   - Remove React Router imports
   - Replace `<Helmet>` with `export const metadata`
   - Add `'use client'` if using hooks/browser APIs
   - Update `<Link href=...>` to `<Link href=...>`
   - Import CSS modules from `../../styles/[Page].module.css`
4. Test the page locally

## 🐛 Troubleshooting

### Styles not loading
- Ensure CSS modules are imported correctly
- Check that `globals.css` is imported in `app/layout.js`

### Images not found
- Verify images are in `/public/assets/images/`
- Check image paths start with `/` (e.g., `/assets/images/photo.webp`)

### Client-side errors
- Add `'use client'` to components using hooks or browser APIs
- Check console for specific error messages

## 📞 Contact

For questions about this conversion, refer to the original React app in `GoddessRisingReact-main/` for reference.

---

**Original Site**: https://www.goddessrisinghair.co.uk
**Framework**: Next.js 15 with App Router
**Styling**: CSS Modules + Global CSS
