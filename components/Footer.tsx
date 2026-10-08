import React, { FC } from 'react'
import { navLinks, site } from '../data/site'

const Footer: FC = () => {
  return (
    <div className="bg-[#040614] py-[81px]">
      <div className="container mx-auto grid justify-items-center gap-y-[72px] px-6 lg:flex lg:items-start lg:justify-evenly">
        <section className="flex flex-col items-center lg:block">
          <img
            src="/images/logo.svg"
            alt="Rtility"
            loading="lazy"
            className="h-[64px] w-[42px]"
          />
          <p className="mt-8 w-full max-w-[360px] text-center font-normal text-[#7981A3] lg:text-left">
            Rtility is a Web3 studio. We design, build and audit smart
            contracts, NFT collections and the apps around them. Art + Utility,
            since {site.activeSince}.
          </p>
        </section>
        <div className="text-center lg:text-left">
          <p className="text-[28px] font-normal text-white">Explore</p>
          <ul className="mt-8 space-y-5 text-[#7981A3]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[17.25rem]">
          <p className="text-center text-[28px] font-normal text-white lg:text-left">
            Contact Us
          </p>
          <section className="mt-8 flex justify-center gap-8 lg:justify-start">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rtility on GitHub"
            >
              <img
                src="/images/github.svg"
                alt="GitHub"
                loading="lazy"
                className="h-6 w-6"
              />
            </a>
            <a
              href={site.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rtility on X"
            >
              <img
                src="/images/twitter.svg"
                alt="X (Twitter)"
                loading="lazy"
                className="h-6 w-6"
              />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rtility on LinkedIn"
            >
              <img
                src="/images/linkedin.svg"
                alt="LinkedIn"
                loading="lazy"
                className="h-6 w-6"
              />
            </a>
          </section>
          <a
            href={`mailto:${site.email}`}
            className="group mt-8 flex justify-center lg:justify-start"
          >
            <img src="/images/email.svg" alt="" loading="lazy" />
            <span className="ml-4 text-[#7981A3] transition group-hover:text-white">
              {site.email}
            </span>
          </a>
        </div>
      </div>
      <p className="mt-16 text-center text-sm text-[#565F8F]">
        © {site.activeSince}–{new Date().getFullYear()} Rtility. All rights
        reserved.
      </p>
    </div>
  )
}

export default Footer
