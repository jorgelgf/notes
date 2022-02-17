import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import notes from "./img/notes.svg";
import save from "./img/save.svg";
import * as S from "./themes/GlobalStyle";
function App() {
  return (
    <S.ContainerGlobal>
      <Layout>
        <Header title="Notes" info={notes} save={save} exit="X" />
      </Layout>
    </S.ContainerGlobal>
  );
}

export default App;
