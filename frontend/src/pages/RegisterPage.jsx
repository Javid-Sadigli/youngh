import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RegisterPage = () => {
  const { formData, handleChange, register, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register();
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
            <input className='p' type="text" id="username" name="username" required onChange={handleChange} value={formData.username} autoComplete="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className='p'>Email address</label>
            <input className='p' type="email" id="email" name="email" required onChange={handleChange} value={formData.email} autoComplete="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className='p'>Password</label>
            <input className='p' type="password" id="password" name="password" required onChange={handleChange} value={formData.password} autoComplete="new-password" />
            <small className='p'>Use 8 or more characters with a mix of letters, numbers & symbols</small>
          </div>
          {/* <div className="terms">
            <p className='p'>
              By creating an account, you agree to our <Link className='p' to="/terms">Terms of use</Link> and <Link className='p' to="/privacy">Privacy Policy</Link>
            </p>
          </div> */}
          <button className='p' type="submit">Create an account</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
