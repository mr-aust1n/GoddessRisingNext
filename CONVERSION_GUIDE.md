# Converting Remaining Pages to Next.js

## Overview
You have a partially converted Next.js application. The core structure, layout, and components are done. You need to convert the remaining page components from React to Next.js.

## What's Already Done ✅

### Structure
- ✅ Next.js project setup with App Router
- ✅ Root layout (`app/layout.js`) with Header and Footer
- ✅ Global styles (`styles/globals.css`)
- ✅ All public assets copied to `/public`

### Components (all converted)
- ✅ Header with navigation
- ✅ Footer with responsive layout
- ✅ Carousel (hero slider)
- ✅ BeforeAfter
- ✅ BlogCard
- ✅ Reviews
- ✅ TransformationCarousel

### Pages
- ✅ Home (`app/page.js`)
- ✅ About (`app/about/page.js`)
- ✅ Contact (`app/contact/page.js`)

## Pages Remaining to Convert ⚠️

1. **Consultation** - `/app/consultation/page.js`
   - Source: `GoddessRisingReact-main/src/pages/Consultation.jsx`
   - Needs: 'use client' (has form)

2. **Mesh Integration** - `/app/mesh-integration/page.js`
   - Source: `GoddessRisingReact-main/src/pages/MeshIntegration.jsx`
   - Needs: Standard page conversion

3. **Hair Extensions** - `/app/hair-extensions/page.js`
   - Source: `GoddessRisingReact-main/src/pages/HairExtensions.jsx`
   - Needs: Standard page conversion

4. **Blog** - `/app/blog/page.js`
   - Source: `GoddessRisingReact-main/src/pages/Blog.jsx`
   - Needs: Standard page conversion

5. **Blog Post** - `/app/blog/[id]/page.js`
   - Source: `GoddessRisingReact-main/src/pages/BlogPost.jsx`
   - Needs: Dynamic route with generateStaticParams

6. **FAQ** - `/app/faq/page.js`
   - Source: `GoddessRisingReact-main/src/pages/Faq.jsx`
   - Needs: 'use client' (has accordion/expand functionality)

7. **404 Not Found** - `/app/not-found.js`
   - Source: `GoddessRisingReact-main/src/pages/NotFound.jsx`
   - Needs: Simple page conversion

## Step-by-Step Conversion Process

### For Each Page:

#### Step 1: Create the Directory
```bash
mkdir -p app/[page-name]
```

#### Step 2: Create page.js
```bash
touch app/[page-name]/page.js
```

#### Step 3: Open the Original React File
Look at `GoddessRisingReact-main/src/pages/[PageName].jsx`

#### Step 4: Determine if Client Component Needed
Ask yourself: Does this page use:
- `useState`?
- `useEffect`?
- Event handlers (`onClick`, `onChange`, etc.)?
- Browser APIs (`window`, `document`, etc.)?

If YES → Add `'use client'` at the top
If NO → It's a Server Component (better for SEO)

#### Step 5: Convert the Imports

**Before:**
```jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ComponentName from "../assets/components/ComponentName";
import styles from "../styles/PageName.module.css";
```

**After (Server Component):**
```jsx
import Link from 'next/link';
import ComponentName from '../../components/ComponentName';
import styles from '../../styles/PageName.module.css';
```

**After (Client Component):**
```jsx
'use client';

import Link from 'next/link';
import ComponentName from '../../components/ComponentName';
import styles from '../../styles/PageName.module.css';
```

#### Step 6: Convert Metadata

**Before (React Helmet):**
```jsx
<Helmet>
  <title>Page Title</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  {/* etc */}
</Helmet>
```

**After (Server Component):**
```jsx
export const metadata = {
  title: 'Page Title',
  description: '...',
  openGraph: {
    title: '...',
    description: '...',
    images: ['/path/to/image.webp'],
  },
};
```

**After (Client Component):**
Metadata goes in the parent layout or you create a wrapper. For simplicity with client components, you can skip metadata export and keep the JSON-LD schema in the component.

#### Step 7: Convert Links

**Before:**
```jsx
<Link to="/about">About</Link>
```

**After:**
```jsx
<Link href="/about">About</Link>
```

