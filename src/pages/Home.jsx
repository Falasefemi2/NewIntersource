import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar, Hero, WhySection, ChooseSection, LabourSection, RangeSection, PartnerSection, QuoteSection, FooterSection, AboutMain } from '../components'

const Home = () => {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate('/home')
  }
  return (
    <div onLoad={handlePage()}>
    <Navbar />
    <Hero />
    <WhySection />
    <ChooseSection />
    <LabourSection />
    <RangeSection />
    <PartnerSection />
    <QuoteSection />
    <FooterSection />
    <AboutMain />
    </div>
  )
}

export default Home