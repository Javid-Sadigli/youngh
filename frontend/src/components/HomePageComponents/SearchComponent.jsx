import React, { useState, useEffect } from 'react';
import Search from '../../assets/images/search.svg';
import Hand from '../../assets/images/WavingHand.png';

const SearchComponent = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, looking for a mentor?";
  const typingSpeed = 40;
  const pauseDuration = 8000; 

  useEffect(() => {
    let textTimeout, pauseTimeout;
    
    const typeText = (index) => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        textTimeout = setTimeout(() => typeText(index + 1), typingSpeed);
      } else {
        pauseTimeout = setTimeout(() => {
          setText('');
          typeText(0);
        }, pauseDuration);
      }
    };

    typeText(0);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(pauseTimeout);
    };
  }, []);

  return (
    <div className="container">
      <div className="hero-content">
        <div className="hero-info">
          <label htmlFor='search'>{text}</label>
          {text && <img src={Hand} alt="Hand png" />}
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
  );
}

export default SearchComponent;
