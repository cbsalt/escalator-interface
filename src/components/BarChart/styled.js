import styled, { css } from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
  padding: 20px;

  .wrapper-bars {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 500px;
    position: relative;
    width: 100%;
    margin: auto;

    .title {
      position: absolute;
      top: 0;
      left: 0;
      color: #373737;

      strong {
        font-size: 44px;
        font-weight: 600;
        display: block;
      }

      small {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
`;

export const Bar = styled.div`
  width: 44px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & + div {
    margin-left: 14px;
  }

  @media screen and (min-width: 768px) {
    width: 226px;

    & + div {
      margin-left: 30px;
    }
  }

  .plans {
    height: 130px;
    background-color: #0a54e8;
    padding-left: 16px;
    color: #fff;
    font-weight: 600;
    justify-content: center;
    flex-direction: column;
    line-height: 1.2;
    display: flex;
    opacity: 0;
    position: relative;
    top: -30px;

    @media screen and (min-width: 768px) {
      h3 {
        font-size: 38px;
        font-weight: 600;
      }

      h4 {
        font-size: 22px;
        font-weight: 600;
      }
    }
  }

  .progress {
    height: ${(props) => props.height}px;
    max-height: 0px;
    background-color: #3891ff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #fff;
    font-weight: 700;

    p {
      display: none;
    }

    @media screen and (min-width: 768px) {
      p {
        display: flex;
        margin: 0;
        padding: 0 16px 16px;
        font-size: 13px;
        font-weight: 600;
      }
    }
  }

  @keyframes slideUp {
    0% {
      max-height: 0px;
    }

    100% {
      max-height: ${(props) => props.height}px;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      top: -30px;
    }

    100% {
      opacity: 1;
      top: 0px;
    }
  }
`;

export const WrapperBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 100%;

  .progress {
    ${(props) =>
      props.animate &&
      css`
        animation: slideUp 0.95s linear forwards;
      `}
  }

  @media screen and (min-width: 768px) {
    .plans {
      ${(props) =>
        props.animate &&
        css`
          animation: fadeIn 0.25s linear forwards 1s;
        `}
    }
  }
`;
