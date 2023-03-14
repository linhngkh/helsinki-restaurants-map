import styled from "styled-components";
import Button from "../button/Button";
import { SortingContext } from "../../context/SortingContext";
import { useContext } from "react";

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

const Navbar = () => {
  const { sortingList, setSortingList } = useContext(SortingContext);

  return (
    <NavBarContainer>
      <Link href="/">
        <Title>Restaurants In Helsinki</Title>
      </Link>
      <Button />
    </NavBarContainer>
  );
};
export default Navbar;
