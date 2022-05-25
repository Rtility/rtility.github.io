import React, { FC } from 'react'
import OutlineButton from './OutlineButton';

const Nav: FC = () => {
    return (
        <nav className='text-[#7981A3] flex justify-around items-center mt-16'>
            <img src='/images/logo.svg' alt='Rtility' />
            <ul className='text-[22px] space-x-10 font-normal'>
                <a href='#'>Home</a>
                <a href='#'>Partners</a>
                <a href='#'>Services</a>
                <a href='#'>Our Team</a>
            </ul>
            <OutlineButton text="Contact us"/>
        </nav>
    )
}

export default Nav