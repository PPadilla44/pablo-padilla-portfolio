import React from "react";

type ImageProps = {
  path: string;
  name: string;
  className?: string;
};

interface ProjectImagesProps {
  className?: string;
  reversed: boolean;
  mainImage: ImageProps;
  secondaryImage?: ImageProps;
}

/**
 * Legacy helper kept for import compatibility — ProjectBlock now renders
 * images inline so this is a thin pass-through.
 */
const ProjectImages: React.FC<ProjectImagesProps> = ({ mainImage }) => (
  <img src={mainImage.path} alt={mainImage.name} className="w-full h-auto" />
);

export default ProjectImages;
