import { useState, useEffect } from 'react';
import { NavData } from '../../data/NavData';
import { Link } from 'react-scroll';
import Button from '../Button'
import MenuButton from '../MenuButton';
import NavMenu from '../NavMenu';
import { motion, useCycle } from 'framer-motion';

const Nav = () => {

    const [color, setColor] = useState(false);
    const [isOpen, toggleOpen] = useCycle(false, true);

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    const scrollHandler = () => {
        const onTop = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
        onTop ? setColor(true) : setColor(false)
    }

    return (
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className={`${color && "bg-white shadow-lg top-0"} w-screen h-16 fixed flex left-0 items-center justify-center z-50 transition-colors duration-500`}>
            <div className='flex items-center justify-between w-full max-w-7xl px-3  '>

                <div className='flex items-center'>

                    <ul className={` ${color ? "text-black" : "text-white"} hidden md:flex items-center gap-12`}>
                        {
                            NavData.map((n, i) => (
                                <motion.li
                                    key={`nav-${i}`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        smooth={true}
                                        offset={-50}
                                        spy={true}
                                        activeClass='font-normal underline-offset-4 underline'
                                        className='cursor-pointer text-lg hover:font-normal active:translate-y-[2px]'
                                        to={n.link} >
                                        <span>{n.title}</span>
                                    </Link>
                                </motion.li>
                            ))
                        }
                    </ul>

                </div>
                <Link smooth={true} to='contact' spy={true}>
                    <Button className={`hidden md:flex transition-all ease-in-out text-xl font-light`} text='Contact Me' />
                </Link>

                <MenuButton toggle={() => toggleOpen()} />

                <NavMenu opened={isOpen} toggle={() => toggleOpen(0)} />

            </div>

        </motion.nav>
    )
}

export default Nav