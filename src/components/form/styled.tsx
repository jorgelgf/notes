import styled from "styled-components";
import { themes } from "../../themes/themes";

export const Container = styled.textarea`
  font-size: ${themes.fontSizeForm};
  font-family: ${themes.fontFamily};
  color: ${themes.colorSecondary};
  background-color: transparent;
  resize: none;
  margin: 1em;
  width: 90%;
  height: 600px;
  border: none;
  outline: none;
`;
