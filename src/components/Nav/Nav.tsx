import { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import { motion, useCycle } from "framer-motion";
import { NavData } from "../../data/NavData";
import MenuButton from "../MenuButton";
import NavMenu from "../NavMenu";

const RESUME_LINK = process.env.REACT_APP_RESUME_LINK;

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = document.documentElement.scrollTop || document.body.scrollTop;
        setScrolled(y > 20);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => toggleOpen(0), [toggleOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      aria-label="Primary"
      className={`${scrolled ? "bg-white shadow-lg" : ""} w-full h-16 fixed top-0 left-0 flex items-center justify-center z-50 transition-colors duration-500`}
    >
      <div className="flex items-center justify-between md:justify-center w-full max-w-7xl px-3">
        <div className="flex items-center">
          <ul
            className={`${scrolled ? "text-black" : "text-white"} hidden md:flex items-center gap-12`}
          >
            {NavData.map((n) => (
              <motion.li
                key={`nav-${n.link}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  smooth
                  offset={-50}
                  spy
                  activeClass="font-normal underline-offset-4 underline"
                  className="cursor-pointer text-lg hover:font-normal active:translate-y-[2px]"
                  to={n.link}
                >
                  <span>{n.title}</span>
                </Link>
              </motion.li>
            ))}
            {RESUME_LINK && (
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={RESUME_LINK}
                  className="cursor-pointer text-lg hover:font-normal active:translate-y-[2px]"
                >
                  <span>Resume</span>
                </a>
              </motion.li>
            )}
          </ul>
        </div>

        <MenuButton
          isOpen={isOpen}
          scrolled={scrolled}
          toggle={() => toggleOpen()}
        />
        <NavMenu opened={isOpen} toggle={closeMenu} />
      </div>
    </motion.nav>
  );
};

export default Nav;
