import { useEffect, useState, useContext } from "react";
import Text from "../components/form/Text";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import notes from "../img/notes.svg";
import { GlobalContext } from "../context";

import * as S from "./style";

export default function Notes() {
  const [text, setText] = useState<string>("");
  const [note, setNote] = useState<string | null>(null);
  const saveLocal = localStorage;
  const values = useContext(GlobalContext);

  useEffect(() => {
    let note: any;
    if (!values.state.e) {
      note = prompt("nome da nota");
      setNote(note);
    }
  }, [values.state.e]);

  const handleChange = (event: any) => {
    if (saveLocal.getItem(values.state.e)) {
      values.setState({ e: event.target.value });
    }
    setText(event.target.value);
  };

  if (note) saveLocal.setItem(note, text);

  return (
    <S.Container>
      <Layout>
        <Header title="Notes" info={notes} exit="X" />
        <Text
          onChange={handleChange}
          children={saveLocal.getItem(values.state.e) ?? text}
        />
      </Layout>
    </S.Container>
  );
}
