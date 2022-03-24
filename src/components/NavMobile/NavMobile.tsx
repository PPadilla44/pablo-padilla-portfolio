import { useState, useEffect } from "react";
import Logo from "../Logo";

const NavMobile = () => {
    const [color, setColor] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    const scrollHandler = () => {
        const onTop = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
        onTop ? setColor(true) : setColor(false)
    }

    return (
        <nav className={`${color && "bg-30-light shadow-lg top-0"} flex md:hidden w-full h-20 fixed left-0 items-center justify-between px-3 z-50 transition-all duration-500`}>


            <Logo className='w-14 h-14 text-6xl font-bold' />


            <div className="flex flex-col gap-2 w-8 items-end">
                <span className="block w-8 h-1 bg-black rounded-full" />
                <span className="block w-8 h-1 bg-black rounded-full" />
                <span className="block w-5 h-1 bg-black rounded-full" />
            </div>


        </nav>
    )
}

export default NavMobile