import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as S from "./themes/GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import DivContext from "./context/index";
ReactDOM.render(
  <BrowserRouter>
    <DivContext>
      <React.StrictMode>
        <S.ContainerGlobal>
          <App />
        </S.ContainerGlobal>
      </React.StrictMode>
    </DivContext>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
