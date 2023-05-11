import styled from "styled-components";

const Container = styled.div``;

export const ButtonStyled = styled.button`
  width: 150px;
  cursor: pointer;
  padding: 10px 15px;
  border: 2px solid black;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 7px;
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
