import styled from "styled-components";
import { Link, NavLink as _NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Wrapper = styled.header`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.div`
  height: 40px;
`;

const BrandImage = styled.img`
  height: 100%;
  display: block;
  object-fit: cover;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;

const NavLink = styled(_NavLink)`
  text-decoration: none;
  color: inherit;
  background: transparent;
`;

function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <Brand>
          <BrandImage src={logo} alt="Logo" />
        </Brand>
      </Link>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/demo">Demo</NavLink>
        <NavLink to="/test">Test</NavLink>
      </Nav>
    </Wrapper>
  );
}

export default Header;
