import React from 'react'
import AboutHead from '../about/AboutHead'
import AboutUs from '../about/AboutUs'
import CompanyStory from '../about/CompanyStory'
import OurExperties from '../about/OurExperties'
import OurProcesses from '../about/OurProcesses'


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
