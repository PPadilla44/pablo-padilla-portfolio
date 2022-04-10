import HeroIcons from "../../components/HeroIcons"

const Hero = () => {

    return (
        <section className="w-full h-screen bg-hero bg-no-repeat bg-cover bg-bottom 
        lg:bg-cover xl:bg-[length:150%] lg:bg-hero-pos flex items-center justify-end lg:justify-center flex-col relative
        overflow-hidden
        ">

            <div className='w-full h-[55%] lg:h-full lg:w-1/2 md:min-w-[680px] backdrop-blur-md absolute left-0 z-10' />

            <div className="px-3 md:max-w-7xl w-full flex z-20 items-start text-center lg:text-left lg:items-center xl:h-3/4 justify-center lg:justify-start h-[55%]">


                <div className="md:max-w-xl w-full text-white flex flex-col gap-5 items-center justify-center lg:items-start">

                    <div className="flex flex-col items-center lg:items-start pt-5 lg:p-0">
                        <h1 className="whitespace-nowrap">Pablo Padilla</h1>
                        <h3 className="whitespace-nowrap">Full-Stack Engineer</h3>
                    </div>

                    <p>
                        I am a committed and enthusiastic full-stack developer located in the San Francisco Bay Area, proficient in various programming languages
                        and all levels of web application development, including deployment and maintenance on cloud computing platforms.
                    </p>

                    <HeroIcons />

                </div>


            </div>

        </section>
    )
}

export default Hero