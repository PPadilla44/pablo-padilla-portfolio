# Pablo Padilla — Portfolio

Full-stack software engineer based in the San Francisco Bay Area.

**Live**: https://pablopadilla.dev
**LinkedIn**: https://www.linkedin.com/in/pablopadilla44/
**GitHub**: https://github.com/PPadilla44

---

## Stack

| Layer        | Tech                                            |
| ------------ | ----------------------------------------------- |
| Framework    | React 18 + TypeScript (Create React App)        |
| Styling      | Tailwind CSS 3                                  |
| Animation    | Framer Motion                                   |
| Forms / mail | EmailJS (`@emailjs/browser`)                    |
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

Create a `.env` file in the project root:

```
REACT_APP_RESUME_LINK=https://...
REACT_APP_EMAIL_SERVICE_ID=service_xxx
REACT_APP_EMAIL_TEMPLATE_ID=template_xxx
REACT_APP_EMAIL_PUBLIC_KEY=xxx
```

## Structure

```
src/
├── App.tsx                    # root layout, renders all sections
├── components/                # reusable leaf components (Button, Nav, ToolTip, ...)
├── views/                     # page sections (Hero, Experience, Skills, Projects, Education, Contact)
├── data/                      # static content (projects, skills, experience)
└── index.css                  # Tailwind + base typography
```
