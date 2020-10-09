import styled from 'styled-components';

import cover from '../../assets/cover.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(${cover}) no-repeat center center;
  background-size: cover;
  position: relative;
  text-align: center;
  height: 800px;
  align-items: center;
  overflow: hidden;
  padding: 98px 0;

  img {
    height: 152px;
  }

  h1 {
    line-height: 1.4;
    font-size: 76px;
    color: #fff;
    font-weight: 600;
  }

  button {
    width: 19rem;
    height: 4rem;
    background: #fff;
    font-size: 20px;
    font-weight: 600;
    color: #373737;
    border: none;
  }
`;
