import React from "react";

const footer = (props) => {
  return (
    <footer id='main--footer'>
      <div>
        <ul className='main--footer--footerpages'>
          <li>
            <a className='footer--links' href='index.html'>
              Home
            </a>
          </li>
          <li>
            <a className='footer--links' href='products.html'>
              Products
            </a>
          </li>
          <li>
            <a className='footer--links' href='contact.html'>
              Contact
            </a>
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
            <i class='fab fa-facebook-f'></i>
          </a>
          <a
            className='footer--social-icon divider'
            href='https://www.instagram.com/'
            rel='noopener'
          >
            <i class='fab fa-instagram'></i>
          </a>
          <a
            className='footer--social-icon'
            href='https://www.linkedin.com/'
            rel='noopener'
          >
            <i class='fab fa-linkedin-in'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
