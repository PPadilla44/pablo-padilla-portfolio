import { SkillBlockProps } from "../components/SkillBlock/SkillBlock"


export const SkillsData: SkillBlockProps[] = [
    {
        title: 'Frameworks & Libraries',
        icon: "fluent:library-20-filled",
        skills: [
            { icon: "logos:react", name: "React" },
            { icon: "logos:redux", name: "Redux" },
            { icon: "logos:tailwindcss-icon", name: "Tail Wind" },
            { icon: "logos:jest", name: "Jest" },
            { icon: "vscode-icons:file-type-light-next", name: "Next js" },
            { icon: "logos:spring-icon", name: "Spring Boot" },
            { icon: "bxl:flask", name: "Flask" },
            { icon: "logos:nodejs", name: "Nodejs" },
        ]
    },
    {
        title: 'Languages',
        icon: "fa6-solid:code",
        skills: [
            { icon: "logos:java", name: "Java" },
            { icon: "logos:python", name: "Python" },
            { icon: "carbon:sql", name: "SQL" },
            { icon: "logos:typescript-icon", name: "TypeScript", bg: "bg-[#007ACC]" },
            { icon: "logos:javascript", name: "JavaScript", bg: "bg-[#F7DF1E]" },
            { icon: "vscode-icons:file-type-html", name: "HTML" },
            { icon: "vscode-icons:file-type-css", name: "CSS" }
        ]

    },
    {
        title: 'Databases',
        icon: "fa-solid:database",
        skills: [
            { icon: "logos:mysql-icon", name: "MySQL" },
            { icon: "vscode-icons:file-type-sqlite", name: "Sqlite" },
            { icon: "vscode-icons:file-type-mongo", name: "MongoDB" },
            { icon: "logos:firebase", name: "Firebase" },
            { icon: "logos:postgresql", name: "PostgreSQL" },
        ],
        smaller: true,
    },
    {
        title: 'Tools',
        icon: "clarity:ruler-pencil-solid",
        skills: [
            { icon: "logos:figma", name: "Figma" },
            { icon: "logos:git-icon", name: "Git" },
            { icon: "logos:aws", name: "Amazon Web Services" },
            { icon: "logos:postman-icon", name: "Post Man", bg: "bg-[#FF6C37]" },
            { icon: "logos:socket-io", name: "Socket IO" },
            { icon: "logos:ubuntu", name: "Ubuntu", bg: "bg-[#DD4814]" },
            { icon: "logos:gunicorn", name: "Gunicorn" },
            { icon: "logos:auth0-icon", name: "Auth0" },
        ]
    },
]
