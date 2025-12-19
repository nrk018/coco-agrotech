# COCO AGROTECH Website

A modern, clean website for COCO AGROTECH, built with Next.js and a UI design matching GitHub Universe.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **CSS Modules** - Scoped styling
- **React Hooks** - Modern React patterns

## Project Structure

```
coco-agrotech/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx       # Main homepage
│   └── globals.css    # Global styles
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer component
│   ├── DecorativeElements.tsx  # Background decorative elements
│   └── AnimatedSection.tsx     # Animated section wrapper
├── hooks/
│   └── useIntersectionObserver.ts  # Custom hook for scroll animations
├── package.json       # Dependencies
├── next.config.js     # Next.js configuration
└── tsconfig.json      # TypeScript configuration
```

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
npm run start
```

## Features

- ✅ Clean, minimalist design matching GitHub Universe
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Intersection Observer for fade-in effects
- ✅ Mobile menu support
- ✅ TypeScript for type safety
- ✅ Next.js App Router
- ✅ Modern CSS with custom properties
- ✅ Parallax effects for decorative elements

## Sections

1. **Header** - Navigation with logo and menu
2. **Hero Section** - Main title with "That's a wrap" content
3. **Next Year Section** - Call to action section
4. **Highlights** - Product highlights grid
5. **Explore** - Feature exploration cards
6. **Agenda** - Timeline/agenda layout
7. **Speakers/Team** - Team member cards
8. **Sponsors/Partners** - Partner showcase
9. **Survey** - Call to action section
10. **Footer** - Footer with links and information

## Customization

All content is currently placeholder text. Replace the content in `app/page.tsx` and components with your actual content. The structure and styling are ready to use.

## Colors

- Primary Green: `#2ea043`
- Dark Green: `#1a7f37`
- Blue: `#0969da`
- Purple: `#8250df`
- Black: `#1f2328`
- White: `#ffffff`

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

