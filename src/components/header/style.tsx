import styled from "styled-components";
import { themes } from "../../themes/themes";

export const Container = styled.header`
  width: 100%;
  height: 34px;
  background-color: ${themes.colorSecondary};
  color: ${themes.colorPrimary};
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: ${themes.fontFamily};
  font-size: ${themes.fontSizeForm};
  img {
    cursor: pointer;
    :hover {
      color: black;
    }
  }
  .exit {
    cursor: pointer;
  }
`;
