# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A mobile-first expense tracker app built with React, Vite, TypeScript, and Tailwind CSS. Designed as a 390px-width mobile layout centered on desktop via `max-w-md mx-auto`.

## Tech Stack

- **React 19** with TypeScript 5.9
- **Vite 7** (dev server & build)
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin (imported in `src/index.css`)
- **react-router-dom 7** for client-side routing (BrowserRouter in `src/main.tsx`)
- **lucide-react** for icons

## Commands

- `npm run dev` — start dev server
- `npm run build` — type-check (`tsc -b`) then production build
- `npm run lint` — ESLint
- `npm run preview` — preview production build

## Project Structure

```
src/
  main.tsx          — entry point, BrowserRouter wrapper
  App.tsx           — route definitions, max-w-md container
  index.css         — Tailwind CSS import
  pages/
    MonthlyBudgetSetup.tsx  — budget setup page (route: /)
    DailyBudget.tsx         — daily dashboard page (route: /daily)
```

## Architecture Decisions

- **Mobile-first layout**: App wrapper uses `max-w-md mx-auto` to constrain width. Pages use `sticky` (not `fixed`) for bottom bars so they stay within the container.
- **No state management library**: Currently using local React state. Data is hardcoded/demo only.
- **No backend**: Pure frontend app at this stage.
- **Icons**: Using lucide-react throughout. No image assets — all icons are SVG components.
- **Font**: Inter font family referenced in Tailwind classes.

## Design Tokens (from Figma)

- Primary green: `#13ec5b`
- Dark text: `#111813` (budget page), `#0f172a` (daily page)
- Muted text: `#61896f` (budget page), `#64748b` (daily page)
- Background: `#f6f8f6`
- Card background: `white` with `border-[#dbe6df]/30` or `border-[#f1f5f9]`

## Important Notes

- `.env` is gitignored — contains secrets, never commit it.
- Responsive input: budget amount input uses `text-4xl sm:text-5xl` with `min-w-0` to prevent overflow.
- The Figma designs are at 390px width — two frames: "Monthly Budget Setup" (node 4:2) and "Daily Budget" (node 4:65).
