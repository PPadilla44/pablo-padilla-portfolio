import React from 'react'

interface Props {
    text: string;
    className?:  string;
    callBack?: () => void;
}

const Button: React.FC<Props> = ({ text, className, callBack  }) => {
    return (
        <button onClick={callBack} className={`px-2 pb-1 pt-2 md:px-3 md:py-2 rounded-md h-fit flex items-center justify-center font-light leading-5 ${className}`}>
            <p>{ text }</p>
        </button>
    )
}

export default Button