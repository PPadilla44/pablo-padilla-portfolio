import React from 'react'
import Section from '../../components/Section'
import SkillBlock from '../../components/SkillBlock'

const Skills = () => {

    return (
        <Section>
            <div className='flex flex-col bg-red-200'>
                <SkillBlock />
                <SkillBlock right />

            </div>
        </Section>
    )
}

export default Skills