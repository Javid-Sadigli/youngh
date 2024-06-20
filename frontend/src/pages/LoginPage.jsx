import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const LoginPage = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:5000/api/auth/login`;
      const anan = formData;
      const response = await axios.post(url, anan);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <div className="login-page">
      <div className="logo">
        <Link to='/' >
        YOUNGH
        </Link>
      </div>
      <div className="login-component">
        <h2 className='p'>Log in</h2>
        <p className='p'>
          Don't have an accaunt? <Link className='p' to='/signup'>Create one</Link>
        </p>
        <form className='authform' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className='p'>User name</label>
            <input type="text" onChange={handleChange} className='p' id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className='p'>Password</label>
            <input type="password" onChange={handleChange} className='p' id="password" name="password" required />
            <small><Link className='p'>Forgot password?</Link></small>
          </div>
          <button type="submit" className='p'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
