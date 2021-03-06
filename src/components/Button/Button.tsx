import { motion } from 'framer-motion';
import React from 'react'

interface Props {
    text: string;
    className?: string;
    callBack?: () => void;
}

const Button: React.FC<Props> = ({ text, className, callBack }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={callBack} className={`text-black bg-blue-300 hover:bg-blue-400/80 active:bg-blue-400 px-2 pb-1 pt-2 md:px-3 md:py-2 rounded-md h-fit flex items-center justify-center shadow-md  ${className}`}>
            <span>{text}</span>
        </motion.button>
    )
}

export default Button