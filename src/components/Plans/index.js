import React from 'react';

import BarChart from '../BarChart';

import { Container } from './styled';

function Footer() {
  return (
    <Container>
      <div className="wrapper-container">
        <BarChart />
      </div>
    </Container>
  );
}

export default Footer;
