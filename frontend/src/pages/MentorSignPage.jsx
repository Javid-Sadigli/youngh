import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { skills, jobTitles, jobCategories } from '../data/mentorFilterData';

const MentorSignPage = () => {
  const { mentorFormData, handleChangeMentor, registerMentor, error } = useAuth();

  // State for selected options
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [filteredJobTitles, setFilteredJobTitles] = useState([]);
  const [filteredJobCategories, setFilteredJobCategories] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [selectedJobCategory, setSelectedJobCategory] = useState('');
  const [isSkillsVisible, setSkillsVisible] = useState(false);
  const [isJobTitleVisible, setJobTitleVisible] = useState(false);
  const [isJobCategoryVisible, setJobCategoryVisible] = useState(false);
  const [step, setStep] = useState(1);

  // Handle search in dropdown
  const handleSearch = (e, setFilteredOptions, options) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilteredOptions(options.filter(option => option.toLowerCase().includes(searchTerm)));
  };

  // Handle dropdown select
  const handleDropdownSelect = (fieldName, value) => {
    if (fieldName === 'skills' && !selectedSkills.includes(value)) {
      setSelectedSkills([...selectedSkills, value]);
      setSkillsVisible(false);
    } else if (fieldName === 'jobTitles') {
      setSelectedJobTitle(value);
      setJobTitleVisible(false);
    } else if (fieldName === 'jobCategories') {
      setSelectedJobCategory(value);
      setJobCategoryVisible(false);
    }
  };

  // Handle skill removal
  const handleRemoveSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter(item => item !== skill));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      description: mentorFormData.description,
      username: mentorFormData.username,
      password: mentorFormData.password,
      email: mentorFormData.email,
      skills: selectedSkills, // Array of selected skills
      jobTitle: selectedJobTitle,
      jobCategory: selectedJobCategory
    };
    console.log(formData);

    await registerMentor(formData);
  };

  // Handle next step
  const handleNext = () => {
    setStep(step + 1);
  };

  // Handle previous step
  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="register-page">
      <div className="logo">
        <Link to='/'>YOUNGH</Link>
      </div>
      <div className="register-component">
        <h2 className='p'>Create an account</h2>
        {error && <div className="error">{error}</div>}
        <div className="have p">
          Already have an account? <Link className='p' to='/login'>Log in</Link>
        </div>
        <form className='authform' onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div className="form-group">
                <label htmlFor="username" className='p'>User name</label>
                <input className='p' type="text" id="username" name="username" required onChange={handleChangeMentor} value={mentorFormData.username} autoComplete="username" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className='p'>Email address</label>
                <input className='p' type="email" id="email" name="email" required onChange={handleChangeMentor} value={mentorFormData.email} autoComplete="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password" className='p'>Password</label>
                <input className='p' type="password" id="password" name="password" required onChange={handleChangeMentor} value={mentorFormData.password} autoComplete="new-password" />
              </div>
              <button type="button" className='p' onClick={handleNext}>Next</button>
            </>
          )}
          {step === 2 && (
            <>
              <div className="form-group">
                <label htmlFor="skills" className='p'>Skills</label>
                <input
                  className='p'
                  type="text"
                  id="skills"
                  name="skills"
                  onFocus={() => setSkillsVisible(true)}
                  onChange={(e) => handleSearch(e, setFilteredSkills, skills)}
                  autoComplete="off"
                />
                {isSkillsVisible && (
                  <div className="dropdown">
                    {filteredSkills.map((skill, index) => (
                      <div key={index} className="dropdown-item" onClick={() => handleDropdownSelect('skills', skill)}>
                        {skill}
                      </div>
                    ))}
                  </div>
                )}
                <div className="selected-skills">
                  {selectedSkills.map((skill, index) => (
                    <div key={index} className="selected-skill">
                      {skill} <span onClick={() => handleRemoveSkill(skill)}>x</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="jobTitles" className='p'>Job Title</label>
                <input
                  className='p'
                  type="text"
                  id="jobTitles"
                  name="jobTitles"
                  onFocus={() => setJobTitleVisible(true)}
                  onChange={(e) => handleSearch(e, setFilteredJobTitles, jobTitles)}
                  autoComplete="off"
                />
                {isJobTitleVisible && (
                  <div className="dropdown">
                    {filteredJobTitles.map((title, index) => (
                      <div key={index} className="dropdown-item" onClick={() => handleDropdownSelect('jobTitles', title)}>
                        {title}
                      </div>
                    ))}
                  </div>
                )}
                {selectedJobTitle && (
                  <div className="selected-job">
                    Selected Job Title: {selectedJobTitle}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="jobCategories" className='p'>Job Category</label>
                <input
                  className='p'
                  type="text"
                  id="jobCategories"
                  name="jobCategories"
                  onFocus={() => setJobCategoryVisible(true)}
                  onChange={(e) => handleSearch(e, setFilteredJobCategories, jobCategories)}
                  autoComplete="off"
                />
                {isJobCategoryVisible && (
                  <div className="dropdown">
                    {filteredJobCategories.map((category, index) => (
                      <div key={index} className="dropdown-item" onClick={() => handleDropdownSelect('jobCategories', category)}>
                        {category}
                      </div>
                    ))}
                  </div>
                )}
                {selectedJobCategory && (
                  <div className="selected-job">
                    Selected Job Category: {selectedJobCategory}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="description" className='p'>Description</label>
                <textarea className='p' id="description" name="description" required onChange={handleChangeMentor} value={mentorFormData.description} autoComplete="description" />
              </div>
              <button type="button" className='p' onClick={handlePrevious}>Previous</button>
              <button type="submit" className='p'>Create an account</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default MentorSignPage;
