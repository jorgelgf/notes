import { useContext } from "react";
import Layout from "../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context";
import * as S from "./style";
export default function Home() {
  const keys = Object.keys(localStorage);
  const value = useContext(GlobalContext);
  const { setState } = value;
  const nav = useNavigate();

  const SXlayout = {
    height: "auto",
    display: "flex",
    minWidth: "280",
    justifyContent: "center",
    alignItems: "center",
    margin: "1em",
    flexDirection: "column",
    borderRadius: "9px 9px 0px 0px",
  };

  return (
    <S.Container>
      <Layout SX={SXlayout}>
        <S.HomeHeader>
          <b>Minhas notas</b>
        </S.HomeHeader>
        <S.Items onClick={() => nav("/notes")}> + Novas notas</S.Items>
        {keys.length > 0 &&
          keys.map((e, i) => {
            return (
              <S.DivItems key={i}>
                <div
                  title="delete"
                  className="delete"
                  onClick={() => {
                    nav("/");
                    localStorage.removeItem(e);
                  }}
                >
                  x
                </div>
                <S.Items
                  style={{ width: "90%", justifyContent: "space-between" }}
                  onClick={() => {
                    setState({ e });
                    nav("/notes");
                  }}
                >
                  {e}
                </S.Items>
              </S.DivItems>
            );
          })}
      </Layout>
    </S.Container>
  );
}
