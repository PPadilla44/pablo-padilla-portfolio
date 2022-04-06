import Section from '../../components/Section'
import SkillBlock from '../../components/SkillBlock'
import { SkillsData } from '../../data/SkillsData'

const Skills = () => {

    return (
        <Section className='pb-20 pt-10  bg-burg'>
        {/* // <Section className='pb-20 pt-10 bg-neutral-800'> */}
            <h2 className='text-7xl text-center font-semibold text-white'>Skills</h2>

            {/* <div className='flex gap-6 w-full items-center justify-between flex-wrap'> */}
            <div className='flex gap-6 w-full items-center justify-between  flex-wrap'>
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