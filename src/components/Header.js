// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
`;

const NavLink = styled.a`
  color: #61dafb;
  margin: 0 1rem;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #21a0f6;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Right Mazolo</h1>
      <nav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
