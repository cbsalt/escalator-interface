import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

import logo from '../../assets/logo.png';

import { Container } from './styled';

function Header() {
  return (
    <Container>
      <img src={logo} alt="logotipo" />
      <h1>
        we have ideias to <br /> growth your{' '}
        <ReactTypingEffect
          text={['life', 'routine', 'business']}
          displayTextRenderer={(text) => {
            return (
              <h1>
                {text.split('').map((word, i) => {
                  const key = `${i}`;
                  return <span key={key}>{word}</span>;
                })}
              </h1>
            );
          }}
        />
      </h1>
      <button type="button">SEE NOW</button>
    </Container>
  );
}

export default Header;
