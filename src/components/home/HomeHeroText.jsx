import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='text-white font-[font1] text-center pt-3'>
      <div className='text-[9.5vw] uppercase leading-[8.5vw]'>L'étincelle</div>
      <div className='text-[9.5vw] uppercase leading-[8.5vw] flex justify-center'>qui<div className='h-[7vw] w-[16vw] rounded-full overflow-hidden'><Video /></div>génère</div>
      <div className='text-[9.5vw] uppercase leading-[8.5vw]'>la créativité</div>
    </div>
  )
}

export default HomeHeroText