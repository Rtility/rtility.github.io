import React, { FC } from 'react'
import FilledButton from './FilledButton'
import OutlineButton from './OutlineButton'
import { site } from '../data/site'

const Contact: FC = () => {
  return (
    <div id="contact" className="mb-40 scroll-mt-10 px-6">
      <div className="relative mx-auto flex max-w-[56rem] flex-col items-center overflow-hidden rounded-[10px] border border-[#262626] bg-[#121424] px-6 py-16 text-center">
        <div className="absolute -top-24 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#00D2EF] opacity-20 blur-[120px]" />
        <div className="relative flex h-[2.25rem] items-center justify-center rounded-[5px] bg-[#131938] px-3 text-xs font-normal">
          <p className="text-gradient1">Let’s Talk</p>
        </div>
        <h2 className="relative mt-[10px] text-[1.75rem] font-medium text-white sm:text-[45px]">
          Have a project in mind?
        </h2>
        <p className="relative mt-4 max-w-[34rem] text-lg text-[#7981A3]">
          Tell us what you are building, whether it is a mint contract, an audit
          before launch or a full NFT drop with its site and backend.
        </p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <FilledButton text="Email us" href={`mailto:${site.email}`} />
          <OutlineButton text="Message us on X" href={site.twitter} />
        </div>
        <a
          href={`mailto:${site.email}`}
          className="relative mt-6 text-sm text-[#565F8F] transition hover:text-white"
        >
          {site.email}
        </a>
      </div>
    </div>
  )
}

export default Contact
