import { Icon } from '@iconify/react'
import Section from '../../components/Section'
import SkillBlock from '../../components/SkillBlock'

const Skills = () => {

    return (
        <Section className='py-10 bg-skills-grad'>
            <div className='flex flex-col gap-5 '>
                <SkillBlock
                    title='Languages'
                    icon={<Icon icon="bx:code-alt" height="150" />}
                    skills={
                        [
                            { icon: "logos:java", name: "Java" },
                            { icon: "logos:python", name: "Python" },
                            { icon: "carbon:sql", name: "SQL" },
                            { icon: "logos:typescript-icon", name: "TypeScript", bg: "bg-[#007ACC]" },
                            { icon: "logos:javascript", name: "JavaScript", bg: "bg-[#F7DF1E]" },
                            { icon: "vscode-icons:file-type-html", name: "HTML" },
                            { icon: "vscode-icons:file-type-css", name: "CSS" },
                        ]
                    }
                />
                <SkillBlock
                    right
                    title='Frameworks &amp; Libraries'
                    icon={<Icon icon="fluent:library-20-filled" height="150" />}
                    skills={
                        [
                            { icon: "logos:react", name: "React" },
                            { icon: "logos:redux", name: "Redux" },
                            { icon: "logos:tailwindcss-icon", name: "Tail Wind" },
                            { icon: "logos:jest", name: "Jest" },
                            { icon: "vscode-icons:file-type-light-next", name: "Next js" },
                            { icon: "akar-icons:bootstrap-fill", name: "Boot Strap", color: "7611F7" },
                            { icon: "logos:spring-icon", name: "Spring Boot" },
                            { icon: "bxl:flask", name: "Flask" },
                            { icon: "file-icons:jinja", name: "Jinja2" },
                            { icon: "logos:nodejs", name: "Nodejs" },
                        ]
                    }
                />
                <SkillBlock
                    title='Tools'
                    icon={<Icon icon="entypo:tools" height="150" />}
                    skills={
                        [
                            { icon: "logos:figma", name: "Figma" },
                            { icon: "logos:git", name: "Git" },
                            { icon: "logos:aws", name: "Amazon Web Services" },
                            { icon: "logos:postman", name: "Post Man" },
                            { icon: "logos:socket-io", name: "Socket IO" },
                            { icon: "logos:ubuntu", name: "Ubuntu" },
                            { icon: "logos:gunicorn", name: "Gunicorn" },
                            { icon: "logos:auth0", name: "Auth0" },
                        ]
                    }
                />
                <SkillBlock
                    right
                    title='Databases'
                    icon={<Icon icon="fa-solid:database" height="150" />}
                    skills={
                        [
                            { icon: "logos:mysql", name: "MySQL" },
                            { icon: "vscode-icons:file-type-mongo", name: "MongoDB" },
                            { icon: "logos:firebase", name: "Firebase" },
                            { icon: "logos:postgresql", name: "PostgreSQL" },
                        ]
                    }
                />

            </div>
        </Section>
    )
}

export default Skills