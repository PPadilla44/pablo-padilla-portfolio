import React from 'react'
import Button from '../Button'
import Logo from '../Logo'

const Nav = ({ transparent } : { transparent: boolean }) => {
    return (
        <nav className={`${!transparent && "bg-30-light"} w-screen h-20 fixed flex left-0 top-0 items-center justify-between px-5 z-50`}>

            <div className='flex items-center'>

                <Logo className='w-14 h-14' textClass="text-4xl" />
                <div className='flex items-center ml-14 gap-12 text-60-light'>
                    <a href='#'>About Me</a>
                    <a href='#'>Skills</a>
                    <a href='#'>Projects</a>
                    <a href='#'>Education</a>
                </div>
            </div>

            <Button className='bg-10-light text-xl text-30-light' text='Contact Me' />

        </nav>
    )
}

export default Nav