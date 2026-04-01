import React from 'react'
import FridgeHero from '../component/fridgeservices/FridgeHero'
import FridgeAppliances from '../component/fridgeservices/FridgeAppliances'
import OurTestimonials from '../component/fridgeservices/OurTestimonials'
import Availability from '../component/fridgeservices/Availability'

function FridgeServicesPage() {
  return (
    <div className='overflow-hidden'>
      <FridgeHero/>
      <FridgeAppliances/>
      <OurTestimonials/>
      <Availability/>
    </div>
  )
}

export default FridgeServicesPage
