import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
interface PropsHeader {
  title: string;
  info: string;
  save: string;
  exit: string;
  onClick?: any;
}
export default function Header({ title, info, save, exit }: PropsHeader) {
  const [modal, setModal] = useState<true | false>(false);

  const nav = useNavigate();
  function handleClick() {
    setModal(!modal);
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
          <img title="Save note current" src={save} alt={save} />
          <div title="Exit" className="exit" onClick={() => nav("/")}>
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

  return <>{fullElement()}</>;
}
