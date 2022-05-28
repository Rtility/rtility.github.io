import React, { FC, useState } from 'react'

const Partners: FC = () => {
    const [currentPartner, setCurrentPartner] = useState<number>(0);
    const partners = [{ "id": 0, "name": 'drive', "image": '/images/sample_drive.svg' }, { "id": 1, "name": 'art', "image": '/images/sample_art.svg' }, { "id": 2, "name": 'twitter', "image": '/images/sample_twitter.svg' }];

    const nextSlide = () => {
        let newSlide =
            currentPartner === partners.length - 1
                ? 0
                : currentPartner + 1;
        setCurrentPartner(newSlide);
    };
    const prevSlide = () => {
        let newSlide =
            currentPartner === 0
                ? partners.length - 1
                : currentPartner - 1;
        setCurrentPartner(newSlide);
    };
    return (
        <div className='text-white mt-[9.375rem] md:mt-[7.25rem] flex flex-col items-center'>
            <section className='block lg:hidden bg-[#00D2EF] w-[300px] h-[300px] rounded-full opacity-20 blur-[150px] absolute right-0 -mt-18 -z-10' />
            <div className='bg-[#131938] w-[4.25rem] h-[2.25rem] rounded-[5px] text-xs font-normal flex items-center justify-center'>
                <p className='text-gradient1'>We Love</p>
            </div>
            <p className='text-[1.75rem] sm:text-[2.8rem] text-white font-medium mt-[10px]'>Our Partners</p>
            {/* partners for tablet and pc size */}
            <div className='hidden md:flex justify-around w-full mt-[3.75rem]'>
                {partners.map((partner) =>
                    <section key={partner.id} className={`${partner.id === 1 ? 'h-[10.5rem] w-[10.5rem] top-0' : 'h-[9.18rem] w-[9.18rem]'} bg-[#131938] rounded-full flex items-center justify-center relative top-[5.25rem]`}>
                        <img src={partner.image} alt={partner.name} loading='lazy' />
                    </section>
                )}
            </div>
            {/* partners for mobile size */}
            <div className='block md:hidden'>
                {partners.map((partner, index) =>
                    <section key={partner.id} className={
                        index === currentPartner
                            ? "object-cover h-[6.25rem] w-[6.25rem] bg-[#131938] rounded-full flex items-center justify-center relative mt-8"
                            : "hidden"
                    }>
                        <img src={partner.image} alt={partner.name} loading='lazy' className='w-[50px]' />
                    </section>
                )}
            </div>
            <p className='text-[22px] lg:text-[28px] font-normal text-[#7981A3] w-[90%] sm:w-[30.3rem] text-center mt-11 md:mt-14'>“RTILITY is the Company that you want to work with them and they can Suprise you!”</p>

            <div className='bg-[#131938] w-[8.43rem] h-[2.25rem] rounded-[5px] text-xs font-normal flex items-center justify-center mt-[10px]'>
                <p className='text-gradient2'>Jane Doe / Arts Dao</p>
            </div>
            <div className="md:hidden flex mt-[58px]">
                <section className='bg-[#2b2b42] flex items-center justify-center rounded-full h-[56px] w-[56px] hover:cursor-pointer z-10'>
                    <img src='/images/leftArrowWhite.svg' onClick={nextSlide} alt='arrow' />
                </section>
                <section className='bg-[#2b2b42] flex items-center justify-center rounded-full h-[56px] w-[56px] ml-[40px] hover:cursor-pointer z-10'>
                    <img src='/images/rightArrowWhite.svg' onClick={prevSlide} alt='arrow' />
                </section>
            </div>
        </div>
    )
}
export default Partners;
