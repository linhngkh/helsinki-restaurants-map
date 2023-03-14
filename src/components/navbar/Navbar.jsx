import { useGlobalContext } from "../../context/SortingContext";
import styled from "styled-components";

import { ButtonStyled } from "../button/Button";
import data from "../../data.json";
import { devices } from "../../breakpoint";

const NavBarContainer = styled.div`
  height: 100px;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${devices.mobileL} {
  }

  @media ${devices.tablet} {
  }

  @media ${devices.laptop} {
  }
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

const Span = styled.span`
  margin-left: 10px;
`;

const Navbar = () => {
  const { sortingList, setSortingList } = useGlobalContext();

  const ascendingName = () => {
    let newArr = [...sortingList];
    newArr.sort((a, b) => a.name.localeCompare(b.name));
    setSortingList(newArr);
  };

  const descendingName = () => {
    let newArr = [...sortingList];
    newArr.sort((a, b) => b.name.localeCompare(a.name));
    setSortingList(newArr);
  };

  const mixingSort = () => {
    setSortingList(data);
  };

  return (
    <NavBarContainer>
      <Link href="/">
        <Title>Restaurants In Helsinki</Title>
      </Link>
      <ButtonStyled onClick={ascendingName}>
        Sort restaurants from A-Z
      </ButtonStyled>
      <Span>
        <ButtonStyled onClick={descendingName}>
          Sort restaurants from Z-A
        </ButtonStyled>
      </Span>
      <Span>
        <ButtonStyled onClick={mixingSort}>Mix Sort</ButtonStyled>
      </Span>
    </NavBarContainer>
  );
};
export default Navbar;
