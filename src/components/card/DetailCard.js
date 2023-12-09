import React from "react";
import { Heading } from "../Heading";
import Flex from "../Styling/Flex";
import styled from "styled-components";
import { Text } from "../Text";
import img from "../../assets/hero.png";

const StyledCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  width: 100%;
  height: 35rem;
  position: relative;
  margin: 2rem 0 0 0;
`;

const Image = styled.div`
  width: 20rem;
  height: 15rem;
`;

const DetailCard = () => {
  return (
    <StyledCard>
      <Image>
        <img src={img} alt="" style={{ width: "100%", height: "100%" }} />
      </Image>
      <Flex noCenter column jc="space-between" p="1rem 2rem">
        <Heading Text="Item Name" fs="1.5rem" />
        <Text Text="2 items" fs="1rem" />
      </Flex>
    </StyledCard>
  );
};

export default DetailCard;
