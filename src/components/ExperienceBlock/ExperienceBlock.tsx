import React from 'react'

export interface ExperienceBlockProps {
    title: string;
    subTitle: string;
    description: string;
    location: string;
    duration: string;
    image?: string;
    textAsImage?: string[];
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ title, subTitle, description, location, duration, image, textAsImage }) => {
    return (
        <div className='w-full h-full flex flex-col md:flex-row justify-between items-center gap-6'>


            <div className='bg-blue-200 border-2 border-accent shadow-md w-52 md:w-64 h-52 md:h-64 p-2 rounded-lg flex flex-col items-center justify-center'>

                {
                    textAsImage
                        ?
                        <>
                            <img
                                src={image}
                                alt={title}
                                className="w-40 h-40 md:w-52 md:h-52"
                            />
                            <span className='text-4xl font-bold text-black'>{textAsImage[0]}</span>
                        </>
                        :
                        <img
                            src={image}
                            alt={title}
                        />

                }

            </div>

            <div className='w-full h-full max-w-md flex flex-col gap-2 items-center md:items-start text-center md:text-left '>
                <h2>{title}</h2>
                <p className='text-2xl'>{subTitle}</p>
                <p>{description}</p>
                <div className='flex gap-5'>
                    <p className='text-lg'>{location}</p>
                    <p className='text-lg'>{duration}</p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceBlock