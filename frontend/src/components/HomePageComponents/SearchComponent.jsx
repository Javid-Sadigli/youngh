import React from 'react'
import Search from '../../assets/images/search.svg';
import Hand from '../../assets/images/WavingHand.png';

const SearchComponent = () => {
  return (
    <div className="container">
    <div className="hero-content">
      <div className="hero-info">
        <label htmlFor='search'>Hi, looking for a mentor?</label>
        <img src={Hand} alt="Hand png" />
      </div>
      <div className="hero-search">
        <input 
          id='search'
          type="text"
          placeholder='Search a mentor, skills or role'
        />
        <button>
          <img src={Search} alt="search icon" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default SearchComponent