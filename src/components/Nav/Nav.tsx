import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { NavData } from "../../data/NavData";

const RESUME_LINK = process.env.REACT_APP_RESUME_LINK;

const Nav = () => {
  return (
    <motion.nav
      aria-label="Primary"
      data-testid="nav-container"
      initial={{ y: 80, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 28 }}
      className="fixed bottom-3 md:bottom-6 left-1/2 z-40"
    >
      <div className="bg-surface/85 backdrop-blur-xl border-2 border-line shadow-hard px-1 py-1 md:px-3 md:py-2 max-w-[calc(100vw-1.5rem)] overflow-hidden">
        <ul className="flex items-center gap-0 md:gap-2 overflow-x-auto no-scrollbar">
          {NavData.map((n) => (
            <li key={`nav-${n.link}`} className="shrink-0">
              <Link
                to={n.link}
                smooth
                spy
                offset={-50}
                duration={400}
                activeClass="bg-primary text-primary-fg"
                className="cursor-pointer inline-flex items-center px-2 py-2 md:px-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.05em] md:tracking-[0.15em] text-ink hover:text-primary transition-colors whitespace-nowrap"
                data-testid={`nav-link-${n.link}`}
              >
                <span>{n.title}</span>
              </Link>
            </li>
          ))}
          {RESUME_LINK && (
            <li className="shrink-0">
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nav-resume-btn"
                className="inline-flex items-center gap-0.5 bg-primary text-primary-fg px-2 py-2 md:px-3 md:gap-1 font-mono text-[10px] md:text-xs uppercase tracking-[0.05em] md:tracking-[0.15em] border-2 border-line hover:-translate-y-0.5 transition-transform whitespace-nowrap"
                aria-label="Open resume in a new tab"
              >
                Resume
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;
