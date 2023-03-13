import { useState, Fragment } from "react";
import data from "./data.json";
import styled from "styled-components";
import Navbar from "./components/Navbar";

const Section = styled.div`
  width: 100%;
  padding: 1rem 4rem;
`;

const ImageContainers = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px 15px;
`;

const ImageBox = styled.div`
  padding-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
  object-position: bottom;
`;

const Title = styled.h2`
  margin-bottom: 7px;
`;
const Desc = styled.h3`
  margin-bottom: 10px;
`;
const Tags = styled.p`
  font-size: 14px;
  background-color: #00c2eb;
  padding: 10px;
  width: 5rem;
  display: inline;
  border-radius: 5px;
  color: white;
  text-transform: capitalize;
`;

function App() {
  return (
    <Fragment>
      <Navbar />
      <Section>
        <ImageContainers>
          {" "}
          {data.restaurants.map((item, id) => (
            <ImageBox key={id}>
              <Image src={item.image} alt="" />

              <Title>{item.name}</Title>
              <Desc>{item.description}</Desc>
              <Tags>{item.tags}</Tags>
            </ImageBox>
          ))}
        </ImageContainers>
      </Section>
    </Fragment>
  );
}

export default App;
