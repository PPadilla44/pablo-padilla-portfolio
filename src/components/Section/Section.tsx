import React from 'react'
import { Element } from 'react-scroll';

interface Props {
    className?: string;
    contained?: boolean;
    name: string;
}

const Section: React.FC<Props> = ({ children, className, contained = true, name }) => {
    return (
        <Element name={name}>
            <section className={`${className} overflow-hidden flex items-center justify-center `}>
                <div className={`${contained && `max-w-7xl`} px-3 w-full `}>
                    {children}
                </div>
            </section>
        </Element>
    )
}

export default Section