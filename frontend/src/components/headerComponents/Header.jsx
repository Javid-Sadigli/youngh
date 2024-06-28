import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = ({ position }) => {
  const { user, logout } = useAuth();

  return (
    <header className='header' style={{ position: 'fixed' }} >
      <div className="container">
        <div className="logo"><Link to='/'>YOUNGH</Link></div>
        <nav className='navigation'>
          <ul>
            <li><Link to='/mentors'>Browse all Mentors</Link></li>
            {user ? (
              <>
                <li><Link to='/edit'>Edit</Link></li>
                <li>Hello, {user.username}</li>
                <li><Link onClick={logout}>Log out</Link></li>
              </>
            ) : (
              <li><Link to='/login'>Log in</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
