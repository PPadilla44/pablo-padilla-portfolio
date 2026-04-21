import { motion, Variants } from "framer-motion";
import { Link } from "react-scroll";
import { NavData } from "../../data/NavData";
import HeroIcons from "../HeroIcons";

const RESUME_LINK = process.env.REACT_APP_RESUME_LINK;

interface Props {
  toggle: () => void;
  opened: boolean;
}

const navVariants: Variants = {
  open: { y: 0, transition: { duration: 1 } },
  closed: { y: "-100%", transition: { type: "spring", bounce: 0 } },
};

const itemVariants: Variants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const textVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
};

const NavMenu: React.FC<Props> = ({ opened, toggle }) => {
  return (
    <motion.div
      id="mobile-nav-menu"
      initial={false}
      variants={navVariants}
      animate={opened ? "open" : "closed"}
      aria-hidden={!opened}
      className="bg-white md:hidden w-full fixed left-0 top-0 -z-10 overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center pl-4 h-screen">
        <motion.ul
          variants={itemVariants}
          className="flex flex-col gap-6 h-full justify-center"
        >
          {NavData.map((n) => (
            <motion.li
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={`navMenu-${n.link}`}
            >
              <Link
                onClick={toggle}
                smooth
                offset={n.link !== "about" ? -50 : 0}
                spy
                activeClass="font-normal underline-offset-4 underline"
                className="cursor-pointer text-4xl hover:font-normal active:translate-y-[2px]"
                to={n.link}
              >
                <span>{n.title}</span>
              </Link>
            </motion.li>
          ))}
          {RESUME_LINK && (
            <motion.li
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={RESUME_LINK}
                className="cursor-pointer text-4xl hover:font-normal active:translate-y-[2px]"
              >
                <span>Resume</span>
              </a>
            </motion.li>
          )}
          <motion.li variants={textVariants}>
            <HeroIcons />
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default NavMenu;
