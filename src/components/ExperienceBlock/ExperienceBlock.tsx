import { motion } from "framer-motion";
import React from "react";
import { fadeIn, inViewOnce } from "../../lib/motion";

export interface ExperienceBlockProps {
  title: string;
  subTitle: string;
  description: string;
  location: string;
  duration: string;
  image?: string;
  textAsImage?: string[];
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({
  title,
  subTitle,
  description,
  location,
  duration,
  image,
  textAsImage,
}) => {
  return (
    <motion.article
      variants={fadeIn}
      {...inViewOnce}
      className="w-full h-full flex flex-col-reverse md:flex-row justify-between items-center gap-6"
    >
      <div className="w-full h-full max-w-md flex flex-col gap-2 items-center md:items-start text-center md:text-left">
        <h3 className="text-3xl font-medium">{title}</h3>
        <h4>{subTitle}</h4>
        <p>{description}</p>
        <div className="flex gap-5">
          <p className="text-lg font-light">{location}</p>
          <p className="text-lg font-light">{duration}</p>
        </div>
      </div>

      <div className="bg-blue-200 border-2 border-accent shadow-md w-52 md:w-64 h-52 md:h-64 p-2 rounded-lg flex flex-col items-center justify-center">
        {textAsImage ? (
          <>
            <img
              src={image}
              alt={title}
              width="208"
              height="208"
              loading="lazy"
              decoding="async"
              className="w-40 h-40 md:w-52 md:h-52 object-contain"
            />
            <span className="text-4xl font-semibold text-black">{textAsImage[0]}</span>
          </>
        ) : (
          <img
            src={image}
            alt={title}
            width="240"
            height="240"
            loading="lazy"
            decoding="async"
            className="max-w-full max-h-full object-contain"
          />
        )}
      </div>
    </motion.article>
  );
};

export default ExperienceBlock;
