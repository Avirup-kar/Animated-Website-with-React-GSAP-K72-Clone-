import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const AgencebottomAnimation = () => {
gsap.registerPlugin(ScrollTrigger);
    const container = useRef()

  useGSAP(() => {

    gsap.to('.midsection', {
      scrollTrigger: {
        trigger: '.mid',
        markers: true,
        start: 'top 0%',
        end: 'top -100%',
        scrub: 1,
        pin: true,
      }
    })

    gsap.to('.aftermidsection', {
      top: '0%',
      scaleX: 1.42,
      scrollTrigger: {
        trigger: '.aftermidsection',
        start: 'top 100%',
        markers: true,
        end: 'top 0%',
        scrub: 2,
      }
    })

    gsap.to('.afterAftermidsection', {
      top: '0%',
      scaleX: 1.42,
      scrollTrigger: {
        trigger: '.aftermidsection',
        start: 'top 0%',
        pin: true,
        markers: true,
        end: 'top -100%',
        scrub: 2,
      }
    })

  }, { scope: container })
  return (
    <div ref={container} className='main flex relative bg-black flex-col w-full items-center min-h-[300vh] overflow-hidden'>
      <div className='mid bg-linear-to-br from-[#2f2f2f] to-[#101010] w-full min-h-[100vh]'>
        <div className='midsection bg-black text-white relative w-full min-h-screen overflow-hidden'>
           hiiii
        </div>
      </div>

    <div className='aftermidsection relative w-full min-h-[100vh]'>
      <div className='bg-red-300 w-full flex flex-col items-center absolute min-h-full py-2 px-10'> 
        oiiii kutta
      </div>
    </div>

    <div className='afterAftermidsection relative w-full min-h-[100vh]'>
      <div className='bg-green-300 w-full flex flex-col items-center absolute min-h-full py-2 px-10'> 
        
      </div>
    </div>
    </div> 
  )
}

export default AgencebottomAnimation
