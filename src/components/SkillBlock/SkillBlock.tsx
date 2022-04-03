import { Icon } from '@iconify/react';
import React from 'react'
import ToolTip from '../ToolTip';

export interface SkillDataInterace {
    icon: string,
    name: string,
    bg?: string,
    color?: string
}

export interface SkillBlockProps {
    title: string;
    skills: SkillDataInterace[];
    icon: string;
}

const SkillBlock: React.FC<SkillBlockProps> = ({ title, icon, skills}) => {

    return (
        <div className={`relative w-full lg:w-fit p-6 flex items-center justify-center text-center min-h-[200px] h-full `}>
            <div className='text-burg z-10 absolute opacity-20'>
                <Icon icon={icon} height="200" />
            </div>
            <div className='gap-3 flex flex-col sm:w-96 w-full'>

                <span className='text-4xl font-extralight text-black z-20 tracking-wider '>{title}</span>

                <ul className='flex gap-5 h-full flex-wrap justify-center items-center'>
                    {
                        skills.map((s, i) => {
                            return (
                                <ToolTip
                                    tooltipText={s.name}
                                    key={`Skil-${i}-${skills.length}`}
                                    className={`${s.bg ? s.bg : "bg-white"} rounded-full shadow-md flex items-center justify-center w-14 h-14 
                                overflow-hidden hover:shadow-xl transition-all hover:animate-bounce z-20`}>
                                    <Icon icon={s.icon} height="45" color={s.color} />
                                </ToolTip>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SkillBlock