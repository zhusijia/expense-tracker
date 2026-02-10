# Expense Tracker

A mobile-first expense tracking app that helps you set a monthly budget, automatically calculates your daily spending limit, and tracks your daily expenses — so you always know how much you can spend today.

## Features

- **Monthly Budget Setup** — Enter your total monthly budget, toggle fixed expenses (rent, utilities, subscriptions), and get a suggested daily spending limit
- **Daily Budget Dashboard** — See your remaining daily budget at a glance with a progress ring, view today's transactions, and quickly add expenses by category

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 7](https://vite.dev/) — fast dev server and build tool
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [React Router 7](https://reactrouter.com/) — client-side routing
- [Lucide React](https://lucide.dev/) — icon library

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm

### Installation

```bash
git clone https://github.com/zhusijia/expense-tracker.git
cd expense-tracker
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

### Lint

```bash
npm run lint
```

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Monthly Budget Setup | Set your monthly budget and manage fixed expenses |
| `/daily` | Daily Budget | Dashboard showing remaining budget, transactions, and quick-add |
