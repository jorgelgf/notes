import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context";
import * as S from "./style";
interface PropsHeader {
  title: string;
  info: string;
  exit: string;
  onClick?: any;
}
export default function Header({ title, info, exit }: PropsHeader) {
  const [modal, setModal] = useState<true | false>(false);

  const valueContext = useContext(GlobalContext);

  const nav = useNavigate();
  function handleClick() {
    setModal(!modal);
  }

  function handleClickExit() {
    valueContext.setState({});
    nav("/");
  }

  function fullElement() {
    return (
      <>
        <S.Container>
          <div title="Author Jorge Gurgel">{title}</div>
          <img
            onClick={handleClick}
            title="View/adc notes"
            src={info}
            alt={info}
          />

          <div title="Exit" className="exit" onClick={handleClickExit}>
            {exit}
          </div>
        </S.Container>
        {modal && (
          <>
            <S.OverLay onClick={handleClick} />
            <S.ModalInf>
              <p>Teste 1</p>
              <p>Teste 3</p>
              <p>Teste 2</p>
            </S.ModalInf>
          </>
        )}
      </>
    );
  }

  //
  return <>{fullElement()}</>;
}
