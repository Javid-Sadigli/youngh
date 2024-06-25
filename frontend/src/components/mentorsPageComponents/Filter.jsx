import React, { useState, useEffect } from 'react';
import { skills, jobTitles, jobCategories } from '../../data/mentorFilterData';
import { useAuth } from '../../context/AuthContext'; 

const Filter = () => {
  const { 
    selectedSkills, 
    setSelectedSkills, 
    selectedJobTitles, 
    setSelectedJobTitles, 
    selectedJobCategories, 
    setSelectedJobCategories 
  } = useAuth();

  const [filteredSkills, setFilteredSkills] = useState([]);
  const [filteredJobTitles, setFilteredJobTitles] = useState([]);
  const [filteredJobCategories, setFilteredJobCategories] = useState([]);

  const [showMoreSkills, setShowMoreSkills] = useState(false);
  const [showMoreJobTitles, setShowMoreJobTitles] = useState(false);
  const [showMoreJobCategories, setShowMoreJobCategories] = useState(false);

  useEffect(() => {
    setFilteredSkills(skills.slice(0, 10));
    setFilteredJobTitles(jobTitles.slice(0, 10));
    setFilteredJobCategories(jobCategories.slice(0, 10));
  }, []);

  const handleSearch = (e, setFilteredOptions, options, setSelectedOptions) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilteredOptions(options.filter(option => option.toLowerCase().includes(searchTerm)).slice(0, 10));
  };

  const handleShowMore = (category) => {
    switch (category) {
      case 'skills':
        setFilteredSkills(skills.slice(0, filteredSkills.length + 10));
        setShowMoreSkills(true);
        break;
      case 'jobTitles':
        setFilteredJobTitles(jobTitles.slice(0, filteredJobTitles.length + 10));
        setShowMoreJobTitles(true);
        break;
      case 'jobCategories':
        setFilteredJobCategories(jobCategories.slice(0, filteredJobCategories.length + 10));
        setShowMoreJobCategories(true);
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (e, category, setSelectedOptions) => {
    const option = e.target.value;
    if (e.target.checked) {
      setSelectedOptions(prevSelected => prevSelected ? `${prevSelected}-${formatOption(option)}` : formatOption(option));
    } else {
      setSelectedOptions(prevSelected => prevSelected.split('-').filter(item => item !== formatOption(option)).join('-'));
    }
  };

  const formatOption = (option) => {
    return option.replace(/\s+/g, '_'); // Replace all spaces with underscores
  };

  const renderCheckboxList = (category, options, selectedOptions, setSelectedOptions) => {
    return (
      <>
        {options.map((option, index) => (
          <div key={index} className="checkbox-item">
            <input
              type="checkbox"
              id={`${category}-${index}`}
              name={category}
              value={option}
              checked={selectedOptions.split('-').includes(formatOption(option))}
              onChange={(e) => handleCheckboxChange(e, category, setSelectedOptions)}
            />
            <label htmlFor={`${category}-${index}`}>{option}</label>
          </div>
        ))}
        {category === 'skills' && !showMoreSkills && skills.length > filteredSkills.length && (
          <button onClick={() => handleShowMore('skills')}>Show More</button>
        )}
        {category === 'jobTitles' && !showMoreJobTitles && jobTitles.length > filteredJobTitles.length && (
          <button onClick={() => handleShowMore('jobTitles')}>Show More</button>
        )}
        {category === 'jobCategories' && !showMoreJobCategories && jobCategories.length > filteredJobCategories.length && (
          <button onClick={() => handleShowMore('jobCategories')}>Show More</button>
        )}
      </>
    );
  };

  return (
    <div className='filter'>
      <div className="filter-category">
        <h3>Skills</h3>
        <input
          type="text"
          placeholder="Search for skills"
          onChange={(e) => handleSearch(e, setFilteredSkills, skills, setSelectedSkills)}
        />
        <div className="checkbox-list">
          {renderCheckboxList('skills', filteredSkills, selectedSkills, setSelectedSkills)}
        </div>
      </div>
      <div className="filter-category">
        <h3>Job Titles</h3>
        <input
          type="text"
          placeholder="Search for job titles"
          onChange={(e) => handleSearch(e, setFilteredJobTitles, jobTitles, setSelectedJobTitles)}
        />
        <div className="checkbox-list">
          {renderCheckboxList('jobTitles', filteredJobTitles, selectedJobTitles, setSelectedJobTitles)}
        </div>
      </div>
      <div className="filter-category">
        <h3>Job Categories</h3>
        <input
          type="text"
          placeholder="Search for job categories"
          onChange={(e) => handleSearch(e, setFilteredJobCategories, jobCategories, setSelectedJobCategories)}
        />
        <div className="checkbox-list">
          {renderCheckboxList('jobCategories', filteredJobCategories, selectedJobCategories, setSelectedJobCategories)}
        </div>
      </div>
    </div>
  );
};

export default Filter;
