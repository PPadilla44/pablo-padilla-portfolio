import React from 'react';

interface Props {
    textClass: string;
    className: string;
}

const Logo:  React.FC<Props> = ({ textClass, className }) => {
    return (
        <div className={`bg-white shadow-around rounded-full flex items-center justify-center ${className}`}>
            <span className={textClass}>P</span>
        </div>
    )
}

export default Logo