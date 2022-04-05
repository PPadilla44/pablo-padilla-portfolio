import React from 'react';
import Button from '../Button';

export interface ProjectBlockProps {
    reversed?: boolean;
    imgPaths: string[];
    description: string;
    title: string;
    links: string[];
    techs: string[];
    imagePos?: string;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ imagePos="object-center", reversed = false, imgPaths, description, links, techs, title }) => {
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
                {
                    imgPaths.length > 1 ?
                        <>
                            <img src={imgPaths[1]} alt="" className={`${imagePos} object-cover  h-full rounded-xl shadow-md`} />
                            <img src={imgPaths[0]} alt="" className={`max-h-5/6 w-28 rounded-xl absolute -right-3 bottom-0 drop-shadow-md`} />
                        </>
                        :
                        <img src={imgPaths[0]} alt="" className={`object-cover h-full rounded-xl shadow-md`} />

                }
            </div>

        </div>
    )
}

export default ProjectBlock