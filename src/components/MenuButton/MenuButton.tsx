import { motion, SVGMotionProps } from "framer-motion";
import React from "react";

interface Props {
  toggle: () => void;
  isOpen: boolean;
  scrolled: boolean;
}

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => (
  <motion.path
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

const MenuButton: React.FC<Props> = ({ toggle, isOpen, scrolled }) => {
  // Black stroke once nav is white, otherwise white stroke over the navy hero.
  const stroke = scrolled ? "#000000" : "#ffffff";

  return (
    <button
      type="button"
      className="flex md:hidden w-8 h-8 items-center justify-center relative z-50"
      onClick={toggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-nav-menu"
    >
      <svg width="32" height="32" viewBox="0 0 21 21" aria-hidden="true" focusable="false">
        <Path
          stroke={isOpen ? "#000000" : stroke}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          stroke={isOpen ? "#000000" : stroke}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          stroke={isOpen ? "#000000" : stroke}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default MenuButton;
