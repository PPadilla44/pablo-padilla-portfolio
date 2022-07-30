import { SkillBlockProps } from "../components/SkillBlock/SkillBlock";

export const SkillsData: SkillBlockProps[] = [
  {
    title: "1. MERN",
    icon: "fluent:library-20-filled",
    skills: [
      { icon: "logos:react", name: "React" },
      { icon: "logos:express", name: "Express" },
      { icon: "logos:tailwindcss-icon", name: "Tail Wind" },
      { icon: "logos:typescript-icon", name: "TypeScript", bg: "bg-[#007ACC]" },
      { icon: "vscode-icons:file-type-mongo", name: "MongoDB" },
      { icon: "logos:jest", name: "Jest" },
    ],
    smaller: true,
  },
  {
    title: "2. Python / Flask",
    icon: "fa6-solid:code",
    skills: [
      { icon: "logos:python", name: "Python" },
      { icon: "bxl:flask", name: "Flask" },
      { icon: "logos:mysql-icon", name: "MySQL" },
      { icon: "file-icons:jinja", name: "Jinja" },
      { icon: "logos:javascript", name: "JavaScript", bg: "bg-[#F7DF1E]" },
      { icon: "logos:bootstrap", name: "Bootstrap" },
    ],
    smaller: true,
  },
  {
    title: "3. React Native",
    icon: "fa-solid:database",
    skills: [
      { icon: "logos:react", name: "React Native" },
      { icon: "logos:expo-icon", name: "Expo" },
      { icon: "logos:redux", name: "Redux" },
      { icon: "logos:material-ui", name: "Material UI" },
      { icon: "logos:apple-app-store", name: "Apple Store" },
      { icon: "logos:firebase", name: "Firebase" },
    ],
    smaller: true,
  },
  {
    title: "4. Next js",
    icon: "fa-solid:network-wired",
    skills: [
      { icon: "vscode-icons:file-type-light-next", name: "Next js" },
      { icon: "logos:postgresql", name: "PostgreSQL" },
      { icon: "logos:graphql", name: "GraphQL" },
      { icon: "logos:prisma", name: "Prisma" },
      { icon: "logos:apollostack", name: "Apollo" },
    ],
    smaller: true,
  },
  {
    title: "5. Java / Spring",
    icon: "clarity:ruler-pencil-solid",
    skills: [
      { icon: "logos:java", name: "Java" },
      { icon: "logos:spring-icon", name: "Spring Boot" },
      { icon: "vscode-icons:file-type-html", name: "HTML" },
      { icon: "vscode-icons:file-type-css", name: "CSS" },
    ],
    smaller: true,
  },
  {
    title: "Other Technologies",
    icon: "fa-solid:abacus",
    skills: [
      { icon: "logos:nodejs", name: "Nodejs" },
      { icon: "logos:figma", name: "Figma" },
      { icon: "logos:git-icon", name: "Git" },
      { icon: "logos:aws", name: "AWS" },
      { icon: "logos:postman-icon", name: "Post Man", bg: "bg-[#FF6C37]" },
      { icon: "logos:socket-io", name: "Socket IO" },
      { icon: "logos:ubuntu", name: "Ubuntu", bg: "bg-[#DD4814]" },
    ],
  },
];
