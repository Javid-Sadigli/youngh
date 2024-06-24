import React from 'react'
import Header from '../components/headerComponents/Header'
import Footer from '../components/footerComponents/Footer'
import FilteredMentors from '../components/mentorsPageComponents/FilteredMentors'

const MentorsPage = () => {
  return (
    <>
        <Header position="absolute" />
        <main>
          <FilteredMentors/>
        </main>
        <Footer/>
    </>
  )
}

export default MentorsPage