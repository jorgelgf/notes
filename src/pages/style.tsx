import styled from "styled-components";
import { themes } from "../themes/themes";
//Global
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

//Home

export const DivItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  width: 100%;
  .delete {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    transition: 0.5s ease;
    :hover {
      background-color: #f70707;
      color: #ffebeb;
    }
  }
`;
export const Items = styled.div`
  border: 1px solid transparent;
  width: 404px;
  display: flex;
  height: 1.5em;
  align-items: center;
  padding: 5px;
  transition: 0.5s ease;

  cursor: pointer;
  :hover {
    box-shadow: 0.2px 0.2px 10px 0.2px ${themes.colorSecondary};
  }

  transform: translateX(-10px);
  animation: animeLeft 0.4s forwards;
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
  @media (max-width: 435px) {
    width: 270px;
  }
`;

export const HomeHeader = styled.div`
  width: 394px;
  text-align: center;
  padding: 10px;
  margin: 10px;
  background: ${themes.colorSecondary};
  color: ${themes.colorPrimary};
  font-family: ${themes.fontHomeTitle};
  font-size: clamp(2em, 2em + 2vw, 3em);
  @media (max-width: 435px) {
    width: 290px;
  }
`;
