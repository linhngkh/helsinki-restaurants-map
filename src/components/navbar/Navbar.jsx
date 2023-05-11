import { useGlobalContext } from "../../context/SortingContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../button/Button";
import data from "../../data.json";

const NavBarContainer = styled.div`
  height: 100px;
  position: fixed;
  z-index: 99;
  background-color: #fff;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media screen {
    @media (max-width: 600px) {
      display: block;
      margin-inline: auto;
      text-align: center;
      width: 100%;
      box-shadow: none;
      margin-bottom: 15px;
      height: 110px;
    }
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 45px;
  font-weight: 900;
  transition: all 0.5s ease-out;
  &:hover {
    color: #00c2eb;
  }
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const LinkItem = styled.a`
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
      <LinkItem href="/">
        <Title>Restaurants In Helsinki</Title>
      </LinkItem>
      <Link to="/booking">Booking</Link>
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
