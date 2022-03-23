import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import Logo from '../Logo'

const Nav = () => {

    const hiddenRef = useRef<HTMLLegendElement>(null);
    const [color, setColor] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);

    }, []);

    const scrollHandler = () => {

        if (hiddenRef.current) {

            if (window.scrollY >= hiddenRef.current.offsetTop) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

    }

    return (
        <nav ref={hiddenRef} className={`${color && "bg-30-light"} w-full h-20 sticky top-0 flex left-0 items-center justify-between px-5 z-50 self-end justify-self-end transition-all duration-500`}>

            <div className='flex items-center'>

                <Logo className='w-14 h-14 text-6xl font-bold' />

                <div className={` ${color ? "text-black" : "text-60-light"} flex items-center ml-14 gap-12  font-light text-xl`}>
                    <a href='/'>About Me</a>
                    <a href='/'>Skills</a>
                    <a href='/'>Projects</a>
                    <a href='/'>Education</a>
                </div>
            </div>

            <Button className={` ${color ? "bg-10-light" : "text-60-light border-2 border-60-light"}  text-xl text-30-light hover:bg-10-light hover:border-0`} text='Contact Me' />

        </nav>
    )
}

export default Nav