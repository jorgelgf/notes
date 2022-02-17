import { useState } from "react";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Text from "./components/form/Text";
import notes from "./img/notes.svg";
import save from "./img/save.svg";
import * as S from "./themes/GlobalStyle";
function App() {
  const [text, setText] = useState<string>("");
  const handleChange = (event: any) => setText(event.target.value);

  return (
    <S.ContainerGlobal>
      <Layout>
        <Header title="Notes" info={notes} save={save} exit="X" />
        <Text onChange={handleChange} children={text} />
      </Layout>
    </S.ContainerGlobal>
  );
}

export default App;
