import React from 'react'

const Section: React.FC = ({ children }) => {
    return (
        <section className="flex items-center justify-center">
            <div className="max-w-7xl w-full">
                {children}
            </div>
        </section>
    )
}

export default Section