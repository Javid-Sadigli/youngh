import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const MentorSignPage = () => {
  const { mentorFormData, handleChangeMentor, registerMentor , error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerMentor();
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
          <div className="form-group">
              <label htmlFor="description" className='p'>Description</label>
              <textarea className='p' id="description" name="description" required onChange={handleChangeMentor} value={mentorFormData.description} autoComplete="description" />
          </div>
          <button className='p' type="submit">Create an account</button>
        </form>
      </div>
    </div>
  );
};

export default MentorSignPage;
