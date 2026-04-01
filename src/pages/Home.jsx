import React from 'react'
import HomeHeader from '../component/home/HomeHeader'
import WhyChooseUs from '../component/home/WhyChooseUs'
import Repairinghub from '../component/home/Repairinghub'
import ExpertSection from '../component/home/ExpertSection'
import Quality from '../component/home/Quality'
import GallerySection from '../component/home/GallerySection'
import PremiumService from '../component/home/PremiumService'
import Subscribe from '../component/home/Subscribe'

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
