import React from 'react'
import Header from '../components/header/Header'
import Herosection from '../components/uii/Herosection'
import LiveAuction from '../components/uii/live-auction/LiveAuction'
import SellerSection from '../components/uii/seller-section/SellerSection'
import StepSection from '../components/uii/step-section/StepSection'
import Trending from '../components/uii/trending/Trending'

const Home = () => {
  return (
    <>
      
      <Herosection />
      <LiveAuction />
      <SellerSection />
      <Trending />
      <StepSection />
    </>
  )
}

export default Home