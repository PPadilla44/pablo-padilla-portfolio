import React from "react";
import { Element } from "react-scroll";

interface Props {
  className?: string;
  contained?: boolean;
  name: string;
  children?: React.ReactNode;
  labelledBy?: string;
}

const Section: React.FC<Props> = ({
  children,
  className,
  contained = true,
  name,
  labelledBy,
}) => {
  return (
    <Element name={name}>
      <section
        aria-labelledby={labelledBy}
        className={`relative ${className ?? ""}`}
      >
        <div className={`${contained ? "max-w-[1400px] mx-auto" : ""} px-6 md:px-10 lg:px-16 w-full`}>
          {children}
        </div>
      </section>
    </Element>
  );
};

export default Section;
