import React from "react";
import { Link } from "react-router-dom";

const footer = (props) => {
  return (
    <footer id='main--footer'>
      <div>
        <ul className='main--footer--footerpages'>
          <li>
            <Link to='/' className='footer--links'>
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to='/products' className='footer--links'>
              {" "}
              Products{" "}
            </Link>
          </li>
          <li>
            <Link to='/contact' className='footer--links'>
              {" "}
              Contact{" "}
            </Link>
          </li>
        </ul>
        <p className='footer--copyright'>
          Ecommerce &copy; 2020, All Rights Reserved
        </p>
        <div className='footer--social'>
          <a
            className='footer--social-icon'
            href='https://www.facebook.com/'
            rel='noopener'
          >
            <i className='fab fa-facebook-f'></i>
          </a>
          <a
            className='footer--social-icon divider'
            href='https://www.instagram.com/'
            rel='noopener'
          >
            <i className='fab fa-instagram'></i>
          </a>
          <a
            className='footer--social-icon'
            href='https://www.linkedin.com/'
            rel='noopener'
          >
            <i className='fab fa-linkedin-in'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
