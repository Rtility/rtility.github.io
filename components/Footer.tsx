import React, { FC } from 'react'

const Footer: FC = () => {
    return (
        <div className='bg-[#040614] h-[28rem] flex justify-around pt-[81px]'>
            <section>
                <img src='/images/logo.svg' alt='Rtility' loading='lazy' />
                <p className='text-[#7981A3] font-normal w-[360px] mt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </section>
            <div>
                <p className='text-[28px] font-normal text-white'>main</p>
                <section className='text-[#7981A3] space-y-6 mt-[2.8rem]'>
                    <p>Partners</p>
                    <p>Services</p>
                    <p>Our Team</p>
                    <p>About Us</p>
                </section>
            </div>
            <div className='w-[17.25rem]'>
                <p className='text-[28px] font-normal text-white'>Contact Us</p>
                <section className='flex mt-[2.8rem] justify-between'>
                    <img src='/images/github.svg' alt='Github' loading='lazy' />
                    <img src='/images/whatsapp.svg' alt='whatsapp' loading='lazy' />
                    <img src='/images/telegram.svg' alt='telegram' loading='lazy' />
                    <img src='/images/twitter.svg' alt='twitter' loading='lazy' />
                </section>
                <section className='flex mt-[3.25rem]'>
                    <img src='/images/email.svg' alt='email' loading='lazy' />
                    <p className='text-[#7981A3] ml-4'>info@Rtility.com</p>
                </section>
            </div>
        </div>
    )
}

export default Footer;