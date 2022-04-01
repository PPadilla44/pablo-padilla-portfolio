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
    right?: boolean;
    title: string;
    skills: SkillDataInterace[];
    icon: string;
}

const SkillBlock: React.FC<SkillBlockProps> = ({ title, icon, skills, right = false }) => {

    return (
        <div className={`shadow-around w-full md:w-2/3 bg-white lg:h-64 p-6 rounded-2xl flex justify-between gap-3 items-center text-center flex-col lg:flex-row ${right && `flex-row-reverse self-end`}`}>
            <div className='w-64 flex items-center flex-col text-burg justify-between h-full '>
                <h2 className='text-4xl font-semibold'>{title}</h2>
                <Icon icon={icon} height="150" />
            </div>
            <ul className='flex gap-5 w-full lg:w-96 h-full flex-wrap justify-center items-center'>
                {
                    skills.map((s, i) => {
                        return (
                            <ToolTip
                                tooltipText={s.name}
                                key={`Skil-${i}-${skills.length}`}
                                className={`${s.bg ? s.bg : "bg-white"} rounded-full shadow-around flex items-center justify-center w-14 h-14 
                                overflow-hidden hover:shadow-black hover:-translate-y-1 hover:drop-shadow-xl transition-all`}>
                                <Icon icon={s.icon} height="45" color={s.color} />
                            </ToolTip>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SkillBlock