import { motion } from "framer-motion";
import React from "react";
import { fadeIn, inViewOnce } from "../../lib/motion";

export interface EducationBlockProps {
  title: string;
  descriptions: string[];
  location: string;
  duration: string;
  image: string;
}

const EducationBlock: React.FC<EducationBlockProps> = ({
  title,
  descriptions,
  location,
  duration,
  image,
}) => {
  return (
    <motion.article
      variants={fadeIn}
      {...inViewOnce}
      className="w-full h-full flex flex-col md:flex-row-reverse justify-between items-center gap-6"
    >
      <div className="bg-blue-200 w-52 md:w-64 h-52 md:h-64 p-2 rounded-lg border-2 border-accent shadow-md flex items-center justify-center">
        <img
          src={image}
          alt={title}
          width="240"
          height="240"
          loading="lazy"
          decoding="async"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="max-w-md flex flex-col gap-2 items-center md:items-start text-center md:text-left">
        <h3 className="text-3xl font-medium">{title}</h3>
        {descriptions.map((d, i) => (
          <p key={`${title}-desc-${i}`}>{d}</p>
        ))}
        <div className="flex gap-5">
          <p className="text-lg font-light">{location}</p>
          <p className="text-lg font-light">{duration}</p>
        </div>
      </div>
    </motion.article>
  );
};

export default EducationBlock;
