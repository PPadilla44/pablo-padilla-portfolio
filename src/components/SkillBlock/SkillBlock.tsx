import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";

export interface SkillDataInterface {
  icon: string;
  name: string;
  bg?: string;
  color?: string;
}

export interface SkillBlockProps {
  title: string;
  skills: SkillDataInterface[];
  icon: string;
  smaller?: boolean;
  index?: number;
  className?: string;
}

const cardAccents = [
  "bg-primary text-primary-fg", // 01
  "bg-surface",
  "bg-vivid text-black",
  "bg-surface",
  "bg-surface",
  "bg-sec text-black",
];

const SkillBlock: React.FC<SkillBlockProps> = ({
  title,
  icon,
  skills,
  index = 0,
  className = "",
}) => {
  const accent = cardAccents[index % cardAccents.length];
  const dataTestId = `skills-category-${title.replace(/^\d+\.\s*/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      data-testid={dataTestId}
      className={`${className} relative group border-2 border-line shadow-hard hover:shadow-hard-hover hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 overflow-hidden p-5 md:p-6 ${accent}`}
    >
      {/* Background ghost icon */}
      <Icon
        icon={icon}
        width={180}
        height={180}
        aria-hidden="true"
        className="absolute -right-6 -bottom-6 opacity-10"
      />

      <div className="relative flex items-center justify-between mb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] opacity-80">
          [{String(index + 1).padStart(2, "0")}]
        </span>
        <Icon icon={icon} width={22} height={22} aria-hidden="true" />
      </div>

      <h3 className="relative font-display font-black uppercase tracking-tighter text-2xl md:text-3xl leading-[0.95] mb-4">
        {title.replace(/^\d+\.\s*/, "")}
      </h3>

      <ul className="relative flex flex-wrap gap-1.5">
        {skills.map((s) => (
          <li
            key={`${title}-${s.name}`}
            className="inline-flex items-center gap-1.5 px-2 py-1 bg-surface border-2 border-line text-ink text-[11px] font-mono uppercase tracking-[0.08em]"
          >
            <Icon icon={s.icon} width={14} height={14} aria-hidden="true" />
            {s.name}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillBlock;
