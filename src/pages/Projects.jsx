import React from 'react'
import ProjectCard from '../components/project/ProjectCard'

const Project = () => {

  const projects = ['https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b', "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e"]

  return (
    <div className='p-3'>
      <div className='pt-[52vh] flex'>
        <h2 className='font-[font2] text-[12vw] uppercase leading-[18vh]'>projects</h2>
        <h3 className='font-[font2] text-4xl mb-3'>17</h3>
      </div>

      <div>
        <ProjectCard />
      </div>
  </div>
  )
}

export default Project
