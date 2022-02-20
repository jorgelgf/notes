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
    transition: all 0.3s ease;
  }
  .exit {
    cursor: pointer;
  }
`;
