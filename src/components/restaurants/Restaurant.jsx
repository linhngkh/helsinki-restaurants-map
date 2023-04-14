import { useGlobalContext } from "../../context/SortingContext";

import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  padding: 1rem 4rem;
  @media (max-width: 600px) {
    padding: 0.5rem 2rem;
  }
`;

const ImageContainers = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 40px;
  margin-top: 10px;
  @media (max-width: 600px) {
    display: inline-block;
    text-align: center;
  }
`;

const ImageBox = styled.div`
  padding-bottom: 20px;
  @media (max-width: 600px) {
    display: grid;

    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-auto-flow: dense;
    grid-template-rows: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  object-position: bottom;
  -webkit-transition: 0.3s ease-in;
  transition: 0.3s ease-in;
  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 7px;
  @media (max-width: 600px) {
    margin-bottom: -10px;
    font-size: 25px;
  }
`;
const Desc = styled.h4`
  margin-bottom: 10px;
`;
const Tags = styled.p`
  font-size: 14px;
  background-color: #cecece;
  padding: 10px;
  width: 5rem;
  display: inline;
  border-radius: 5px;
  color: #4c4c4cdf;
  text-transform: capitalize;
  @media (max-width: 600px) {
    width: 7rem;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: 7px;
  }
`;
const Restaurant = () => {
  const { sortingList } = useGlobalContext();
  return (
    <Section>
      <ImageContainers>
        {sortingList?.map((item, id) => (
          <ImageBox key={id}>
            <Image src={item.image} alt="photo" />
            <Title>{item.name}</Title>
            <Desc>{item.description}</Desc>
            <Tags>{item.tags}</Tags>
          </ImageBox>
        ))}
      </ImageContainers>
    </Section>
  );
};

export default Restaurant;
