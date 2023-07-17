import { Link as _Link } from "react-router-dom";
import Layout from "../components/Layout";
import styled from "styled-components";

const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Heading = styled.h2`
  font-size: 12rem;
  font-family: inherit;
  font-weight: 700;
  white-space: nowrap;
`;

const Text = styled.p`
  font-family: inherit;
  font-size: 1.4rem;
`;

const Link = styled(_Link)`
  color: inherit;
  background: inherit;
  font-family: inherit;
  font-size: inherit;
`;

function NotFound() {
  return (
    <Layout>
      <Container>
        <Heading>404</Heading>
        <Text>This page does not exist</Text>
        <Link to="/">Go back to Home</Link>
      </Container>
    </Layout>
  );
}

export default NotFound;
