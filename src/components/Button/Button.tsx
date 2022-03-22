import React from 'react'

interface Props {
    text: string;
    className:  string;
}

const Button: React.FC<Props> = ({ text, className,  }) => {
    return (
        <button className={` px-3 py-2 rounded-md h-fit w-fit ${className}`}>
            <p>{ text }</p>
        </button>
    )
}

export default Button