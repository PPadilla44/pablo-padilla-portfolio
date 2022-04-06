import { useState, useEffect } from 'react';
import Button from '../Button'
import MenuButton from '../MenuButton';
import NavMenu from '../NavMenu';

const Nav = () => {

    const [color, setColor] = useState(false);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    const scrollHandler = () => {
        const onTop = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
        onTop ? setColor(true) : setColor(false)
    }

    return (
        <nav className={`${color && "bg-white shadow-lg top-0"} w-full h-20 fixed flex left-0 items-center justify-center px-3 md:px-5 z-50 transition-all duration-500`}>
            <div className='flex items-center justify-between w-full max-w-7xl'>

                <div className='flex items-center'>

                    <div className={` ${color ? "text-black" : "text-white"} hidden md:flex items-center gap-12`}>
                        <a href='/'>About Me</a>
                        <a href='/'>Skills</a>
                        <a href='/'>Projects</a>
                        <a href='/'>Education</a>
                    </div>

                </div>

                <Button className={`bg-dom hover:bg-red-600 active:bg-red-800 text-xl hidden md:flex text-white transition-all ease-in-out`} text='Contact Me' />

                <MenuButton opened={opened} setOpened={setOpened} />

                <NavMenu opened={opened} />

            </div>

        </nav>
    )
}

export default Nav