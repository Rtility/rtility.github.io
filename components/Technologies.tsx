import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import { useInView } from 'react-intersection-observer'

const stack = [
  'Solidity',
  'ERC721A',
  'OpenZeppelin',
  'Hardhat',
  'Brownie',
  'Slither',
  'ethers.js',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Python',
  'PHP',
  'Docker',
  'Figma',
]

const Technologies = () => {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [clientWidth, setClientWidth] = useState<number>(0)
  const [animationData, setAnimationData] = useState<object>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setClientWidth(window.innerWidth)
    }
  }, [])

  // The animations are ~250KB each, so fetch only the one this screen needs once it scrolls into view
  useEffect(() => {
    if (!inView || clientWidth === 0) return
    const load =
      clientWidth <= 640
        ? import('./lotties/mobileTechAnimation.json')
        : import('./lotties/techAnimation.json')
    load.then((data) => setAnimationData(data.default))
  }, [inView, clientWidth])

  const options = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className="mt-[11.875rem]">
      <h2 className="text-center text-[1.75rem] font-medium text-white sm:text-[2.8125rem]">
        Our Technologies
      </h2>
      <div ref={ref} className="mt-8 sm:mt-0 xl:h-[550px]">
        {animationData && (
          <Lottie
            options={options}
            style={{
              cursor: 'default',
              width: clientWidth <= 640 ? '95%' : '86%',
            }}
          />
        )}
      </div>
      <section className="hidden justify-around font-normal text-[#7981A3] sm:flex md:text-[20px] lg:text-[28px]">
        <p>Design</p>
        <p>Develop</p>
        <p>Test</p>
      </section>
      <ul className="mx-auto mt-12 flex max-w-[56rem] flex-wrap justify-center gap-3 px-6">
        {stack.map((item) => (
          <li
            key={item}
            className="rounded-[5px] bg-[#131938] px-4 py-2 text-sm text-[#7981A3]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Technologies
