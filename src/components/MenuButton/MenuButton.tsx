import React from "react";

interface Props {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuButton: React.FC<Props> = ({ opened, setOpened }) => {

    return (
        <button onClick={() => setOpened(!opened)} className="flex md:hidden flex-col gap-2 w-8 h-8  items-end justify-center relative">

            {/* MENU */}
            <span className={`${opened ? "translate-y-3 opacity-0" : "-translate-y-3 delay-300"} w-8 h-1 bg-white rounded-full transition-all duration-300 ease-in absolute `} />
            <span className={`${opened ? "translate-y-3 opacity-0" : "delay-300"} w-8 h-1  bg-white rounded-full transition-all duration-300 ease-in-out absolute`} />
            <span className={`${opened ? "opacity-0" : "delay-300"} translate-y-3  w-5 h-1  bg-white rounded-full transition-all duration-300 ease-in-out absolute`} />

            {/* CROSS */}
            <span className={`${opened ? "rotate-45 -translate-y-0 delay-300" : "opacity-0 translate-y-3"} w-8  h-1  bg-white rounded-full transition- duration-300  ease-in-out absolute`} />
            <span className={`${opened ? "-rotate-45 -translate-y-0 delay-300" : "opacity-0 translate-y-3"} w-8   h-1  bg-white rounded-full transition-all duration-300 ease-in-out absolute `} />
        </button>

    )
}

export default MenuButton