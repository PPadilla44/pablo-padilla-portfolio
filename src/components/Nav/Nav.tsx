import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { NavData } from "../../data/NavData";

const RESUME_LINK = process.env.REACT_APP_RESUME_LINK;

const Nav = () => {
  return (
    <motion.nav
      aria-label="Primary"
      data-testid="nav-container"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 28 }}
      className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[calc(100vw-1rem)]"
    >
      <ul className="flex items-center gap-1 sm:gap-2 bg-surface/85 backdrop-blur-xl border-2 border-line shadow-hard px-2 py-2 sm:px-3">
        {NavData.map((n) => (
          <li key={`nav-${n.link}`}>
            <Link
              to={n.link}
              smooth
              spy
              offset={-50}
              duration={400}
              activeClass="bg-primary text-primary-fg"
              className="group relative cursor-pointer inline-flex items-center px-3 py-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.15em] text-ink hover:text-primary transition-colors"
              data-testid={`nav-link-${n.link}`}
            >
              <span>{n.title}</span>
            </Link>
          </li>
        ))}
        {RESUME_LINK && (
          <li>
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-resume-btn"
              className="inline-flex items-center gap-1 bg-primary text-primary-fg px-3 py-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.15em] border-2 border-line hover:-translate-y-0.5 transition-transform"
              aria-label="Open resume in a new tab"
            >
              Resume
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        )}
      </ul>
    </motion.nav>
  );
};

export default Nav;
