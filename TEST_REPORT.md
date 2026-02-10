# Test Report — Expense Tracker

**URL:** https://expense-tracker-83a.pages.dev/
**Date:** 2026-02-10
**Browser:** Chrome (Desktop)
**Viewports tested:** 390px (mobile), 1440px (desktop)

---

## Summary

| Area | Status | Notes |
|------|--------|-------|
| Monthly Budget Setup (`/`) | PASS | All elements render and function correctly |
| Daily Budget (`/daily`) | PASS | All elements render and function correctly |
| Responsive layout | PASS | Mobile and desktop layouts are correct |
| Navigation | PASS | Routing works between pages |
| Console errors | PASS | Zero errors or warnings |

---

## Page: Monthly Budget Setup (`/`)

### Visual rendering
- [x] Header with back arrow and "Monthly Budget Setup" title renders
- [x] "Set your limit" heading and description text display correctly
- [x] Budget input shows default value of `$2,400.00`
- [x] Daily limit card shows "22 DAYS REMAINING" badge with green gradient background
- [x] Suggested Daily Limit of `$43.18` displays below the badge
- [x] Fixed Expenses section header with "+ Add New" link renders
- [x] Three fixed expense items display with icons, labels, amounts, and toggles:
  - Rent & Housing — $1,200.00 (on)
  - Utilities & Bills — $250.00 (on)
  - Subscriptions — $45.00 (off)
- [x] "Start Tracking" button is sticky at the bottom

### Interactivity
- [x] Budget input is editable — changed from `2400` to `3000`, daily limit recalculated from `$43.18` to `$70.45`
- [x] Toggle switches work — enabling Subscriptions reduced daily limit from `$70.45` to `$68.41`
- [x] "Start Tracking" button navigates to `/daily`

---

## Page: Daily Budget (`/daily`)

### Visual rendering
- [x] Header shows date ("Monday, Oct 24") and greeting ("Hello, Alex")
- [x] Notification bell icon in top-right corner
- [x] Circular progress ring renders with green arc (~65% filled)
- [x] Remaining amount `$45.50` and "65% left" badge display inside the ring
- [x] "Daily limit: $70.00" text below the ring
- [x] Two stat cards render side-by-side:
  - Spent Today: `$24.50`
  - Monthly Left: `$1,240`
- [x] Quick Add section with "Customize" link and three category buttons:
  - Food (orange icon)
  - Transport (blue icon)
  - Shopping (purple icon)
- [x] Today's Activity section with "See all" link
- [x] Three transaction items display with icons, category labels, timestamps, and amounts:
  - Starbucks Coffee — Food & Drink, 08:45 AM — `-$5.50`
  - City Transit Tap — Transport, 09:15 AM — `-$2.75`
  - Whole Foods Market — Shopping, 12:30 PM — `-$16.25`
- [x] Bottom navigation bar with 5 tabs: Home, Reports, +, Budget, Settings

### Interactivity
- [x] Bottom nav "Budget" tab navigates back to `/` (Monthly Budget Setup)

---

## Responsive Layout

### Mobile (390px width)
- [x] App fills the full viewport width — no horizontal overflow
- [x] All text is legible and properly sized
- [x] Bottom navigation bar stays sticky at the bottom
- [x] Circular progress ring scales correctly
- [x] Quick Add buttons fit in a single row
- [x] Transaction list items display without truncation

### Desktop (1440px width)
- [x] App is centered horizontally via `max-w-md mx-auto`
- [x] Equal whitespace on both sides of the container
- [x] Content constrained to mobile-width column
- [x] No layout breaking or unexpected stretching

---

## Console & Errors

- [x] Zero console errors on `/`
- [x] Zero console errors on `/daily`
- [x] No React warnings
- [x] No network errors

---

## Known Limitations

These are expected behaviors given the current architecture (no backend, no state management):

1. **No state persistence between pages** — Budget changes made on `/` are not reflected on `/daily`. The daily page always shows a hardcoded `$70.00` daily limit regardless of what the user sets on the budget setup page.
2. **State resets on navigation** — Navigating away from the budget page and back resets the budget input and toggle states to their defaults.
3. **Demo data only** — All transaction data and budget values are hardcoded. No data entry or deletion functionality.
4. **Bottom nav tabs** — Only "Home" and "Budget" appear to be routed. Reports, Settings, and the "+" button do not navigate to distinct pages.
