import Section from '../../components/Section'
import SkillBlock from '../../components/SkillBlock'
import { SkillsData } from '../../data/SkillsData'

const Skills = () => {

    return (
        <Section className='pb-20 pt-10  bg-accent'>
            <h1 className='text-center text-white'>Skills</h1>

            <div className='flex w-full items-center justify-around xl:justify-between  flex-wrap gap-2'>
                {
                    SkillsData.map((data, i) => (
                        <SkillBlock
                            key={`skilldata-${data.title}-${i}`}
                            icon={data.icon}
                            skills={data.skills}
                            title={data.title}
                            smaller={data.smaller}
                        />
                    ))
                }
            </div>
        </Section>
    )
}

export default Skills