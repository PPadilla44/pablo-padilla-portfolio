import Section from '../../components/Section'
import SkillBlock from '../../components/SkillBlock'
import { SkillsData } from '../../data/SkillsData'

const Skills = () => {

    return (
        <Section className='py-20 bg-skills-grad'>
            <div className='flex flex-col gap-5 '>

                {
                    SkillsData.map((data, i) => (
                        <SkillBlock
                        key={`skilldata-${data.title}-${i}`}
                        icon={data.icon}
                        skills={data.skills}
                        title={data.title}
                        right={data.right}
                        />
                    ))
                }

            </div>
        </Section>
    )
}

export default Skills