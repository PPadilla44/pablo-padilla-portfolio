import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

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
];

const Contact = () => {
  return (
    <Element name="contact">
      <section
        id="contact"
        aria-labelledby="contact-title"
        data-testid="contact-section"
        className="relative bg-bg border-t-2 border-line"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <p className="section-label">{"// 05 — Get in touch"}</p>
          <motion.h2
            id="contact-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="font-display font-black uppercase tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-8"
          >
            Let's <span className="text-primary">build</span> something.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-xl text-base md:text-lg text-muted leading-relaxed mb-10"
          >
            Open to full-time roles, contract work, and interesting
            collaborations. Fastest way to reach me is email.
          </motion.p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:padilla.pablo1998@gmail.com"
              data-testid="contact-email-cta"
              aria-label="Send me an email"
              className="inline-flex items-center gap-3 bg-primary text-primary-fg border-2 border-line shadow-hard hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] px-5 py-4"
            >
              <Icon icon="fa-solid:envelope" width={18} height={18} aria-hidden="true" />
              padilla.pablo1998@gmail.com
            </a>

            <ul className="flex gap-3" aria-label="Social links">
              {socials.map((s) => (
                <motion.li key={s.icon} whileTap={{ x: 2, y: 2 }}>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    data-testid={`contact-social-${s.name.toLowerCase()}`}
                    className="inline-flex items-center justify-center w-14 h-14 bg-surface border-2 border-line shadow-hard-sm hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 text-ink hover:text-primary"
                  >
                    <Icon icon={s.icon} width={22} height={22} aria-hidden="true" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
