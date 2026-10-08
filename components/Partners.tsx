import React, { FC, useState } from 'react'
import Link from 'next/link'

const Partners: FC = () => {
  const [currentPartner, setCurrentPartner] = useState<number>(0)
  const partners = [
    {
      name: 'Arts DAO',
      logo: '/images/arts-dao.svg',
      note: 'We audited the mint contract behind Ethernal Gates, the membership-pass collection Arts DAO launched on Ethereum in June 2022.',
      tag: 'Arts DAO / Ethernal Gates',
      href: '/projects/ethernal-gates',
    },
    {
      name: 'Alphabet',
      glyph: 'A',
      note: 'We are building Alphabet end to end: the mint contract, the generative art pipeline, the whitelist service and the lore site.',
      tag: 'Alphabet / NFT collection',
      href: '/projects/alphabet',
    },
  ]
  const partner = partners[currentPartner]

  const nextSlide = () =>
    setCurrentPartner(
      currentPartner === partners.length - 1 ? 0 : currentPartner + 1
    )
  const prevSlide = () =>
    setCurrentPartner(
      currentPartner === 0 ? partners.length - 1 : currentPartner - 1
    )

  return (
    <div
      id="partners"
      className="mt-[9.375rem] flex scroll-mt-10 flex-col items-center px-6 text-white md:mt-[9rem]"
    >
      <section className="absolute right-0 -z-10 -mt-20 block h-[300px] w-[300px] rounded-full bg-[#00D2EF] opacity-20 blur-[150px] lg:hidden" />
      <div className="flex h-[2.25rem] items-center justify-center rounded-[5px] bg-[#131938] px-3 text-xs font-normal">
        <p className="text-gradient1">We Love</p>
      </div>
      <h2 className="mt-[10px] text-[1.75rem] font-medium text-white sm:text-[2.8rem]">
        Our Partners
      </h2>
      <div className="mt-8 flex items-center justify-center gap-10 md:mt-[3.75rem] md:gap-24">
        {partners.map((item, index) => (
          <button
            type="button"
            key={item.name}
            onClick={() => setCurrentPartner(index)}
            aria-label={item.name}
            aria-pressed={index === currentPartner}
            className={`${
              index === currentPartner ? 'flex' : 'hidden md:flex'
            } ${
              index === currentPartner
                ? 'h-[6.25rem] w-[6.25rem] ring-1 ring-[#00D2EF]/40 md:h-[10.5rem] md:w-[10.5rem]'
                : 'h-[6.25rem] w-[6.25rem] opacity-60 hover:opacity-100 md:h-[9.18rem] md:w-[9.18rem]'
            } items-center justify-center rounded-full bg-[#131938] transition-all`}
          >
            {item.logo ? (
              <img
                src={item.logo}
                alt={item.name}
                loading="lazy"
                className="w-[50px] md:w-[85px]"
              />
            ) : (
              <span className="text-gradient1 text-5xl font-semibold md:text-7xl">
                {item.glyph}
              </span>
            )}
          </button>
        ))}
      </div>
      <p className="mt-11 min-h-[6rem] w-full max-w-[36rem] text-center text-[20px] font-normal text-[#7981A3] md:mt-14 lg:text-[26px]">
        {partner.note}
      </p>
      <Link href={partner.href}>
        <a className="mt-[10px] flex h-[2.25rem] items-center justify-center rounded-[5px] bg-[#131938] px-3 text-xs font-normal transition hover:bg-[#1a2150]">
          <span className="text-gradient2">{partner.tag} →</span>
        </a>
      </Link>
      <div className="mt-[58px] flex md:hidden">
        <button
          type="button"
          aria-label="Previous partner"
          className="z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#2b2b42]"
          onClick={prevSlide}
        >
          <img src="/images/leftArrowWhite.svg" alt="" />
        </button>
        <button
          type="button"
          aria-label="Next partner"
          className="z-10 ml-[40px] flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#2b2b42]"
          onClick={nextSlide}
        >
          <img src="/images/rightArrowWhite.svg" alt="" />
        </button>
      </div>
    </div>
  )
}
export default Partners
