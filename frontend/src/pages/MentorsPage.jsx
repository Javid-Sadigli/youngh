import React from 'react'
import Header from '../components/headerComponents/Header'
import Footer from '../components/footerComponents/Footer'
import Filter from '../components/mentorsPageComponents/Filter'

const MentorsPage = () => {
  return (
    <>
        <Header position="absolute" />
        <main>
          <Filter/>
        </main>
        <Footer/>
    </>
  )
}

export default MentorsPage