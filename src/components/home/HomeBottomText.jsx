import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center text-white justify-center gap-4.5 mb-10 lg:mb-2'>
      <p className='absolute w-78 lg:w-88 right-0 px-4 bottom-32 lg:bottom-40 text-sm lg:text-[2vh]'>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>
      <Link to={"/projects"} className='text-[6.5vw] select-none hover:border-[#D3FD50] hover:text-[#D3FD50] px-8 pt-1 lg:pt-6 pb-0 leading-[9.5vw] lg:leading-[4.5vw] uppercase border-3 border-white rounded-full'>Projets</Link>
      <Link to={"/agence"} className='text-[6.5vw] select-none hover:border-[#D3FD50] hover:text-[#D3FD50] px-8 pt-1 lg:pt-6 pb-0 leading-[9.5vw] lg:leading-[4.5vw] uppercase border-3 border-white rounded-full'>Agence</Link>
    </div>
  )
}

export default HomeBottomText
