import React, { useEffect, useState } from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import Stairs from '../components/common/stairs'

const Home = () => {
  return (
  <div>
    <div>
      <div className='h-screen w-screen bg-red-900 fixed'>
        <Video />
      </div>

      <div className='h-screen w-full relative overflow-hidden flex flex-col justify-between'>
       <HomeHeroText />
       <HomeBottomText />
      </div>
    </div>
  </div>
  )
}

export default Home
