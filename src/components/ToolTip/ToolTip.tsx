import React from 'react'
import ReactTooltip from 'react-tooltip';

interface ToolTipProps {
    tooltipText: string;
    callBack?: () => void;
    className?: string;
}

const ToolTip: React.FC<ToolTipProps> = ({ children, tooltipText, callBack, className }) => {
    

    return (
        <>
            <div data-tip={tooltipText} className={className} >
                {children}
            </div>
            <ReactTooltip place="top" type="dark" effect="solid" />
        </>
    );
}

export default ToolTip