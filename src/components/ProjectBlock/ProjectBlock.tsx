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
        <div className={`${reversed && `flex-row-reverse`}  w-full h-72 p-4 flex justify-between items-center`}>
            <div className={`${reversed && `items-end text-right`}  flex flex-col items-start justify-center gap-3 max-w-3xl`}>
                <h3 className='font-bold text-6xl'>{title}</h3>
                <p className='text-2xl'>
                    {description}
                </p>
                <ul className='flex gap-2 font-light'>
                    {
                        techs.map((t, i) => <li key={`tech-${t}-${i}`}>{t}</li>)
                    }
                </ul>
                <div className='flex gap-2'>
                    <a href={links[0]} target="_blank" rel="noreferrer">
                        <Button text='View Github Repo' className='bg-dom text-white font-light' />
                    </a>
                    {
                        links.length > 1
                        &&
                        <a href={links[1]} target="_blank" rel="noreferrer">
                            <Button text='View Application' className='bg-dom text-white font-light' />
                        </a>
                    }
                </div>
            </div>

            <div className='w-80 min-w-[320px] h-full flex items-center justify-center relative'>
                <img src={mainImage.path} alt={mainImage.name} className={`${mainImage.className} object-cover h-full rounded-xl shadow-md`} />
                { secondaryImage && <img src={secondaryImage.path} alt={mainImage.name} className={`${secondaryImage.className} max-h-5/6 w-28 rounded-xl absolute -right-3 bottom-0 drop-shadow-md`} /> }
            </div>

        </div>
    )
}

export default ProjectBlock