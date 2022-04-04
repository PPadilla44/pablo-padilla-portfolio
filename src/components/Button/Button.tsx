import React from 'react'

interface Props {
    text: string;
    className?:  string;
    callBack?: () => void;
}

const Button: React.FC<Props> = ({ text, className, callBack  }) => {
    return (
        <button onClick={callBack} className={`px-2 py-1 md:px-3 md:py-2 rounded-md h-fit w-fit flex items-center justify-center font-light ${className}`}>
            <p>{ text }</p>
        </button>
    )
}

export default Button