import Section from '../../components/Section'
import SkillBlock from '../../components/SkillBlock'
import { SkillsData } from '../../data/SkillsData'

const Skills = () => {

    return (
        <Section className='py-20 bg-secondary'>
            <div className='flex gap-6 w-full items-center justify-center flex-wrap'>
                {
                    SkillsData.map((data, i) => (
                        <SkillBlock
                            key={`skilldata-${data.title}-${i}`}
                            icon={data.icon}
                            skills={data.skills}
                            title={data.title}
                        />
                    ))
                }
            </div>
        </Section>
    )
}

export default Skills