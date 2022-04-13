import { motion, Variants } from "framer-motion";
import { Link } from "react-scroll";
import { NavData } from "../../data/NavData";
import Button from "../Button";
import HeroIcons from "../HeroIcons";

interface Props {
    toggle: () => void;
    opened: boolean;
}

const NavMenu: React.FC<Props> = ({ opened, toggle }) => {

    const navVariants: Variants = {
        open: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.2,
            }
        },
        closed: {
            y: "-100%",
            transition: {
                type: "spring",
                bounce: 0
            }
        },
    }

    const itemVariants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };
    const textVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };

    return (
        <motion.div
            initial={false}
            variants={navVariants}
            animate={opened ? "open" : "closed"}
            className={` bg-white md:hidden w-full fixed left-0 top-0 bg-burg -z-10 overflow-hidden`}>
            <div className={`  flex flex-col justify-center items-center pl-4 h-screen  `}>
                <motion.ul
                    variants={itemVariants}
                    className="flex flex-col gap-6 h-full justify-center">
                    {
                        NavData.map((n, i) => (
                            <motion.li
                                variants={textVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >

                                <Link
                                    onClick={toggle}
                                    smooth={true}
                                    offset={n.link !== "about" ? -50: 0}
                                    spy={true}
                                    key={`navMenu-${i}`}
                                    activeClass='font-normal underline-offset-4 underline'
                                    className='cursor-pointer  text-4xl  hover:font-normal active:translate-y-[2px] '
                                    to={n.link} >
                                    <span>{n.title}</span>
                                </Link>
                            </motion.li>
                        ))
                    }
                    <motion.li
                        variants={textVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link className=" w-full flex justify-center" onClick={toggle} smooth={true} to='contact' spy={true}>
                            <Button className={`flex transition-all ease-in-out text-4xl font-normal`} text='Contact Me' />
                        </Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        variants={textVariants}
                    >
                        <HeroIcons />
                    </motion.li>
                </motion.ul>
            </div>
        </motion.div >
    )
}

export default NavMenu