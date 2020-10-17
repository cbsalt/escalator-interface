import styled from 'styled-components';

import nature from '../../assets/nature.png';
import daily from '../../assets/daily.png';
import together from '../../assets/together.png';
import analysis from '../../assets/analysis.png';
import pictures from '../../assets/pictures.png';

export const Container = styled.div`
  padding: 20px;
  max-width: 1450px;
  margin: auto;

  header {
    color: #373737;
    h2 {
      font-size: 44px;
      font-weight: 600;
    }
    h3 {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;

  > div {
    background-color: #fff;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      height: 380px;
    }

    div {
      position: relative;
      padding: 20px;

      p {
        margin: 0;
        color: #fff;

        strong {
          font-size: 44px;
          font-weight: 600;
          display: block;
        }

        small {
          font-size: 18px;
          font-weight: 600;
          display: block;
        }
      }

      @media screen and (min-width: 768px) {
        padding: 38px;

        &:hover {
          transform: scale(1.02);
          transition: 0.25s;
          cursor: pointer;
        }
      }
    }

    & + div {
      margin-top: 20px;
    }

    &.first-line {
      #nature {
        background: url(${nature}) no-repeat center top;
        background-size: cover;

        @media screen and (min-width: 768px) {
          width: 30%;
          margin-right: 20px;
        }
      }

      #daily {
        background: url(${daily}) no-repeat center top;
        background-size: cover;
        margin-top: 20px;

        @media screen and (min-width: 768px) {
          width: 70%;
          margin-top: 0;
        }
      }
    }

    &.second-line {
      #together {
        background: url(${together}) no-repeat center top;
        background-size: cover;

        p {
          margin-top: 0px;
        }

        @media screen and (min-width: 768px) {
          width: 100%;

          p {
            position: relative;
            top: 100px;
          }
        }
      }
    }

    &.third-line {
      #analysis {
        background: url(${analysis}) no-repeat center center;
        background-size: cover;

        @media screen and (min-width: 768px) {
          width: 70%;

          p {
            text-align: right;
          }
        }
      }

      #pictures {
        background: url(${pictures}) no-repeat center top;
        background-size: cover;
        margin-left: 0;
        margin-top: 20px;

        @media screen and (min-width: 768px) {
          width: 30%;
          margin-left: 20px;
          margin-top: 0;
        }
      }
    }
  }
`;
