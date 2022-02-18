import styled from "styled-components";
import { themes } from "../../themes/themes";

export const Container = styled.header`
  max-width: 414px;
  height: 34px;
  background-color: ${themes.colorSecondary};
  border-radius: 5px 5px 0 0;
  color: ${themes.colorPrimary};
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: ${themes.fontFamily};
  font-size: ${themes.fontSizeForm};
  z-index: 1;
  img {
    cursor: pointer;
    transition: 0.2s ease;
    :hover {
      width: 30px;
    }
  }
  .exit {
    cursor: pointer;
  }
`;

export const ModalInf = styled.div`
  position: fixed;
  top: 5%;
  left: 45.5%;
  display: flex;
  border-radius: 2px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: auto;
  height: auto;
  z-index: 10000;
  background-color: ${themes.colorPrimary};
  color: ${themes.colorSecondary};
  font-family: ${themes.fontFamily};
  font-size: 14px;
  z-index: 1;
  transition: 0.2s ease;

  background-color: ${themes.colorSecondary};
  color: ${themes.colorPrimary};

  p {
    transition: 0.2s ease;
    margin: 5px;
    padding: 0.2em;
    border: 1px solid ${themes.colorSecondary};
    border-radius: 2px;
    box-shadow: 1px 1px 1px 1px black;
    :hover {
      padding: 10px;
      width: 100%;
      background-color: ${themes.colorSecondary};
      color: ${themes.colorPrimary};

      border: 2px solid ${themes.colorPrimary};
      cursor: pointer;
      padding: 0.2em 0.5em;
    }
  }
  @media (max-width: 485px) {
    left: 41%;
  }
  @media (max-width: 900px) {
    left: 44%;
  }
  @media (min-height: 700px) {
    top: 7%;
  }
  transform: translateY(-10px);
  animation: animeTop 0.4s forwards;
  @keyframes animeTop {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 0;
`;
