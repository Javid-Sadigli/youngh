import React from 'react';
import MentorsData from '../../data/MentorsData';
import briefcase from '../../assets/images/briefcase.svg';
import { Link } from 'react-router-dom';

const Mentors = () => {
  return (
    <section className='mentors-section'>
      <div className="mentors-content">
        <h2 className='h2Gray'>Our Mentors</h2>
        <div className="mentors">
          {MentorsData.map((mentor) => (
            <div className="mentor" key={mentor.id}>
              <img className='profile' src={mentor.imgSrc} alt="mentor img" />
              <h4>{mentor.name}</h4>
              <div className="payment">
                <p>Mentorship</p>
                <p>{mentor.payment}</p>
              </div>
              <div className="workplace">
                <div className="work">
                  <img src={briefcase} alt="case icon" />
                  <p>{mentor.company}</p>
                </div>
                <p>{mentor.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className='blueBtn'><Link to='/mentors'>EXPLORE ALL</Link></button>
        <br />
      </div>
    </section>
  );
}

export default Mentors;
