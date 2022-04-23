import { motion, Variants } from 'framer-motion'
import Section from '../../components/Section'
import SkillBlock from '../../components/SkillBlock'
import { SkillsData } from '../../data/SkillsData'

const Skills = () => {

    const skillsVariants: Variants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
transition: {
                duration: 1
            }
        }
    };

    return (
        <Section name='skills' className='pb-20 pt-10  bg-accent'>
            <h1 className='text-center text-white'>Skills</h1>

            <motion.div
                variants={skillsVariants}
                initial={"offscreen"}
                whileInView="onscreen"
                viewport={{ once: true }}
                className='flex w-full items-center justify-around xl:justify-between  flex-wrap gap-2'>
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
            </motion.div>
        </Section>
    )
}

export default Skills