import React, { FC } from 'react'

const OutlineButton:FC<{text:string}> = ({text})=> {
  return (
    <button type="button" className="inline-block font-medium w-[204px] h-[56px] border
     border-[#00D2EF] text-[#00D2EF] text-sm rounded-[5px]">{text}</button>
  )
}
export default OutlineButton