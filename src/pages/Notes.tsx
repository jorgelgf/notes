import { useEffect, useState } from "react";
import Text from "../components/form/Text";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import notes from "../img/notes.svg";
import save from "../img/save.svg";

import * as S from "./style";

export default function Notes() {
  const [text, setText] = useState<string>("");
  const [note, setNote] = useState<string | null>(null);
  const saveLocal = localStorage;

  useEffect(() => {
    let note = prompt("nome da nota");
    setNote(note);
  }, []);
  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  if (note) saveLocal.setItem(note, text);

  return (
    <S.Container>
      <Layout>
        <Header title="Notes" info={notes} save={save} exit="X" />
        <Text onChange={handleChange} children={text} />
      </Layout>
    </S.Container>
  );
}
