import { motion, SVGMotionProps } from "framer-motion";
import React from "react";

interface Props {
    toggle: () => void;
}

const Path = (props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
    <motion.path
        strokeWidth="3"
        stroke="black"
        strokeLinecap="round"
        {...props}
    />
);

const MenuButton: React.FC<Props> = ({ toggle }) => {

    return (
        <button className="flex md:hidden w-8 h-8" onClick={toggle}>
            <svg width="32" height="32" viewBox="0 0 21 21">
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </button>
    )
}

export default MenuButton