import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";

const Card = (props) => {
  const Box = styled(Tilt)`
    width: 24rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(2, 169, 92, 0.75);
    margin: 2rem auto 0 auto;
    border-radius: 2rem 2rem 0 0;
    @media only screen and (max-width: 510px) {
      width: 98%;
    }
  `;

  return <Box></Box>;
};

export default Card;
