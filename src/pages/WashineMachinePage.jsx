import React from 'react'
import WashinMachineRepair from '../component/washinmaschine/WashinMachineRepair'
import WashingMachineAppliance from '../component/washinmaschine/WashingMachineAppliance'
import WahingMachineExperties from '../component/washinmaschine/WahingMachineExperties'

function WashineMachinePage() {
  return (
    <div className='overflow-hidden'>
      <WashinMachineRepair/>
      <WashingMachineAppliance/>
      <WahingMachineExperties/>
    </div>
  )
}

export default WashineMachinePage
