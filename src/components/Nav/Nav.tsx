import React from 'react'
import Button from '../Button'
import Logo from '../Logo'

const Nav = () => {
    return (
        <nav className='bg-30-light w-screen h-20 fixed shadow-xl flex left-0 top-0 items-center justify-between px-5'>

            <div className='flex items-center'>

                <Logo className='w-14 h-14' textClass="text-4xl" />
                <div className='flex items-center ml-14 gap-12'>
                    <p>About Me</p>
                    <p>Skills</p>
                    <p>Projects</p>
                    <p>Education</p>
                </div>
            </div>

            <Button className='bg-10-light text-xl text-30-light' text='Contact Me' />

        </nav>
    )
}

export default Nav