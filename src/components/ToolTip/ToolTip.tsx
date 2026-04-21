import React from "react";
import { Tooltip } from "react-tooltip";

interface ToolTipProps {
  tooltipText: string;
  className?: string;
  children?: React.ReactNode;
}

let counter = 0;
const nextId = () => `tt-${++counter}`;

const ToolTip: React.FC<ToolTipProps> = ({ children, tooltipText, className }) => {
  const idRef = React.useRef<string>();
  if (!idRef.current) idRef.current = nextId();
  const id = idRef.current;

  return (
    <>
      <div data-tooltip-id={id} data-tooltip-content={tooltipText} className={className}>
        {children}
      </div>
      <Tooltip id={id} place="top" />
    </>
  );
};

export default ToolTip;
