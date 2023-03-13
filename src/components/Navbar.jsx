import styled from "styled-components";

const NavBarContainer = styled.div`
  height: 100px;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  color: black;
  transition: all 0.5s ease-out;
  &:hover {
    color: #00c2eb;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 10px 15px;
  border: 2px solid black;
  background-color: white;
  font-size: 16px;
  font-weight: 400;
  border-radius: 7px;
  transition: all 0.5s ease-out;
  &:hover,
  &:focus {
    color: white;
    background-color: black;
  }
`;

const Navbar = () => {
  return (
    <NavBarContainer>
      <Link href="/">
        <Title>Restaurants In Helsinki</Title>
      </Link>
      <Button>Sort restaurants from A-Z</Button>
      <Button>Sort restaurants from Z-A</Button>
    </NavBarContainer>
  );
};
export default Navbar;
