import React from 'react';
import Button from '../Button';

export interface ProjectBlockProps {
    reversed?: boolean;
    imgPaths: string[];
    description: string;
    title: string;
    links: string[];
    techs: string[];
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ reversed = false, imgPaths, description, links, techs, title }) => {
    return (
        <div className={`${reversed && `flex-row-reverse`}  w-full h-72 p-4 flex justify-between items-center`}>
            <div className={`${reversed && `items-end text-right`}  flex flex-col items-start justify-center gap-3 max-w-3xl w-full `}>
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
                    <Button text='View Github Repo' className='bg-dom text-white font-light' />
                    <Button text='View In Store' className='bg-dom text-white font-light' />
                </div>
            </div>

            <div className='w-80 h-full  flex items-center justify-center relative'>
                {
                    imgPaths.length > 1 ?
                        <>
                            <img src={imgPaths[0]} alt="" className='object-cover h-full rounded-xl shadow-md ' />
                            <img src={imgPaths[1]} alt="" className='h-5/6 rounded-xl absolute -right-3 bottom-0 shadow-md' />
                        </>
                        :
                        <img src={imgPaths[0]} alt="" className='object-contain h-full rounded-xl shadow-md ' />

                }
            </div>

        </div>
    )
}

export default ProjectBlock