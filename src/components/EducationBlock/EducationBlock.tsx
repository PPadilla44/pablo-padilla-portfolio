import React from 'react'

export interface EducationBlockProps {
    title: string;
    descriptions: string[];
    location: string;
    duration: string;
    image: string;
}

const EducationBlock: React.FC<EducationBlockProps> = ({ title, descriptions, location, duration, image }) => {
    return (
        <div className='w-full h-full flex flex-col-reverse md:flex-row justify-between items-center gap-6'>

            <div className='max-w-md flex flex-col gap-2 items-center md:items-start text-center md:text-left'>
                <h2>{title}</h2>
                {
                    descriptions.map((d, i) => (
                        <p key={`edesk-${i}`}>{d}</p>
                    ))
                }
                <div className='flex gap-5'>
                    <p className='text-lg'>{location}</p>
                    <p className='text-lg'>{duration}</p>
                </div>
            </div>


            <div className='bg-blue-200 w-52 md:w-64 h-52 md:h-64 p-2 rounded-lg border-2 border-accent shadow-md flex items-center justify-center'>
                <img
                    src={image}
                    alt={title}
                />
            </div>

        </div>
    )
}

export default EducationBlock