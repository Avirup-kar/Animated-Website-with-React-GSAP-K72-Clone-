import React, { useRef } from 'react'

const Agence = () => {

  const imageDivRef = useRef(null)

  return (
    <div>
      <div className='section1'>
        <div ref={imageDivRef} className='h-80 w-60 overflow-hidden absolute rounded-3xl top-45 left-[30vw] bg-red-500'>
         <img className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
        <div className=' relative font-[font2]'>
         <div className='mt-[57vh]'>
           <h1 className='text-[20vw] uppercase leading-[17vw] text-center'>Soixan7e <br />Douze</h1>
         </div>

         <div className='pl-[40%] pr-10'>
           <p className='text-[3.5vw] font-[font2] leading-[3.5vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
         </div>
        </div>
      </div>

      <div className='section2 h-screen'>

      </div>
    </div>
  )
}

export default Agence
