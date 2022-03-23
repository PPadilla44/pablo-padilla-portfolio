import Button from '../Button'
import Logo from '../Logo'

const Nav = ({ transparent }: { transparent: boolean }) => {
    return (
        <nav className={`${!transparent && "bg-30-light"} w-full h-20 sticky top-0 flex left-0 items-center justify-between px-5 z-50 self-end justify-self-end`}>

            <div className='flex items-center'>

                <Logo className='w-14 h-14 text-6xl font-bold' />

                <div className='flex items-center ml-14 gap-12 text-60-light font-light text-xl'>
                    <a href='/'>About Me</a>
                    <a href='/'>Skills</a>
                    <a href='/'>Projects</a>
                    <a href='/'>Education</a>
                </div>
            </div>

            <Button className='border-2 border-60-light text-xl text-30-light hover:bg-10-light hover:border-0' text='Contact Me' />

        </nav>
    )
}

export default Nav