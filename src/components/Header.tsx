import styled from "styled-components";
import logo from "../assets/logo.svg";

const Wrapper = styled.header`
  padding: 16px;
`;

const Brand = styled.div`
  height: 40px;
`;

const BrandImage = styled.img`
  height: 100%;
  display: block;
  object-fit: cover;
`;

function Header() {
  return (
    <Wrapper>
      <Brand>
        <BrandImage src={logo} alt="Logo" />
      </Brand>
    </Wrapper>
  );
}

export default Header;
