import React from 'react'
import DryerHeader from '../component/dryerrepair/DryerHeader'
import DryerServices from '../component/dryerrepair/DryerServices'
import WhyChooseDryer from '../component/dryerrepair/WhyChooseDryer'

export default function Dryer() {
  return (
    <div>
      <DryerHeader/>
      <DryerServices/>
      <WhyChooseDryer/>
    </div>
  )
}
