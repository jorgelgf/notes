import Layout from "../components/layout/Layout";
import { themes } from "../themes/themes";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
export default function Home() {
  const SX = {
    height: "auto",
    display: "flex",
    minWidth: "280",
    justifyContent: "center",
    alignItems: "center",
    margin: "1em",
    flexDirection: "column",
    borderRadius: "9px 9px 0px 0px",
  };

  const nav = useNavigate();
  return (
    <S.Container>
      <Layout SX={SX}>
        <S.HomeHeader>
          <b>Minhas notas</b>
        </S.HomeHeader>
        <S.Items onClick={() => nav("/notes")}>+ Novas notas</S.Items>
      </Layout>
    </S.Container>
  );
}
