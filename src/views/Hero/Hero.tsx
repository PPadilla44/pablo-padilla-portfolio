import Button from '../../components/Button'

const Hero = () => {

    return (
        <section className="w-full h-screen bg-hero bg-no-repeat bg-cover bg-bottom 
        lg:bg-cover xl:bg-[length:150%] lg:bg-hero-pos flex items-center justify-end lg:justify-center flex-col relative
        ">

            <div className='w-full h-[55%] lg:h-full lg:w-1/2 min-w-[630px] backdrop-blur-md absolute left-0 z-10' />

            <div className="md:max-w-7xl w-full flex z-20 items-start lg:items-center justify-center lg:justify-start h-[55%]">


                <div className="md:max-w-2xl w-full text-white flex flex-col gap-5 items-center justify-center lg:items-start">

                    <div className="flex flex-col items-center lg:items-start pt-5 lg:p-0">
                        <h1 className="text-5xl md:text-8xl font-semibold" >Pablo Padilla</h1>
                        <h3 className="text-2xl md:text-4xl font-normal">Full-Stack Engineer</h3>
                    </div>


                    {/* <p className="text-xl md:text-3xl text-center lg:text-left font-light">
                        I am a committed and enthusiastic full-stack engineer proficient in various programming languages.
                        I am experienced in all levels of web application development, including deployment and maintenance on cloud computing platforms.
                    </p> */}
                    <p className="text-xl md:text-3xl text-center lg:text-left font-light">
                        I am a committed and enthusiastic full-stack developer located in the San Francisco Bay Area, proficient in various programming languages
                        and all levels of web application development, including deployment and maintenance on cloud computing platforms.
                    </p>

                    <Button className='bg-dom text-white text-2xl' text='Contact Me' />

                </div>


            </div>

        </section>
    )
}

export default Hero