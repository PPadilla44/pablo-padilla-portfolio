import React from 'react';

interface Props {
    className: string;
}

const Logo: React.FC<Props> = ({ className }) => {
    return (
        <div className={`bg-white shadow-around rounded-full flex items-center justify-center ${className}`}>
            <span className='pt-3 pl-1'>P</span>
        </div>
    )
}

export default Logo