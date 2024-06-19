import React from 'react'
import Header from '../components/headerComponents/Header'
import HeroSection from '../components/HomePageComponents/HeroSection'
import AboutSection from '../components/HomePageComponents/AboutSection'
import Mentors from '../components/HomePageComponents/Mentors'
import TopMentors from '../components/HomePageComponents/TopMentors'
import Footer from '../components/footerComponents/Footer'

const HomePage = () => {
  return (
    <>
        <Header/>
        <main>
          <HeroSection/>
          <AboutSection/>
          <Mentors/>
          <TopMentors/>
        </main>
        <Footer/>
    </>
  )
}

export default HomePage