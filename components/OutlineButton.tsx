import React, { FC } from 'react'

const OutlineButton: FC<{ text: string; href: string }> = ({ text, href }) => {
  return (
    <a
      href={href}
      className="inline-flex h-[56px] w-[204px] items-center justify-center rounded-[5px] border border-[#00D2EF] text-sm font-medium text-[#00D2EF] transition hover:bg-[#00D2EF]/10"
    >
      {text}
    </a>
  )
}
export default OutlineButton
