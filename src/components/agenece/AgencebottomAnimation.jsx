import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const AgencebottomAnimation = () => {

    useGSAP(function(){
    gsap.to('.midsection', {
         rotate: -20,
         scale: 0.8,
         opacity: -1,
         scrollTrigger: {
          trigger: '.mid',
          markers: true,
          start: 'top 0%',
          end: 'top -400%',
          pin: true,
          scrub: 1,
         }
    })

    gsap.to('.aftermidsection', {
      top: '0%',
      scaleX: 1.42,
      scrollTrigger: {
        trigger: '.main ',
        markers: true,
        start: 'top 0%',
        end: 'top -100%',
        scrub: 2,
        pin: true,
      }
    })
    })

  return (
    <div className='main flex relative bg-black flex-col w-full items-center h-[390vh] xl:h-[300vh] overflow-hidden'>
      <div className='mid bg-gradient-to-br from-[#2f2f2f] to-[#101010] w-full min-h-[120vh]'>
        <div className='midsection bg-black relative w-full min-h-screen overflow-hidden'>
       
        </div>
      </div>

    
      <div className='aftermidsection bg-red-300 w-[70vw] flex flex-col items-center absolute min-h-full  top-[100%] py-2 px-10'> 
        
      </div>
    </div> 
  )
}

export default AgencebottomAnimation
