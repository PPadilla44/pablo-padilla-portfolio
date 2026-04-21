# Pablo Padilla Portfolio — PRD

## Original problem statement (chronological)
1. "Code review my portfolio" — https://github.com/PPadilla44/pablo-padilla-portfolio
2. User chose option (c): full fix including React 18 migration
3. "Can you do a design rehaul and modernize my portfolio?"
   - Aesthetic: "surprise me — what best showcases a full-stack engineer in 2026"
   - Theme: both, default dark
   - Drop Contact (email not set up)
   - Feel: "playful"
   - Off-limits: "whatever you recommend, go crazy"

## Architecture
- CRA 5 + React 18 + TypeScript 4.9 + Tailwind CSS 3 + Framer Motion 11
- Themed via CSS variables + Tailwind `darkMode: 'class'`
- SEO via react-snap prerendering + OG / Twitter / JSON-LD
- Fonts: Cabinet Grotesk (display) + JetBrains Mono (body)
- No backend — fully static

## Implemented
### 2026-01 — Code review & refactor
- React 17 → 18 migration (`createRoot`)
- Dropped `enzyme` + `emailjs-com` + `futura-font`; moved to RTL + `@emailjs/browser`
- Fixed Contact-not-rendered bug, Tailwind stray-semicolon bug, hamburger-invisible bug
- A11y: single h1/page, labels, focus-visible, skip-link, reduced-motion
- SEO: OG + Twitter + JSON-LD + sitemap
- Performance: fonts trimmed, images lazy with width/height, scroll throttled via rAF

### 2026-01 — Design rehaul (neo-brutalist / playful)
- Removed Contact section entirely (and `NavMenu`, `MenuButton`, `SendButton`, `ToolTip`)
- Added `ThemeToggle` (top-right, sun/moon, persisted in localStorage, no FOUC)
- Rebuilt Nav as floating bottom glass pill with spring entrance
- Rewrote every view/block to the neo-brutalist spec:
  - Hero: massive Cabinet Grotesk title + draggable cat sticker + taped photo
  - Experience: full-width rows with hover-fill and rotating logo boxes
  - Skills: 12-col tetris bento with alternating accent/surface cards
  - Projects: oversized cards with colored backplate + diagonal marquee on hover
  - Education: dashed-border tickets w/ perforation notches, barcode, ADMIT ONE stamps, idle float
- Custom Tailwind tokens: `shadow-hard*`, `animate-marquee`, `animate-float-y`, `bg-grid`, `noise`
- Full a11y preserved (data-testids across interactive + section elements)

## Backlog / next ideas
- P1: Write a short `/writing` section (blog posts or "now") to lift SEO + inbound
- P1: Add a real resume PDF and set `REACT_APP_RESUME_LINK`
- P2: Add Players Health project case study (1 dedicated page) — current role has no visuals
- P2: Lighthouse pass — confirm LCP < 2.5s with hero image optimized to AVIF
- P2: Lazy-load Iconify offline bundle to remove runtime CDN dependency
- P3: Typewriter/scramble effect on hero subtitle for extra playfulness
- P3: Konami code easter egg (rotate palette to pink/blue)

## Tests
- 3/3 tests passing (`App.test.tsx`) — RTL
