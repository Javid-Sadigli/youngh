import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const { formData, handleChange, login, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login();
  };

  return (
    <div className="login-page">
      <div className="logo">
        <Link to='/'>YOUNGH</Link>
      </div>
      <div className="login-component">
        <h2 className='p'>Log in</h2>
        {error && <div className="error">{error}</div>}
        <p className='p'>
          Don't have an account? <Link className='p' to='/signup'>Create one</Link>
        </p>
        <form className='authform' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className='p'>User name</label>
            <input type="text" onChange={handleChange} className='p' id="username" name="username" value={formData.username} required autoComplete="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className='p'>Password</label>
            <input type="password" onChange={handleChange} className='p' id="password" name="password" value={formData.password} required autoComplete="current-password" />
            <small><Link className='p'>Forgot password?</Link></small>
          </div>
          <button type="submit" className='p'>Log in</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
