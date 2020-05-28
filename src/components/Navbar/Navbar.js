import React from "react";
import { Link } from "react-router-dom";

import "../Responsivenav/ResNavButton";

const navbar = (props) => {
  return (
    <header>
      <nav className='nav'>
        <div>
          <img
            src='https://pbs.twimg.com/profile_images/796487883305664512/wYqaslIU_400x400.jpg'
            alt=''
            className='logo--img'
          />
        </div>
        <div>
          <ul className='nav--links'>
            <Link to='/'>
              <li>
                <a href='/'> Home </a>
              </li>
            </Link>
            <Link to='/products'>
              <li>
                <a href='/products'> Products </a>
              </li>
            </Link>
            <Link to='/contact'>
              <li>
                <a href='/contact'> Contact </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