#### Step 8: Convert Images (Optional but Recommended)

**Before:**
```jsx
<img 
  src="/assets/images/photo.webp" 
  alt="Description"
  width="800"
  height="600"
/>
```

**After:**
```jsx
import Image from 'next/image';

<Image 
  src="/assets/images/photo.webp" 
  alt="Description"
  width={800}
  height={600}
/>
```

#### Step 9: Test the Page
```bash
npm run dev
```
Navigate to the page and check:
- Does it render correctly?
- Do images load?
- Do links work?
- Does the styling look right?

## Special Cases

### Dynamic Routes (Blog Posts)

For `/blog/[id]`, create: `app/blog/[id]/page.js`

```jsx
import { notFound } from 'next/navigation';
import blogPosts from '../../../data/blogPosts.json';
import styles from '../../../styles/BlogPost.module.css';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Goddess Rising Blog`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.blogPost}>
      <h1>{post.title}</h1>
      {/* Rest of content */}
    </article>
  );
}
```

### 404 Page

Create `app/not-found.js`:

```jsx
import Link from 'next/link';
import styles from '../styles/NotFound.module.css';

export const metadata = {
  title: '404 - Page Not Found',
};

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/">Go Home</Link>
    </main>
  );
}
```

## Quick Reference

### Import Changes
| React Router | Next.js |
|-------------|---------|
| `import { Link } from 'react-router-dom'` | `import Link from 'next/link'` |
| `import { useNavigate } from 'react-router-dom'` | `import { useRouter } from 'next/navigation'` |
| `import { useParams } from 'react-router-dom'` | Use `params` prop in page component |
| `<Link to="/path">` | `<Link href="/path">` |

### Component Type Decision
| If the page has... | Use... |
|-------------------|--------|
| Only static content | Server Component (no 'use client') |
| useState, useEffect | Client Component ('use client') |
| Forms with onChange | Client Component ('use client') |
| Click handlers | Client Component ('use client') |
| Browser APIs | Client Component ('use client') |

## File Path Reference

```
Original React Path → Next.js Path
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/pages/About.jsx → app/about/page.js
src/pages/Contact.jsx → app/contact/page.js
src/pages/Consultation.jsx → app/consultation/page.js
src/pages/MeshIntegration.jsx → app/mesh-integration/page.js
src/pages/HairExtensions.jsx → app/hair-extensions/page.js
src/pages/Blog.jsx → app/blog/page.js
src/pages/BlogPost.jsx → app/blog/[id]/page.js
src/pages/Faq.jsx → app/faq/page.js
src/pages/NotFound.jsx → app/not-found.js

src/assets/components/Component.jsx → components/Component.js
src/styles/Page.module.css → styles/Page.module.css (already copied)
```

## Troubleshooting

### "Module not found" errors
- Check import paths - they're relative from the page file
- From `app/about/page.js`, components are `../../components/`
- From `app/blog/[id]/page.js`, components are `../../../components/`

### Styles not applying
- Verify CSS module is imported: `import styles from '../../styles/PageName.module.css'`
- Check that the CSS file exists in the styles folder
- Ensure class names match: `className={styles.className}`

### Images not loading
- Images must be in `/public` directory
- Paths start with `/` (e.g., `/assets/images/photo.webp`)
- For Next.js Image component, width and height are required

### "You're importing a component that needs 'use client'"
- Add `'use client'` to the top of the file
- Or move the interactive parts to a separate client component

## Need Help?

1. Refer to `PAGE_CONVERSION_TEMPLATE.js` for copy-paste template
2. Look at the converted pages (`app/about/page.js`, `app/contact/page.js`) as examples
3. Check the original React files in `GoddessRisingReact-main/src/pages/`
4. Review Next.js docs: https://nextjs.org/docs

## Checklist for Each Page

Before considering a page "done":

- [ ] Page renders without errors
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Styles look correct on mobile and desktop
- [ ] Navigation to/from the page works
- [ ] SEO metadata is present (title, description, OG tags)
- [ ] Forms work (if applicable)
- [ ] No console errors in browser devtools

Good luck! The hard part (structure and components) is done. Converting the pages is mostly copy-paste and small syntax changes.
