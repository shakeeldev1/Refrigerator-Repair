import React from 'react'
import HomeHeader from '../home/HomeHeader'
import WhyChooseUs from '../home/WhyChooseUs'
import Repairinghub from '../home/Repairinghub'
import ExpertSection from '../home/ExpertSection'
import Quality from '../home/Quality'
import GallerySection from '../home/GallerySection'
import PremiumService from '../home/PremiumService'
import Subscribe from '../home/Subscribe'

export default function Home() {
  return (
    <div>
      <HomeHeader/>
      <ExpertSection/>
      <WhyChooseUs/>
      <Quality/>
      <Repairinghub/>
      <GallerySection/>
      <PremiumService/>
      <Subscribe/>
    </div>
  )
}
