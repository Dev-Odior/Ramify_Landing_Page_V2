# Ramify Codebase Guidelines for AI Agents

## Project Overview
**Ramify** is a React-based landing page for a livestock savings platform enabling Nigerians to save flexibly (daily/weekly/monthly) and receive guaranteed delivery of rams during Sallah. This is a marketing/informational site built with Vite, React 19, and CDN-based Tailwind CSS.

## Architecture & Key Patterns

### Component Structure
- **Single Responsibility**: Each component in `/components` represents one major section (Hero, Features, Pricing, FAQ, etc.)
- **Composition**: [App.tsx](App.tsx) imports and renders sections in sequence as a vertical scrolling experience
- **No State Management**: This is a stateless landing page with only local UI state (e.g., mobile menu toggle, form inputs)
- **Styling**: All components use **Tailwind CSS utility classes** applied inline via CDN in [index.html](index.html). No CSS files exist.

### Data Structure Pattern
- **Types First**: [types.ts](types.ts) defines all interfaces (NavItem, ValueProp, Step, Feature, etc.) using `LucideIcon` for icon types
- **Constants Separation**: [constants.ts](constants.ts) contains all UI content (NAV_ITEMS, VALUE_PROPS, PRICING_TIERS, etc.) with lucide-react icons
- **Decoupled Content & Rendering**: Components iterate over constants data, making content updates trivial

### Theme & Styling
- **Tailwind CDN Configuration**: Inline config in [index.html](index.html) extends theme with custom colors (primary, secondary, surface) and Urbanist font
- **Custom Colors Used**: `primary` (brand color), `secondary` (accent), `surface` (background)
- **Responsive Pattern**: Use `md:` breakpoint prefix for desktop adjustments (e.g., `text-sm md:text-base`)
- **Reusable Components**: [Button.tsx](components/Button.tsx) demonstrates the pattern—variants ('primary', 'secondary', 'outline', 'ghost') with merged className support

### Navigation & Scrolling
- **Anchor-based Navigation**: NAV_ITEMS reference `#section-id` anchors; clicking triggers smooth scroll with header offset calculation (see [Header.tsx](components/Header.tsx#L23-L31))
- **Fixed Header**: Sticky header with scroll-state styling change (`isScrolled` state)
- **Mobile Menu**: Toggle state on Menu/X icon click; closes on navigation

## Developer Workflows

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Start Vite dev server (port 3000, accessible on 0.0.0.0)
npm run build        # Production build (outputs to dist/)
npm run preview      # Preview production build locally
```

### Environment Variables
- Create `.env.local` in root
- `GEMINI_API_KEY` is defined in [vite.config.ts](vite.config.ts) and exposed as `process.env.GEMINI_API_KEY` (currently unused but configured)

### Module Imports
- **Path Alias**: `@/*` resolves to root (e.g., `@/constants` → `constants.ts`, `@/components/Button` → `components/Button.tsx`)
- **Icon Library**: All icons from lucide-react; import as `import { IconName } from 'lucide-react'`

## Project-Specific Conventions

### Naming & Organization
- **Components**: PascalCase, one per file (e.g., `Features.tsx`)
- **Type Definitions**: Interfaces in [types.ts](types.ts); use `React.FC<Props>` pattern
- **Constants**: UPPER_SNAKE_CASE for exported arrays/objects; group by feature

### Component Template
```tsx
import React from 'react';
import { CONSTANT } from '@/constants';
import { SomeIcon } from 'lucide-react';
import Button from '@/components/Button';

const ComponentName = () => {
    const [state, setState] = React.useState(false);
    
    return (
        <section id="section-id" className="py-20 bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                {/* Content */}
            </div>
        </section>
    );
};

export default ComponentName;
```

### Common Class Patterns
- **Sections**: `py-20 bg-surface` for padding and background
- **Containers**: `container mx-auto px-4 md:px-6` for width and horizontal padding
- **Text Hierarchy**: `text-3xl md:text-5xl font-extrabold` for headings, `text-slate-600 text-lg` for body
- **Focus States**: `focus:outline-none focus:ring-2 focus:ring-primary` for inputs/buttons

### Form & Input Handling
- Components like NotificationSignup likely use local `useState` for email/form state
- Buttons accept standard HTML attributes: `className`, `disabled`, `onClick`, etc.

## Key Dependencies & Integration Points

### External Libraries
- **React 19.2.1**: Latest React with new JSX transform
- **Recharts 3.5.1**: Chart component library (likely used in CostBreakdown for data visualization)
- **Lucide React 0.556.0**: Icon library; all icons must be imported and passed as components to interfaces
- **Tailwind CSS**: Applied via CDN; no build-time processing

### Build Tool: Vite
- **Hot Module Replacement (HMR)**: Enabled by default; changes reflect instantly
- **TypeScript Support**: Configured to use `react-jsx` transform (no React import needed in files)
- **Production Optimization**: `vite build` creates minified, optimized bundle in `dist/`

## Critical Workflows

### Adding a New Section
1. Create component file in `/components` (e.g., `Newsletter.tsx`)
2. Define types in [types.ts](types.ts) if needed
3. Add constants in [constants.ts](constants.ts)
4. Import and add to [App.tsx](App.tsx) in the desired order
5. Use `id="section-id"` to enable navigation

### Updating Content
1. Edit arrays in [constants.ts](constants.ts) (no code changes needed)
2. Components auto-render from constants; Vite HMR reflects changes instantly

### Styling & Responsive Design
- Use Tailwind utility classes inline; apply `md:` prefix for desktop breakpoints
- Test by resizing browser in dev mode
- Check that button variants and spacing match existing components

## Gotchas & Considerations

- **No Environment Variable Setup**: Ensure `.env.local` is created with `GEMINI_API_KEY` before running; vite.config.ts references it
- **Font CDN**: Urbanist font loaded from Google Fonts; all font families aliased to Urbanist in Tailwind config
- **Icon Type System**: Icons are passed as React components (not strings); see [types.ts](types.ts) and how VALUE_PROPS use imported lucide icons
- **Responsive Testing**: Always test on small screens; Tailwind `container` class responsive breakpoints matter
- **Mobile Menu**: Close on navigation click to avoid UX friction
