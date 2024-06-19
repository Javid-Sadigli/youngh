import React from 'react'
import People from './People';
import SearchComponent from './SearchComponent';

const HeroSection = () => {
  return (
    <section className='hero-component'>
      <People/>
      <SearchComponent/>
    </section>
  )
}

export default HeroSection;
