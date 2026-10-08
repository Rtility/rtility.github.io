import React, { FC, useState } from 'react'
import Link from 'next/link'
import OutlineButton from './OutlineButton'
import { navLinks } from '../data/site'

const Nav: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative mt-10 flex items-center justify-between px-8 text-[#7981A3] md:px-0 lg:mt-16 lg:justify-around">
      <Link href="/">
        <a aria-label="Rtility home" className="lg:-ml-8">
          <img
            src="/images/logo.svg"
            alt="Rtility"
            className="h-[37px] w-[24px] md:h-[64px] md:w-[42px]"
          />
        </a>
      </Link>
      <ul className="hidden space-x-10 text-[22px] font-normal lg:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <section className="hidden lg:block">
        <OutlineButton text="Contact us" href="/#contact" />
      </section>
      <button
        type="button"
        className="block lg:hidden"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7981A3"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        ) : (
          <img src="/images/menu.svg" alt="" />
        )}
      </button>
      {menuOpen && (
        <div className="absolute left-4 right-4 top-full z-50 mt-4 rounded-[10px] border border-[#262626] bg-[#121424] p-6 shadow-2xl lg:hidden">
          <ul className="space-y-5 text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex h-[48px] items-center justify-center rounded-[5px] border border-[#00D2EF] text-sm font-medium text-[#00D2EF]"
          >
            Contact us
          </a>
        </div>
      )}
    </nav>
  )
}

export default Nav
