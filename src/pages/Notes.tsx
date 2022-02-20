import { useState } from "react";
import Text from "../components/form/Text";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import notes from "../img/notes.svg";
import save from "../img/save.svg";

import * as S from "./style";

export default function Notes() {
  const [text, setText] = useState<string>("");

  const handleChange = (event: any) => setText(event.target.value);
  return (
    <S.Container>
      <Layout>
        <Header title="Notes" info={notes} save={save} exit="X" />
        <Text onChange={handleChange} children={text} />
      </Layout>
    </S.Container>
  );
}
