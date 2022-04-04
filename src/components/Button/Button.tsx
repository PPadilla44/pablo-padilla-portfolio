import React from 'react'

interface Props {
    text: string;
    className?:  string;
}

const Button: React.FC<Props> = ({ text, className,  }) => {
    return (
        <button className={`px-2 py-1 md:px-3 md:py-2 rounded-md h-fit w-fit flex items-center justify-center font-light ${className}`}>
            <p>{ text }</p>
        </button>
    )
}

export default Button