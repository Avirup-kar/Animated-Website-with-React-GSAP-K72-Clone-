import React from 'react'
import ProjectCard from '../components/project/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);

  const projects = [
    {
      image1:'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
      iamge2:'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
    },
    {
      image1:'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
      iamge2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
    },
    {
      image1:'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821',
      iamge2:'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479' 
    },
    {
      image1:'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
      iamge2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
    },
    {
      image1:'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
      iamge2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
    },
    {
      image1:'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
      iamge2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
    },
  ]

  useGSAP(function () {
    gsap.from('.hero', {
     height: "35px",
     transformOrigin: "bottom",
      stagger: {
        amount: 2.2
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 83%',
        end: 'top -340%',
        scrub: true
      }
    })
  })

  return (
    <div className='w-full'>
      <div className='pt-[32vh] lg:pt-[52vh] flex'>
        <h2 className='font-[font2] text-[12vw] uppercase leading-[18vh]'>projects</h2>
        <h3 className='font-[font2] text-4xl mb-3'>17</h3>
      </div>

      <div className='lol min-h-[320vh] hidden lg:block p-3'>
        {projects.map((item, index) => {
          return <div key={index} className='hero lg:w-full h-125 lg:flex gap-3 mb-3'>
              <ProjectCard image1={item.image1} iamge2={item.iamge2} />
          </div>
        })}
      </div>

      <div className='min-h-[220vh] w-full relative block lg:hidden p-3'>
        {projects.map((item, index) => {
          return <div key={index} className='w-full flex flex-col h-125 gap-3 mb-3'>
              <ProjectCard image1={item.image1} iamge2={item.iamge2} />
          </div>
        })}
      </div>


      <div className="bg-black text-white min-h-[60vh] flex flex-col justify-between p-6">

      {/* TOP SECTION */}
      <div className="flex select-none font-[font2] justify-between items-start flex-wrap gap-4">

        {/* Social Pills */}
        <div className="flex gap-4 flex-wrap">
          {["FB", "IG", "IN", "BE"].map((item, i) => (
            <div key={i} className="border-2 border-white hover:border-[#D3FD50] rounded-full px-6 py-1 pt-3 leading-[5vh] text-4xl md:text-6xl font-light tracking-wide cursor-pointer hover:text-[#D3FD50] transition-all duration-300">
              {item}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="border-2 border-white hover:border-[#D3FD50] rounded-full leading-[4vh] px-10 py-1 text-5xl md:text-7xl font-light flex items-center gap-6 cursor-pointer hover:text-[#D3FD50] transition-all duration-300">
          CONTACT
          <span className="text-4xl md:text-6xl">▼</span>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm md:text-base mt-20">

        {/* Left */}
        <div className="flex items-center gap-4">
          <span className="text-xl">🌐</span>
          <span>MONTREAL_09:49:03</span>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap justify-center gap-6 text-center">
          <span className="cursor-pointer hover:text-[#D3FD50] hover:underline">
            POLITIQUE DE CONFIDENTIALITÉ
          </span>
          <span className="cursor-pointer hover:text-[#D3FD50] hover:underline">
            AVIS DE CONFIDENTIALITÉ
          </span>
          <span className="cursor-pointer hover:text-[#D3FD50] hover:underline">
            RAPPORT ÉTHIQUE
          </span>
          <span className="cursor-pointer hover:text-[#D3FD50] hover:underline">
            OPTIONS DE CONSENTEMENT
          </span>
        </div>

        {/* Right */}
        <div className="cursor-pointer hover:text-[#D3FD50] hover:underline">
          RETOUR EN HAUT
        </div>

      </div>

      </div>
  </div>
  )
}

export default Project
