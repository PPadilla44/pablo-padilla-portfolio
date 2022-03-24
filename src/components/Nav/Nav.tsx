import { useState, useEffect } from 'react';
import Button from '../Button'
import Logo from '../Logo'

const Nav = () => {

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
        <nav className={`${color && "bg-30-light shadow-lg top-0"} w-full h-20 fixed flex left-0 items-center justify-between px-3 md:px-5 z-50 transition-all duration-500`}>

            <div className='flex items-center'>

                <Logo className='w-14 h-14 text-6xl font-bold' />

                <div className={` ${color ? "text-black" : "text-60-light"} hidden md:flex items-center ml-14 gap-12 font-light text-xl`}>
                    <a href='/'>About Me</a>
                    <a href='/'>Skills</a>
                    <a href='/'>Projects</a>
                    <a href='/'>Education</a>
                </div>

            </div>

            <Button className={` ${color ? "bg-10-light" : "text-60-light border-2 border-60-light"} hidden md:flex text-xl text-30-light hover:bg-10-light hover:border-0`} text='Contact Me' />

            <div className="flex md:hidden flex-col gap-2 w-8 items-end">
                <span className="block w-8 h-1 bg-black rounded-full" />
                <span className="block w-8 h-1 bg-black rounded-full" />
                <span className="block w-5 h-1 bg-black rounded-full" />
            </div>


        </nav>
    )
}

export default Nav