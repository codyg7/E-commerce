import React from "react";
import styled from "styled-components";
import { Burger } from "./Burger";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: black;
  font-family: "Poppins", sans-serif;

  .logo--img {
    height: 10%;
    width: 10%;
    border-radius: 50%;
    display: flex;
    align-content: center;
  }
`;

const Navbar = () => {
  return (
    <header>
      <Nav>
        <div>
          <img
            src='https://pbs.twimg.com/profile_images/796487883305664512/wYqaslIU_400x400.jpg'
            alt=''
            className='logo--img'
          />
        </div>
        <Burger />
      </Nav>
    </header>
  );
};

export default Navbar;
