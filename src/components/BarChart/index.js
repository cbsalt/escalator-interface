import React, { useRef, useState, useEffect } from 'react';

import { Container, Bar, WrapperBar } from './styled';
import bars from './barValues';

function BarChart() {
  const progressElement = useRef(null);
  const [animate, setAnimate] = useState(false);

  function checkPositionAndAnimate() {
    const positionFromTop =
      progressElement.current.getBoundingClientRect().top + 150;

    if (positionFromTop - window.innerHeight <= 0) {
      setAnimate(true);
    }
  }

  useEffect(() => {
    checkPositionAndAnimate();

    window.addEventListener('scroll', checkPositionAndAnimate);
  }, []);

  return (
    <Container>
      <div className="wrapper-bars">
        <div className="title">
          <strong>growth plans</strong>
          <small>take your business to the next level</small>
        </div>
        <WrapperBar ref={progressElement} animate={animate}>
          {bars.map((bar) => (
            <Bar height={bar.sizebar} key={bar.cost}>
              <div className="plans">
                <h3>{bar.cost}</h3>
                <h4>{bar.hours}</h4>
              </div>
              <div className="bars">
                <div className="progress">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Bar>
          ))}
        </WrapperBar>
      </div>
    </Container>
  );
}

export default BarChart;
