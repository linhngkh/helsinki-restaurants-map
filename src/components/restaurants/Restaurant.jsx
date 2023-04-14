import { useGlobalContext } from "../../context/SortingContext";

import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  padding: 1rem 4rem;
`;

const ImageContainers = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 40px;
  margin-top: 10px;
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

const Title = styled.h2`
  margin-bottom: 7px;
  font-size: 20px;
`;
const Desc = styled.h3`
  margin-bottom: 10px;
`;
const Tags = styled.p`
  font-size: 14px;
  background-color: black;
  padding: 10px;
  width: 5rem;
  display: inline;
  border-radius: 5px;
  color: white;
  text-transform: capitalize;
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
