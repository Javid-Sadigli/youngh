import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    user_type: 'mentee', 
    // description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:5000/api/auth/register?user_type=${formData.user_type}`;
      const response = await axios.post(url, formData);
  
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert('User registered successfully!');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('error');
    }
  };
  
  

  return (
    <div className="register-page">
      <div className="logo">
        <Link to='/'>YOUNGH</Link>
      </div>
      <div className="register-component">
        <h2 className='p'>Create an account</h2>
        <div className="have p">
          Already have an account? <Link className='p' to='/login'>Log in</Link>
        </div>
        <form className='authform' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className='p'>User name</label>
            <input className='p' type="text" id="username" name="username" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email" className='p'>Email address</label>
            <input className='p' type="email" id="email" name="email" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password" className='p'>Password</label>
            <input className='p' type="password" id="password" name="password" required onChange={handleChange} />
            <small className='p'>Use 8 or more characters with a mix of letters, numbers & symbols</small>
          </div>
          {/* {formData.user_type === 'mentor' && (
            <div className="form-group">
              <label htmlFor="description" className='p'>Description</label>
              <textarea className='p' id="description" name="description" onChange={handleChange}></textarea>
            </div>
          )} */}
          <div className="terms">
            <p className='p'>
              By creating an account, you agree to our <Link className='p' to="/terms">Terms of use</Link> and <Link className='p' to="/privacy">Privacy Policy</Link>
            </p>
          </div>
          <button className='p' type="submit">Create an account</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
