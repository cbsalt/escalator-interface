import styled from 'styled-components';
import { darken } from 'polished';

import cover from '../../assets/cover.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(${cover}) no-repeat center center;
  background-size: cover;
  position: relative;
  text-align: center;
  height: 700px;
  align-items: center;
  overflow: hidden;
  padding: 64px 0;

  img {
    height: 152px;
  }

  h1 {
    line-height: 1.4;
    font-size: 40px;
    color: #fff;
    font-weight: 600;
  }

  button {
    width: 240px;
    height: 54px;
    background: #fff;
    font-size: 20px;
    font-weight: 600;
    color: #373737;
    border: none;
    transition: all 0.4s;

    &:hover {
      background: ${darken(0.09, '#fff')};
      transform: scale(0.9);
    }
  }

  @media screen and (min-width: 768px) {
    height: 800px;
    padding: 98px 0;
    h1 {
      line-height: 1.4;
      font-size: 76px;
      color: #fff;
      font-weight: 600;
    }

    button {
      width: 304px;
      height: 64px;
    }
  }
`;
