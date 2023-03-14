import styled from "styled-components";

const Container = styled.div``;
const Span = styled.span`
  margin-left: 10px;
`;

const ButtonStyled = styled.button`
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

const Button = () => {
  return (
    <Container>
      <ButtonStyled>Sort restaurants from A-Z</ButtonStyled>
      <Span>
        <ButtonStyled>Sort restaurants from Z-A</ButtonStyled>
      </Span>
    </Container>
  );
};

export default Button;
