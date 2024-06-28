import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './Filter';
import defaultimg from '../../assets/images/default_profile.webp';
import { useAuth } from '../../context/AuthContext'; 
// import { jobTitles } from '../../data/mentorFilterData';

const FilteredMentors = () => {
  const [mentors, setMentors] = useState([]);
  const { 
    selectedSkills, 
    selectedJobTitles, 
    selectedJobCategories, 
  } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = { 
          jobTitle: selectedJobTitles,
          jobCategory: selectedJobCategories,
          skills: selectedSkills
        };

        const response = await axios.get('http://localhost:5000/api/mentor/get/filtered/', { params });
        setMentors(response.data.mentors);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedSkills, selectedJobTitles, selectedJobCategories]);

  const renderStars = (average) => {
    let stars = '';
    for (let i = 0; i < average; i++) {
      stars += '⭐';
    }
    return stars;
  };

  return (
    <section className='mentorsPage'>
      <div className="container">
        <Filter />
        <div className="mentor-cards">
          {mentors.map((mentor) => (
            <div className="mentor-card" key={mentor._id}>
              <img 
                src={`http://localhost:5000/public/profile_pictures/${mentor.username}.webp`} 
                alt={mentor.username} 
                className="mentor-image" 
                onError={(e) => { e.target.onerror = null; e.target.src = defaultimg; }}
              />
              <div className="mentor-data">
                <h3 className="mentor-name">{mentor.username}</h3>
                <div className="mentor-title">
                  {mentor.jobTitle}
                </div>
                <div className="mentor-rating">
                  <span className="stars">{renderStars(mentor.stars.average)}</span>
                  <span className="reviews">{mentor.stars.average} 
                    rated by 
                    {/* {people} */}
                  </span>
                </div>
                <p className="mentor-description">
                  {mentor.description}
                </p>
                <div className="mentor-tags">
                  {mentor.skills.map((skill, index) => (
                    <span key={index}>{skill}</span>
                  ))}
                </div>
                <div className="mentor-price">
                  <strong>$20 / session</strong>
                </div>
                <button className="view-profile-btn">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilteredMentors;
