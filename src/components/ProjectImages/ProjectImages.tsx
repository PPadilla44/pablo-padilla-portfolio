import React from 'react'

type ImageProps = {
    path: string,
    name: string,
    className?: string,
}

interface ProjectImagesProps {
    className?: string;
    reversed: boolean;
    mainImage: ImageProps;
    secondaryImage?: ImageProps;
    isMobileView?: boolean;
}

const ProjectImages: React.FC<ProjectImagesProps> = ({ className, reversed, mainImage, secondaryImage, isMobileView = false }) => {
    return (
        <div className={`${className} ${isMobileView ? "flex md:hidden" : " hidden md:flex"} w-80 min-w-[320px] h-52 md:h-72 items-center justify-center md:justify-start relative `}>
            <img src={mainImage.path} alt={mainImage.name} className={`${mainImage.className} object-cover h-full rounded-lg shadow-md border border-accent`} />
            {secondaryImage && <img src={secondaryImage.path} alt={secondaryImage.name} className={`${secondaryImage.className ? secondaryImage.className : "border border-accent shadow-md"}
                w-20 md:w-24 rounded-lg absolute ${reversed ? "right-0" : "left-0"} bottom-0`} />}
        </div>
    )
}

export default ProjectImages