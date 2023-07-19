import styled from "styled-components";

const Container = styled.div``;

export const ButtonStyled = styled.button`
  width: 150px;
  cursor: pointer;
  padding: 10px 15px;
  border: 2px solid black;
  background-color: white;
  font-size: 16px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  font-weight: 500;
  box-shadow: inset;
  border-radius: 20px;
  transition: all 0.5s ease-out;
  &:hover,
  &:focus {
    color: white;
    background-color: black;
  }
  @media (max-width: 600px) {
    margin-top: 20px;
    padding: 3px 5px;
    color: black;
  }
`;

const Button = ({ buttonText, handleSorting }) => {
  return (
    <Container>
      <ButtonStyled onClick={handleSorting}>{buttonText}</ButtonStyled>
    </Container>
  );
};

export default Button;
