import { Icon } from '@iconify/react';
import React from 'react'

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
        <div className={`shadow-around w-2/3 bg-white h-64 p-6 rounded-2xl flex justify-between items-center text-center ${right && `flex-row-reverse self-end`}`}>
            <div className='w-64 flex items-center flex-col text-burg justify-between h-full '>
                <h2 className='text-4xl font-semibold'>{title}</h2>
                <Icon icon={icon} height="150" />
            </div>
            <ul className='flex gap-5 w-96 h-full flex-wrap justify-center items-center '>
                {
                    skills.map((s, i) => {
                        return (
                            <div key={`Skil-${i}-${skills.length}`} className={`${s.bg ? s.bg : "bg-white"} rounded-full shadow-around flex items-center justify-center w-14 h-14 overflow-hidden`}>
                                <Icon icon={s.icon} height="45" color={s.color} />
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SkillBlock