import React, { FC, useState } from 'react'

const Team: FC = () => {
    const team = [{ "name": 'Shabi', "role": 'Backend Developer', "image": '/images/sample_team_image.png' },
    { "name": 'Shabi2', "role": 'Backend Developer2', "image": '/images/sample_team_image2.png' },
    { "name": 'Shabi3', "role": 'Backend Developer3', "image": '/images/sample_team_image2.png' }];

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = () => {
        let newSlide =
            currentSlide === team.length - 1
                ? 0
                : currentSlide + 1;
        setCurrentSlide(newSlide);
    };
    const prevSlide = () => {
        let newSlide =
            currentSlide === 0
                ? team.length - 1
                : currentSlide - 1;
        setCurrentSlide(newSlide);
    };
    return (

        <div className='mt-[151px] flex flex-col items-center mb-40'>
            <div className='bg-[#131938] w-[7.625rem] h-[2.25rem] rounded-[5px] text-xs font-normal flex items-center justify-center'>
                <p className='text-gradient1'>Our Professionals</p>
            </div>
            <section className='bg-[#8F90FE] w-[460px] h-[460px] rounded-full opacity-20 blur-[150px] absolute right-[3.5rem] -mt-16' />

            <p className='text-[45px] font-medium text-white mt-[10px]'>Our Team</p>
            <div className='mt-16 flex items-center'>
                <section className='bg-[#2b2b42] flex items-center justify-center rounded-full h-[56px] w-[56px] mr-[40px] hover:cursor-pointer z-10'>
                    <img src='/images/leftArrowWhite.svg' onClick={nextSlide} alt='arrow' />
                </section>

                {team[currentSlide + 1]?.image && <img src={team[currentSlide + 1]?.image} className="w-[10.5rem] h-[12.125rem] mr-[24px]" />}
                {team.map((item, index) =>
                    <section key={index} className={
                        index === currentSlide
                            ? "object-cover w-[46.5rem] h-[18.1875rem] bg-[#121424] rounded-[10px] flex items-center"
                            : "hidden"
                    }>
                        <img src={item.image} alt={item.name} loading='lazy' className='w-[18.625rem] h-[15rem] ml-[1.56rem] object-cover rounded-[5px]' />
                        <section className='ml-12'>
                            <p className='text-white text-4xl'>{item.name}</p>
                            <p className='text-[#7981A3] text-[22px]'>{item.role}</p>
                            <div className='flex mt-8 justify-between'>
                                <img src='/images/facebook.svg' alt='facebook' loading='lazy' />
                                <img src='/images/facebook.svg' alt='facebook' loading='lazy' />
                                <img src='/images/facebook.svg' alt='facebook' loading='lazy' />
                            </div>
                        </section>
                    </section>)}

                <section className='bg-[#2b2b42] flex items-center justify-center rounded-full h-[56px] w-[56px] ml-[40px] hover:cursor-pointer z-10'>
                    <img src='/images/rightArrowWhite.svg' onClick={prevSlide} alt='arrow'/>
                </section>
                <section className='bg-[#00D2EF] w-[460px] h-[460px] rounded-full opacity-20 blur-[150px] absolute left-[3.5rem] mt-72' />

            </div>
        </div>
    )
}
export default Team;
