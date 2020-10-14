import styled from 'styled-components';

import nature from '../../assets/nature.png';
import daily from '../../assets/daily.png';
import together from '../../assets/together.png';
import analysis from '../../assets/analysis.png';
import pictures from '../../assets/pictures.png';

export const Container = styled.div`
  padding: 48px;
  max-width: 1450px;
  margin: auto;

  header {
    color: #373737;
    h2 {
      font-size: 48px;
      font-weight: 600;
    }
    h3 {
      font-size: 17px;
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
    height: 318px;
    background-color: #fff;
    display: flex;
    flex-direction: row;

    div {
      position: relative;

      p {
        margin: 20px 0px 0px 32px;
        color: #fff;

        strong {
          font-size: 48px;
          font-weight: 600;
          display: block;
        }

        small {
          font-size: 18px;
          font-weight: 600;
          display: block;
        }
      }
    }

    & + div {
      margin-top: 20px;
    }

    &.first-line {
      #nature {
        background: url(${nature}) no-repeat center top;
        background-size: 100% auto;

        width: 30%;
        margin-right: 20px;
        transition: all 0.25s ease-out;

        &:hover {
          background-size: 110% auto;
          cursor: pointer;
        }
      }

      #daily {
        background: url(${daily}) no-repeat center top;
        background-size: 100% auto;
        width: 70%;
        transition: all 0.25s ease-out;

        &:hover {
          background-size: 110% auto;
          cursor: pointer;
        }
      }
    }

    &.second-line {
      align-items: center;
      background: url(${together}) no-repeat center top;
      background-size: 100% auto;
      transition: all 0.25s ease-out;

      &:hover {
        background-size: 110% auto;
        cursor: pointer;
      }

      p {
        margin-top: 0px;
      }
    }

    &.three-line {
      #analysis {
        background: url(${analysis}) no-repeat center center;
        background-size: 100% auto;
        width: 70%;
        transition: all 0.25s ease-out;

        &:hover {
          background-size: 110% auto;
          cursor: pointer;
        }

        p {
          text-align: right;
          margin-right: 20px;
          margin-left: 0px;
        }
      }

      #pictures {
        background: url(${pictures}) no-repeat center top;
        background-size: 100% auto;
        width: 30%;
        margin-left: 20px;
        transition: all 0.25s ease-out;

        &:hover {
          background-size: 110% auto;
          cursor: pointer;
        }
      }
    }
  }
`;
