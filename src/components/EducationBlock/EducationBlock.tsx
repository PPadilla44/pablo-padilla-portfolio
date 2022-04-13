import { motion, Variants } from 'framer-motion';
import React from 'react'

export interface EducationBlockProps {
    title: string;
    descriptions: string[];
    location: string;
    duration: string;
    image: string;
}

const EducationBlock: React.FC<EducationBlockProps> = ({ title, descriptions, location, duration, image }) => {

    const educationVariants: Variants = {
        offscreenText: {
            x: "-100%"
        },
        offscreenImg: {
            x: "100%"
        },
        onscreen: {
            x: "0%",
            transition: {
                type: "spring",
                bounce: 0.2,
            }
        }
    };

    return (
        <div className='w-full h-full flex flex-col md:flex-row-reverse justify-between items-center gap-6'>

            <motion.div
                variants={educationVariants}
                initial={"offscreenImg"}
                whileInView="onscreen"
                viewport={{ once: true }}
                className='bg-blue-200 w-52 md:w-64 h-52 md:h-64 p-2 rounded-lg border-2 border-accent shadow-md flex items-center justify-center'>
                <img
                    src={image}
                    alt={title}
                />
            </motion.div>


            <motion.div
                variants={educationVariants}
                initial={"offscreenText"}
                whileInView="onscreen"
                viewport={{ once: true }}
                className='max-w-md flex flex-col gap-2 items-center md:items-start text-center md:text-left'>
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
            </motion.div>


        </div>
    )
}

export default EducationBlock