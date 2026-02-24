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
        markers: true,
        start: 'top 83%',
        end: 'top -340%',
        scrub: true
      }
    })
  })

  return (
    <div className='p-3'>
      <div className='pt-[52vh] flex'>
        <h2 className='font-[font2] text-[12vw] uppercase leading-[18vh]'>projects</h2>
        <h3 className='font-[font2] text-4xl mb-3'>17</h3>
      </div>

      <div className='lol min-h-[420vh] hidden lg:block'>
      {projects.map((item, index) => {
        return <div key={index} className='hero lg:w-full h-125 lg:flex gap-3 mb-3'>
            <ProjectCard image1={item.image1} iamge2={item.iamge2} />
        </div>
      })}
      </div>

      <div className='min-h-[420vh] relative block lg:hidden'>
      {projects.map((item, index) => {
        return <div key={index} className='lg:w-full flex flex-col h-125 gap-3 mb-3'>
            <ProjectCard image1={item.image1} iamge2={item.iamge2} />
        </div>
      })}
      </div>
  </div>
  )
}

export default Project
