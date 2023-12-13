import React from "react";
import { Heading } from "../Heading";
import Flex from "../Styling/Flex";
import styled from "styled-components";
import { Text } from "../Text";
import { Line } from "../Line";
import { Button } from "../Button";

const StyledCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  width: 30rem;
  position: relative;
  padding: 3rem;
  margin: 2rem 0 0 0;
`;

const SummaryCard = () => {
  return (
    <StyledCard>
      <Heading Text="Summary" lh="0px" />
      <Flex jc="space-between" m="2rem 0 0 0">
        <Text Text="2 items" fs="1rem" lh="0px" />
        <Text Text="2 items" fs="1rem" lh="0px" />
      </Flex>
      <Flex jc="space-between">
        <Text Text="2 items" fs="1rem" lh="0px" />
        <Text Text="2 items" fs="1rem" lh="0px" />
      </Flex>
      <Line m="1rem 0 0 0" />
      <Flex jc="space-between" p="1.5rem 0">
        <Heading Text="Total" fs="1rem" />
        <Heading Text="2 items" fs="1rem" />
      </Flex>
      <Button text="Checkout" width="100%" />
    </StyledCard>
  );
};

export default SummaryCard;
