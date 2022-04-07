import React from 'react'

interface Props {
    className?: string;
    contained?: boolean;
}

const Section: React.FC<Props> = ({ children, className, contained=true }) => {
    return (
        <section className={`${className} flex items-center justify-center `}>
            <div className={`${contained && `max-w-7xl`} px-3 w-full `}>
                {children}
            </div>
        </section>
    )
}

export default Section