import React from 'react'

export interface ExperienceBlockProps {
    title: string;
    descriptions: string[];
    location: string;
    duration: string;
    image: string;
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ title, descriptions, location, duration, image }) => {
    return (
        <div className='w-full h-fit flex flex-col-reverse md:flex-row justify-between items-center gap-2'>


            <div className='bg-blue-300 border-2 border-accent shadow-md w-52 md:w-64 h-52 md:h-64 p-2 rounded-lg flex items-center justify-center'>
                <img
                    src={image}
                    alt={title} />
            </div>

            <div className='w-full max-w-md flex flex-col gap-2 items-center md:items-start text-center md:text-left '>
                <h2>{title}</h2>
                {
                    descriptions.map((d, i) => (
                        <p key={`edesk-${i}`}>{d}</p>
                    ))
                }
                <div className='flex gap-5'>
                    <p>{location}</p>
                    <p>{duration}</p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceBlock