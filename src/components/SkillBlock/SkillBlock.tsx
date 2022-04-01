import { Icon } from '@iconify/react';
import React from 'react'

interface Props {
    right?: boolean;
    title: string;
    skills: {
        icon: string,
        name: string,
        bg?: string,
        color?: string 
    }[];
    icon: React.ReactFragment;
}

const SkillBlock: React.FC<Props> = ({ title, icon, skills, right = false }) => {

    return (
        <div className={`shadow-around w-2/3 bg-white h-64 p-6 rounded-2xl flex justify-between items-center text-center ${right && `flex-row-reverse self-end`}`}>
            <div className='w-64 flex items-center flex-col text-burg justify-between h-full'>
                <h2 className='text-4xl font-semibold'>{title}</h2>
                {icon}
            </div>
            <ul className='flex gap-5 w-80 h-full flex-wrap justify-center items-center'>
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