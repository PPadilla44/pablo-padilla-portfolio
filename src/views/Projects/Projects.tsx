import React from 'react'
import ProjectBlock from '../../components/ProjectBlock'
import Section from '../../components/Section'
import { ProjectData } from '../../data/ProjectData'

const Projects = () => {
    return (
        <Section className='gap-44 flex'>
            <div className='flex gap-10 flex-col'>
                {
                    ProjectData.map((p, i) => (
                        <ProjectBlock  key={`proect-${i}`} {...p} />
                    ))
                }

            </div>
        </Section>
    )
}

export default Projects