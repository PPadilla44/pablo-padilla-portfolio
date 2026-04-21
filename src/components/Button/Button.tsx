import { motion } from "framer-motion";
import React from "react";

interface Props {
  text: string;
  className?: string;
  callBack?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "ghost";
  testId?: string;
}

const Button: React.FC<Props> = ({
  text,
  className,
  callBack,
  type = "button",
  variant = "primary",
  testId,
}) => {
  const variantClass =
    variant === "primary" ? "brutal-btn brutal-btn-primary" : "brutal-btn";
  return (
    <motion.button
      type={type}
      whileTap={{ x: 3, y: 3 }}
      onClick={callBack}
      data-testid={testId}
      className={`${variantClass} ${className ?? ""}`}
    >
      <span>{text}</span>
    </motion.button>
  );
};

export default Button;
