import React from 'react'
import Instagram from '../../assets/images/Insta.svg';
import Linkedin from '../../assets/images/linkedin.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="f1 footer-col">
          <h2>About</h2>
          <p>YOUNGH is a website-based video conferencing platform 
            where you can enroll as either a mentor or a mentee and 
            mentrees pay to schedule a meeting with a mentor and 
            pick a date for the session.
            </p>
            <div className="socials">
              <a href="https://www.instagram.com/youngh.az/" target='_blank'><img src={Instagram} alt="instagram icon" /></a>
              <a href="https://www.linkedin.com/company/youngh"><img src={Linkedin} alt="linkedin icon" /></a>
            </div>
        </div>
        <div className="f2 footer-col">
          <h3>About</h3>
          <nav>
            <ul>
              <li>Menu</li>
              <li>Features</li>
              <li>News & Blogs</li>
              <li>Help & Support</li>
            </ul>
          </nav>
        </div>
        <div className="f3 footer-col">
          <h3>Company</h3>
          <nav>
            <ul>
              <li>How we work</li>
              <li>Terms of service</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </nav>
        </div>
        <div className="f4 footer-col">
          <h3>Contact Us</h3>
          <nav>
            <ul>
              <li>Baku, Azerbaijan</li>
              {/* <li>+1 202-918-2132</li> */}
              <li>younghcommunity@outlook.com</li>
              {/* <li>www.education.com</li> */}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer