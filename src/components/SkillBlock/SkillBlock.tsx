import React from 'react'

interface Props {
    right?: boolean; 
}

const SkillBlock: React.FC<Props> = ({ right=false }) => {

    return (
        <div className={` ${right && "self-end" }  shadow-around w-1/2 bg-white h-64 p-6`}>
            SKILALSDs
        </div>
    )
}

export default SkillBlock