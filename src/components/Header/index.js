import React from 'react';

import logo from '../../assets/logo.png';

import { Container } from './styled';

function Header() {
  return (
    <Container>
      <img src={logo} alt="logotipo" />
      <h1>
        we have ideias to <br /> growth your business
      </h1>
      <button type="button">SEE NOW</button>
    </Container>
  );
}

export default Header;
