import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './Filter';
import defaultimg from '../../assets/images/default_profile.webp';

const FilteredMentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/mentor/get/filtered/');
        setMentors(response.data.mentors);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderStars = (average) => {
    let stars = '';
    for (let i = 0; i < average; i++) {
      stars += '⭐';
    }
    return stars;
  };

  return (
    <section className='mentorsPage'>
      <Filter />
      <div className="mentor-cards">
        {mentors.map((mentor) => (
          <div className="mentor-card" key={mentor._id}>
            {/* <div className="img-container"> */}
              <img 
                src={`http://localhost:5000/public/profile_pictures/${mentor.username}.webp`} 
                alt={mentor.username} 
                className="mentor-image" 
                onError={(e) => { e.target.onerror = null; e.target.src = defaultimg; }}
              />
            {/* </div> */}
            <div className="mentor-data">
              <h3 className="mentor-name">{mentor.username}</h3>
              <div className="mentor-title">
                Senior Software Engineer
              </div>
              <div className="mentor-rating">
                <span className="stars">{renderStars(mentor.stars.average)}</span>
                <span className="reviews">({mentor.stars.average} reviews)</span>
              </div>
              <p className="mentor-description">
                {mentor.description}
              </p>
              <div className="mentor-tags">
                <span>Graphic Design</span>
                <span>Branding</span>
                <span>Web Design</span>
                <span>Illustrations</span>
                <span>Freelance</span>
                <span>Business</span>
              </div>
              <div className="mentor-price">
                <strong>$20 / session</strong>
              </div>
              <button className="view-profile-btn">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilteredMentors;
