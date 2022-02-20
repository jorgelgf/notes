import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context";
import * as S from "./style";
interface PropsHeader {
  title: string;
  exit: string;
  onClick?: any;
}
export default function Header({ title, exit }: PropsHeader) {
  const valueContext = useContext(GlobalContext);

  const nav = useNavigate();

  function handleClickExit() {
    valueContext.setState({});
    nav("/");
  }

  function fullElement() {
    return (
      <>
        <S.Container>
          <div title="Author Jorge Gurgel">{title}</div>

          <div title="Exit" className="exit" onClick={handleClickExit}>
            {exit}
          </div>
        </S.Container>
      </>
    );
  }

  //
  return <>{fullElement()}</>;
}
