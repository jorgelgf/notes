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

//Notes

export const DivNameNote = styled.div`
  font-family: ${themes.fontFamily};
  display: flex;
  margin: 100px auto;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 20%;
  flex-direction: column;
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-top: 0.5px solid ${themes.colorSecondary};
    border-bottom: 0.5px solid ${themes.colorSecondary};

    margin-bottom: 30px;

    b {
      font-size: 20px;
    }
    div {
      transition: 0.5s ease;
      padding: 0.5em 0.8em;
      border-radius: 2px;
      cursor: pointer;

      :hover {
        background-color: ${themes.cancelColor};
      }
    }
  }
`;
export const NameNote = styled.input`
  width: 85%;
  border: none;
  height: 20px;
  outline: none;
  padding: 0.5em;
  transition: 0.2s ease;
  color: ${themes.colorSecondary};
  :hover {
    box-shadow: 0.1px 0.1px 3px 0.1px ${themes.colorSecondary};
  }
  @media (max-width: 435px) {
    width: 70%;
  }
`;
export const Button = styled.button`
  background-color: #146914;
  color: ${themes.colorPrimary};
  border-color: ${themes.colorPrimary};
  border: 1px solid;

  padding: 0.5em;
  margin-top: 1em;
  cursor: pointer;
  transition: 0.5s ease;
  border-radius: 2px;
  :hover {
    color: white;
    background-color: #0a8f0a;
  }
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
      background-color: ${themes.cancelColor};
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
