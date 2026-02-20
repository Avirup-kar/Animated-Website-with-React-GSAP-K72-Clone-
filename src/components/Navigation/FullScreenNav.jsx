import React, { useRef } from 'react'

const FullScreenNav = () => {
    const colorChageRef = useRef(null)
  return (
    <div className='h-screen bg-black w-full absolute z-20 flex flex-col justify-center'>
      
      <div>    
        <div className='uppercase cursor-pointer relative flex flex-col justify-center items-center w-full text-white text-[8vw] font-[font2] border-y border-gray-500'>
         <h1 className='leading-[0.8] mt-3'>Projets</h1>
         <div className='flex items-center justify-center'>
            <div ref={colorChageRef} className='moveX flex absolute top-0 leading-[0.8] justify-center pt-3 items-center gap-8 bg-[#D3FD50] text-black'>
              <h2 className='whitespace-nowrap'>Pour Tout voir</h2>
              <img className='h-[6vw] w-[17vw] shrink-0 rounded-full mb-3' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
              <h2 className='whitespace-nowrap'>Pour Tout voir</h2>
              <img className='h-[6vw] w-[17vw] shrink-0 rounded-full mb-3' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
            </div>

            <div ref={colorChageRef} className='moveX flex absolute top-0 leading-[0.8] justify-center pt-3 items-center gap-8 bg-[#D3FD50] text-black'>
              <h2 className='whitespace-nowrap'>Pour Tout voir</h2>
              <img className='h-[6vw] w-[17vw] shrink-0 rounded-full mb-3' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
              <h2 className='whitespace-nowrap'>Pour Tout voir</h2>
              <img className='h-[6vw] w-[17vw] shrink-0 rounded-full mb-3' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
            </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav

