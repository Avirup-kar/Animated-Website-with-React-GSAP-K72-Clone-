import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const AgencebottomAnimation = () => {
gsap.registerPlugin(ScrollTrigger);
    const container = useRef()

  useGSAP(() => {

    gsap.to('.aftermidsection', {
      top: '0%',
      scaleX: 1.1,
      scaleY:1.1,
      scrollTrigger: {
        trigger: '.aftermidsection',
        start: 'top 100%',
        end: 'top 0%',
      }
    })

    gsap.to('.afterAftermidsection', {
      top: '0%',
      scaleX: 1.1,
      scaleY:1.1,
      scrollTrigger: {
        trigger: '.aftermidsection',
        start: 'top 0%',
        pin: true,
        end: 'top -100%',
      }
    })

    gsap.to('.lastsection', {
      top: '0%',
      scaleX: 1.1,
      scaleY:1.1,
      scrollTrigger: {
        trigger: '.afterAftermidsection',
        start: 'top 0%',
        pin: true,
        end: 'top -100%',
      }
    })

  }, { scope: container })
  return (
    <div ref={container} className='main flex relative bg-black flex-col w-full items-center overflow-hidden'>

    <div className='aftermidsection relative w-full min-h-screen'>
      <div className='bg-red-300 w-full flex flex-col items-center absolute min-h-full'>   
         <img className='w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105' src="https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757" alt="" />
      </div>
    </div>

    <div className='afterAftermidsection relative w-full min-h-screen'>
      <div className='bg-green-300 w-full flex flex-col items-center absolute min-h-full'> 
        <img className='w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105' src="https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda" alt="" />
      </div>
    </div>

    <div className='lastsection relative w-full min-h-screen'>
      <div className='bg-yellow-300 w-full flex flex-col items-center absolute min-h-full'> 
        <img className='w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105' src="https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821" alt="" />
      </div>
    </div>
    </div> 
  )
}

export default AgencebottomAnimation
