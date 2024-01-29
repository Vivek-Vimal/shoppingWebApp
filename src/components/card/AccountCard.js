import React from "react";
import styled from "styled-components";
import { Text } from "../Text";
import Flex from "../Styling/Flex";

const StyledCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  min-width: 10rem;
  min-height: 5rem;
`;

const AccountCard = () => {
  return (
    <StyledCard>
      <Flex>
        <Text Text={""} />
        <Text Text={""} />
      </Flex>
      <Flex>
        <Text Text={""} />
        <Text Text={""} />
      </Flex>
    </StyledCard>
  );
};

export default AccountCard;
