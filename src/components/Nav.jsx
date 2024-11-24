import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #758f39;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Nav() {
  return (
    <Navbar>
      <Title>What's for dinner?</Title>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/favorites">Favorites</Link>
        </NavItem>
      </NavList>
    </Navbar>
  );
}

export default Nav;
