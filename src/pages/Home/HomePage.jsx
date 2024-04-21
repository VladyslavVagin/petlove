import React from 'react'
import Hero from '../../components/ForHomePage/Hero/Hero'
import HeroImage from '../../components/ForHomePage/HeroImage/HeroImage'
import { HomePageSection } from './HomePage.styled'

const HomePage = () => {
  return (
    <HomePageSection>
      <Hero/>
      <HeroImage/>
    </HomePageSection>
  )
}

export default HomePage