import React from 'react';
import CardData from '../../data/CardData';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className='about-section'>
        <div className="about-content">
          <h2 className='h2Gray'>How we work</h2>
          <div className="cards">
            {CardData.map((card) => (
              <div className="card" key={card.id}>
                <img src={card.imgSrc} alt="card" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <Link to={card.linkUrl}>{card.linkText}</Link>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}

export default AboutSection;
