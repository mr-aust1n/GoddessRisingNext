# Quick Start Guide

## Getting Started in 3 Steps

### 1. Install Dependencies
```bash
cd goddess-rising-nextjs
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000 to see your app!

### 3. Complete the Conversion

Follow the instructions in `CONVERSION_GUIDE.md` to convert the remaining pages:
- Consultation
- Mesh Integration
- Hair Extensions
- Blog
- Blog Post (dynamic)
- FAQ
- 404 Not Found

## Project Structure

```
goddess-rising-nextjs/
├── app/                    # Pages (Next.js App Router)
│   ├── layout.js          # Root layout (Header + Footer)
│   ├── page.js            # Home page ✅
│   ├── about/
│   │   └── page.js        # About page ✅
│   └── contact/
│       └── page.js        # Contact page ✅
├── components/            # Reusable components ✅
├── public/                # Static files ✅
├── styles/                # CSS modules ✅
└── data/                  # JSON data ✅
```

## What Works Right Now

✅ Home page with carousel
✅ About page with transformations
✅ Contact page with form and map
✅ Header with responsive navigation
✅ Footer with contact info
✅ All styling and images

## What Needs to be Done

⚠️ Convert 7 remaining pages (see CONVERSION_GUIDE.md)

## Need Help?

1. Read `CONVERSION_GUIDE.md` for detailed instructions
2. Use `PAGE_CONVERSION_TEMPLATE.js` as a template
3. Look at `app/about/page.js` and `app/contact/page.js` as examples
4. Check the original files in `GoddessRisingReact-main/src/pages/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

Once all pages are converted:

```bash
# Build the app
npm run build

# Deploy to Vercel (recommended)
npm install -g vercel
vercel
```

## Key Differences from React App

| Feature | Old (React) | New (Next.js) |
|---------|-------------|---------------|
| Routing | React Router | App Router (file-based) |
| Links | `<Link to=...>` | `<Link href=...>` |
| Metadata | React Helmet | `export const metadata` |
| Images | `<img>` | `<Image>` (optional) |
| Client code | All client-side | 'use client' directive |

Happy coding! 🚀
