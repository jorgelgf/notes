import styled from "styled-components";
import { themes } from "../../themes/themes";
export const Container = styled.div`
  width: 414px;
  height: 70vh;
  background-color: ${themes.colorPrimary};
  box-shadow: 2px 2px 10px 2px ${themes.colorSecondary};
  border-radius: 9px 9px 5px 5px;
  transform: translateX(-10px);
  animation: animeLeft 0.4s forwards;
  padding-bottom: 10px;
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
  @media (max-width: 435px) {
    width: 290px;
  }
`;
