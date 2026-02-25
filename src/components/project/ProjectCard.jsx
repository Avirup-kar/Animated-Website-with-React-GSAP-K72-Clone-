import React from 'react'

const ProjectCard = ({image1, iamge2}) => {
  return (
    <>
          <div className='w-full lg:w-1/2 cursor-pointer group h-full hover:rounded-[60px] relative overflow-hidden transition-all bg-gray-300'>
            <img className='h-full w-full object-cover' src={image1} alt="" />
            <div className='absolute flex justify-center items-center group-hover:bg-black/20 transition-all top-0 left-0 h-full w-full'>
               <h2 className=" uppercase text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl opacity-0 group-hover:opacity-100 transition-all duration-300 text-white font-[font1] leading-tight md:leading-[6vh] lg:leading-[7vh] border-2 border-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full whitespace-nowrap">Voir le projet</h2>
            </div>
          </div>
          
          <div className='w-full lg:w-1/2 cursor-pointer group h-full hover:rounded-[60px] relative overflow-hidden transition-all bg-green-900'>
            <img className='h-full w-full object-cover' src={iamge2} alt="" />
            <div className='absolute flex justify-center items-center group-hover:bg-black/20 transition-all top-0 left-0 h-full w-full'>
               <h2 className='uppercase text-6xl opacity-0 group-hover:opacity-100  transition-all text-white font-[font1] leading-[7vh] border-2 px-6 pt-2 border-white rounded-full'>Vior le projet</h2>
            </div>
          </div>
    </>
  )
}

export default ProjectCard
