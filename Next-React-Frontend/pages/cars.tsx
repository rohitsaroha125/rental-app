import { Fragment } from "react";
import BookCard from "../components/BookCard/BookCard";
import CarsDisplay from "../components/CarsDisplay/CarsDisplay";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const TopConatiner = styled.div`
  height: 40vh;
  background: #ffe3e8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cars = () => {
  return (
    <Fragment>
      <TopConatiner>
        <BookCard />
      </TopConatiner>
      <CarsDisplay />
    </Fragment>
  );
};

export default Cars;
