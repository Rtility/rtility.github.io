import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import animationData from './lotties/techAnimation.json'
import mobileAnimationData from './lotties/mobileTechAnimation.json'
import { useInView } from "react-intersection-observer";

const Technologies = () => {
  const { ref, inView } = useInView();
  const [clientWidth, setClientWidth] = useState<number>(0);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const mobileDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mobileAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setClientWidth(window.innerWidth)
    }
  }, [])

  return (
    <div className='mt-[11.875rem]'>
      <p className='text-[1.75rem] sm:text-[2.8125rem] text-white font-medium text-center'>Our Technologies</p>
      <div ref={ref} className='mt-8 sm:mt-0 xl:h-[550px]'>
        {inView && clientWidth <= 640 && <Lottie options={mobileDefaultOptions} style={{ cursor: 'default', width: '95%' }} />}
        {inView && clientWidth > 640 && <Lottie options={defaultOptions} style={{ cursor: 'default', width: '86%' }} />}
      </div>
      <section className='hidden sm:flex text-[#7981A3] font-normal md:text-[20px] lg:text-[28px] justify-around'>
        <p>Design</p>
        <p>Develop</p>
        <p>Test</p>
      </section>
    </div>
  )
}
export default Technologies;
