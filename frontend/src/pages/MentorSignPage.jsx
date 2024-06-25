import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const MentorSignPage = () => {
  const { mentorFormData, handleChangeMentor, registerMentor, error } = useAuth();

  const skills = [
    "Leadership", "Product Management", "Startup", "Career", "Management",
    "Product Strategy", "Career Growth", "Software Engineering", "Product Design",
    "UX Design", "Interview", "Growth", "Strategy", "Python", "Career Coaching",
    "Marketing", "Machine Learning", "JavaScript", "Entrepreneurship", "Data Science"
  ];

  const jobTitles = [
    "Founder", "Senior Software Engineer", "CEO", "Software Engineer", "CTO",
    "Senior Product Designer", "Senior Product Manager", "Engineering Manager",
    "Product Manager", "Product Designer", "Director", "Director Of Engineering",
    "Staff Software Engineer", "Director Of Product", "Head Of Product",
    "Senior Engineering Manager", "Data Scientist", "UX Designer", "Senior UX Designer",
    "VP Of Engineering"
  ];

  const jobCategories = [
    "Technology", "Business", "Design", "Management", "Data Science", "Marketing", "Engineering"
  ];

  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [filteredJobTitles, setFilteredJobTitles] = useState(jobTitles);
  const [filteredJobCategories, setFilteredJobCategories] = useState(jobCategories);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [selectedJobCategory, setSelectedJobCategory] = useState('');
  const [isSkillsVisible, setSkillVisible] = useState(false);
  const [isJobVisible, setJobVisible] = useState(false);
  const [isJobCategoryVisible, setJobCategoryVisible] = useState(false);
  const [step, setStep] = useState(1);

  const handleSearch = (e, setFilteredOptions, options) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilteredOptions(options.filter(option => option.toLowerCase().includes(searchTerm)));
  };

  const handleDropdownSelect = (fieldName, value) => {
    if (fieldName === 'skills' && !selectedSkills.includes(value)) {
      setSelectedSkills([...selectedSkills, value]);
      setSkillVisible(false);
    } else if (fieldName === 'jobTitles') {
      setSelectedJobTitle(value);
      setJobVisible(false);
    } else if (fieldName === 'jobCategories') {
      setSelectedJobCategory(value);
      setJobCategoryVisible(false);
    }
  };

  const handleRemoveSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter(item => item !== skill));
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const skillsString = selectedSkills.map(skill => skill.replace(/ /g, '_')).join('-');
    const jobTitleString = selectedJobTitle.replace(/ /g, '_');
    const jobCategoryString = selectedJobCategory.replace(/ /g, '_');

    const queryParameters = `skills=${skillsString}&jobTitle=${jobTitleString}&jobCategory=${jobCategoryString}`;
    console.log(queryParameters);
    const formData = {
      description: mentorFormData.description,
      username: mentorFormData.username,
      password: mentorFormData.password,
      email: mentorFormData.email,
    };

    await registerMentor(formData, queryParameters);
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
                  onFocus={() => setSkillVisible(true)}
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
                  onFocus={() => setJobVisible(true)}
                  onChange={(e) => handleSearch(e, setFilteredJobTitles, jobTitles)}
                  autoComplete="off"
                />
                {isJobVisible && (
                  <div className="dropdown">
                    {filteredJobTitles.map((title, index) => (
                      <div key={index} className="dropdown-item" onClick={() => handleDropdownSelect('jobTitles', title)}>
                        {title}
                      </div>
                    ))}
                  </div>
                )}
                {selectedJobTitle && (
                  <div className="selected-jobTitle">
                    {selectedJobTitle} <span onClick={() => setSelectedJobTitle('')}>x</span>
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
                  <div className="selected-jobCategory">
                    {selectedJobCategory} <span onClick={() => setSelectedJobCategory('')}>x</span>
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
