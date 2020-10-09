import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
  padding: 48px;

  div {
    display: flex;
    flex-direction: column;
    color: #373737;
    display: flex;

    strong {
      font-size: 48px;
      font-weight: 600;
    }

    small {
      font-size: 17px;
      font-weight: 600;
    }
  }

  .wrapper-bars {
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    height: 500px;
    position: relative;
    width: 100%;
    margin: auto;

    .title {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export const Bar = styled.div`
  width: 14.125rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & + div {
    margin-left: 20px;
  }

  .plans {
    height: 8.125rem;
    background-color: #0a54e8;
    padding-left: 16px;
    color: #fff;
    font-weight: 600;
    justify-content: center;
    line-height: 1.2;

    h3 {
      font-size: 44px;
      font-weight: 600;
    }

    h4 {
      font-size: 24px;
      font-weight: 600;
    }
  }

  .progress {
    height: ${(props) => props.height}px;
    background-color: #3891ff;
    animation: upBar 0.5s linear forwards;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #fff;
    font-weight: 700;

    p {
      margin: 0;
      padding: 0 16px 16px;
      font-size: 13px;
      font-weight: 600;
    }

    @keyframes upBar {
      from {
        height: 0px;
      }

      to {
        max-height: ${(props) => props.height}px;
      }
    }
  }
`;