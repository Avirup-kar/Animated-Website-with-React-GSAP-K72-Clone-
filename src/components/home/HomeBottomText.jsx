import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center text-white justify-center gap-4.5 mb-2'>
      <Link to={"/projects"} className='text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] px-8 pt-6 pb-0 leading-[4.5vw] uppercase border-3 border-white rounded-full'>Projets</Link>
      <Link to={"/agence"} className='text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] px-8 pt-6 pb-0 leading-[4.5vw] uppercase border-3 border-white rounded-full'>Agence</Link>
    </div>
  )
}

export default HomeBottomText
