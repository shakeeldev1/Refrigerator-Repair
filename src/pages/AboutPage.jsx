import React from 'react'
import AboutHead from '../component/about/AboutHead'
import AboutUs from '../component/about/AboutUs'
import OurExperties from '../component/about/OurExperties'
import OurProcesses from '../component/about/OurProcesses'
import CompanyStory from '../component/about/CompanyStory'

function AboutPage() {
  return (
    <div className='overflow-hidden'>
      <AboutHead/>
      <AboutUs/>
      <OurExperties/>
      <OurProcesses/>
      <CompanyStory/>
    </div>
  )
}
export default AboutPage
