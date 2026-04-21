import { motion } from "framer-motion";
import React from "react";

interface SendButtonProps {
  isLoading: boolean;
  isSuccess: boolean;
}

const SendButton: React.FC<SendButtonProps> = ({ isLoading, isSuccess }) => {
  const label = isLoading ? "Sending" : isSuccess ? "Success!" : "Send";
  return (
    <motion.button
      type="submit"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={isLoading || isSuccess}
      aria-live="polite"
      className={`${isLoading ? "bg-blue-800 pointer-events-none" : ""} ${isSuccess ? "bg-blue-500" : ""} ${!isLoading && !isSuccess ? "bg-accent hover:bg-accent/90 active:bg-blue-800" : ""} text-white w-40 rounded-md shadow-md text-lg font-medium mt-3 py-2 flex items-center justify-center gap-2`}
    >
      {label}
      {isLoading && (
        <span
          className="animate-spin rounded-full border-2 border-gray-200 border-t-teal-500 h-4 w-4"
          aria-hidden="true"
        />
      )}
    </motion.button>
  );
};

export default SendButton;
