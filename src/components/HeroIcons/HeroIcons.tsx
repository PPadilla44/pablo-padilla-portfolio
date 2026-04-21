import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const socials = [
  {
    icon: "fa6-brands:github",
    link: "https://github.com/PPadilla44",
    label: "GitHub profile (opens in a new tab)",
  },
  {
    icon: "fa6-brands:linkedin",
    link: "https://www.linkedin.com/in/pablopadilla44/",
    label: "LinkedIn profile (opens in a new tab)",
  },
  {
    icon: "fa-solid:envelope",
    link: "mailto:padilla.pablo1998@gmail.com",
    label: "Send me an email",
  },
];

const HeroIcons = () => {
  return (
    <ul className="flex gap-3" aria-label="Social links">
      {socials.map((d) => (
        <motion.li
          key={d.icon}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href={d.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={d.label}
            className="cursor-pointer rounded-lg w-12 h-12 flex items-center justify-center transition-all ease-in-out"
          >
            <Icon icon={d.icon} width={40} height={40} aria-hidden="true" />
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

export default HeroIcons;
