import React from 'react';
import { Flip, Fade } from 'react-reveal';

import { Container, WrapperContent } from './styled';

function Main() {
  return (
    <div>
      <Container>
        <header>
          <h2>categories</h2>
          <h3>discover new possibilities to help you today</h3>
        </header>
        <WrapperContent>
          <Flip top>
            <div className="first-line">
              <div id="nature">
                <p>
                  <strong>nature</strong>
                  <small>Lorem ipsum dolor sit amet</small>
                </p>
              </div>
              <div id="daily">
                <p>
                  <strong>daily</strong>
                  <small>Praesent tincidunt consectetur diam</small>
                </p>
              </div>
            </div>
          </Flip>
          <Fade right>
            <div className="second-line">
              <div>
                <p>
                  <strong>together</strong>
                  <small>
                    Vivamus non arcu tincidunt, tempus nunc eu, scelerisque
                    ipsum
                  </small>
                </p>
              </div>
            </div>
          </Fade>
          <Flip bottom>
            <div className="three-line">
              <div id="analysis">
                <p>
                  <strong>analysis</strong>
                  <small>
                    Duis sollicitudin mauris vitae venenatis aliquet
                  </small>
                </p>
              </div>
              <div id="pictures">
                <p>
                  <strong>pictures</strong>
                  <small>Quisque eu nisl purus</small>
                </p>
              </div>
            </div>
          </Flip>
        </WrapperContent>
      </Container>
    </div>
  );
}

export default Main;
