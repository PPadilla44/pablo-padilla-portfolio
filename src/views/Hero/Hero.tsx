import Button from '../../components/Button'

const Hero = () => {

    return (
        <section className="w-full h-screen bg-hero bg-no-repeat bg-[length:340%] bg-bottom sm:bg-[length:180%]  md:bg-[length:150%] md:bg-hero-pos flex items-center justify-end md:justify-center flex-col">

            <div className="p-3 pb-32 md:p-0 md:max-w-7xl w-full">

                <div className="md:max-w-2xl w-full text-white flex flex-col gap-5 rounded-2xl bg-darkish backdrop-blur-md shadow-around p-5 items-center md:items-start">

                    <div className="md:gap-1 flex flex-col items-center md:items-start">
                        <h1 className="text-5xl md:text-8xl font-bold" >Pablo Padilla</h1>
                        <h3 className="text-2xl md:text-4xl font-semibold">Full-Stack Engineer</h3>
                    </div>

                    <div className="flex gap-5">
                        <Button className="bg-btn text-xl text-white" text="Projects" />
                        <Button className="bg-btn text-xl text-white" text="Resume" />
                        <Button className='bg-dom text-xl text-white' text='Contact Me' />
                    </div>

                    <p className="text-xl md:text-3xl text-center md:text-left leading-6">
                        I am a committed and enthusiastic full-stack engineer proficient in various programming languages.
                        I am experienced in all levels of web application development, including deployment and maintenance on cloud computing platforms.
                    </p>

                </div>

            </div>

        </section>
    )
}

export default Hero