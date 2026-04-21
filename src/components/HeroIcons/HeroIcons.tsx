import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const socials = [
  {
    icon: "fa6-brands:github",
    link: "https://github.com/PPadilla44",
    label: "GitHub profile (opens in a new tab)",
    name: "GitHub",
  },
  {
    icon: "fa6-brands:linkedin",
    link: "https://www.linkedin.com/in/pablopadilla44/",
    label: "LinkedIn profile (opens in a new tab)",
    name: "LinkedIn",
  },
  {
    icon: "fa-solid:envelope",
    link: "mailto:padilla.pablo1998@gmail.com",
    label: "Send me an email",
    name: "Email",
  },
];

interface Props {
  compact?: boolean;
}

const HeroIcons: React.FC<Props> = ({ compact = false }) => {
  return (
    <ul
      className={`flex gap-3 ${compact ? "" : ""}`}
      aria-label="Social links"
      data-testid="hero-socials"
    >
      {socials.map((d) => (
        <motion.li
          key={d.icon}
          whileTap={{ x: 2, y: 2 }}
        >
          <a
            href={d.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={d.label}
            data-testid={`social-${d.name.toLowerCase()}`}
            className="inline-flex items-center justify-center w-11 h-11 bg-surface border-2 border-line shadow-hard-sm hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 text-ink hover:text-primary"
          >
            <Icon icon={d.icon} width={20} height={20} aria-hidden="true" />
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

export default HeroIcons;
