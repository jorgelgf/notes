import { useContext, useState } from "react";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Text from "./components/form/Text";
import Context from "./context/index";
import notes from "./img/notes.svg";
import save from "./img/save.svg";
import * as S from "./themes/GlobalStyle";

function App() {
  const [text, setText] = useState<string>("");

  const handleChange = (event: any) => setText(event.target.value);
  return (
    <Context>
      <S.ContainerGlobal>
        <Layout>
          <Header title="Notes" info={notes} save={save} exit="X" />
          <Text onChange={handleChange} children={text} />
        </Layout>
      </S.ContainerGlobal>
    </Context>
  );
}

export default App;
