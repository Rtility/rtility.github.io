import React, { FC } from 'react'

const Footer: FC = () => {
    return (
        <div className='bg-[#040614] h-full lg:flex items-center justify-evenly grid lg:grid-cols-3 py-[81px] grid-col-2 justify-items-center'>
            <section className='flex flex-col items-center lg:block'>
                <img src='/images/logo.svg' alt='Rtility' loading='lazy' className='w-[42px] h-[64px]'/>
                <p className='text-[#7981A3] text-center lg:text-left font-normal w-[90%] md:w-[360px] mt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </section>
            <div className='mt-[115px] lg:mt-0'>
                <p className='text-[28px] font-normal text-white'>main</p>
                <section className='text-[#7981A3] space-y-6 mt-[2.8rem]'>
                    <p>Partners</p>
                    <p>Services</p>
                    <p>Our Team</p>
                    <p>About Us</p>
                </section>
            </div>
            <div className='w-[17.25rem] mt-[115px] lg:mt-0'>
                <p className='text-[28px] font-normal text-white text-center lg:text-left'>Contact Us</p>
                <section className='flex mt-[2.8rem] justify-between'>
                    <img src='/images/github.svg' alt='Github' loading='lazy' />
                    <img src='/images/whatsapp.svg' alt='whatsapp' loading='lazy' />
                    <img src='/images/telegram.svg' alt='telegram' loading='lazy' />
                    <img src='/images/twitter.svg' alt='twitter' loading='lazy' />
                </section>
                <section className='flex mt-[3.25rem] justify-center lg:justify-start'>
                    <img src='/images/email.svg' alt='email' loading='lazy' />
                    <p className='text-[#7981A3] ml-4'>info@Rtility.com</p>
                </section>
            </div>
        </div>
    )
}

export default Footer;