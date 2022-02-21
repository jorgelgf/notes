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
  const values = useContext(GlobalContext);

  const nav = useNavigate();

  function handleClickExit() {
    values.setState({});
    nav("/");
  }

  function fullElement() {
    return (
      <>
        <S.Container>
          <div>{title}</div>

          <div
            title="Exit and save note"
            className="exit"
            onClick={handleClickExit}
          >
            {exit}
          </div>
        </S.Container>
      </>
    );
  }

  //
  return <>{fullElement()}</>;
}
