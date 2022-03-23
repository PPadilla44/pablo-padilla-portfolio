import React from 'react'
import Button from '../Button'

const Hero = () => {
    return (
        <section className="w-full h-screen bg-hero bg-no-repeat bg-[length:130%] lg:bg-[length:140%] bg-hero-pos flex items-center justify-center flex-col">

            <div className="max-w-7xl w-full">

                <div className="max-w-2xl w-full text-30-light flex flex-col gap-5 rounded-2xl bg-darkish backdrop-blur-md shadow-around p-5">

                    <div className="gap-1 flex flex-col">
                        <h1 className="text-8xl font-bold" >Pablo Padilla</h1>
                        <h3 className="text-4xl font-semibold">Full-Stack Engineer</h3>
                    </div>

                    <div className="flex gap-5">
                        <Button className="bg-btn text-xl text-30-light" text="Projects" />
                        <Button className="bg-btn text-xl text-30-light" text="Resume" />
                        <Button className='bg-10-light text-xl text-30-light' text='Contact Me' />
                    </div>

                    <p className="text-3xl">
                        I am a committed and enthusiastic full-stack engineer proficient in various programming languages.
                        I am experienced in all levels of web application development, including deployment and maintenance on cloud computing platforms.
                    </p>

                </div>

            </div>

        </section>
    )
}

export default Hero