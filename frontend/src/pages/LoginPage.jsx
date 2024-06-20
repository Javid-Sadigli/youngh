import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="logo">
        <Link to='/home' >
        YOUNGH
        </Link>
      </div>
      <div className="login-component">
        <h2 className='p'>Log in</h2>
        <p className='p'>
          Don't have an accaunt? <Link className='p' to='/signup'>Create one</Link>
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="email" className='p'>Email address</label>
            <input type="email" className='p' id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className='p'>Password</label>
            <input type="password" className='p' id="password" name="password" required />
            <small><Link className='p'>Forgot password?</Link></small>
          </div>
          <button type="submit" className='p'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
