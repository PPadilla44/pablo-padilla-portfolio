import { Icon } from '@iconify/react';
import React from 'react';
import Button from '../Button';
import ProjectImages from '../ProjectImages';

type ImageProps = {
    path: string,
    name: string,
    className?: string,
}

export interface ProjectBlockProps {
    reversed?: boolean;
    description: string;
    title: string;
    links: string[];
    techs: string[];
    mainImage: ImageProps,
    secondaryImage?: ImageProps
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ reversed = false, mainImage, secondaryImage, description, links, techs, title }) => {
    return (
        <div className={`${!reversed && `md:flex-row-reverse`} flex-col md:flex-row w-full h-full md:h-72 flex gap-6 justify-between items-center `}>

            <ProjectImages
                mainImage={mainImage}
                secondaryImage={secondaryImage}
                reversed={reversed}
            />

            <div className={`flex flex-col md:items-start md:text-left items-center text-center justify-center gap-3 max-w-md md:max-w-3xl`}>
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
                <ul className='flex gap-3 text-accent'>
                    {
                        techs.map((t, i) => (
                            <Icon key={`tech-${i}`} width={18} height={18} icon={t} />
                        ))
                    }
                </ul>
                <div className='flex gap-2'>
                    <a href={links[0]} target="_blank" rel="noreferrer">
                        <Button text='View Github Repo' className='text-black text-xl font-light' />
                    </a>
                    {
                        links.length > 1
                        &&
                        <a href={links[1]} target="_blank" rel="noreferrer">
                            <Button text='View Application' className='text-black text-xl font-light' />
                        </a>
                    }
                </div>
            </div>


        </div>
    )
}

export default ProjectBlock