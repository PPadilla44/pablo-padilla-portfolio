# Pablo Padilla — Portfolio

Full-stack software engineer based in the San Francisco Bay Area.

**Live**: https://pablopadilla.net
**LinkedIn**: https://www.linkedin.com/in/pablopadilla44/
**GitHub**: https://github.com/PPadilla44

---

## Design system

A neo-brutalist / playful aesthetic (v2026 rehaul):

| Token       | Dark                  | Light                 |
| ----------- | --------------------- | --------------------- |
| Canvas      | `#0F0F0F`             | `#F4F4F0`             |
| Surface     | `#1C1C1C`             | `#FFFFFF`             |
| Primary     | `#FF4D00` (vivid orange) | `#FF4D00`         |
| Text        | `#F4F4F0`             | `#0A0A0A`             |
| Accent pop  | `#CCFF00` (acid yellow) | `#0000FF` (electric blue) |
| Secondary   | `#FF6BCC` (hot pink)  | `#FF6BCC`             |

- **Display**: Cabinet Grotesk 800/900 (Fontshare) — uppercase, tight tracking
- **Body / mono**: JetBrains Mono 400/500/700 (Google Fonts)
- **Shadows**: hard 6 / 10 / 3 px offset — no soft SaaS blurs
- **Motion**: Framer Motion springs + on-scroll reveals + signature *draggable cat*
- **Theme**: toggle top-right, defaults to dark, persisted in `localStorage`

## Stack

| Layer        | Tech                                            |
| ------------ | ----------------------------------------------- |
| Framework    | React 18 + TypeScript (Create React App)        |
| Styling      | Tailwind CSS 3 (CSS-variable themed, `darkMode: 'class'`) |
| Animation    | Framer Motion                                   |
| Icons        | Iconify                                         |
| Smooth scroll| react-scroll                                    |
| Testing      | Jest + React Testing Library                    |
| SEO          | Open Graph / Twitter Cards / JSON-LD + react-snap |

## Local development

```bash
yarn install
yarn start      # dev server on http://localhost:3000
yarn test       # run the test suite
yarn build      # production build (runs react-snap pre-render afterwards)
```

Create a `.env` in the project root:

```
REACT_APP_RESUME_LINK=https://...
```

## Structure

```
src/
├── App.tsx                     # root layout, renders all sections
├── index.css                   # Tailwind + CSS variables (light/dark)
├── lib/motion.ts               # shared fadeIn variants
├── hooks/useTheme.ts           # theme toggle (persisted)
├── components/                 # reusable leaf components
│   ├── Nav/                    # floating bottom pill nav
│   ├── ThemeToggle/            # top-right sun/moon toggle
│   ├── Hero*/                  # hero + social icons
│   ├── Section/                # wrapper with smooth-scroll anchor
│   ├── Button/                 # brutalist hard-shadow button
│   ├── ProjectBlock/           # oversized project card w/ marquee hover
│   ├── ExperienceBlock/        # full-width row w/ hover-fill
│   ├── SkillBlock/             # tetris-grid skill card
│   └── EducationBlock/         # receipt/ticket card w/ barcode
├── views/                      # page sections (Hero, Experience, Skills, Projects, Education)
└── data/                       # static content (projects, skills, experience, nav)
```

## Signature moments

- **Draggable cat** in the hero (grab and throw — physics via Framer Motion `drag`)
- **Floating bottom pill nav** — glass-morphic, animates in after hero load
- **Experience rows fill on hover** with the accent pop color
- **Skills bento** alternates neutral and accent cards; hover "presses" each card down
- **Project cards** reveal a diagonal marquee of the project name on hover
- **Education tickets** with dashed borders, perforation notches, ADMIT ONE stamps, and ASCII barcodes
