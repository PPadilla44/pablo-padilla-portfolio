import React from 'react'
import ProjectBlock from '../../components/ProjectBlock'
import Section from '../../components/Section'
import { ProjectData } from '../../data/ProjectData'

const Projects = () => {
    return (
        <Section name='projects' className='flex py-20 bg-white'>
            <h1 className='text-center md:text-right text-black mb-20'>Projects</h1>

            <div className='flex gap-28 flex-col'>
                {
                    ProjectData.map((p, i) => (
                        <ProjectBlock key={`proect-${i}`} {...p} />
                    ))
                }
            </div>
        </Section>
    )
}

export default Projects