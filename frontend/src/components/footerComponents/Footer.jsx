import React from 'react'
import Instagram from '../../assets/images/Insta.svg';
import Facebook from '../../assets/images/facebook.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="f1 footer-col">
          <h2>About</h2>
          <p>Lorem Ipsum is simply dummy 
            text of the printing and typesetting 
            industry. Lorem Ipsum has been the 
            industry's standard dummy text ever 
            since the 1500s, when an unknown 
            printer took a galley of type and 
            scrambled it to make a type specimen book.</p>
            <div className="socials">
              <img src={Instagram} alt="instagram icon" />
              <img src={Facebook} alt="facebook icon" />
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
              <li>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</li>
              <li>+1 202-918-2132</li>
              <li>education@mail.com</li>
              <li>www.education.com</li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer