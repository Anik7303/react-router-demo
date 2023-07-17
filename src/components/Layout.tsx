import { PropsWithChildren } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

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

function Layout({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}

export default Layout;
