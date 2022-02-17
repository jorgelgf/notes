import styled from "styled-components";
import bg from "../img/bgGlobal.jpg";
export const ContainerGlobal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
`;
