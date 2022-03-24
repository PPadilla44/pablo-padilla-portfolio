import React from 'react'

const Section: React.FC = ({ children }) => {
    return (
        <section className="flex items-center justify-center">
            <div className="max-w-7xl w-full ">

                <div className="shadow-around w-80 h-80 ">

                    <h1 className="text-8xl font-bold">MORE TEXT HERE</h1>
                </div>
                {children}

            </div>
        </section>
    )
}

export default Section