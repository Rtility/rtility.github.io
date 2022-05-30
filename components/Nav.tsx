import React, { FC } from 'react'
import OutlineButton from './OutlineButton';

const Nav: FC = () => {
    return (
        <nav className='px-8 md:px-0 text-[#7981A3] flex justify-between lg:justify-around items-center mt-10 lg:mt-16'>
            <img src='/images/logo.svg' alt='Rtility' loading='lazy' className='w-[24px] h-[37px] md:w-[42px] md:h-[64px] -ml-8'/>
            <ul className='hidden lg:block text-[22px] space-x-10 font-normal'>
                <a href='#'>Home</a>
                <a href='#'>Partners</a>
                <a href='#'>Services</a>
                <a href='#'>Our Team</a>
            </ul>
            <section className="hidden lg:block">
                <OutlineButton text="Contact us"/>
            </section>
            <img src='/images/menu.svg' alt='menu' loading='lazy' className='lg:hidden block'/>
        </nav>
    )
}

export default Nav