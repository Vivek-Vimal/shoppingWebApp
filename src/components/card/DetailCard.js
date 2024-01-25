import React from "react";
import { Heading } from "../Heading";
import Flex from "../Styling/Flex";
import styled from "styled-components";
import { Text } from "../Text";

const StyledCard = styled.div`
  width: 45rem;
  position: relative;
  margin: 2rem 2rem 0 2rem;
`;

const Image = styled.div`
  width: 20rem;
  height: 15rem;
`;

const DetailCard = (props) => {
  const { currentItem } = props;

  return (
    <StyledCard>
      <Flex noCenter>
        <Image>
          <img
            src={currentItem?.url}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </Image>
        <Flex noCenter column jc="space-between" p="1rem 2rem">
          <Heading Text={currentItem?.title} fs="1.75rem" lh="2rem" />
          <Text Text={currentItem?.category} fs="1rem" />
        </Flex>
      </Flex>
      <Flex m="1rem 0 0 0">
        <Text Text={currentItem?.description} fs="1.25rem" lh="1.75rem" />
      </Flex>
    </StyledCard>
  );
};

export default DetailCard;
