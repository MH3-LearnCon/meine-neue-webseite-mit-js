# CLAUDE.md - Projekt-Regeln & Tech-Stack

This file provides strict guidance to Cursor and Claude when working with code in this repository.

## Commands
`pnpm dev`      # Start development server at http://localhost:3000
`pnpm build`    # Build for production
`pnpm lint`     # Run ESLint

## 🚨 STRIKT EINZUHALTEN (Tech-Stack) 🚨
- **Next.js 15** with App Router (Verwende keine v16-spezifischen Features!)
- **React 19**, **TypeScript** (strict mode)
- **Tailwind CSS 3.4** (WICHTIG: Nutze ausschließlich v3.4, NIEMALS v4! Wir benötigen eine klassische tailwind.config.ts)
- **shadcn/ui** (new-york style, slate base)
- **Node.js 22 LTS**
- Package manager: **pnpm**

## Architecture & Styling
- `src/app/` — Next.js App Router pages and layouts.
- `src/components/ui/` — shadcn-generated UI primitives
- `src/components/` — custom components
- `src/lib/utils.ts` — exports `cn()` for conditional class merging

## Entwicklungs-Prinzipien
- Triff keine Annahmen bei fehlenden Informationen, sondern frage nach.
- Schreibe sauberen, modularen TypeScript-Code.
- Bevorzuge bei UI-Elementen immer zuerst die Standard-Komponenten von shadcn/ui.

---
**Gemini Project DNA**
Status: Technisches Setup (Node 22, pnpm 10, Git).
Workflow: Gemini (Didaktik/Strategie) <-> Cursor/Claude (Execution).