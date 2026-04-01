import React from 'react'
import FridgeHero from '../component/fridgeservices/FridgeHero'
import FridgeAppliances from '../component/fridgeservices/FridgeAppliances'

function FridgeServicesPage() {
  return (
    <div className='overflow-hidden'>
      <FridgeHero/>
      <FridgeAppliances/>
    </div>
  )
}

export default FridgeServicesPage
