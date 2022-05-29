import React from 'react'
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

export default function TouchSlider({ team }) {
  return (
    <Flickity className='w-full md:hidden block mt-[40px]' options={{ prevNextButtons: false, groupCells: 1, rightToLeft: true }}>
      {team.map((item, index) =>
        <section key={index} className="object-cover w-[23rem] h-[10rem] bg-[#121424] rounded-[10px] flex items-center ml-8">
          <img src={item.image} alt={item.name} loading='lazy' className='w-[9.875rem] h-[8.3125rem] ml-4 object-cover rounded-[5px]' />
          <section className='ml-4'>
            <p className='text-white text-[22px]'>{item.name}</p>
            <p className='text-[#7981A3] mt-5'>{item.role}</p>
            <div className='flex mt-5 justify-between'>
              <img src='/images/facebook.svg' alt='facebook' loading='lazy' />
              <img src='/images/facebook.svg' alt='facebook' loading='lazy' />
              <img src='/images/facebook.svg' alt='facebook' loading='lazy' />
            </div>
          </section>
        </section>)}
    </Flickity>
  )
}
