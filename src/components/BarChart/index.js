import React from 'react';

import { Container, Bar } from './styled';
import bars from './barValues';

function BarChart() {
  return (
    <Container>
      <div className="wrapper-bars">
        <div className="title">
          <strong>growth plans</strong>
          <small>take your business to the next level</small>
        </div>
        {bars.map((bar) => (
          <Bar height={bar.sizebar}>
            <div className="plans">
              <h3>{bar.cost}</h3>
              <h4>{bar.hours}</h4>
            </div>
            <div className="progress">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Bar>
        ))}
      </div>
    </Container>
  );
}

export default BarChart;
