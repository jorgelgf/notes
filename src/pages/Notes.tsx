import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Text from "../components/form/Text";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import { GlobalContext } from "../context";

import * as S from "./style";

export default function Notes() {
  const [text, setText] = useState<string>("");
  const [note, setNote] = useState<string | null>(null);
  const [newBool, setNewBool] = useState<true | false>(false);
  const saveLocal = localStorage;
  const values = useContext(GlobalContext);
  const nav = useNavigate();
  useEffect(() => {
    if (!values.state.e) {
      setNewBool(true);
    }
  }, [values.state.e]);

  const handleChange = (event: any) => {
    if (saveLocal.getItem(values.state.e)) {
      values.setState({ e: event.target.value });
    }
    setText(event.target.value);
  };

  if (note) saveLocal.setItem(note, text);

  //Function render note name
  function noteName() {
    return (
      <S.DivNameNote>
        <form
          style={{ width: "100%" }}
          onSubmit={() => {
            setNote(text);
            setNewBool(false);
            setText("");
          }}
        >
          <span>
            <b>NOME DA NOTA:</b>
            <div
              onClick={() => {
                nav("/");
              }}
            >
              x
            </div>
          </span>
          <S.NameNote
            type="text"
            onChange={(event: any) => setText(event.target.value)}
          />
          <S.Button
            type="button"
            onClick={() => {
              setNote(text);
              setNewBool(false);
              setText("");
            }}
          >
            OK
          </S.Button>
        </form>
      </S.DivNameNote>
    );
  }

  //general
  return (
    <S.Container>
      <Layout>
        {newBool ? (
          noteName()
        ) : (
          <>
            <Header title="Notes" exit="X" />
            <Text
              onChange={handleChange}
              children={saveLocal.getItem(values.state.e) ?? text}
            />
          </>
        )}
      </Layout>
    </S.Container>
  );
}
