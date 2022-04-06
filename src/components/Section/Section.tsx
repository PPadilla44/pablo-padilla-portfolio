import React from 'react'

interface Props {
    className?: string;
}

const Section: React.FC<Props> = ({ children, className }) => {
    return (
        <section className={`${className} flex items-center justify-center`}>
            <div className="px-3 max-w-7xl w-full md:max-w-7xl">
                {children}
            </div>
        </section>
    )
}

export default Section