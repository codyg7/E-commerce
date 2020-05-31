import React, { useState } from "react";
import styled from "styled-components";
import { Rightnav } from "./Rightnav";

const Styledburger = styled.div`
@media (max-width: 768px) {
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? "grey" : "#fff"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
}

  .burger_line1 {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  .burger_line2 {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }

  .burger_line3 {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
  `;

export const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Styledburger open={open} onClick={() => setOpen(!open)}>
        <div className="burger_line1" />
        <div className="burger_line2" />
        <div className="burger_line3" />
      </Styledburger>
      <Rightnav open={open} />
    </>
  );
};
