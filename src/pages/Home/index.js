import React from 'react';

import Header from '../../components/Header';
import Categories from '../../components/Categories';
import Plans from '../../components/Plans';

import { Container } from './styled';

function Home() {
  return (
    <Container>
      <Header />
      <Categories />
      <Plans />
    </Container>
  );
}

export default Home;
