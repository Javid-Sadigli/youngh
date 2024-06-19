import React from 'react';
import { Link } from 'react-router-dom';
import SpecialMentorsData from '../../data/SpecialMentorsData';

const TopMentors = () => {
  return (
    <section className='specialMentors-section'>
      <div className="container">
        <div className="mentor-content">
          <h2 className="h2Gray">Mentors from top companies</h2>
          <div className="mentors">
            {SpecialMentorsData.map((mentor) => (
              <Link key={mentor.id} className="mentor" to={mentor.linkUrl}>
                <img src={mentor.imgSrc} alt={`${mentor.name} img`} />
                <div className="mentor-info">
                  <div className="mentor-name">{mentor.name}</div>
                  <div className="mentor-speciality">{mentor.speciality}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopMentors;
