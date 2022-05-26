import React, { FC } from 'react'

const Partners: FC = () => {
    return (
        <div className='text-white mt-[7.25rem] flex flex-col items-center'>
            <div className='bg-[#131938] w-[4.25rem] h-[2.25rem] rounded-[5px] text-xs font-normal flex items-center justify-center'>
                <p className='text-gradient1'>We Love</p>
            </div>
            <p className='text-[2.8rem] text-white font-medium mt-[10px]'>Our Partners</p>
            <div className='flex justify-around w-full mt-[3.75rem]'>
                <section className='h-[9.18rem] w-[9.18rem] bg-[#131938] rounded-full flex items-center justify-center relative top-[5.25rem]'>
                    <img src='/images/sample_twitter.svg' alt='Twitter' className='' loading='lazy'/>
                </section>
                <section className='h-[10.5rem] w-[10.5rem] bg-[#131938] rounded-full flex items-center justify-center'>
                    <img src='/images/sample_twitter.svg' alt='Twitter' className='' loading='lazy' />
                </section>
                <section className='h-[9.18rem] w-[9.18rem] bg-[#131938] rounded-full flex items-center justify-center relative top-[5.25rem]'>
                    <img src='/images/sample_twitter.svg' alt='Twitter' className='' loading='lazy'/>
                </section>
            </div>
            <p className='text-[28px] font-normal text-[#7981A3] w-[30.3rem] text-center mt-14'>“RTILITY is the Company that you want to work with them and they can Suprise you!”</p>

            <div className='bg-[#131938] w-[8.43rem] h-[2.25rem] rounded-[5px] text-xs font-normal flex items-center justify-center mt-[10px]'>
                <p className='text-gradient2'>Jane Doe / Arts Dao</p>
            </div>
        </div>
    )
}
export default Partners;
