import { motion, Variants } from "framer-motion";
import { Element } from "react-scroll";
import HeroIcons from "../../components/HeroIcons";

const Hero = () => {
  const heroVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Element name="about">
      <section className="w-full h-full lg:h-[650px] flex bg-blue-100 justify-center items-center ">
        <div className="lg:max-w-7xl pb-16 md:pt-16 lg:p-0 h-full lg:h-96 w-full flex items-center lg:justify-between flex-col lg:flex-row lg:px-3 gap-2">
          <motion.div
            variants={heroVariants}
            initial={"offscreen"}
            whileInView="onscreen"
            viewport={{ once: true }}
            className="bg-hero bg-[length:150%] sm:bg-[length:125%]  lg:bg-[length:150%] bg-no-repeat shadow-md bg-hero-pos lg:bg-center min-h-[300px] h-full lg:h-full w-full lg:max-w-xl lg:rounded-md"
          />
          <motion.div
            variants={heroVariants}
            initial={"offscreen"}
            whileInView="onscreen"
            viewport={{ once: true }}
            className="md:max-w-xl w-full text-black flex flex-col gap-5 text-center items-center justify-center px-3 lg:p-0 lg:items-start lg:text-left"
          >
            <div className="flex flex-col items-center lg:items-start pt-5 lg:p-0">
              <h1 className="whitespace-nowrap">Pablo Padilla</h1>
              <h3 className="whitespace-nowrap">Full-Stack Engineer</h3>
            </div>

            <p>
              I am a committed and enthusiastic full-stack developer located in
              the San Francisco Bay Area, proficient in various programming
              languages and all levels of web application development, including
              deployment and maintenance on cloud computing platforms.
            </p>

            <HeroIcons />
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
