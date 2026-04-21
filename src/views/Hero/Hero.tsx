import { motion } from "framer-motion";
import { Element } from "react-scroll";
import HeroIcons from "../../components/HeroIcons";
import { fadeIn, inViewOnce } from "../../lib/motion";

const Hero = () => {
  return (
    <Element name="about">
      <section className="w-full h-full lg:h-[650px] flex bg-accent justify-center items-center">
        <div className="lg:max-w-7xl pb-16 md:pt-16 lg:p-0 h-full lg:h-96 w-full flex items-center lg:justify-between flex-col-reverse lg:flex-row lg:px-3 gap-2">
          <motion.div
            variants={fadeIn}
            {...inViewOnce}
            className="md:max-w-xl w-full text-white flex flex-col gap-5 text-center items-center justify-center px-3 lg:p-0 lg:items-start lg:text-left"
          >
            <div className="flex flex-col items-center lg:items-start pt-5 lg:p-0">
              <h1 className="whitespace-nowrap">Pablo Padilla</h1>
              <p className="text-2xl font-light opacity-90">Full-Stack Engineer</p>
            </div>

            <p>
              I am a committed and enthusiastic full-stack developer located in
              the San Francisco Bay Area, proficient in various programming
              languages and all levels of web application development, including
              deployment and maintenance on cloud computing platforms.
            </p>

            <HeroIcons />
          </motion.div>

          <motion.div
            variants={fadeIn}
            {...inViewOnce}
            className="min-h-[300px] h-full lg:h-full w-full lg:max-w-xl lg:rounded-md overflow-hidden shadow-md shadow-white/5"
          >
            <img
              src="/images/hero.png"
              alt="Pablo Padilla, full-stack software engineer"
              width="640"
              height="400"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover object-[left_50%_top_35%]"
            />
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
