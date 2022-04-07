import { Icon } from '@iconify/react';
import React from 'react';
import Button from '../Button';

type Image = {
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
    mainImage: Image,
    secondaryImage?: Image
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ reversed = false, mainImage, secondaryImage, description, links, techs, title }) => {
    return (
        <div className={`${!reversed && `md:flex-row-reverse`} flex-col md:flex-row w-full h-full md:h-72 flex gap-6 justify-between items-center `}>
            <div className={`flex flex-col md:items-start md:text-left items-center text-center justify-center gap-3 max-w-3xl`}>
                <h2>{title}</h2>
                <div className='w-80 min-w-[320px] h-52 md:h-72 items-center justify-center flex md:hidden md:justify-start relative'>
                    <img src={mainImage.path} alt={mainImage.name} className={`${mainImage.className} object-cover h-full rounded-lg shadow-md border border-accent`} />
                    {secondaryImage && <img src={secondaryImage.path} alt={secondaryImage.name} className={`${secondaryImage.className} max-h-3/6 w-20 rounded-lg absolute ${reversed ? "-right-3" : "-left-3"} bottom-0 border border-accent stroke-accent shadow-md`} />}
                </div>
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
                        <Button text='View Github Repo' className='text-black font-light' />
                    </a>
                    {
                        links.length > 1
                        &&
                        <a href={links[1]} target="_blank" rel="noreferrer">
                            <Button text='View Application' className='text-black font-light' />
                        </a>
                    }
                </div>
            </div>

            <div className='w-80 min-w-[320px] h-52 md:h-72 items-center justify-center hidden md:flex md:justify-start relative '>
                <img src={mainImage.path} alt={mainImage.name} className={`${mainImage.className} object-cover h-full rounded-lg shadow-md border border-accent`} />
                {secondaryImage && <img src={secondaryImage.path} alt={secondaryImage.name} className={`${secondaryImage.className} max-h-5/6 w-28 rounded-lg absolute ${reversed ? "-right-3" : "-left-3"} bottom-0 border border-accent stroke-accent shadow-md`} />}
            </div>

        </div>
    )
}

export default ProjectBlock