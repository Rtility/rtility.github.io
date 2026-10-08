import React, { FC } from 'react'

const FilledButton: FC<{ text: string; href: string }> = ({ text, href }) => {
  return (
    <a
      href={href}
      className="inline-flex h-[56px] w-[204px] items-center justify-center rounded-[5px] border border-[#00D2EF] bg-[#00D2EF] text-sm font-medium text-white transition hover:bg-[#00b8d1]"
    >
      {text}
    </a>
  )
}
export default FilledButton
