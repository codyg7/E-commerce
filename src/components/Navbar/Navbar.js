import React from "react";

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
            <li>
              <a href='/'> Home </a>
            </li>
            <li>
              <a href='/'> Products </a>
            </li>
            <li>
              <a href='/'> Contact </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
