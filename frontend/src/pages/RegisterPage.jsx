import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-component">
        <div className="logo">
        <Link to='/home' >
          YOUNGH
        </Link>
        </div>  
        <h2 className='p'>Create an account</h2>
        <div className="have p">
          Already have an account? <Link className='p' to='/login'>Log in</Link>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="username" className='p'>User name</label>
            <input className='p' type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email p">Email address</label>
            <input className='p' type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password p">Password</label>
            <input className='p' type="password" id="password" name="password" required />
            <small className='p'>Use 8 or more characters with a mix of letters, numbers & symbols</small>
          </div>
          <div className="terms">
            <p className='p'>
              By creating an account, you agree to our <Link className='p' to="/terms">Terms of use</Link> and <Link className='p' to="/privacy">Privacy Policy</Link>
            </p>
          </div>
          <button className='p' type="submit">Create an account</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
