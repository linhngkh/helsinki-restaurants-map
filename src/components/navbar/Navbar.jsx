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
  background: #00c2eb;
  background: repeating-linear-gradient(
    to right,
    #00c2eb 0%,
    #000790 100%
  );
  background-clip: repeating-linear-gradient(
    to right,
    #00c2eb 0%,
    #343605 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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

const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover:nth-child(2),
  &:hover:nth-child(3) {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
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
