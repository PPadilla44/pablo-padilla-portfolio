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
    smaller?: boolean;
}

const SkillBlock: React.FC<SkillBlockProps> = ({ title, icon, skills, smaller }) => {

    return (
        <div className={`max-w-xs w-full xl:w-fit  flex items-center gap-4 justify-center flex-col text-center min-h-[232px] h-full `}>

            <h2 className='text-white z-20 justify-self-start whitespace-nowrap'>{title}</h2>

            <div className={`${smaller ? "w-64" : " w-72"}  flex flex-col relative items-center min-h-[132px] h-full justify-center`}>

                <div className='text-blue-300 z-10 absolute opacity-20  top-1/2 -translate-y-1/2'>
                    <Icon icon={icon} height="150" />
                </div>

                <ul className='flex gap-4 h-full flex-wrap justify-center items-center '>
                    {
                        skills.map((s, i) => {
                            return (
                                <ToolTip
                                    tooltipText={s.name}
                                    key={`Skil-${i}-${skills.length}`}
                                    className={`${s.bg ? s.bg : "bg-white"} rounded-full shadow-md flex items-center justify-center w-14 h-14 
                                overflow-hidden hover:shadow-xl transition-all hover:animate-bounce z-20`}>
                                    <Icon icon={s.icon} height="40" color={s.color} />
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