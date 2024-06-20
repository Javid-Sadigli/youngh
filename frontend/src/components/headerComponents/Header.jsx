import React from 'react';
import Instagram from '../../assets/images/Insta.svg';
import Facebook from '../../assets/images/facebook.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='main-header'>
      <div className="header-top">
        <nav className='navigation'>
          <div></div>
          <ul>
            <li>
              <img src={Instagram} alt="Instagram" />
            </li>
            <li>
              <img src={Facebook} alt="Facebook" />
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-bottom">
        <div className="container">
          <Link to='/home' className="logo">YOUNGH</Link>
          <div className="auth-wrapper">
            <div className="login-btn auth-btn"><Link to='/login'>LOG IN</Link></div>
            <div className="signup-btn auth-btn"><Link to='/signup'>SIGN UP</Link></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
