import React from 'react'

const ProjectCard = () => {
  return (
    <div className='w-full h-130 flex gap-3 mb-3'>
          <div className='w-1/2 cursor-pointer group h-full hover:rounded-[60px] relative overflow-hidden transition-all bg-green-900'>
            <img className='h-full w-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
            <div className='absolute flex justify-center items-center group-hover:bg-black/20 transition-all top-0 left-0 h-full w-full'>
               <h2 className='uppercase text-6xl opacity-0 group-hover:opacity-100  transition-all text-white font-[font1] leading-[7vh] border-2 px-6 pt-2 border-white rounded-full'>Vior le projet</h2>
            </div>
          </div>
          
          <div className='w-1/2 cursor-pointer group h-full hover:rounded-[60px] relative overflow-hidden transition-all bg-green-900'>
            <img className='h-full w-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e" alt="" />
            <div className='absolute flex justify-center items-center group-hover:bg-black/20 transition-all top-0 left-0 h-full w-full'>
               <h2 className='uppercase text-6xl opacity-0 group-hover:opacity-100  transition-all text-white font-[font1] leading-[7vh] border-2 px-6 pt-2 border-white rounded-full'>Vior le projet</h2>
            </div>
          </div>
        </div>
  )
}

export default ProjectCard
