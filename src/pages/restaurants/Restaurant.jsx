import { useGlobalContext } from "../../context/SortingContext";

import styled from "styled-components";

const Section = styled.div`
  padding-top: 20px;
  width: 100%;
  background-color: #f0fbfd;
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
  cursor: pointer;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  object-position: bottom;
  box-shadow: rgba(7, 65, 210, 0.1) 0px 9px 30px;
  -webkit-transition: 0.3s ease-in;
  transition: 0.3s ease-in;
  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

const Title = styled.h1`
  cursor: pointer;
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

const DivTag = styled.div``;

const Tags = styled.p`
  margin-right: 20px;
  font-size: 14px;
  background-color: #cecece;
  padding: 10px;
  width: 5rem;
  display: inline;
  border-radius: 5px;
  color: #4c4c4cdf;
  text-transform: capitalize;
  @media (max-width: 600px) {
    display: inline;
    width: 7rem;
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
            <DivTag>
              <Tags>#{item.tags[0]}</Tags>
              <Tags>#{item.tags[1]}</Tags>
            </DivTag>
          </ImageBox>
        ))}
      </ImageContainers>
    </Section>
  );
};

export default Restaurant;
