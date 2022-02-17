import styled from "styled-components";
import { themes } from "../../themes/themes";
export const Container = styled.div`
  width: 414px;
  min-height: 90vh;
  margin: 10px 10px;
  background-color: ${themes.colorPrimary};
  box-shadow: 2px 2px 10px 2px ${themes.colorSecondary};
`;
