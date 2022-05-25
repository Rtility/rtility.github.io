import React from 'react'
import Lottie from 'react-lottie';
import animationData from './lotties/techAnimation.json'

const Technologies = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className='mt-[11.875rem]'>
      <p className='text-[2.8125rem] text-white font-medium text-center'>Our Technologies</p>
      <Lottie options={defaultOptions} height={550} width={1200} style={{cursor:'default'}}/>
      <section className='text-[#7981A3] font-normal text-[28px] flex justify-around'>
        <p>Design</p>
        <p>Develop</p>
        <p className='relative right-12'>Test</p>
      </section>
    </div>
  )
}
export default Technologies;
