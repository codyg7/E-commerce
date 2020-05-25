import React from "react";

const footer = (props) => {
  return (
    <footer className='main--footer'>
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
            // target='_blank'
            rel='noopener'
          >
            <i class='fab fa-facebook-f'></i>
          </a>
          <a
            className='footer--social-icon divider'
            href='https://www.instagram.com/'
            // target='_blank'
            rel='noopener'
          >
            <i class='fab fa-instagram'></i>
          </a>
          <a
            className='footer--social-icon'
            href='https://www.linkedin.com/'
            // target='_blank'
            rel='noopener'
          >
            <i class='fab fa-linkedin-in'></i>
          </a>
        </div>

        {/* <a className='footer--arrow' href='#'>
          <i class='fas fa-arrow-up'></i>
        </a> */}
      </div>
    </footer>
  );
};

export default footer;
