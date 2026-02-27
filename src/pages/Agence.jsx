import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react'
import AgencebottomAnimation from '../components/agenece/AgencebottomAnimation';
import Middle from '../components/agenece/Middle';

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

    gsap.from(imageDivRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.7,
        ease: "power3.in"
    })

    gsap.to(imageDivRef.current,{
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 25%',
        end: 'top -133%',
        pin: true,
        scrub: 1,
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
        <div ref={imageDivRef} className='h-55 w-37 lg:h-75 lg:w-57 overflow-hidden absolute rounded-3xl top-45 left-[30vw] bg-amber-800'>
         <img ref={imageRef} className='h-full w-full object-cover' alt="" />
        </div>
        <div className=' relative font-[font2]'>
         <div className='mt-[57vh]'>
           <h1 className='text-[20vw] uppercase leading-[17vw] text-center'>Soixan7e<br/>Douze</h1>
         </div>

         <div className='pl-[40%] pr-10'>
           <p className='text-[3.5vw] font-[font2] leading-[3.5vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
         </div>
        </div>
      </div>

   {/* mid section */}
      <div className='section2 relative font-[font2] pt-28 h-[90vh]'>
        <section className=" ext-black px-6 md:px-16 py-20">

      {/* TOP ROW */}
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-24">

        {/* Left Title */}
        <h2 className="text-xl md:text-2xl font-medium">
          Expertise
        </h2>

        {/* Right List */}
        <div className="text-xs md:text-xl lg:text-2xl leading-5 font-medium space-y-2">
          <p>Stratégie</p>
          <p>Publicité</p>
          <p>Branding</p>
          <p>Design</p>
          <p>Contenu</p>
        </div>

       </div>

       {/* BOTTOM TEXT GRID */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-lg md:text-xl leading-relaxed font-medium">

        <p>
          Nos projets_ naissent dans l’humilité, grandissent dans la curiosité
          et vivent grâce à la créativité sous toutes ses formes.
        </p>

        <p>
          Notre création_ bouillonne dans un environnement où le talent a le
          goût d’exploser. Où on se sent libre d’être la meilleure version de
          soi-même.
        </p>

        <p>
          Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
          participe à bâtir une agence dont on est fiers.
        </p>

       </div>

       </section>
      </div>

      {/* afteMidSection */}
       <Middle />

       {/* animation div */}
       <AgencebottomAnimation />
    </div>
  )
}

export default Agence
