// PAGE CONVERSION TEMPLATE
// Use this template to convert remaining React pages to Next.js

// 1. For pages WITHOUT client interactivity (no useState, useEffect, etc):
// ========================================================================

import Image from 'next/image';
import Link from 'next/link';
import ComponentName from '../../components/ComponentName';
import styles from '../../styles/PageName.module.css';

export const metadata = {
  title: 'Page Title | Goddess Rising Hair Extensions',
  description: 'Page description here',
  alternates: {
    canonical: '/page-route',
  },
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    images: ['/assets/images/og-image.webp'],
    url: 'https://www.goddessrisinghair.co.uk/page-route',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Page description',
    images: ['/assets/images/og-image.webp'],
  },
};

export default function PageName() {
  return (
    <>
      {/* Optional: JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            // ... schema markup
          }),
        }}
      />

      <main aria-label="Page Name">
        {/* Page content here */}
        {/* Replace <img> with Next.js <Image> where appropriate */}
        {/* Replace <a href=...> with <Link href=...> for internal links */}
      </main>
    </>
  );
}

// 2. For pages WITH client interactivity (useState, useEffect, forms, etc):
// ===========================================================================

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ComponentName from '../../components/ComponentName';
import styles from '../../styles/PageName.module.css';

// Note: metadata must be in a separate file or in layout.js
// Client components cannot export metadata directly

export default function PageName() {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Effect code
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            // ... schema markup
          }),
        }}
      />

      <main aria-label="Page Name">
        {/* Interactive page content */}
      </main>
    </>
  );
}

// CONVERSION CHECKLIST:
// ====================
// □ Copy page from src/pages/[PageName].jsx
// □ Create app/[route]/page.js
// □ Add 'use client' if using hooks/browser APIs
// □ Replace React imports with Next.js imports
// □ Convert <Helmet> metadata to export const metadata = {}
// □ Update Link imports: from 'react-router-dom' → from 'next/link'
// □ Update Link props: to="..." → href="..."
// □ Update import paths for components and styles
// □ Replace <img> with <Image> where appropriate (optional but recommended)
// □ Test the page locally with npm run dev
