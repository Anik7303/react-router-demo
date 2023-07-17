import styled from "styled-components";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding: 16px;
  padding-top: 0;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Main></Main>
      <Footer />
    </Wrapper>
  );
}

export default App;
