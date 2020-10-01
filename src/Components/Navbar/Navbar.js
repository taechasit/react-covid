import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Navbarmain>
      <h1>Covid Global Cases</h1>
    </Navbarmain>
  );
};

const Navbarmain = styled.nav`
  z-index: 3;
  height: 60px;
  width: 80%;
  margin: 0 10%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: transparent;
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 35px;
    cursor: pointer;
    color: #1d1d1d;
    font-family: Alata, sans-serif;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #1d1d1d;
      text-shadow: 2px 2px 20px #464646;
    }
  }
`;

export default Navbar;
