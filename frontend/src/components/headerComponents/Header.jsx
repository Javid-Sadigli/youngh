import React from 'react';
import Instagram from '../../assets/images/Insta.svg';
import Facebook from '../../assets/images/facebook.svg';

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
          <div className="logo">YOUNGH</div>
          <div className="auth-wrapper">
            <div className="login-btn auth-btn">LOG IN</div>
            <div className="signup-btn auth-btn">SIGN UP</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
