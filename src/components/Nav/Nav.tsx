import { useState, useEffect } from 'react';
import { NavData } from '../../data/NavData';
import { Link } from 'react-scroll';
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
        <nav className={`${color && "bg-white shadow-lg top-0"} w-screen h-16 fixed flex left-0 items-center justify-center z-50 transition-colors duration-500`}>
            <div className='flex items-center justify-between w-full max-w-7xl px-3  '>

                <div className='flex items-center'>

                    <div className={` ${color ? "text-black" : "text-white"} hidden md:flex items-center gap-12`}>
                        {
                            NavData.map((n, i) => (
                                <Link
                                    smooth={true}
                                    offset={-50}
                                    spy={true}
                                    key={`nav-${i}`}
                                    activeClass='font-normal underline-offset-4 underline'
                                    className='cursor-pointer font-light text-lg '
                                    to={n.link} >
                                    <span>{n.title}</span>
                                </Link>
                            ))
                        }
                    </div>

                </div>
                <Link smooth={true} to='contact' spy={true}>
                    <Button className={`hidden md:flex transition-all ease-in-out text-xl font-light`} text='Contact Me' />
                </Link>

                <MenuButton opened={opened} setOpened={setOpened} />

                <NavMenu opened={opened} close={() => setOpened(false)} />

            </div>

        </nav>
    )
}

export default Nav