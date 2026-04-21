import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";
import Button from "../Button";
import ProjectImages from "../ProjectImages";
import { fadeIn, inViewOnce } from "../../lib/motion";

type ImageProps = {
  path: string;
  name: string;
  className?: string;
};

export interface ProjectBlockProps {
  reversed?: boolean;
  description: string;
  title: string;
  links: string[];
  techs: string[];
  mainImage: ImageProps;
  secondaryImage?: ImageProps;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  reversed = false,
  mainImage,
  secondaryImage,
  description,
  links,
  techs,
  title,
}) => {
  return (
    <motion.article
      variants={fadeIn}
      {...inViewOnce}
      className={`${!reversed ? "md:flex-row-reverse" : ""} flex-col md:flex-row w-full h-full md:h-72 flex gap-6 justify-between items-center`}
    >
      <ProjectImages
        mainImage={mainImage}
        secondaryImage={secondaryImage}
        reversed={reversed}
      />

      <div className="flex flex-col md:items-start md:text-left items-center text-center justify-center gap-3 max-w-md md:max-w-3xl">
        <h3 className="text-3xl font-medium">{title}</h3>
        <p>{description}</p>
        <ul className="flex gap-3 text-accent" aria-label="Technologies used">
          {techs.map((t) => (
            <li key={`tech-${title}-${t}`}>
              <Icon width={18} height={18} icon={t} aria-hidden="true" />
            </li>
          ))}
        </ul>
        <div className="flex gap-3 items-center">
          {links.length > 1 && (
            <a
              href={links[1]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live application (opens in a new tab)`}
            >
              <Button text="View Application" className="text-black text-xl" />
            </a>
          )}
          <a
            href={links[0]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code on GitHub (opens in a new tab)`}
            className="text-accent hover:text-black active:text-accent/80 font-light underline-offset-4 hover:underline"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectBlock;
