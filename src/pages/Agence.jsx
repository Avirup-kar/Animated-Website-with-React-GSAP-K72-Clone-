import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react'

const Agence = () => {

  const imageDivRef = useRef(null);
   const imageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const imageArray = [
     'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
     'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
     'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
     'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
     'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
     'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
     'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
     'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
     'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
     'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
     'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
     'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
     'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
     'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 25%',
        end: 'top -133%',
        scrub: true,
        pin: true,
        onUpdate: (elem)=>{
          const imageIndex = Math.round(elem.progress * (imageArray.length - 1));
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div>
      <div className='section1'>
        <div ref={imageDivRef} className='h-75 w-57 overflow-hidden absolute rounded-3xl top-45 left-[30vw] bg-amber-800'>
         <img ref={imageRef} className='h-full w-full object-cover' alt="" />
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
