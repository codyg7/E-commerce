import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
display: flex;
justify-content: space-around;
width: 30%;
}

a {
color: rgb(226, 226, 226);
text-decoration: none;
letter-spacing: 3px;
font-weight: bold;
font-size: 14px;
padding: 18px 10px;
}

li {
list-style: none;
}

@media (max-width: 768px) {
  flex-flow: column nowrap;
  background-color: #0D2538;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  }

  .nav--links li {
    // opacity: 0;
    color: #fff;
  }
}
`;

export const Rightnav = ({ open }) => {
  return (
    <div>
      <Ul open={open}>
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
      </Ul>
    </div>
  );
};
