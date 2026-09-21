<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio Project — Agent Conventions

## Stack
- Next.js 16 (App Router, Turbopack)
- TypeScript
- No Tailwind — custom CSS design system in `src/styles/`
- No component library — all components hand-built

## Design System
- CSS tokens defined in `src/styles/globals.css`
- Follow existing token names (--bg-0, --bg-1, --text-1, --accent, etc.)
- Border radius scale: --r-sm, --r-md, --r-lg, --r-xl, --r-full
- Font: Inter (sans), JetBrains Mono (mono)
- Never use inline styles — use CSS modules or globals

## File Structure
- Pages: `src/app/` (App Router conventions)
- Components: `src/components/`
- Styles: `src/styles/`
- Types: `src/types/`

## Conventions
- TypeScript strict mode — no `any`
- CSS Modules for component-scoped styles
- No third-party UI libraries without explicit approval
- All images use next/image
- All links use next/link

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`

## What not to do
- Do not install Tailwind
- Do not use `<style>` tags in components
- Do not use `getServerSideProps` — this is App Router
- Do not modify `AGENTS.md` auto-generated block above
