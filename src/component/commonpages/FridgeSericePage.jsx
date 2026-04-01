import React from 'react'
import FridgeHero from '../fridgeservices/FridgeHero'
import FridgeAppliances from '../fridgeservices/FridgeAppliances'


function FridgeServicesPage() {
  return (
    <div className='overflow-hidden'>
      <FridgeHero/>
      <FridgeAppliances/>
    </div>
  )
}

export default FridgeServicesPage
