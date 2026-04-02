import React from 'react'
import GasStoveHero from '../component/gasstove/GasStoveHero'
import ElectricStoveAppliaces from '../component/gasstove/ElectricStoveAppliaces'
import ElectricStoveExperties from '../component/gasstove/ElectricStoveExperties'

function GasStovePage() {
  return (
    <div>
        <GasStoveHero/>
         <ElectricStoveAppliaces/>
         <ElectricStoveExperties/>
    </div>
  )
}

export default GasStovePage
